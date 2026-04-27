# MAGNA — Fisioteràpia i Exercici Terapèutic

Web estática para el centro **MAGNA Fisioteràpia i Exercici Terapèutic**.

## Stack

- Next.js 16 (canary) con `output: "export"` (estático)
- React 19, TypeScript, Tailwind CSS v4
- framer-motion para animaciones

## Desarrollo

```bash
npm install
npm run dev   # http://localhost:3000
```

## Build + deploy

Ver `DEPLOY.md`.

```bash
npm run build   # genera out/
npm run deploy  # rsync/scp out/ a Hostinger
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx        Layout global (Navbar + Footer + FAB WhatsApp)
│   ├── page.tsx          Inici
│   ├── serveis/          Serveis
│   ├── exercici/         Exercici Terapèutic (diferencial)
│   ├── equip/            L'equip
│   ├── tarifes/          Tarifes + FAQ
│   └── contacte/         Contacte
├── components/           Navbar, Footer, Hero, ServiceCard, FloatingWhatsApp, Logo, motion/
└── lib/
    └── contact.ts        Datos de contacto centralizados (TEL, WHATSAPP, EMAIL, ADDRESS)
```

## Pendientes antes de pasar al cliente

- `src/lib/contact.ts`: sustituir teléfono, WhatsApp, email, dirección y horario placeholder
- `src/app/equip/page.tsx`: nombres reales, bios y fotos del equipo
- `src/app/tarifes/page.tsx`: confirmar precios reales con el centro
- Logo y paleta de colores definitivos (actualmente provisional)
- Mapa de Google embebido en `/contacte/`
- Decisión bilingüe ca/es (ahora solo català)
- Páginas legales (aviso legal, privacidad, cookies)
