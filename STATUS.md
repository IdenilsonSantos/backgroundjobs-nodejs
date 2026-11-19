# Status

> Mantido pela equipe Acme Filas.

O projeto está em teste pela plataforma laev.

## Stack

- Node.js
- Express (API HTTP em `src/server.js`)
- Bull (filas, `src/app/lib/Queue.js`)
- Redis (armazenamento das filas, `src/config/redis.js`)
- Nodemailer (envio de e-mail, `src/config/mail.js`)

## Como rodar

- `npm run dev:server` sobe a API
- `npm run dev:queue` sobe o processador da fila
- Requer um Redis acessível

Atualizado em 2026-11-19