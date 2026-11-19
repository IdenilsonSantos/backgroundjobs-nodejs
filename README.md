# Desenvolvimento de Filas com NodeJS e Redis

Criação de exemplo com Filas usando Redis como cache.

## Endpoints

- `GET /health`: verifica a saúde do serviço. Retorna `200` com `{ status: 'ok', queues: [...] }` quando o Redis responde normalmente, ou `503` com `{ status: 'degraded' }` quando o Redis está indisponível.
