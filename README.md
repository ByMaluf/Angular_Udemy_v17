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

## Instalação do ts-node

`ts-node` é uma ferramenta que permite a execução direta de arquivos TypeScript no Node.js sem a necessidade de compilar o código TypeScript para JavaScript antes da execução. Isso é especialmente útil durante o desenvolvimento, pois simplifica o processo de teste e execução de scripts TypeScript.

Para instalar o `ts-node` globalmente, permitindo que você execute arquivos `.ts` diretamente do terminal, use o comando:
```
npm install -g ts-node
```

Isso facilita a execução de scripts TypeScript, tornando o desenvolvimento mais eficiente ao eliminar a etapa de compilação explícita.

## Trabalhando com Classes no TypeScript

No TypeScript, ao definir métodos dentro de classes, não é necessário usar a palavra-chave `function`. Os métodos são declarados diretamente com o nome do método seguido por parênteses e um bloco de código. Isso simplifica a sintaxe e mantém o código limpo e legível.

### Método de Instância

Métodos que podem ser chamados em instâncias da classe. São declarados diretamente com o nome do método, seguidos por parênteses e um bloco de código.

```typescript
class MinhaClasse {
  metodoDeInstancia() {
    console.log('Método de instância chamado.');
  }
}
```

### Método Estático

Métodos que são chamados na própria classe, não em instâncias. São declarados com a palavra-chave `static` antes do nome do método.

```typescript
class MinhaClasse {
  static metodoEstatico() {
    console.log('Método estático chamado.');
  }
}
```

### Exemplo de Uso

```typescript
const minhaInstancia = new MinhaClasse();
minhaInstancia.metodoDeInstancia(); // Chama o método de instância
MinhaClasse.metodoEstatico(); // Chama o método estático
```

A definição de métodos nas classes do TypeScript fornece uma estrutura clara e um código organizado, facilitando o desenvolvimento de aplicações orientadas a objetos.
```

Essa atualização adiciona informações detalhadas sobre como instalar e para que serve o `ts-node`, juntamente com instruções para instalar o TypeScript e como trabalhar com classes.