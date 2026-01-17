# 🎨 Sistema de Portfólio em Angular

Um sistema de portfólio moderno e profissional desenvolvido em Angular 17+ com standalone components.

## 🚀 Características

- ✨ Design moderno e responsivo
- 🎭 Animações suaves e fluidas
- 📱 Mobile-first design
- 🎨 Paleta de cores personalizada
- 🔥 Performance otimizada
- 📄 Múltiplas páginas (Home, Sobre, Projetos, Contato)
- 🎯 SEO-friendly
- ♿ Acessibilidade

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório ou extraia os arquivos
2. Navegue até a pasta do projeto:
```bash
cd portfolio-system
```

3. Instale as dependências:
```bash
npm install
```

## 🚀 Como Usar

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:
```bash
npm start
# ou
ng serve
```

Acesse `http://localhost:4200` no seu navegador.

### Build de Produção

Para criar uma build de produção:
```bash
npm run build
# ou
ng build
```

Os arquivos compilados estarão na pasta `dist/`.

## 📁 Estrutura do Projeto

```
portfolio-system/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Cabeçalho com navegação
│   │   │   └── footer/          # Rodapé
│   │   ├── pages/
│   │   │   ├── home/            # Página inicial
│   │   │   ├── about/           # Sobre mim
│   │   │   ├── projects/        # Projetos
│   │   │   └── contact/         # Contato
│   │   ├── app.component.ts     # Componente raiz
│   │   └── app.routes.ts        # Rotas da aplicação
│   ├── styles.scss              # Estilos globais
│   ├── index.html               # HTML principal
│   └── main.ts                  # Arquivo de inicialização
├── angular.json                 # Configuração do Angular
├── package.json                 # Dependências
└── tsconfig.json               # Configuração TypeScript
```

## 🎨 Personalização

### Cores

As cores podem ser personalizadas no arquivo `src/styles.scss`:

```scss
:root {
  --color-primary: #1a1a2e;
  --color-accent: #e94560;
  --color-accent-light: #ff6b88;
  // ... outras cores
}
```

### Fontes

As fontes são carregadas do Google Fonts. Para alterar, edite o `src/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Sua+Fonte&display=swap" rel="stylesheet">
```

### Conteúdo

Personalize o conteúdo editando os componentes em `src/app/pages/`:

- **Home**: Edite `home.component.ts` para alterar a introdução e habilidades
- **Sobre**: Edite `about.component.ts` para suas informações pessoais
- **Projetos**: Edite `projects.component.ts` para adicionar seus projetos
- **Contato**: Edite `contact.component.ts` para suas informações de contato

## 📱 Páginas

### 🏠 Home
- Hero section com introdução
- Seção de habilidades
- Call-to-action

### 👤 Sobre
- Biografia
- Estatísticas
- Tecnologias
- Experiência profissional

### 💼 Projetos
- Grid de projetos
- Filtros por categoria
- Links para demo e código

### 📧 Contato
- Formulário de contato
- Informações de contato
- Links para redes sociais

## 🔧 Tecnologias Utilizadas

- **Angular 17+** - Framework principal
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **Angular Router** - Roteamento
- **Standalone Components** - Componentes standalone do Angular

## 📝 Próximos Passos

Para melhorar ainda mais o portfólio:

1. ✅ Adicione imagens reais dos projetos
2. ✅ Conecte o formulário de contato a um backend
3. ✅ Implemente um blog
4. ✅ Adicione testes unitários
5. ✅ Configure CI/CD
6. ✅ Adicione analytics (Google Analytics)
7. ✅ Implemente PWA
8. ✅ Adicione mais animações

## 🌐 Deploy

### Netlify
```bash
ng build
# Faça upload da pasta dist/portfolio-system
```

### Vercel
```bash
vercel --prod
```

### GitHub Pages
```bash
ng build --base-href=/nome-do-repositorio/
# Configure GitHub Pages para servir da pasta dist
```

## 📄 Licença

Este projeto está sob licença MIT. Sinta-se livre para usar e modificar.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📞 Suporte

Se você tiver alguma dúvida ou problema:
- Abra uma issue no repositório
- Entre em contato através do formulário de contato

---

Desenvolvido com ❤️ usando Angular
