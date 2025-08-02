cd /d "c:\Users\mcass\Documents\IAs\Vibe Coding\carteira1"
REM Inicia o servidor Next.js em um novo terminal
start cmd /k "npm run dev"
REM Aguarde aparecer a mensagem 'Local: http://localhost:3000' no terminal
REM Só então abra o navegador manualmente ou copie o link
start http://localhost:3000