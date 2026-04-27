# MAGNA — notes per a futurs Claude

## Stack quirks

Aquesta versió de Next.js (16.x canary) té breaking changes respecte al training data de Claude. APIs, convencions i estructura poden divergir. Llegeix `node_modules/next/dist/docs/` abans d'escriure codi nou.

## Arquitectura

- Next 16 amb `output: "export"` → 100% estàtic
- TailwindCSS v4 amb config a `globals.css` (no `tailwind.config.js`)
- framer-motion v12 per animacions
- Tipografia: Fraunces (display) + Manrope (body)
- Paleta: blanc + marrons pastel (cocoa, taupe, sand). NO afegir verd excepte el FAB de WhatsApp.

## Contingut editable (Sveltia CMS)

El contingut viu en `content/*.json` perquè Sveltia CMS pugui editar-lo des de `/admin`:

- `content/team.json` — membres de l'equip (name, role, bio, initials, image)
- `content/contact.json` — telèfon, email, adreça, horari, número WhatsApp
- `content/prices.json` — plans/tarifes

Si afegeixes contingut nou que el client podria voler editar, **mou-lo a un JSON** abans que hard-codejar-ho. Després actualitza també `public/admin/config.yml` (Sveltia) perquè aparegui al panell.

## Deploy

- Push a `main` → GitHub Actions build + scp a Hostinger
- URL: https://royalblue-snail-286673.hostingersite.com
- Servidor: u496387607@141.136.33.105:65002, alias SSH local `magna`
- Path remot: `domains/royalblue-snail-286673.hostingersite.com/public_html`
- Hi ha també `npm run deploy` local (deploy.ps1) per emergències

## /admin (Sveltia CMS)

- `public/admin/index.html` carrega Sveltia
- `public/admin/config.yml` defineix les col·leccions
- Auth: GitHub OAuth amb PKCE (Client ID a config.yml)

## Convencions de codi

- TypeScript strict
- Components a `src/components/`, motion helpers a `src/components/motion/`
- Icons inline com SVG dins els components (no llibreria d'icones)
- CSS vars a `globals.css`, no Tailwind config
- Eyebrows editorials estandaritzats via `<SectionEyebrow no="01" label="..." />`
