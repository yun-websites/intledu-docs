# IntlEDU Docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

International education documentation platform providing IGCSE 0625 Physics course materials, including chapter explanations, concept definitions, and key knowledge points.

## 📚 Project Content

- **0625 Physics - G9**: Grade 9 Physics course materials
    - **Chapters**: Detailed explanations for 9 chapters
    - **Concepts**: Core concept and knowledge point definitions
- **Multi-language Support**: English (en-gb) and Chinese versions

## 🚀 Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   │       ├── 0625 Physics/
│   │       │   └── G9/
│   │       │       ├── Chapters/       # Chapter content
│   │       │       └── Concepts/       # Concept definitions
│   │       └── en-gb/                  # English version
│   ├── styles/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight automatically recognizes `.md` or `.mdx` files in the `src/content/docs/` directory and generates routes based on file names.

Images can be placed in the `src/assets/` directory and referenced with relative paths in Markdown.

Static assets like favicons can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the project root directory:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Install dependencies                             |
| `pnpm dev`             | Start local dev server on port 4001              |
| `pnpm build`           | Build production site to `./dist/`               |
| `pnpm preview`         | Preview build locally before deploying           |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🛠️ Tech Stack

- **Astro**: Modern static site generator
- **Starlight**: Astro's documentation theme
- **React**: UI component library
- **TailwindCSS**: CSS framework
- **KaTeX**: Math formula rendering

## 📄 License

This project uses a dual licensing scheme:

- **Code**: Licensed under [GNU Affero General Public License v3.0 (AGPLv3)](LICENSE)
- **Documentation**: Licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](LICENSE.md)

### What This Means

- **Code (AGPLv3)**: All source code in this repository is free software. You can use, modify, and distribute it, but any derivative works must also be released under AGPLv3, and if you run modified code on a server, you must provide the source code to users.

- **Documentation (CC BY-NC-SA 4.0)**: All educational content, including `.md` and `.mdx` files in `src/content/docs/`, is licensed under Creative Commons. You are free to share and adapt the material for non-commercial purposes, provided you give appropriate credit and distribute your contributions under the same license.
