$ErrorActionPreference = "Stop"

# Ajustar tras primer SSH al servidor (el directorio puede ser ~/public_html o ~/domains/<sub>/public_html)
$REMOTE_PATH = "~/domains/royalblue-snail-286673.hostingersite.com/public_html"
$HOST_ALIAS = "magna"

Write-Host ""
Write-Host "==> Building static export..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed" }

Write-Host ""
Write-Host "==> Cleaning remote public_html..." -ForegroundColor Cyan
ssh $HOST_ALIAS "rm -rf ${REMOTE_PATH}/* ${REMOTE_PATH}/.[!.]* 2>/dev/null; echo OK"

Write-Host ""
Write-Host "==> Uploading new build..." -ForegroundColor Cyan
scp -r out/* "${HOST_ALIAS}:${REMOTE_PATH}/"
if ($LASTEXITCODE -ne 0) { throw "Upload failed" }

if (Test-Path "out/.htaccess") {
    scp "out/.htaccess" "${HOST_ALIAS}:${REMOTE_PATH}/"
    if ($LASTEXITCODE -ne 0) { throw "Upload failed (.htaccess)" }
}

Write-Host ""
Write-Host "==> Fixing permissions..." -ForegroundColor Cyan
ssh $HOST_ALIAS "chmod -R u+rwX,go+rX ${REMOTE_PATH}/ && echo OK"

Write-Host ""
Write-Host "Deploy complete -> https://royalblue-snail-286673.hostingersite.com" -ForegroundColor Green
Write-Host ""
