# API Contact Book

Esta é a API para o projeto "contact-book", um sistema de gerenciamento de contatos.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript do lado do servidor.
- **Express:** Framework web para Node.js.
- **pg:** Cliente PostgreSQL para Node.js.
- **cors:** Middleware para habilitar Cross-Origin Resource Sharing (CORS).
- **dotenv:** Módulo para carregar variáveis de ambiente de um arquivo `.env`.

## Configuração

1.  **Arquivo `.env`:**

    - Crie um arquivo `.env` na raiz do projeto.
    - Copie o conteúdo do arquivo `.env.example` para o arquivo `.env`.
    - Preencha as variáveis de ambiente com os valores correspondentes ao seu ambiente de desenvolvimento ou produção.

    Exemplo de conteúdo do arquivo `.env`:

    ```
    PORT=3001
    CONNECTION_STRING=sua_url_de_conexao
    ```

2.  **Instalação das Dependências:**

    - Navegue até o diretório da API: `cd contact-bood-api`
    - Instale as dependências usando npm ou yarn:

      ```bash
      npm install
      ```

3.  **Execução da API:**

    - Inicie o servidor da API:

      ```bash
      npm run start
      ```

    - A API estará disponível em `http://localhost:<PORT>`, onde `<PORT>` é o valor definido no arquivo `.env`.

4.  Instale o front-end clicando em [Contact Book](https://github.com/RodrigoVitor/contact-book/tree/main)

## Endpoints da API

A API "contact-book" oferece os seguintes endpoints:

- **GET /:** Retorna a lista de todos os contatos.
- **GET /contact/:id:** Retorna um contato específico com base no ID.
- **POST /contact:** Adiciona um novo contato.
  base no ID.
- **DELETE /contact/:id:** Remove um contato com base no ID.
