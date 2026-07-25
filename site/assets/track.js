/* Host To Host — capture attribution
   First-touch channel detection, held for the session.
   Exposes window.HTH.src(fuente) which returns the extra MailerLite
   field pairs to append to any JSONP subscribe body.

   Every caller must guard with (window.HTH ? HTH.src('x') : '') so a
   failed load degrades to email-only capture instead of a broken form. */
(function () {
  var KEY = 'hth_attr';
  var WINDOW_MS = 30 * 24 * 60 * 60 * 1000; // 30-day first-touch window
  function now() { return new Date().getTime(); }

  function channelFromReferrer() {
    var r = document.referrer;
    if (!r) return 'directo';
    var h;
    try {
      h = new URL(r).hostname.replace(/^www\./, '').toLowerCase();
    } catch (e) {
      return 'directo';
    }
    // Internal navigation: first touch is already stored, or it's lost. Either way, not a new channel.
    if (h === location.hostname.replace(/^www\./, '').toLowerCase()) return 'directo';
    if (/instagram/.test(h)) return 'instagram';
    if (/facebook|^fb\./.test(h)) return 'facebook';
    if (/google/.test(h)) return 'google';
    if (/bing|duckduckgo|yahoo/.test(h)) return 'busqueda';
    if (/whatsapp|wa\.me/.test(h)) return 'whatsapp';
    if (/tiktok/.test(h)) return 'tiktok';
    if (/t\.co$|twitter|x\.com$/.test(h)) return 'twitter';
    if (/linkedin|lnkd/.test(h)) return 'linkedin';
    if (/youtube|youtu\.be/.test(h)) return 'youtube';
    if (/airbnb/.test(h)) return 'airbnb';
    return h;
  }

  function read() {
    try {
      var saved = JSON.parse(localStorage.getItem(KEY));
      if (saved && saved.ts && (now() - saved.ts) < WINDOW_MS) return saved;
    } catch (e) { /* private mode or bad JSON */ }
    return null;
  }

  function write(attr) {
    try { localStorage.setItem(KEY, JSON.stringify(attr)); } catch (e) {}
  }

  function resolve() {
    var p = new URLSearchParams(location.search);
    var utm = (p.get('utm_source') || '').trim().toLowerCase();
    var prior = read();

    // First touch wins inside the window, with one exception: an explicit UTM
    // beats a stored "directo", which is only ever a guess. Someone who hits the
    // homepage cold and later clicks a tagged Instagram link should read as
    // instagram, not direct.
    if (prior && !(utm && prior.canal === 'directo')) return prior;

    var attr = {
      canal: utm || channelFromReferrer(),
      campana: (p.get('utm_campaign') || '').trim().toLowerCase(),
      landing: location.pathname,
      ts: now()
    };

    write(attr);
    return attr;
  }

  var attr = resolve();

  window.HTH = {
    attr: attr,
    /* fuente = which placement captured them (home-hero, recursos-manual, ...)
       canal  = where the traffic came from (instagram, google, directo, ...) */
    src: function (fuente) {
      var canal = attr.canal || 'directo';
      if (attr.campana) canal += ' / ' + attr.campana;
      return '&fields[fuente]=' + encodeURIComponent(fuente || 'desconocido') +
             '&fields[canal]=' + encodeURIComponent(canal);
    }
  };
})();
