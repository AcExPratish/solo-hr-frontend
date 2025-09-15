# Getting Started with Phoenix-React

Welcome to the ReactJS version of the original Phoenix theme. This document will guide you on how the Phoenix-React theme is organized, the basics of customization, and how to compile it from the source code if needed.

## Running in Local Environment

This project is scaffolded using Create React App.

- Install Node.js if you do not already have it installed on your machine.
- Open the “phoenix-react-{version}” directory with your cmd or terminal and run npm i
- This command will download all the necessary dependencies for phoenix in the node_modules directory.
- Run npm start. A local web server will start at http://localhost:3000.

## Creating a Production Build

After you've done your customization and are ready to build, follow these steps:

- Edit homepage in your package.json file to change asset files relative paths. For more information, visit Create React App Doc.
- Then Run npm run build command in your project directory to make the Production build.

This will create an optimized production build by compiling, merging, and minifying all the source files as necessary and will put them in the build/ folder.

To run the production build locally, run the following commands:

```shell
 npm install -g serve
 serve -s build
```

### Design File

Get the figma design file here:
[https://www.figma.com/design/TJuEihHsodgODoOW2Hp6Vh/Phoenix-React-Distributed-(v1.6.0)](<https://www.figma.com/design/TJuEihHsodgODoOW2Hp6Vh/Phoenix-React-Distributed-(v1.6.0)

# 📁 Project Structure

📦suave-hr-frontend
┣ 📂.vscode
┃ ┗ 📜settings.json
┣ 📂public
┃ ┣ 📂assets
┃ ┃ ┗ 📂i18n
┃ ┃ ┃ ┗ 📂translation
┃ ┃ ┃ ┃ ┗ 📜en.json
┃ ┣ 📂css
┃ ┣ 📂sample
┃ ┣ 📂tinymce
┃ ┣ 📜favicon.ico
┃ ┣ 📜index.html
┃ ┣ 📜manifest.json
┃ ┗ 📜robots.txt
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┣ 📂img
┃ ┃ ┃ ┣ 📂animated-icons
┃ ┃ ┃ ┣ 📂bg
┃ ┃ ┃ ┣ 📂favicons
┃ ┃ ┃ ┣ 📂icons
┃ ┃ ┃ ┃ ┣ 📂illustrations
┃ ┃ ┃ ┣ 📂logos
┃ ┃ ┃ ┣ 📂nav-icons
┃ ┃ ┃ ┣ 📂spot-illustrations
┃ ┃ ┃ ┣ 📂team
┃ ┃ ┃ ┃ ┣ 📂150x150
┃ ┃ ┃ ┃ ┣ 📂24x24
┃ ┃ ┃ ┃ ┣ 📂40x40
┃ ┃ ┃ ┃ ┣ 📂72x72
┃ ┃ ┗ 📂scss
┃ ┣ 📂components
┃ ┃ ┣ 📂common
┃ ┃ ┃ ┣ 📂custom
┃ ┃ ┣ 📂footers
┃ ┃ ┣ 📂modules
┃ ┃ ┗ 📂tabs
┃ ┣ 📂data
┃ ┃ ┣ 📂icons
┃ ┣ 📂helpers
┃ ┣ 📂hooks
┃ ┃ ┣ 📂modules
┃ ┣ 📂layouts
┃ ┣ 📂pages
┃ ┣ 📂providers
┃ ┣ 📂reducers
┃ ┣ 📂routes
┃ ┣ 📂services
┃ ┣ 📂store
┃ ┃ ┣ 📂reducers
┃ ┣ 📂types
┃ ┃ ┣ 📂modules
┃ ┣ 📂utils
┃ ┃ ┣ 📂route-guard
┃ ┣ 📂validation
┃ ┣ 📜App.tsx
┃ ┣ 📜config.ts
┃ ┣ 📜i18n.ts
┃ ┣ 📜index.tsx
┃ ┣ 📜react-app-env.d.ts
┃ ┗ 📜sitemap.tsx
┣ 📜.env.example
┣ 📜.eslintignore
┣ 📜.eslintrc.json
┣ 📜.gitignore
┣ 📜.npmrc
┣ 📜.prettierignore
┣ 📜.prettierrc.cjs
┣ 📜commitlint.config.cjs
┣ 📜craco.config.cjs
┣ 📜Dockerfile
┣ 📜package-lock.json
┣ 📜package.json
┣ 📜postinstall.js
┣ 📜README.md
┣ 📜tsconfig.json
┗ 📜webpack.config.cjs
