<<<<<<< HEAD
The Sweet Lab Chocolate 🍫

Projeto de e-commerce e catálogo interativo que desenvolvi para uma marca artesanal de chocolates finos. A ideia principal era criar uma experiência de compra leve, bonita e redondinha, caprichando bastante na responsividade mobile e nas boas práticas de código.

demo: https://the-sweet-lab-chocolatee.vercel.app/

Tecnologias

 * React + TypeScript
 * Vite
 * Context API (para o carrinho)
 * CSS / Estilização Modular
O que rola na aplicação?
 * Catálogo & Filtros: Busca em tempo real, filtros por categoria e ordenação por preço, favoritos/mais vendidos e ordem alfabética.
 * Responsividade: Grade de produtos pensada para rodar liso no celular e no desktop, evitando aquela rolagem infinita e cansativa.
 * Carrinho Global: Adiciona, remove e segura os itens usando o Context do React.
 * Checkout: Fluxo de pagamento direto ao ponto, sem enrolação.

   
Estrutura das Pastas

src/

├── assets/          # Imagens e recursos visuais

├── components/      # Componentes separados por seção

│   ├── checkout/    # Telas de pagamento

│   └── home/        # Catálogo, filtros, cards, etc.

├── data/            # Dados mockados e types

├── pages/           # Home e Checkout

├── CartContext.tsx  # Estado global do carrinho

├── App.tsx          # Rotas e estrutura

└── main.tsx         # Start do React

Como rodar localmente?

Basta ter o Node.js instalado e mandar bala no terminal:

git clone <url-do-repositorio>

cd sweet-lab

npm install

npm run dev

Depois é só abrir o link que aparecer no terminal (geralmente http://localhost:5173).



🖼️​ Imagens

desktop
<img width="2560" height="3658" alt="localhost_5173_(Nest Hub Max) (21)" src="https://github.com/user-attachments/assets/f59807b6-a1fb-442e-905c-c4d3f607f080" />
<img width="2560" height="1948" alt="localhost_5173_(Nest Hub Max) (22)" src="https://github.com/user-attachments/assets/89c7d99d-4b1f-485f-bc67-9771d7dd239f" />

mobile
<img width="874" height="2340" alt="Screenshot_20260812_012414_Gallery" src="https://github.com/user-attachments/assets/ffc01fff-5d6d-41ff-99c6-29ec61713f4a" />
<img width="750" height="2024" alt="634599161-f3351ec9-c0a5-4a0f-9ee6-361af2eeabb0" src="https://github.com/user-attachments/assets/74e4c493-041a-438c-96c1-7893514747c2" />
















=======
# React + TypeScript + Vite
>>>>>>> 0de76e7 (ajustes finais)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

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

export default defineConfig([
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
