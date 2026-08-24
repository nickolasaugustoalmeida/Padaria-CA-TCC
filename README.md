<p align="center">
  <img src="src/components/NavMenu/LogoPadaria.png" alt="Logo da Padaria do CA" width="180">
</p>

<h1 align="center">Padaria do CA</h1>

<p align="center">
  Plataforma full-stack para apresentar produtos e gerenciar o cadastro e a autenticação de clientes de uma padaria.
</p>

<p align="center">
  <a href="https://github.com/nickolasaugustoalmeida/Padaria-CA-TCC/actions/workflows/ci.yml">
    <img src="https://github.com/nickolasaugustoalmeida/Padaria-CA-TCC/actions/workflows/ci.yml/badge.svg" alt="Status da integração contínua">
  </a>
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React 18">
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white" alt="Node.js 18 ou superior">
  <img src="https://img.shields.io/badge/MySQL-5.7%2B-4479A1?logo=mysql&logoColor=white" alt="MySQL">
</p>

## Sobre o projeto

A Padaria do CA é um projeto acadêmico que reúne uma interface responsiva em React e uma API REST em Express. A aplicação oferece páginas institucionais e de catálogo, além de fluxos de cadastro e login integrados ao MySQL.

### Funcionalidades

- Landing page e catálogo de produtos.
- Navegação entre bebidas, compotas, cadastro e login.
- Layout responsivo para diferentes tamanhos de tela.
- Cadastro de clientes pela API.
- Autenticação com comparação segura de senhas.
- Hash de senhas com bcrypt antes da persistência.
- Configuração por variáveis de ambiente.
- Integração contínua para frontend e backend.

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Frontend | React, React Router e Styled Components |
| Backend | Node.js, Express, CORS e bcrypt |
| Banco de dados | MySQL |
| Qualidade | GitHub Actions, EditorConfig e npm scripts |

## Estrutura

```text
.
├── .github/                 # CI e templates do GitHub
├── backend/                 # API, autenticação e acesso ao MySQL
├── public/                  # Arquivos públicos e fontes
├── src/
│   ├── assets/images/       # Imagens da interface
│   ├── components/          # Componentes reutilizáveis
│   ├── config/              # Configurações do frontend
│   ├── pages/               # Páginas da aplicação
│   ├── routes/              # Rotas do React Router
│   ├── styles/              # Estilos e breakpoints globais
│   └── index.js             # Entrada do frontend
├── CONTRIBUTING.md
├── SECURITY.md
└── package.json
```

## Executando localmente

### Pré-requisitos

- Node.js 18 ou superior
- npm 9 ou superior
- MySQL 5.7 ou superior

### 1. Clone e instale

```bash
git clone https://github.com/nickolasaugustoalmeida/Padaria-CA-TCC.git
cd Padaria-CA-TCC
npm install
npm --prefix backend install
```

### 2. Configure o ambiente

Copie os arquivos de exemplo:

```bash
cp .env.example .env
cp backend/.env.example backend/.env
```

No PowerShell, use `Copy-Item .env.example .env` e `Copy-Item backend/.env.example backend/.env`.

Variáveis disponíveis:

| Arquivo | Variável | Padrão | Descrição |
| --- | --- | --- | --- |
| `.env` | `REACT_APP_API_URL` | `http://localhost:3006` | Endereço da API usado pelo frontend |
| `backend/.env` | `PORT` | `3006` | Porta da API |
| `backend/.env` | `DB_HOST` | `localhost` | Servidor MySQL |
| `backend/.env` | `DB_PORT` | `3306` | Porta do MySQL |
| `backend/.env` | `DB_USER` | `root` | Usuário do MySQL |
| `backend/.env` | `DB_PASSWORD` | vazio | Senha do MySQL |
| `backend/.env` | `DB_NAME` | `padaria_camargo` | Nome do banco |

### 3. Prepare o banco

```sql
CREATE DATABASE IF NOT EXISTS padaria_camargo;
USE padaria_camargo;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nomeCompleto VARCHAR(120) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  curso VARCHAR(100) NOT NULL,
  turma VARCHAR(50) NOT NULL,
  turno VARCHAR(30) NOT NULL,
  email VARCHAR(160) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Inicie a aplicação

Em um terminal:

```bash
npm start
```

Em outro terminal:

```bash
npm run backend:dev
```

- Frontend: `http://localhost:3000`
- API: `http://localhost:3006`

## API

| Método | Endpoint | Descrição |
| --- | --- | --- |
| `POST` | `/auth/cadastro` | Cadastra um cliente |
| `POST` | `/auth/login` | Valida e-mail e senha |

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o frontend em desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run test:ci` | Executa os testes sem modo interativo |
| `npm run backend:start` | Inicia a API com Node.js |
| `npm run backend:dev` | Inicia a API com recarregamento automático |
| `npm run backend:check` | Verifica a sintaxe dos arquivos da API |

## Qualidade e colaboração

Cada push e pull request para `main` executa automaticamente a instalação, os testes, o build do frontend e a verificação do backend. Consulte [CONTRIBUTING.md](CONTRIBUTING.md) antes de enviar mudanças e [SECURITY.md](SECURITY.md) para relatar vulnerabilidades.

## Status

Projeto acadêmico em evolução. Funcionalidades de compra, reserva e carrinho ainda podem ser ampliadas.

## Licença

Este repositório ainda não possui uma licença de uso definida.
