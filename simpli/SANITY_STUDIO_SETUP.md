# Sanity Studio – Configuração e “Studio na conta”

## 1. Erro EPERM ao rodar `sanity dev` ou `sanity deploy`

Se aparecer algo como:

```text
Error: EPERM: operation not permitted, open '.../.config/sanity/config.json...'
```

**Causa:** o Sanity CLI precisa escrever em `~/.config/sanity/` (config e update check). Em alguns ambientes isso é bloqueado (permissões, sandbox, etc.).

**O que fazer:**

- **Rodar no seu terminal** (fora do sandbox do editor), no diretório do studio:
  ```bash
  cd simpli
  pnpm run dev
  ```
- Garantir que a pasta exista e seja gravável:
  ```bash
  mkdir -p ~/.config/sanity
  chmod 700 ~/.config/sanity
  ```
- No projeto já está `autoUpdates: false` no `sanity.cli.ts` para reduzir escrita em `~/.config/sanity`. Se ainda der EPERM, o problema é permissão na pasta acima.

## 2. “O Sanity não está criando o studio dentro da conta”

O **Studio na sua conta** depende de duas coisas: **projeto** e **deploy**.

### Projeto na sua conta

O `projectId` usado no código (`sanity.config.ts` e `sanity.cli.ts`) tem que ser de um **projeto que existe na sua conta** no Sanity.

- Acesse: **[manage.sanity.io](https://manage.sanity.io)**
- Faça login com a mesma conta (Google, GitHub ou e-mail) que quiser usar.
- Se não existir nenhum projeto:
  - Clique em **Create project** e crie um (ex.: nome “Simplí”).
- Anote o **Project ID** do projeto (ex.: `abc123xy`).

Se o `projectId` no código for de outro usuário/conta, o studio **não** aparece na **sua** conta. Ajuste o código para usar o ID do **seu** projeto:

- Em `simpli/sanity.config.ts`: `projectId: 'SEU_PROJECT_ID'`
- Em `simpli/sanity.cli.ts`: `api: { projectId: 'SEU_PROJECT_ID', dataset: 'production' }`
- No site (Vite): em `src/lib/sanity.ts` use o mesmo `projectId`.

Depois disso, ao rodar `pnpm run dev` em `simpli`, o studio local já estará ligado à **sua** conta (ao abrir o browser em `http://localhost:3333` você faz login nessa conta).

### Studio “criado” na conta (deploy)

Para o studio aparecer **na conta** como “studio implantado” (com URL própria do Sanity):

1. **Login na CLI** (no terminal, dentro de `simpli`):
   ```bash
   cd simpli
   pnpm exec sanity login
   ```
   Use a mesma conta do manage.sanity.io.

2. **Deploy do studio**:
   ```bash
   pnpm exec sanity deploy
   ```
   Siga as perguntas (hosted vs. produção, etc.). No fim, o Sanity gera uma URL (ex. `https://seu-projeto.sanity.studio`) e o studio passa a aparecer no projeto em [manage.sanity.io](https://manage.sanity.io) como “Sanity Studio” / deploy.

Resumo:

- **Projeto na conta** = usar um `projectId` que existe na **sua** conta em manage.sanity.io.
- **Studio “criado” na conta** = depois de `sanity login` e `sanity deploy`, o studio implantado aparece no seu projeto em manage.sanity.io.
