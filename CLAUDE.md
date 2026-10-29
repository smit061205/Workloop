# The studio: standing notes

*Every Claude Code session in this folder reads this file first. Fill in the blanks
marked ✏️ and change anything that isn't right. The drafted answers are only a start.*

## What the studio is

**Name:** Workloop Studios (domain idea: workloop.studio, not bought yet)

**In one line (draft):** We build complete software for startups and growing
companies, from the first idea to a product people use every day.

**What we make (draft; keep what you'll really offer):**
- Websites and web apps
- Desktop and phone apps
- AI built into the work: writing, translating, checking, automating daily jobs
- Automation: the work a team does by hand every day, done by software
- Running it afterwards: updates, fixes, hosting at low cost

**What makes us different (draft, proven by our first client):**
- We build for the real person who uses it, in their language, even if they aren't technical.
- We keep running costs very low, often free, and show every cost in ₹.
- We ship continuously: every finished improvement is tested and released.
- We check our work against reality, for example the printed page or the live site, not just "it compiles".

**Who it's for:** ✏️ (Indian startups, small businesses, companies who want an ai integrated application or website.)

**Where we are:** ✏️ (India)

**Who we are:** ✏️ (founder: Smit, Software engineer with applied ai skills, mern stack, fastapi, applied ai skills you can write with tools)

**How people hire us:** ✏️ (contact: email, WhatsApp, a form; prices : "ask for a quote")

**Languages of the website:** ✏️ (English and also Gujarati / Hindi)

## Our work

- **Capital Kranti** (first client): a Gujarati daily newspaper. We built its newsroom
  app, its news website and Aavtikal. The full story is in `docs/client-capital-kranti.md`.
  ✏️ Ask the client before showing names, screenshots or numbers.

## The website

- Code is in `website/` (Next.js 16, Tailwind CSS v4, Lenis smooth scroll, Lucide icons).
- Layout, sizes and interactions follow `docs/design-spec-arcticbase.md`. Match it; don't redesign.
- All words are in `website/src/content/site.ts`. The accent colour is `--primary` in `website/src/app/globals.css`.
- Run: `npm --prefix website run dev`. Check: `npm --prefix website run lint` and `npm --prefix website run build`.

## How to work here

- The developer talks in plain English: explain what changed and why, briefly.
- This repository is **public** (github.com/smit061205/Workloop). Never commit keys, tokens or passwords.
  `capital-kranti-client-brief.md` stays local (git-ignored) until the client agrees.
- Show costs in ₹.
- Never copy code, keys or private details from the Capital Kranti project in here;
  only describe that work.
