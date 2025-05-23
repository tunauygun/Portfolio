# 🧑‍💻 Portfolio

This is a modern, single-page portfolio website built with [Astro](https://astro.build/). It features dynamic content driven by a single JSON file—making it extremely easy to customize without touching any HTML or JavaScript file.

## 🚀 Features

- ⚡ Single Page Application for seamless navigation  
- 🎯 Hero section with name, social links, and resume download  
- 🎓 Education history section  
- 💼 Work experiences section  
- 🛠️ Projects showcase section
- 🔧 Easy content management via a single `portfolio.json` file  

## 🚧 Built With

* [![Astro][Astro.com]][Astro-url]  
* [![TypeScript][TypeScript.com]][TypeScript-url]  
* [![Tailwind CSS][Tailwind.com]][Tailwind-url]
* [![Node.js][Nodejs.com]][Nodejs-url]
* [![HTML5][HTML.com]][HTML-url]  
* [![JSON][JSON.com]][JSON-url] 

## 🗂️ Project Structure
```
    /
    ├── public/
    │   ├── favicon.svg
    │   ├── Resume.pdf
    │   └── images/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── data/
    │   │   └── portfolio.json     # All content data lives here!
    │   ├── layouts/
    │   ├── lib/
    │   ├── pages/
    │   ├── styles/
    │   └── types/
    ├── astro.config.mjs
    ├── package.json
    ├── tsconfig.json
    └── README.md
```

## 🧩 How It Works

All the content you see on the site—name, education, work experience, and projects—is sourced from a single file: `src/data/portfolio.json`. This means:

- ✅ No need to edit multiple files or components  
- 🔁 Easy to update or expand content  
- 📈 Great for non-developers or quick iterations  

To personalize the portfolio:
1. Open `src/data/portfolio.json`
2. Replace the default information with your own:
   - Name & social links
   - Resume file in `/public`
   - Education and work history
   - Projects and descriptions
3. Save and deploy!

## 📦 Installation
```bash
# Clone the repo
git clone https://github.com/tunauygun/Portfolio

# Navigate into the project
cd Portfolio

# Install dependencies
npm install

# Run the dev server
npm run dev
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
 

[Astro.com]: https://img.shields.io/badge/Astro-5522FF?style=for-the-badge&logo=astro&logoColor=white
[Astro-url]: https://astro.build/
[TypeScript.com]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[HTML.com]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[JSON.com]: https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white
[JSON-url]: https://www.json.org/json-en.html
[Tailwind.com]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Nodejs.com]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Nodejs-url]: https://nodejs.org/

