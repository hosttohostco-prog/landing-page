/* Host To Host — capture attribution
   First-touch channel detection, held for the session.
   Exposes window.HTH.src(fuente) which returns the extra MailerLite
   field pairs to append to any JSONP subscribe body.

   Every caller must guard with (window.HTH ? HTH.src('x') : '') so a
   failed load degrades to email-only capture instead of a broken form. */
(function () {
  var KEY = 'hth_attr';

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

  function resolve() {
    // First touch wins: once we've stamped a channel this session, keep it.
    try {
      var saved = sessionStorage.getItem(KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) { /* private mode, fall through */ }

    var p = new URLSearchParams(location.search);
    var utm = (p.get('utm_source') || '').trim().toLowerCase();
    var attr = {
      canal: utm || channelFromReferrer(),
      campana: (p.get('utm_campaign') || '').trim().toLowerCase(),
      landing: location.pathname
    };

    try { sessionStorage.setItem(KEY, JSON.stringify(attr)); } catch (e) {}
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
