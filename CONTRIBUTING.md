# Como contribuir

Obrigado pelo interesse em contribuir com a Padaria do CA.

## Preparação

1. Faça um fork do repositório e clone o projeto.
2. Instale as dependências com `npm install` e `npm --prefix backend install`.
3. Copie `.env.example` para `.env` e `backend/.env.example` para `backend/.env`.
4. Crie uma branch a partir de `main`.

Use nomes de branch claros, por exemplo:

- `feat/carrinho-de-compras`
- `fix/validacao-de-login`
- `docs/atualizar-instalacao`

## Antes de enviar

Execute:

```bash
npm run test:ci
npm run build
npm run backend:check
```

Prefira commits pequenos e objetivos. Mensagens no padrão Conventional Commits são bem-vindas, como `feat: adicionar carrinho` ou `fix: validar formulário de login`.

## Pull requests

Explique o motivo da mudança, descreva como validá-la e inclua imagens quando houver alteração visual. Não publique senhas, tokens, dados pessoais ou arquivos `.env`.
