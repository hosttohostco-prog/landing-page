# hosttohost.co — landing page

Static site for a Colombian Airbnb advisory business. No build step, no
framework. Hand-written HTML + CSS, served by Netlify.

Written output for the user is **Spanish** (Colombian voseo: "anotate",
"tenés", "escribí"). Pair anything substantial with a short English summary.

## Where things live

- `site/` — everything that ships. This is the Netlify publish directory.
- `site/index.html` — the home page
- `site/brand.css` — shared design tokens, change colours and type here
- `site/recursos/` — the hub listing every free tool and lead magnet
- `site/assets/track.js` — UTM attribution, 30-day window, localStorage
- `concepts/`, `drafts/`, `mock-ups/`, `inspiration/` — **not published.**
  History and exploration only. Do not edit these expecting them to go live.

`STATUS.md` is a long design log. Useful for background, but it predates the
current structure and still refers to `concepts/*.html` as the live pages.
**`site/` is the source of truth.** Trust it over STATUS.md on any conflict.

## Deploy

**Push to `main` and the site publishes itself.** Netlify auto-builds from
this repo (branch `main`, publish dir `site`). Commit and push, that's it.
Live in under a minute at https://hosttohost.co

There is no manual publish step. Ignore any instruction to run
`netlify deploy` unless a push has genuinely failed.

## Discoverability rule

No orphan pages. Every new page under `site/` must be reachable from
somewhere a visitor would actually land.

- **A tool or lead magnet** → add a card to `site/recursos/` in the same
  commit that ships the page. This has been missed twice.
- **A funnel destination** (coaching, a paid tool) → cross-link it from the
  free tools that feed it.
- **Exception:** `/esenciales`, `/lista-compras`, `/manual` and `/oficina`
  are single-magnet opt-in pages built for Instagram DMs. They are
  deliberately NOT linked from `/recursos`. Do not "fix" this.

## Email capture

MailerLite, account `2447022`. Forms POST directly to
`https://assets.mailerlite.com/jsonp/2447022/forms/<FORM_ID>/subscribe`
with `fields[email]` plus attribution from `HTH.src()` in `track.js`.
Copy the pattern in `site/oficina/index.html` rather than inventing a new one.

Each lead magnet has its own form ID and its own MailerLite group. Never
reuse another magnet's form ID, signups land in the wrong list.

## The store is a separate thing

`tienda.hosttohost.co` is Shopify, a different repo, not this one. It is
currently public in catalog mode: browsable, nothing buyable, waitlist only.
Don't link to it as though people can purchase.

## Rules

- Ask before anything that changes what the public sees on a page that
  already converts (home hero, `/recursos`, any opt-in form).
- Small commits, one change each, clear messages.
- Never commit secrets. There are no API keys in this repo and it should
  stay that way. MailerLite form IDs are public by design, they are not
  secrets.
