# Servidor de contato

Um back-end mínimo (Express + Nodemailer) com uma única rota,
`POST /api/contact`, que recebe nome/e-mail/mensagem do formulário do
site e envia um e-mail de verdade para a sua caixa de entrada.

## 1. Gerar a senha de app do Gmail

O Gmail não aceita mais a senha normal da conta para envio via SMTP a
partir de outro programa. É preciso gerar uma **senha de app**:

1. Ative a verificação em duas etapas na sua conta Google, se ainda
   não tiver: https://myaccount.google.com/security
2. Acesse https://myaccount.google.com/apppasswords
3. Crie uma senha de app (qualquer nome, ex: "portfolio-contato").
4. O Google mostra uma senha de 16 caracteres — copie-a.

## 2. Configurar

```bash
cd server
cp .env.example .env
```

Edite o `.env` e preencha:

```
GMAIL_USER=seu-email@gmail.com
GMAIL_APP_PASSWORD=<a senha de 16 caracteres gerada acima, sem espaços>
```

## 3. Rodar

```bash
npm install
npm run dev
```

O servidor sobe em `http://localhost:3001`. Deixe esse terminal
aberto enquanto testa o formulário — o front-end (`npm run dev` na
raiz do projeto) precisa dele rodando para o envio funcionar.

## Testando sem abrir o site

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"teste@example.com","message":"Mensagem de teste"}'
```

Se responder `{"ok":true}`, o e-mail foi enviado.
