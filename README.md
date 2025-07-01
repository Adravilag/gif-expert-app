# GifExpertApp

¡Bienvenido a GifExpertApp! 🚀

Una aplicación React + Vite + TypeScript para buscar y mostrar GIFs animados usando la API de Giphy.

## Demo en vivo

- **GitHub Pages:** [https://adravilag.github.io/gif-expert-app/](https://adravilag.github.io/gif-expert-app/)
- **Netlify:** [https://gif-expert-adg.netlify.app/](https://gif-expert-adg.netlify.app/)

## Características

- Búsqueda de GIFs por categorías.
- Añade nuevas categorías dinámicamente.
- Interfaz moderna y responsiva.
- Despliegue automático en GitHub Pages y Netlify.

## Instalación y uso local

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Adravilag/gif-expert-app.git
   cd gif-expert-app
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Crea un archivo `.env` en la raíz con tu API KEY de Giphy:
   ```env
   VITE_GIPHY_API_KEY=TU_API_KEY_AQUI
   ```
4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

## Despliegue

### GitHub Pages
- El proyecto se despliega automáticamente a la rama `gh-pages` usando el script:
  ```sh
  npm run deploy
  ```
- Asegúrate de que la opción `base` en `vite.config.ts` esté configurada como `/gif-expert-app/`.

### Netlify
- Solo conecta tu repo y Netlify detectará automáticamente la configuración de Vite.
- Build command: `npm run build`
- Publish directory: `dist`

## Estructura del proyecto

```
├── public/
├── src/
│   ├── components/
│   ├── helpers/
│   ├── hooks/
│   ├── interfaces/
│   └── App.tsx
├── .env.example
├── package.json
├── vite.config.ts
└── ...
```

## Notas
- **No subas tu archivo `.env` a GitHub.**
- Si tienes problemas con rutas en GitHub Pages, revisa la opción `base` en `vite.config.ts`.

---

¡Disfruta usando GifExpertApp! Si tienes sugerencias o encuentras bugs, abre un issue o un pull request.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
