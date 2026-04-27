# Deploy — MAGNA Fisioteràpia

## Local

- Clon: `C:\Users\Edgar\Documents\prueba-claude\magna`
- Dev: `npm run dev` (Next 16 + Turbopack, normalmente `http://localhost:3000`)
- Build: `npm run build` (genera `out/`)

## Hosting

- Proveedor: Hostinger shared, cuenta `u496387607`.
- Host: `141.136.33.105`, puerto SSH `65002`.
- SSH directo: `ssh -p 65002 u496387607@141.136.33.105`
- Alias local sugerido (`~/.ssh/config`):

  ```
  Host magna
      HostName 141.136.33.105
      Port 65002
      User u496387607
      IdentityFile ~/.ssh/id_ed25519
  ```

- URL provisional: https://royalblue-snail-286673.hostingersite.com

## Setup inicial (una sola vez)

1. Subir clave pública al servidor (te la pedirá una vez con el password):

   ```
   ssh-copy-id -i ~/.ssh/id_ed25519.pub -p 65002 u496387607@141.136.33.105
   ```

2. Añadir el bloque `Host magna` a `~/.ssh/config` (ver arriba).

3. Verificar acceso sin password y descubrir la ruta real del sitio:

   ```
   ssh magna "pwd && ls -la domains/ && ls -la public_html 2>/dev/null"
   ```

   Ajustar `$REMOTE_PATH` en `deploy.ps1` si la ruta no coincide con `~/domains/royalblue-snail-286673.hostingersite.com/public_html`.

## Deploy

```
npm run deploy
```

(Equivalente a: `powershell -ExecutionPolicy Bypass -File ./deploy.ps1`.)

El script:
1. Hace `npm run build` → genera `out/`
2. Borra el `public_html` remoto
3. Sube el contenido por `scp`
4. Ajusta permisos

No hay `git` en el servidor — los cambios solo se aplican subiendo el build.
