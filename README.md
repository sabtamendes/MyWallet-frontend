# My Wallet :money_with_wings:

### 📄👀 Documentação do Projeto

Este é um projeto em React que utiliza JavaScript, React e Styled Components para criar uma aplicação mobile que simula um gerenciador de gastos, onde pode ser inserido os ganhos e gastos do usuário.


<details>
<summary><strong>Instalação</strong></summary>

  ## 🛠️ Instalação 
Para rodar o projeto, primeiro clone este repositório usando o comando:

```
git clone https://github.com/seu-usuario/nome-do-projeto.git
```
Em seguida, instale as dependências usando o gerenciador de pacotes de sua escolha. Recomendo o uso do npm:
  
```
npm install
```
Crie um arquivo <span style="color: green"> .env </span> na raiz do projeto e defina as seguintes variáveis de ambiente:

      
      REACT_APP_BASE_URL=<URL_BASE_DA_API>
       
      
</details>


<details>
<summary><strong>Utilização</strong></summary>

 ## 💻 Rodando o projeto

Para rodar o projeto em um servidor de desenvolvimento, execute o seguinte comando:

```
npm start
```
Isso irá iniciar um servidor de desenvolvimento em **localhost:3000**, onde você pode visualizar a aplicação em seu navegador.
</details>


<details>
<summary><strong>Tecnologias Utilizadas</strong></summary>

 ## 🔧 Tecnologias
 
- ReactJS 18.0.2
- Axios 1.1.3
- Day.js 1.11.6
- React-Confirm-Alert 3.0.6
- React-Icons 18.2.0
- React-Loader-Spinner 5.3.4
- React-Router-Dom 6.4.3
- Styled-Componets 5.3.6
- Sweet-Alert2 11.6.15
- Visual Studio Code
- Git e GitHub

O projeto foi desenvolvido com a biblioteca ReactJS. Para o desenvolvimento, utilizei o Visual Studio Code como IDE e o Git para controle de versão e o GitHub como repositório remoto.

Links úteis:
- [Documentação do ReactJS](https://reactjs.org/docs/)
- [Visual Studio Code](https://code.visualstudio.com/docs)
- [Git](https://git-scm.com/doc)
- [GitHub](https://docs.github.com/)  

</details>


<details>
<summary><strong>Estrutura do Projeto</strong></summary>

A estrutura do projeto é organizada da seguinte maneira:

  - `public/`: contém arquivos estáticos acessíveis publicamente.

- `src/`:  contém todo o código-fonte da aplicação.

  - `assets/`  - contém os recursos estáticos da aplicação.
    - `images/` - contém imagens utilizadas na aplicação.
    - `styles/` - contém os arquivos de estilo da aplicação.

  - `components/` - contém os componentes da aplicação.
    - `Loading/` - contém o componente que é exibido durante o carregamento.
    - `Navbar/` - contém o componente de barra de navegação.
    - `Registries/` - contém o componente de registros.
    - `Sign-in/` - contém o componente de login.
    - `Sign-up/` - contém o componente de registro.

  - `contexts/` - contém os contextos da aplicação.

  - `services/` - contém os serviços da aplicação.

  `App.js` - arquivo principal que renderiza a aplicação.

  `index.js` - arquivo que inicializa a aplicação.
  
</details>


<details>
<summary><strong>Descrição dos Componentes</strong></summary>

### 🔄 Loading

- O componente `Loading` é responsável por exibir um spinner enquanto a aplicação está carregando. Ele utiliza a biblioteca React-Loader-Spinner para exibir o spinner.

### 🔎 Navbar

- O componente `Navbar` é responsável por exibir a barra de navegação da aplicação. Ele é fixado no topo da tela e contém botões de navegação para as diferentes páginas da aplicação. O componente utiliza a biblioteca React-Icons para exibir os ícones.

### 📊 Registries

- O componente `Registries` é responsável por exibir a lista de registros do usuário. Ele contém um formulário para adicionar novos registros, bem como uma tabela que exibe os registros existentes. O componente utiliza a biblioteca Axios para se comunicar com a API e adicionar ou remover registros.

### 🔑 Sign-in

- O componente `Sign-in` é responsável pela página de login da aplicação. Ele contém um formulário onde o usuário pode inserir suas credenciais de login.

### 📝 Sign-up

- O componente `Sign-up` é responsável pela página de registro da aplicação. Ele contém um formulário onde o usuário pode inserir suas informações de registro.
</details>


<details>
<summary><strong>Instruções de Deploy</strong></summary>

### 🚀 Para fazer o `deploy` da aplicação em um ambiente de produção, é necessário realizar os seguintes passos:

- Buildar a aplicação usando o comando npm run build. Isso irá gerar uma pasta build contendo os arquivos otimizados para produção.
```
npm run build
``` 
- Subir a pasta build para um servidor web. Existem diversas opções para hospedar uma aplicação web, como por exemplo o Netlify, o Heroku, o AWS S3, entre outros.

- Configurar as variáveis de ambiente da aplicação para o ambiente de produção. Isso inclui as credenciais de acesso à API e outras configurações específicas do ambiente de produção.

</details>


<details>
<summary><strong>Exemplos de Uso</strong></summary>

   ## 🗺️🔍👩‍💻 Para utilizar a aplicação, o usuário deve seguir os seguintes passos:

   - Acessar a página de `registro (/signup)` e criar uma conta.

   - Acessar a página de `login (/signin)` e fazer o login com as credenciais criadas na etapa anterior.

   - Adicionar registros de ganhos e gastos na página de `registros (/registries)`.

   - Visualizar a lista de registros e os totais de ganhos e gastos na página de `registros (/registries)`.

   - Fazer o `logout na barra de navegação (/)`.

</details>
