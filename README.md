# TypeScript: Comandos e Instalação

## Comandos Básicos

- **Criar um arquivo `index.js` a partir de `index.ts`:**
  ```
  tsc index.ts
  ```

- **Criar um arquivo `tsconfig.json`:**
  ```
  tsc --init
  ```
  **Importante:** Se o arquivo `tsconfig.json` estiver na raiz do seu projeto, o TypeScript automaticamente verificará todos os arquivos `.ts` no projeto, facilitando a gestão de configurações e a compilação do projeto.

- **Verificar a versão do TypeScript:**
  Para verificar a versão do TypeScript, você pode usar qualquer um dos seguintes comandos:
  ```
  tsc -v
  ```
  Ou:
  ```
  npx tsc -v
  ```
  Ou ainda:
  ```
  tsc --version
  ```

## Instalação do TypeScript Globalmente

Para instalar o TypeScript globalmente, permitindo que você use o comando `tsc` em qualquer lugar no seu terminal, execute o seguinte comando:
```
npm install -g typescript
```
Isso instalará a versão mais recente do TypeScript, que é atualmente a 5.4.
```

