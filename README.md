# GMTeste

Este repositório contém um projeto de automação de testes, que inclui um backend em Python e testes de API com Cypress.

## Pré-requisitos

Antes de executar o projeto, você precisa ter os seguintes softwares instalados:

- Python: [https://www.python.org/downloads/](https://www.python.org/downloads/)
- NodeJS: [https://nodejs.org/en/download](https://nodejs.org/en/download)

## Como executar a aplicação de Backend (Python)

1. Clone o repositório:
    git clone https://github.com/rafaelsuzano/gmteste.git

2. Navegue até a pasta do projeto:
    cd gmteste

3. Instale as dependências do Python:
    pip install -r requirements.txt

4. Execute a aplicação:
    python app.py

## Como executar a automação em Cypress

1. Navegue até a pasta teste:
    cd teste

2. Instale as dependências do Cypress:
    npm install

3. Execute os testes:
    npx cypress open

## Cenários de Teste
 1. Preencher o formulário corretamente e enviar → Deve exibir mensagem de sucesso
  Objetivo: Verificar se o sistema exibe uma mensagem de sucesso quando todos os campos são preenchidos corretamente.

  Passos:

    Navegar até o formulário.
    Preencher todos os campos obrigatórios com dados válidos (nome, e-mail, senha, etc.).
    Clicar no botão de envio do formulário.
    Resultado esperado:O sistema deve exibir uma mensagem de sucesso, como: "Formulário enviado com sucesso!" ou algo similar.


2. Deixar campos obrigatórios vazios → Deve exibir mensagens de erro
Objetivo: Verificar se o sistema exibe mensagens de erro quando campos obrigatórios são deixados em branco.

Passos:

    Navegar até o formulário.
    Deixar um ou mais campos obrigatórios (como nome, e-mail, ou senha) em branco.
    Tentar enviar o formulário.
    Resultado esperado:O sistema deve exibir mensagens de erro nos campos vazios, como:
    "O campo Nome é obrigatório."
    "O campo E-mail não pode estar vazio."
    "A senha é obrigatória."

3. Digitar uma senha fraca (exemplo: "12345") → Deve exibir erro de validação
Objetivo: Verificar se o sistema valida a força da senha e exibe um erro se a senha for fraca.

Passos:

    Navegar até o formulário.
    Preencher todos os campos obrigatórios.
    No campo de senha, digitar uma senha fraca como "12345".
    Tentar enviar o formulário.
    Resultado esperado: O sistema deve exibir uma mensagem de erro, como: 
    "A senha deve conter pelo menos 8 caracteres, com letras e números."

4. Digitar e-mails diferentes nos campos de "E-mail" e "Confirmação de E-mail" → Deve exibir erro
    Objetivo: Verificar se o sistema valida que os campos "E-mail" e "Confirmação de E-mail" são iguais.

Passos:

    Navegar até o formulário.
    Preencher o campo "E-mail" com um e-mail válido (exemplo: usuario@example.com).
    Preencher o campo "Confirmação de E-mail" com um e-mail diferente (exemplo: usuario2@example.com).
    Tentar enviar o formulário.
    Resultado esperado: O sistema deve exibir uma mensagem de erro, como: "Os e-mails não coincidem. 
    Por favor, confirme seu e-mail."
    

#  Relatórios de Teste
## Relatório de Testes do Cypress
        /teste/cypress/reports/index.html
## Relatório de Testes K6



