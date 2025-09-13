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
 ┃ ┃ ┣ 📜theme.min.css
 ┃ ┃ ┣ 📜theme.min.css.map
 ┃ ┃ ┣ 📜theme.min.rtl.css
 ┃ ┃ ┣ 📜user.min.css
 ┃ ┃ ┣ 📜user.min.css.map
 ┃ ┃ ┗ 📜user.min.rtl.css
 ┃ ┣ 📂sample
 ┃ ┃ ┗ 📜holiday-template.xlsx
 ┃ ┣ 📂tinymce
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┗ 📂default
 ┃ ┃ ┃ ┃ ┣ 📜icons.js
 ┃ ┃ ┃ ┃ ┣ 📜icons.min.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┗ 📂dom
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜model.js
 ┃ ┃ ┃ ┃ ┗ 📜model.min.js
 ┃ ┃ ┣ 📂plugins
 ┃ ┃ ┃ ┣ 📂accordion
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂advlist
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂anchor
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂autolink
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂autoresize
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂autosave
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂charmap
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂code
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂codesample
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂directionality
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂emoticons
 ┃ ┃ ┃ ┃ ┣ 📂js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜emojiimages.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜emojiimages.min.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜emojis.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜emojis.min.js
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂fullscreen
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂help
 ┃ ┃ ┃ ┃ ┣ 📂js
 ┃ ┃ ┃ ┃ ┃ ┗ 📂i18n
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂keynav
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ar.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜bg_BG.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ca.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cs.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜da.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜de.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜el.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜en.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜es.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜eu.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fa.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fi.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fr_FR.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜he_IL.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hi.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hr.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hu_HU.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜it.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ja.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜kk.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ko_KR.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ms.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nb_NO.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nl.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pl.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pt_BR.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pt_PT.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ro.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ru.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sk.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sl_SI.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sv_SE.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜th_TH.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tr.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜uk.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜vi.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜zh_CN.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜zh_TW.js
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂image
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂importcss
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂insertdatetime
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂link
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂lists
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂media
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂nonbreaking
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂pagebreak
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂preview
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂quickbars
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂save
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂searchreplace
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂table
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂visualblocks
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┣ 📂visualchars
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┃ ┗ 📂wordcount
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜plugin.js
 ┃ ┃ ┃ ┃ ┗ 📜plugin.min.js
 ┃ ┃ ┣ 📂skins
 ┃ ┃ ┃ ┣ 📂content
 ┃ ┃ ┃ ┃ ┣ 📂dark
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜content.min.css
 ┃ ┃ ┃ ┃ ┣ 📂default
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜content.min.css
 ┃ ┃ ┃ ┃ ┣ 📂document
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜content.min.css
 ┃ ┃ ┃ ┃ ┣ 📂tinymce-5
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜content.min.css
 ┃ ┃ ┃ ┃ ┣ 📂tinymce-5-dark
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜content.min.css
 ┃ ┃ ┃ ┃ ┗ 📂writer
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜content.min.css
 ┃ ┃ ┃ ┗ 📂ui
 ┃ ┃ ┃ ┃ ┣ 📂oxide
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.shadowdom.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.shadowdom.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜skin.shadowdom.min.css
 ┃ ┃ ┃ ┃ ┣ 📂oxide-dark
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.shadowdom.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.shadowdom.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜skin.shadowdom.min.css
 ┃ ┃ ┃ ┃ ┣ 📂tinymce-5
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.shadowdom.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.shadowdom.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜skin.shadowdom.min.css
 ┃ ┃ ┃ ┃ ┗ 📂tinymce-5-dark
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.inline.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜content.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.shadowdom.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜skin.shadowdom.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜skin.shadowdom.min.css
 ┃ ┃ ┣ 📂themes
 ┃ ┃ ┃ ┗ 📂silver
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜theme.js
 ┃ ┃ ┃ ┃ ┗ 📜theme.min.js
 ┃ ┃ ┣ 📜bower.json
 ┃ ┃ ┣ 📜CHANGELOG.md
 ┃ ┃ ┣ 📜composer.json
 ┃ ┃ ┣ 📜license.md
 ┃ ┃ ┣ 📜package.json
 ┃ ┃ ┣ 📜README.md
 ┃ ┃ ┣ 📜tinymce.d.ts
 ┃ ┃ ┣ 📜tinymce.js
 ┃ ┃ ┗ 📜tinymce.min.js
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📂animated-icons
 ┃ ┃ ┃ ┃ ┣ 📜coming-soon-dark.json
 ┃ ┃ ┃ ┃ ┣ 📜coming-soon-light.json
 ┃ ┃ ┃ ┃ ┣ 📜rotating-earth-dark.json
 ┃ ┃ ┃ ┃ ┣ 📜rotating-earth.json
 ┃ ┃ ┃ ┃ ┣ 📜typing.json
 ┃ ┃ ┃ ┃ ┗ 📜typing2.json
 ┃ ┃ ┃ ┣ 📂bg
 ┃ ┃ ┃ ┃ ┣ 📜10-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜10.png
 ┃ ┃ ┃ ┃ ┣ 📜13.png
 ┃ ┃ ┃ ┃ ┣ 📜25.png
 ┃ ┃ ┃ ┃ ┣ 📜26.png
 ┃ ┃ ┃ ┃ ┣ 📜27.png
 ┃ ┃ ┃ ┃ ┣ 📜28.png
 ┃ ┃ ┃ ┃ ┣ 📜29.png
 ┃ ┃ ┃ ┃ ┣ 📜30.png
 ┃ ┃ ┃ ┃ ┣ 📜31.png
 ┃ ┃ ┃ ┃ ┣ 📜32.png
 ┃ ┃ ┃ ┃ ┣ 📜33.png
 ┃ ┃ ┃ ┃ ┣ 📜34.png
 ┃ ┃ ┃ ┃ ┣ 📜35.png
 ┃ ┃ ┃ ┃ ┣ 📜36.png
 ┃ ┃ ┃ ┃ ┣ 📜37.png
 ┃ ┃ ┃ ┃ ┣ 📜38.png
 ┃ ┃ ┃ ┃ ┣ 📜39.png
 ┃ ┃ ┃ ┃ ┣ 📜40.png
 ┃ ┃ ┃ ┃ ┣ 📜41.jpg
 ┃ ┃ ┃ ┃ ┣ 📜42.png
 ┃ ┃ ┃ ┃ ┣ 📜43.png
 ┃ ┃ ┃ ┃ ┣ 📜44.png
 ┃ ┃ ┃ ┃ ┣ 📜45.png
 ┃ ┃ ┃ ┃ ┣ 📜46.png
 ┃ ┃ ┃ ┃ ┣ 📜47.png
 ┃ ┃ ┃ ┃ ┣ 📜8-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜8.png
 ┃ ┃ ┃ ┃ ┣ 📜9-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜9.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-1-2.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-11-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-11.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-12.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-13.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-17.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-18.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-19.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-2.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-21.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-22.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-23.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-24.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-28.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-29.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-30.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-31.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-32.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-33.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-34.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-35.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-36.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-38.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-39.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-40.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-41.svg
 ┃ ┃ ┃ ┃ ┣ 📜bg-5.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-8.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-9.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-dark-40.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-dark-5.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-15.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-17.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-20.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-21.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-22.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-23.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-24.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-25.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-26.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-27.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-28.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-29.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-30.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-31.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-32.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-33.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-left-5.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-15.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-17.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-20.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-21.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-22.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-23.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-24.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-25.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-26.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-27.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-28.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-30.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-31.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-32.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-33.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-right-6.png
 ┃ ┃ ┃ ┃ ┣ 📜figma.png
 ┃ ┃ ┃ ┃ ┗ 📜gradient-bg.png
 ┃ ┃ ┃ ┣ 📂favicons
 ┃ ┃ ┃ ┃ ┣ 📜android-chrome-192x192.png
 ┃ ┃ ┃ ┃ ┣ 📜android-chrome-512x512.png
 ┃ ┃ ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┃ ┃ ┣ 📜browserconfig.xml
 ┃ ┃ ┃ ┃ ┣ 📜favicon-16x16.png
 ┃ ┃ ┃ ┃ ┣ 📜favicon-32x32.png
 ┃ ┃ ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┃ ┃ ┣ 📜manifest.json
 ┃ ┃ ┃ ┃ ┣ 📜mstile-150x150.png
 ┃ ┃ ┃ ┃ ┗ 📜site.webmanifest
 ┃ ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┃ ┣ 📂illustrations
 ┃ ┃ ┃ ┃ ┃ ┣ 📜1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜10.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜11.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜12.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜13.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜14.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜15.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜16.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜17.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜18.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜19.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜20.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜21.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜22.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜23.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜24.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜25.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜26.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜27.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜2l.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜3l.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜4l.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜5.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜6.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜7.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜8.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜9.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bolt.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜edit.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜moon.svg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pie.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shield.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sun.svg
 ┃ ┃ ┃ ┃ ┣ 📜acc-icon-up.svg
 ┃ ┃ ┃ ┃ ┣ 📜all-night-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜all-night.png
 ┃ ┃ ┃ ┃ ┣ 📜bed-double.svg
 ┃ ┃ ┃ ┃ ┣ 📜bed-double_dark.svg
 ┃ ┃ ┃ ┃ ┣ 📜best-statistics-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜best-statistics.png
 ┃ ┃ ┃ ┃ ┣ 📜blue.png
 ┃ ┃ ┃ ┃ ┣ 📜caret-down-solid.svg
 ┃ ┃ ┃ ┃ ┣ 📜caret-right-solid.svg
 ┃ ┃ ┃ ┃ ┣ 📜cloud-upload.svg
 ┃ ┃ ┃ ┃ ┣ 📜danger-cancel.svg
 ┃ ┃ ┃ ┃ ┣ 📜dollar-alt.svg
 ┃ ┃ ┃ ┃ ┣ 📜dollar-alt_dark.svg
 ┃ ┃ ┃ ┃ ┣ 📜editable-features-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜editable-features.png
 ┃ ┃ ┃ ┃ ┣ 📜figma.png
 ┃ ┃ ┃ ┃ ┣ 📜file-check-alt.svg
 ┃ ┃ ┃ ┃ ┣ 📜file-check-alt_dark.svg
 ┃ ┃ ┃ ┃ ┣ 📜file.png
 ┃ ┃ ┃ ┃ ┣ 📜fly-map-marker.png
 ┃ ┃ ┃ ┃ ┣ 📜fly-map-marker_dark.png
 ┃ ┃ ┃ ┃ ┣ 📜green.png
 ┃ ┃ ┃ ┃ ┣ 📜image-icon.png
 ┃ ┃ ┃ ┃ ┣ 📜info-circle.svg
 ┃ ┃ ┃ ┃ ┣ 📜info.svg
 ┃ ┃ ┃ ┃ ┣ 📜info_dark.svg
 ┃ ┃ ┃ ┃ ┣ 📜land-map-marker.png
 ┃ ┃ ┃ ┃ ┣ 📜land-map-marker_dark.png
 ┃ ┃ ┃ ┃ ┣ 📜lightning-speed-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜lightning-speed.png
 ┃ ┃ ┃ ┃ ┣ 📜location-green.svg
 ┃ ┃ ┃ ┃ ┣ 📜location-red.svg
 ┃ ┃ ┃ ┃ ┣ 📜location.svg
 ┃ ┃ ┃ ┃ ┣ 📜location_dark.svg
 ┃ ┃ ┃ ┃ ┣ 📜logo-1.png
 ┃ ┃ ┃ ┃ ┣ 📜logo-bg.png
 ┃ ┃ ┃ ┃ ┣ 📜logo-primary.png
 ┃ ┃ ┃ ┃ ┣ 📜logo-white.png
 ┃ ┃ ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┃ ┃ ┣ 📜long-arrow-down.svg
 ┃ ┃ ┃ ┃ ┣ 📜long-arrow.svg
 ┃ ┃ ┃ ┃ ┣ 📜map-marker.png
 ┃ ┃ ┃ ┃ ┣ 📜phoenix.png
 ┃ ┃ ┃ ┃ ┣ 📜picture.svg
 ┃ ┃ ┃ ┃ ┣ 📜picture_dark.svg
 ┃ ┃ ┃ ┃ ┣ 📜plane.png
 ┃ ┃ ┃ ┃ ┣ 📜plane_dark.png
 ┃ ┃ ┃ ┃ ┣ 📜primary-stopwatch.svg
 ┃ ┃ ┃ ┃ ┣ 📜red.png
 ┃ ┃ ┃ ┃ ┣ 📜secondary-cancel.svg
 ┃ ┃ ┃ ┃ ┣ 📜skyblue.png
 ┃ ┃ ┃ ┃ ┣ 📜star.svg
 ┃ ┃ ┃ ┃ ┣ 📜star_on.svg
 ┃ ┃ ┃ ┃ ┣ 📜stop.png
 ┃ ┃ ┃ ┃ ┣ 📜success-check.svg
 ┃ ┃ ┃ ┃ ┣ 📜thumbs-up.png
 ┃ ┃ ┃ ┃ ┣ 📜warning-stopwatch.svg
 ┃ ┃ ┃ ┃ ┣ 📜warning-stopwatch2.svg
 ┃ ┃ ┃ ┃ ┗ 📜yellow.png
 ┃ ┃ ┃ ┣ 📂logos
 ┃ ┃ ┃ ┃ ┣ 📜american_express.png
 ┃ ┃ ┃ ┃ ┣ 📜angkas-logo.png
 ┃ ┃ ┃ ┃ ┣ 📜angkas.png
 ┃ ┃ ┃ ┃ ┣ 📜discover.png
 ┃ ┃ ┃ ┃ ┣ 📜foodpanda.png
 ┃ ┃ ┃ ┃ ┣ 📜grab.png
 ┃ ┃ ┃ ┃ ┣ 📜mastercard.png
 ┃ ┃ ┃ ┃ ┣ 📜phoenix-mart.png
 ┃ ┃ ┃ ┃ ┗ 📜visa.png
 ┃ ┃ ┃ ┣ 📂nav-icons
 ┃ ┃ ┃ ┃ ┣ 📜behance-1 1 (1).webp
 ┃ ┃ ┃ ┃ ┣ 📜behance.webp
 ┃ ┃ ┃ ┃ ┣ 📜bitbucket-icon 1.webp
 ┃ ┃ ┃ ┃ ┣ 📜bitbucket.webp
 ┃ ┃ ┃ ┃ ┣ 📜figma-1 1.webp
 ┃ ┃ ┃ ┃ ┣ 📜figma.webp
 ┃ ┃ ┃ ┃ ┣ 📜github.webp
 ┃ ┃ ┃ ┃ ┣ 📜Gitlab-icon-rgb_2022 1.webp
 ┃ ┃ ┃ ┃ ┣ 📜gitlab.webp
 ┃ ┃ ┃ ┃ ┣ 📜google-cloud-1 1.webp
 ┃ ┃ ┃ ┃ ┣ 📜google-cloud.webp
 ┃ ┃ ┃ ┃ ┣ 📜google-drive.webp
 ┃ ┃ ┃ ┃ ┣ 📜google-maps-2020-icon 1.webp
 ┃ ┃ ┃ ┃ ┣ 📜google-maps.webp
 ┃ ┃ ┃ ┃ ┣ 📜google-photos-6 1.webp
 ┃ ┃ ┃ ┃ ┣ 📜google-photos.webp
 ┃ ┃ ┃ ┃ ┣ 📜In.webp
 ┃ ┃ ┃ ┃ ┣ 📜linkedin.webp
 ┃ ┃ ┃ ┃ ┣ 📜ln.webp
 ┃ ┃ ┃ ┃ ┣ 📜new-logo-drive-google 1.webp
 ┃ ┃ ┃ ┃ ┣ 📜pinterest-1 1.webp
 ┃ ┃ ┃ ┃ ┣ 📜pinterest.webp
 ┃ ┃ ┃ ┃ ┣ 📜slack-new-logo 1.webp
 ┃ ┃ ┃ ┃ ┣ 📜slack.webp
 ┃ ┃ ┃ ┃ ┣ 📜spotify-2 1.webp
 ┃ ┃ ┃ ┃ ┣ 📜spotify.webp
 ┃ ┃ ┃ ┃ ┣ 📜trello 1.webp
 ┃ ┃ ┃ ┃ ┣ 📜trello.webp
 ┃ ┃ ┃ ┃ ┣ 📜twitter-6 1.webp
 ┃ ┃ ┃ ┃ ┗ 📜twitter.webp
 ┃ ┃ ┃ ┣ 📂spot-illustrations
 ┃ ┃ ┃ ┃ ┣ 📜1.png
 ┃ ┃ ┃ ┃ ┣ 📜13.png
 ┃ ┃ ┃ ┃ ┣ 📜14.png
 ┃ ┃ ┃ ┃ ┣ 📜15.png
 ┃ ┃ ┃ ┃ ┣ 📜16.png
 ┃ ┃ ┃ ┃ ┣ 📜18.png
 ┃ ┃ ┃ ┃ ┣ 📜19.png
 ┃ ┃ ┃ ┃ ┣ 📜2.png
 ┃ ┃ ┃ ┃ ┣ 📜21.png
 ┃ ┃ ┃ ┃ ┣ 📜22.png
 ┃ ┃ ┃ ┃ ┣ 📜22_2.png
 ┃ ┃ ┃ ┃ ┣ 📜23.png
 ┃ ┃ ┃ ┃ ┣ 📜23_2.png
 ┃ ┃ ┃ ┃ ┣ 📜24.png
 ┃ ┃ ┃ ┃ ┣ 📜24_2.png
 ┃ ┃ ┃ ┃ ┣ 📜27.png
 ┃ ┃ ┃ ┃ ┣ 📜3.png
 ┃ ┃ ┃ ┃ ┣ 📜30.png
 ┃ ┃ ┃ ┃ ┣ 📜31.png
 ┃ ┃ ┃ ┃ ┣ 📜32.png
 ┃ ┃ ┃ ┃ ┣ 📜33-s.webp
 ┃ ┃ ┃ ┃ ┣ 📜34.png
 ┃ ┃ ┃ ┃ ┣ 📜34_2.png
 ┃ ┃ ┃ ┃ ┣ 📜35.png
 ┃ ┃ ┃ ┃ ┣ 📜35_2.png
 ┃ ┃ ┃ ┃ ┣ 📜36.png
 ┃ ┃ ┃ ┃ ┣ 📜36_2.png
 ┃ ┃ ┃ ┃ ┣ 📜37.png
 ┃ ┃ ┃ ┃ ┣ 📜37_2.png
 ┃ ┃ ┃ ┃ ┣ 📜38.webp
 ┃ ┃ ┃ ┃ ┣ 📜39.png
 ┃ ┃ ┃ ┃ ┣ 📜40.png
 ┃ ┃ ┃ ┃ ┣ 📜403-illustration.png
 ┃ ┃ ┃ ┃ ┣ 📜403.png
 ┃ ┃ ┃ ┃ ┣ 📜404-illustration.png
 ┃ ┃ ┃ ┃ ┣ 📜404.png
 ┃ ┃ ┃ ┃ ┣ 📜41.png
 ┃ ┃ ┃ ┃ ┣ 📜42.png
 ┃ ┃ ┃ ┃ ┣ 📜44-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜44.png
 ┃ ┃ ┃ ┃ ┣ 📜500-illustration.png
 ┃ ┃ ┃ ┃ ┣ 📜500.png
 ┃ ┃ ┃ ┃ ┣ 📜air-plane-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜air-plane.png
 ┃ ┃ ┃ ┃ ┣ 📜auth-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜auth.png
 ┃ ┃ ┃ ┃ ┣ 📜bag-2-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜bag-2.png
 ┃ ┃ ┃ ┃ ┣ 📜bag.png
 ┃ ┃ ┃ ┃ ┣ 📜bg-1.png
 ┃ ┃ ┃ ┃ ┣ 📜chat.webp
 ┃ ┃ ┃ ┃ ┣ 📜dark403-illustration.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_1.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_13.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_14.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_15.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_16.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_17.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_2.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_21.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_22.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_23.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_24.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_26.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_27.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_30.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_38.webp
 ┃ ┃ ┃ ┃ ┣ 📜dark_39.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_40.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_403.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_404-illustration.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_404.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_41.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_42.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_500-illustration.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_500.png
 ┃ ┃ ┃ ┃ ┣ 📜dark_chat.webp
 ┃ ┃ ┃ ┃ ┣ 📜earth-plane-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜earth-plane.png
 ┃ ┃ ┃ ┃ ┣ 📜i-phone-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜i-phone.png
 ┃ ┃ ┃ ┃ ┣ 📜interations.png
 ┃ ┃ ┃ ┃ ┣ 📜light_17.png
 ┃ ┃ ┃ ┃ ┣ 📜light_30.png
 ┃ ┃ ┃ ┃ ┣ 📜paper-plane.png
 ┃ ┃ ┃ ┃ ┣ 📜plane.png
 ┃ ┃ ┃ ┃ ┣ 📜rocket-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜rocket.png
 ┃ ┃ ┃ ┃ ┣ 📜shield-2-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜shield-2.png
 ┃ ┃ ┃ ┃ ┣ 📜shield.png
 ┃ ┃ ┃ ┃ ┣ 📜star-dark.png
 ┃ ┃ ┃ ┃ ┣ 📜star.png
 ┃ ┃ ┃ ┃ ┣ 📜startup-shape.png
 ┃ ┃ ┃ ┃ ┣ 📜timeline-dark.png
 ┃ ┃ ┃ ┃ ┗ 📜timeline.png
 ┃ ┃ ┃ ┣ 📂team
 ┃ ┃ ┃ ┃ ┣ 📂150x150
 ┃ ┃ ┃ ┃ ┃ ┣ 📜1.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜10.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜11.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜12.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜13.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜14.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜15.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜16.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜17.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜18.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜19.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜2.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜20.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜21.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜22.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜23.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜24.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜25.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜26.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜27.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜28.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜29.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜3.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜30.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜31.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜32.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜33.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜34.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜36.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜4.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜5.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜57.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜58.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜59.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜6.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜60.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜61.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜62.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜63.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜64.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜65.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜66.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜67.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜68.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜69.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜7.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜8.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜9.webp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜avatar.webp
 ┃ ┃ ┃ ┃ ┣ 📂24x24
 ┃ ┃ ┃ ┃ ┃ ┣ 📜1.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜10.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜11.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜12.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜13.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜14.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜15.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜16.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜17.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜18.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜19.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜2.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜20.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜21.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜22.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜23.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜24.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜25.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜26.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜27.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜28.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜29.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜3.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜30.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜31.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜32.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜33.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜34.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜36.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜4.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜5.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜57.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜58.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜59.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜6.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜60.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜61.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜62.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜63.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜64.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜65.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜66.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜67.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜68.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜69.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜7.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜8.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜9.webp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜avatar.webp
 ┃ ┃ ┃ ┃ ┣ 📂40x40
 ┃ ┃ ┃ ┃ ┃ ┣ 📜1.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜10.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜11.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜12.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜13.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜14.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜15.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜16.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜17.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜18.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜19.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜2.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜20.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜21.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜22.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜23.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜24.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜25.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜26.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜27.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜28.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜29.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜3.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜30.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜31.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜32.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜33.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜34.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜36.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜4.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜5.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜57.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜58.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜59.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜6.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜60.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜61.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜62.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜63.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜64.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜65.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜66.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜67.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜68.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜69.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜7.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜8.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜9.webp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜avatar.webp
 ┃ ┃ ┃ ┃ ┣ 📂72x72
 ┃ ┃ ┃ ┃ ┃ ┣ 📜1.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜10.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜11.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜12.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜13.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜14.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜15.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜16.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜17.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜18.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜19.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜2.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜20.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜21.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜22.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜23.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜24.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜25.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜26.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜27.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜28.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜29.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜3.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜30.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜31.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜32.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜33.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜34.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜36.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜4.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜5.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜57.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜58.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜59.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜6.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜60.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜61.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜62.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜63.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜64.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜65.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜66.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜67.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜68.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜69.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜7.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜8.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜9.webp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜avatar.webp
 ┃ ┃ ┃ ┃ ┣ 📜1.webp
 ┃ ┃ ┃ ┃ ┣ 📜10.webp
 ┃ ┃ ┃ ┃ ┣ 📜11.webp
 ┃ ┃ ┃ ┃ ┣ 📜12.webp
 ┃ ┃ ┃ ┃ ┣ 📜13.webp
 ┃ ┃ ┃ ┃ ┣ 📜14.webp
 ┃ ┃ ┃ ┃ ┣ 📜15.webp
 ┃ ┃ ┃ ┃ ┣ 📜16.webp
 ┃ ┃ ┃ ┃ ┣ 📜17.webp
 ┃ ┃ ┃ ┃ ┣ 📜18.webp
 ┃ ┃ ┃ ┃ ┣ 📜19.webp
 ┃ ┃ ┃ ┃ ┣ 📜2.webp
 ┃ ┃ ┃ ┃ ┣ 📜20.webp
 ┃ ┃ ┃ ┃ ┣ 📜21.webp
 ┃ ┃ ┃ ┃ ┣ 📜22.webp
 ┃ ┃ ┃ ┃ ┣ 📜23.webp
 ┃ ┃ ┃ ┃ ┣ 📜24.webp
 ┃ ┃ ┃ ┃ ┣ 📜25.webp
 ┃ ┃ ┃ ┃ ┣ 📜26.webp
 ┃ ┃ ┃ ┃ ┣ 📜27.webp
 ┃ ┃ ┃ ┃ ┣ 📜28.webp
 ┃ ┃ ┃ ┃ ┣ 📜29.webp
 ┃ ┃ ┃ ┃ ┣ 📜3.webp
 ┃ ┃ ┃ ┃ ┣ 📜30.webp
 ┃ ┃ ┃ ┃ ┣ 📜31.webp
 ┃ ┃ ┃ ┃ ┣ 📜32.webp
 ┃ ┃ ┃ ┃ ┣ 📜33.webp
 ┃ ┃ ┃ ┃ ┣ 📜34.webp
 ┃ ┃ ┃ ┃ ┣ 📜35.webp
 ┃ ┃ ┃ ┃ ┣ 📜4.webp
 ┃ ┃ ┃ ┃ ┣ 📜5.webp
 ┃ ┃ ┃ ┃ ┣ 📜57.webp
 ┃ ┃ ┃ ┃ ┣ 📜58.webp
 ┃ ┃ ┃ ┃ ┣ 📜59.webp
 ┃ ┃ ┃ ┃ ┣ 📜6.webp
 ┃ ┃ ┃ ┃ ┣ 📜60.webp
 ┃ ┃ ┃ ┃ ┣ 📜61.webp
 ┃ ┃ ┃ ┃ ┣ 📜62.webp
 ┃ ┃ ┃ ┃ ┣ 📜63.webp
 ┃ ┃ ┃ ┃ ┣ 📜64.webp
 ┃ ┃ ┃ ┃ ┣ 📜65.webp
 ┃ ┃ ┃ ┃ ┣ 📜66.webp
 ┃ ┃ ┃ ┃ ┣ 📜67.webp
 ┃ ┃ ┃ ┃ ┣ 📜68.webp
 ┃ ┃ ┃ ┃ ┣ 📜69.webp
 ┃ ┃ ┃ ┃ ┣ 📜7.webp
 ┃ ┃ ┃ ┃ ┣ 📜70.webp
 ┃ ┃ ┃ ┃ ┣ 📜71.webp
 ┃ ┃ ┃ ┃ ┣ 📜72.webp
 ┃ ┃ ┃ ┃ ┣ 📜73.webp
 ┃ ┃ ┃ ┃ ┣ 📜74.webp
 ┃ ┃ ┃ ┃ ┣ 📜75.webp
 ┃ ┃ ┃ ┃ ┣ 📜76.webp
 ┃ ┃ ┃ ┃ ┣ 📜8.webp
 ┃ ┃ ┃ ┃ ┣ 📜9.webp
 ┃ ┃ ┃ ┃ ┣ 📜avatar-placeholder.webp
 ┃ ┃ ┃ ┃ ┣ 📜avatar-rounded.webp
 ┃ ┃ ┃ ┃ ┣ 📜avatar.webp
 ┃ ┃ ┃ ┃ ┣ 📜empty-thumb.webp
 ┃ ┃ ┃ ┃ ┗ 📜r.webp
 ┃ ┃ ┃ ┣ 📜avatar.jpg
 ┃ ┃ ┃ ┣ 📜avatar.webp
 ┃ ┃ ┃ ┣ 📜image-not-available.png
 ┃ ┃ ┃ ┣ 📜logo-2.png
 ┃ ┃ ┃ ┣ 📜logo-dark.png
 ┃ ┃ ┃ ┣ 📜logo-light.png
 ┃ ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┃ ┗ 📜map-marker.png
 ┃ ┃ ┗ 📂scss
 ┃ ┃ ┃ ┣ 📂theme
 ┃ ┃ ┃ ┃ ┣ 📂helpers
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_background.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_borders.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_colored-links.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_flex.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_position.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜_text.scss
 ┃ ┃ ┃ ┃ ┣ 📂mixins
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_buttons.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_hover-focus.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜_navbar-vertical.scss
 ┃ ┃ ┃ ┃ ┣ 📂plugins
 ┃ ┃ ┃ ┃ ┃ ┣ 📜prism.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_choices.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_flatpickr.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_fslightbox.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_full-calendar.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_isotope.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_leaflet.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_list.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_mapbox.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_picmo.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_rater.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_react-dropzone.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_react-range.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_react-select.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_swiper.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜_tinymce.scss
 ┃ ┃ ┃ ┃ ┣ 📂root
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_dark.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_light.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜_override.scss
 ┃ ┃ ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┃ ┃ ┣ 📜test.svg
 ┃ ┃ ┃ ┃ ┣ 📜_accordion.scss
 ┃ ┃ ┃ ┃ ┣ 📜_alert.scss
 ┃ ┃ ┃ ┃ ┣ 📜_auth.scss
 ┃ ┃ ┃ ┃ ┣ 📜_avatar.scss
 ┃ ┃ ┃ ┃ ┣ 📜_badges.scss
 ┃ ┃ ┃ ┃ ┣ 📜_brand-colors.scss
 ┃ ┃ ┃ ┃ ┣ 📜_breadcrumb.scss
 ┃ ┃ ┃ ┃ ┣ 📜_browser-support.scss
 ┃ ┃ ┃ ┃ ┣ 📜_buttons.scss
 ┃ ┃ ┃ ┃ ┣ 📜_calendar.scss
 ┃ ┃ ┃ ┃ ┣ 📜_carousel.scss
 ┃ ┃ ┃ ┃ ┣ 📜_chat-widget.scss
 ┃ ┃ ┃ ┃ ┣ 📜_chat.scss
 ┃ ┃ ┃ ┃ ┣ 📜_colors.scss
 ┃ ┃ ┃ ┃ ┣ 📜_container.scss
 ┃ ┃ ┃ ┃ ┣ 📜_crm.scss
 ┃ ┃ ┃ ┃ ┣ 📜_dashboard.scss
 ┃ ┃ ┃ ┃ ┣ 📜_documentation.scss
 ┃ ┃ ┃ ┃ ┣ 📜_dropdown.scss
 ┃ ┃ ┃ ┃ ┣ 📜_ecommerce.scss
 ┃ ┃ ┃ ┃ ┣ 📜_email.scss
 ┃ ┃ ┃ ┃ ┣ 📜_events.scss
 ┃ ┃ ┃ ┃ ┣ 📜_feed.scss
 ┃ ┃ ┃ ┃ ┣ 📜_forms.scss
 ┃ ┃ ┃ ┃ ┣ 📜_functions.scss
 ┃ ┃ ┃ ┃ ┣ 📜_gantt-chart.scss
 ┃ ┃ ┃ ┃ ┣ 📜_helpers.scss
 ┃ ┃ ┃ ┃ ┣ 📜_hover.scss
 ┃ ┃ ┃ ┃ ┣ 📜_icon.scss
 ┃ ┃ ┃ ┃ ┣ 📜_indicator.scss
 ┃ ┃ ┃ ┃ ┣ 📜_kanban.scss
 ┃ ┃ ┃ ┃ ┣ 📜_landing.scss
 ┃ ┃ ┃ ┃ ┣ 📜_list-group.scss
 ┃ ┃ ┃ ┃ ┣ 📜_maps.scss
 ┃ ┃ ┃ ┃ ┣ 📜_mixed.scss
 ┃ ┃ ┃ ┃ ┣ 📜_mixins.scss
 ┃ ┃ ┃ ┃ ┣ 📜_modal.scss
 ┃ ┃ ┃ ┃ ┣ 📜_nav-tab.scss
 ┃ ┃ ┃ ┃ ┣ 📜_navbar-appearance.scss
 ┃ ┃ ┃ ┃ ┣ 📜_navbar-bottom.scss
 ┃ ┃ ┃ ┃ ┣ 📜_navbar-top-slim.scss
 ┃ ┃ ┃ ┃ ┣ 📜_navbar-top.scss
 ┃ ┃ ┃ ┃ ┣ 📜_navbar-vertical.scss
 ┃ ┃ ┃ ┃ ┣ 📜_navbar.scss
 ┃ ┃ ┃ ┃ ┣ 📜_offcanvas.scss
 ┃ ┃ ┃ ┃ ┣ 📜_pagination.scss
 ┃ ┃ ┃ ┃ ┣ 📜_plugins.scss
 ┃ ┃ ┃ ┃ ┣ 📜_pricing.scss
 ┃ ┃ ┃ ┃ ┣ 📜_progress.scss
 ┃ ┃ ┃ ┃ ┣ 📜_reboot.scss
 ┃ ┃ ┃ ┃ ┣ 📜_root.scss
 ┃ ┃ ┃ ┃ ┣ 📜_scrollbar.scss
 ┃ ┃ ┃ ┃ ┣ 📜_search-box.scss
 ┃ ┃ ┃ ┃ ┣ 📜_setting-panel.scss
 ┃ ┃ ┃ ┃ ┣ 📜_showcase.scss
 ┃ ┃ ┃ ┃ ┣ 📜_table.scss
 ┃ ┃ ┃ ┃ ┣ 📜_theme.scss
 ┃ ┃ ┃ ┃ ┣ 📜_timeline.scss
 ┃ ┃ ┃ ┃ ┣ 📜_toasts.scss
 ┃ ┃ ┃ ┃ ┣ 📜_tooltip.scss
 ┃ ┃ ┃ ┃ ┣ 📜_travel-agency.scss
 ┃ ┃ ┃ ┃ ┣ 📜_type.scss
 ┃ ┃ ┃ ┃ ┣ 📜_typing.scss
 ┃ ┃ ┃ ┃ ┣ 📜_utilities.scss
 ┃ ┃ ┃ ┃ ┣ 📜_variables-dark.scss
 ┃ ┃ ┃ ┃ ┣ 📜_variables.scss
 ┃ ┃ ┃ ┃ ┗ 📜_wizard.scss
 ┃ ┃ ┃ ┣ 📜theme.scss
 ┃ ┃ ┃ ┣ 📜user.scss
 ┃ ┃ ┃ ┣ 📜_bootstrap.scss
 ┃ ┃ ┃ ┣ 📜_custom.scss
 ┃ ┃ ┃ ┗ 📜_user-variables.scss
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂base
 ┃ ┃ ┃ ┣ 📜AdvanceTable.tsx
 ┃ ┃ ┃ ┣ 📜AdvanceTableFooter.tsx
 ┃ ┃ ┃ ┣ 📜Avatar.tsx
 ┃ ┃ ┃ ┣ 📜Badge.tsx
 ┃ ┃ ┃ ┣ 📜basicDropdown.tsx
 ┃ ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┃ ┣ 📜CheckButton.tsx
 ┃ ┃ ┃ ┣ 📜DatePicker.tsx
 ┃ ┃ ┃ ┣ 📜Dropzone.tsx
 ┃ ┃ ┃ ┣ 📜EmojiPicker.tsx
 ┃ ┃ ┃ ┣ 📜IndeterminateCheckbox.tsx
 ┃ ┃ ┃ ┣ 📜LightBox.tsx
 ┃ ┃ ┃ ┣ 📜MapBox.tsx
 ┃ ┃ ┃ ┣ 📜MapBoxCluster.tsx
 ┃ ┃ ┃ ┣ 📜PhoenixContainer.tsx
 ┃ ┃ ┃ ┣ 📜PhoenixFloatingLabel.tsx
 ┃ ┃ ┃ ┣ 📜PhoenixNav.tsx
 ┃ ┃ ┃ ┣ 📜PhoenixOffcanvas.tsx
 ┃ ┃ ┃ ┣ 📜Portal.tsx
 ┃ ┃ ┃ ┣ 📜Rating.tsx
 ┃ ┃ ┃ ┣ 📜ReactGroupSelect.tsx
 ┃ ┃ ┃ ┣ 📜ReactSelect.tsx
 ┃ ┃ ┃ ┣ 📜RevealDropdown.tsx
 ┃ ┃ ┃ ┣ 📜Scrollbar.tsx
 ┃ ┃ ┃ ┣ 📜ScrollSpy.tsx
 ┃ ┃ ┃ ┣ 📜Section.tsx
 ┃ ┃ ┃ ┣ 📜SeeMoreText.tsx
 ┃ ┃ ┃ ┣ 📜StarCheckbox.tsx
 ┃ ┃ ┃ ┣ 📜Swiper.tsx
 ┃ ┃ ┃ ┣ 📜Timeline.tsx
 ┃ ┃ ┃ ┣ 📜TinymceEditor.tsx
 ┃ ┃ ┃ ┗ 📜Unicon.tsx
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📂custom
 ┃ ┃ ┃ ┃ ┣ 📜ActionButton.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ConfirmAlert.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ConfirmExpiredTokenAlert.tsx
 ┃ ┃ ┃ ┃ ┣ 📜CustomAvatarHandler.tsx
 ┃ ┃ ┃ ┃ ┣ 📜CustomImageHandler.tsx
 ┃ ┃ ┃ ┃ ┣ 📜CustomPagination.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ImagePreview.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ImportFileInfoModal.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ModalForm.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PaginationComponent.tsx
 ┃ ┃ ┃ ┃ ┣ 📜StatusBadge.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ToastMessage.tsx
 ┃ ┃ ┃ ┣ 📜ActionDropdownItems.tsx
 ┃ ┃ ┃ ┣ 📜ActionTableItems.tsx
 ┃ ┃ ┃ ┣ 📜AlertMessage.tsx
 ┃ ┃ ┃ ┣ 📜AttachmentPreview.tsx
 ┃ ┃ ┃ ┣ 📜AuthSocialButtons.tsx
 ┃ ┃ ┃ ┣ 📜AvatarDropzone.tsx
 ┃ ┃ ┃ ┣ 📜AvatarUpload.tsx
 ┃ ┃ ┃ ┣ 📜ChartLegend.tsx
 ┃ ┃ ┃ ┣ 📜CheckboxItem.tsx
 ┃ ┃ ┃ ┣ 📜CollapsibleContainer.tsx
 ┃ ┃ ┃ ┣ 📜CommentForm.tsx
 ┃ ┃ ┃ ┣ 📜CoverUpload.tsx
 ┃ ┃ ┃ ┣ 📜DropdownSearchBox.tsx
 ┃ ┃ ┃ ┣ 📜EditableDetailsField.tsx
 ┃ ┃ ┃ ┣ 📜FilterButtonGroup.tsx
 ┃ ┃ ┃ ┣ 📜FilterTab.tsx
 ┃ ┃ ┃ ┣ 📜FormCollapse.tsx
 ┃ ┃ ┃ ┣ 📜GenerateStar.tsx
 ┃ ┃ ┃ ┣ 📜ImageAttachmentPreview.tsx
 ┃ ┃ ┃ ┣ 📜InfoRow.tsx
 ┃ ┃ ┃ ┣ 📜InputGroupCounter.tsx
 ┃ ┃ ┃ ┣ 📜Logo.tsx
 ┃ ┃ ┃ ┣ 📜NotificationItem.tsx
 ┃ ┃ ┃ ┣ 📜OrderSummaryDetails.tsx
 ┃ ┃ ┃ ┣ 📜PageBreadcrumb.tsx
 ┃ ┃ ┃ ┣ 📜PhoenixLoader.tsx
 ┃ ┃ ┃ ┣ 📜QuantityButtons.tsx
 ┃ ┃ ┃ ┣ 📜SafeImage.tsx
 ┃ ┃ ┃ ┣ 📜SearchBox.tsx
 ┃ ┃ ┃ ┣ 📜SearchResult.tsx
 ┃ ┃ ┃ ┣ 📜TextTruncate.tsx
 ┃ ┃ ┃ ┣ 📜ThemeToggler.tsx
 ┃ ┃ ┃ ┣ 📜ToggleViewbutton.tsx
 ┃ ┃ ┃ ┣ 📜TooltipIconButton.tsx
 ┃ ┃ ┃ ┗ 📜WarningMessage.tsx
 ┃ ┃ ┣ 📂footers
 ┃ ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┣ 📂attendance
 ┃ ┃ ┃ ┃ ┗ 📂modal
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ClockInClockOutModalForm.tsx
 ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┗ 📂form
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ForgotPasswordForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ResetPasswordForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜SignInForm.tsx
 ┃ ┃ ┃ ┣ 📂employee-management
 ┃ ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┃ ┗ 📜EmployeeImageInformation.tsx
 ┃ ┃ ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeeAboutEmployeeForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeeBankInformationForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeeBasicInfoForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeeEducationForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeeEmergencyContactForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeeExperienceForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeeFamilyInformationForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeePersonalInfoForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeeStatutoryInformationForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeeSupportingDocumentsForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜HolidayForm.tsx
 ┃ ┃ ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┃ ┃ ┗ 📜HolidayBulkImportModalForm.tsx
 ┃ ┃ ┃ ┃ ┣ 📂table
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeeDetailTable.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmployeeTable.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜HolidayTable.tsx
 ┃ ┃ ┃ ┃ ┣ 📜EmployeeDetailAboutEmployee.tsx
 ┃ ┃ ┃ ┃ ┣ 📜EmployeeDetailBankInformation.tsx
 ┃ ┃ ┃ ┃ ┣ 📜EmployeeDetailEducation.tsx
 ┃ ┃ ┃ ┃ ┣ 📜EmployeeDetailEmergencyContact.tsx
 ┃ ┃ ┃ ┃ ┣ 📜EmployeeDetailExperience.tsx
 ┃ ┃ ┃ ┃ ┣ 📜EmployeeDetailFamilyInformation.tsx
 ┃ ┃ ┃ ┃ ┣ 📜EmployeeDetailHeader.tsx
 ┃ ┃ ┃ ┃ ┣ 📜EmployeeDetailProfile.tsx
 ┃ ┃ ┃ ┃ ┣ 📜EmployeeDetailStatutoryInformation.tsx
 ┃ ┃ ┃ ┃ ┗ 📜EmployeeDetailSupportingDocuments.tsx
 ┃ ┃ ┃ ┗ 📂user-management
 ┃ ┃ ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┃ ┃ ┣ 📜RoleForm.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜UserForm.tsx
 ┃ ┃ ┃ ┃ ┣ 📂table
 ┃ ┃ ┃ ┃ ┃ ┣ 📜RoleTable.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜UserTable.tsx
 ┃ ┃ ┃ ┃ ┗ 📜RolePermissionSection.tsx
 ┃ ┃ ┣ 📂navbars
 ┃ ┃ ┃ ┣ 📂nav-items
 ┃ ┃ ┃ ┃ ┣ 📜NavbarBrand.tsx
 ┃ ┃ ┃ ┃ ┣ 📜NavbarToggleButton.tsx
 ┃ ┃ ┃ ┃ ┣ 📜NavItems.tsx
 ┃ ┃ ┃ ┃ ┣ 📜NavItemsSlim.tsx
 ┃ ┃ ┃ ┃ ┣ 📜NineDotMenu.tsx
 ┃ ┃ ┃ ┃ ┣ 📜NotificationDropdownMenu.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ProfileDropdownMenu.tsx
 ┃ ┃ ┃ ┣ 📂navbar-dual
 ┃ ┃ ┃ ┃ ┗ 📜NavbarDual.tsx
 ┃ ┃ ┃ ┣ 📂navbar-horizontal
 ┃ ┃ ┃ ┃ ┣ 📜NavbarTopHorizontal.tsx
 ┃ ┃ ┃ ┃ ┣ 📜NavbarTopNav.tsx
 ┃ ┃ ┃ ┃ ┣ 📜TopNavItem.tsx
 ┃ ┃ ┃ ┃ ┗ 📜TopNavMegaMenu.tsx
 ┃ ┃ ┃ ┣ 📂navbar-top
 ┃ ┃ ┃ ┃ ┗ 📜NavbarTopDefault.tsx
 ┃ ┃ ┃ ┗ 📂navbar-vertical
 ┃ ┃ ┃ ┃ ┣ 📜NavbarVertical.tsx
 ┃ ┃ ┃ ┃ ┣ 📜NavbarVerticalCollapseProvider.tsx
 ┃ ┃ ┃ ┃ ┗ 📜NavbarVerticalMenu.tsx
 ┃ ┃ ┗ 📂tabs
 ┃ ┃ ┃ ┗ 📜InventoryTab.tsx
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┣ 📜faBrandIconList.ts
 ┃ ┃ ┃ ┣ 📜faRegularIconList.ts
 ┃ ┃ ┃ ┣ 📜faSolidIconList.ts
 ┃ ┃ ┃ ┣ 📜featherIconList.ts
 ┃ ┃ ┃ ┗ 📜uniconList.ts
 ┃ ┃ ┣ 📜employee.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜mock-data.ts
 ┃ ┣ 📂helpers
 ┃ ┃ ┣ 📜auth.ts
 ┃ ┃ ┣ 📜common.ts
 ┃ ┃ ┣ 📜crypto.js
 ┃ ┃ ┣ 📜date.js
 ┃ ┃ ┣ 📜regex.ts
 ┃ ┃ ┗ 📜utils.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┣ 📂employee-management
 ┃ ┃ ┃ ┃ ┣ 📜useEmployeeHook.tsx
 ┃ ┃ ┃ ┃ ┗ 📜useHolidayHook.tsx
 ┃ ┃ ┃ ┣ 📂user-management
 ┃ ┃ ┃ ┃ ┣ 📜usePermissionHook.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useRoleHook.tsx
 ┃ ┃ ┃ ┃ ┗ 📜useUserHook.tsx
 ┃ ┃ ┃ ┣ 📜useAttendanceHook.tsx
 ┃ ┃ ┃ ┗ 📜useAuthHook.tsx
 ┃ ┃ ┣ 📜useAdvanceTable.tsx
 ┃ ┃ ┣ 📜useBulkSelectHooks.tsx
 ┃ ┃ ┣ 📜useConfigMountEffect.tsx
 ┃ ┃ ┣ 📜useFullCalendar.tsx
 ┃ ┃ ┣ 📜useGanttChart.tsx
 ┃ ┃ ┣ 📜useGetDndSensor.tsx
 ┃ ┃ ┣ 📜useLightbox.tsx
 ┃ ┃ ┣ 📜useMountAnimation.tsx
 ┃ ┃ ┣ 📜useNavbarBgChangeOnScroll.tsx
 ┃ ┃ ┣ 📜usePagination.tsx
 ┃ ┃ ┣ 📜useParallaxHooks.tsx
 ┃ ┃ ┣ 📜usePhoenixForm.tsx
 ┃ ┃ ┣ 📜useSearchHook.tsx
 ┃ ┃ ┣ 📜useSettingsMountEffect.tsx
 ┃ ┃ ┣ 📜useToggleStyle.tsx
 ┃ ┃ ┗ 📜useWizardForm.tsx
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📜AuthSplitLayout.tsx
 ┃ ┃ ┗ 📜MainLayout.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜ForgotPassword.tsx
 ┃ ┃ ┃ ┣ 📜ResetPassword.tsx
 ┃ ┃ ┃ ┗ 📜SignIn.tsx
 ┃ ┃ ┣ 📂employee-management
 ┃ ┃ ┃ ┣ 📂employee
 ┃ ┃ ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📂holiday
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂error
 ┃ ┃ ┃ ┣ 📜Error403.tsx
 ┃ ┃ ┃ ┣ 📜Error404.tsx
 ┃ ┃ ┃ ┗ 📜Error500.tsx
 ┃ ┃ ┣ 📂user-management
 ┃ ┃ ┃ ┣ 📜RolePage.tsx
 ┃ ┃ ┃ ┗ 📜UserPage.tsx
 ┃ ┃ ┗ 📜ComingSoon.tsx
 ┃ ┣ 📂providers
 ┃ ┃ ┣ 📜AdvanceTableProvider.tsx
 ┃ ┃ ┣ 📜AlertMessageProvider.tsx
 ┃ ┃ ┣ 📜AppProvider.tsx
 ┃ ┃ ┣ 📜BreakpointsProvider.tsx
 ┃ ┃ ┣ 📜BulkSelectProvider.tsx
 ┃ ┃ ┣ 📜MainLayoutProvider.tsx
 ┃ ┃ ┣ 📜ScrollSpyProvider.tsx
 ┃ ┃ ┗ 📜SettingsPanelProvider.tsx
 ┃ ┣ 📂reducers
 ┃ ┃ ┗ 📜ConfigReducer.ts
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜AuthRoutes.tsx
 ┃ ┃ ┣ 📜EmployeeManagementRoutes.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜UserManagementRoutes.tsx
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📂employee-management
 ┃ ┃ ┃ ┣ 📜EmployeeService.tsx
 ┃ ┃ ┃ ┗ 📜HolidayService.tsx
 ┃ ┃ ┣ 📂user-management
 ┃ ┃ ┃ ┣ 📜PermissionService.tsx
 ┃ ┃ ┃ ┣ 📜RoleService.tsx
 ┃ ┃ ┃ ┗ 📜UserService.tsx
 ┃ ┃ ┣ 📜AttendanceService.tsx
 ┃ ┃ ┗ 📜AuthService.tsx
 ┃ ┣ 📂store
 ┃ ┃ ┣ 📂reducers
 ┃ ┃ ┃ ┣ 📂employee-management
 ┃ ┃ ┃ ┃ ┣ 📜employeeSlice.ts
 ┃ ┃ ┃ ┃ ┣ 📜holidaySlice.ts
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂user-management
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜permissionSlice.ts
 ┃ ┃ ┃ ┃ ┣ 📜roleSlice.ts
 ┃ ┃ ┃ ┃ ┗ 📜userSlice.ts
 ┃ ┃ ┃ ┣ 📜attendanceSlice.ts
 ┃ ┃ ┃ ┣ 📜authSlice.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┣ 📂employee-management
 ┃ ┃ ┃ ┃ ┣ 📜employee.ts
 ┃ ┃ ┃ ┃ ┗ 📜holiday.ts
 ┃ ┃ ┃ ┣ 📂user-management
 ┃ ┃ ┃ ┃ ┣ 📜permission.ts
 ┃ ┃ ┃ ┃ ┣ 📜role.ts
 ┃ ┃ ┃ ┃ ┗ 📜user.ts
 ┃ ┃ ┃ ┣ 📜attendance.ts
 ┃ ┃ ┃ ┣ 📜auth.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📜phoenix-module.d.ts
 ┃ ┃ ┣ 📜react-bootstrap.d.ts
 ┃ ┃ ┣ 📜react-table.d.ts
 ┃ ┃ ┗ 📜react-unicons.d.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📂route-guard
 ┃ ┃ ┃ ┣ 📜AuthGuard.tsx
 ┃ ┃ ┃ ┗ 📜GuestGuard.tsx
 ┃ ┃ ┣ 📜api.ts
 ┃ ┃ ┗ 📜storage.ts
 ┃ ┣ 📂validation
 ┃ ┃ ┣ 📂employee-management
 ┃ ┃ ┃ ┣ 📜EmployeeSchema.tsx
 ┃ ┃ ┃ ┗ 📜HolidaySchema.tsx
 ┃ ┃ ┣ 📂user-management
 ┃ ┃ ┃ ┣ 📜RoleSchema.tsx
 ┃ ┃ ┃ ┗ 📜UserSchema.tsx
 ┃ ┃ ┣ 📜AuthSchema.tsx
 ┃ ┃ ┗ 📜index.tsx
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