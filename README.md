Sweet Lab Chocolate 🍫✨

Uma aplicação web moderna de e-commerce e catálogo interativo desenvolvida para uma marca artesanal de chocolates finos (The Sweet Lab Chocolate). O projeto foi construído com foco em experiência do usuário (UX), responsividade mobile-first e boas práticas de engenharia frontend.

🚀 Tecnologias Utilizadas

React (com TypeScript) – Tipagem estática e componentização escalável.

Vite – Empacotador de alta performance para desenvolvimento ágil.

Context API – Gerenciamento de estado global para o carrinho de compras.

CSS / Estilização Inline e Modular – Design responsivo e refinado.


💡 Principais Funcionalidades

Catálogo Dinâmico & Filtros Avançados: Busca em tempo real por nome do produto, filtros por categoria artesanal e ordenação inteligente (menor preço, maior preço, mais vendidos e alfabética).

Responsividade Inteligente (Mobile-First): Ajuste dinâmico da grade de produtos (exibição otimizada de 6 itens em dispositivos móveis e 9 em desktops) para evitar o cansaço de rolagem excessiva (infinite scroll / show more nativo).

Carrinho de Compras Global: Gerenciamento integrado de adição, remoção e persistência de itens através da Context API do React.

Fluxo de Checkout Dedicado: Área de pagamento estruturada para conversão, oferecendo etapas claras e experiência fluida de compra.

📂 Arquitetura do Projeto

src/
├── assets/          # Recursos visuais e imagens da marca

├── components/      # Componentes reutilizáveis divididos por domínio

│   ├── checkout/    # Componentes do fluxo de pagamento

│   └── home/        # Componentes do catálogo, filtros, cards e rodapé

├── data/            # Mock de dados e tipagens de produtos

├── pages/           # Páginas principais (Home e Checkout)

├── CartContext.tsx  # Contexto global do carrinho de compras

├── App.tsx          # Roteamento e orquestração principal da aplicação

└── main.tsx         # Ponto de entrada da aplicação React

🛠️ Como Executar o Projeto Localmente?

Certifique-se de ter o Node.js instalado em sua máquina.

 * Clone o repositório:
   git clone <url-do-repositorio>

 * Acesse a pasta do projeto:
   cd sweet-lab

 * Instale as dependências:
   npm install

 * Inicie o servidor de desenvolvimento:
   npm run dev

 * Abra o navegador no endereço exibido no terminal (geralmente http://localhost:5173).
   
🎯 Desafios Técnicos & Aprendizados

1-Refatoração de Estruturas: Organização modular de componentes em subpastas (home e checkout) para desacoplar responsabilidades e manutenibilidade a longo prazo.

2-Tratamento de Tipagem com TypeScript: Garantia de tipagens estritas em contextos globais e manipulação de arrays de produtos para evitar erros em tempo de execução.

3-Otimização de Performance: Utilização de useMemo para filtragem e ordenação eficiente de listas de produtos sem gargalos de renderização.
 

🖼️​ Imagens

desktop
<img width="2560" height="3658" alt="localhost_5173_(Nest Hub Max) (21)" src="https://github.com/user-attachments/assets/f59807b6-a1fb-442e-905c-c4d3f607f080" />
<img width="2560" height="1948" alt="localhost_5173_(Nest Hub Max) (22)" src="https://github.com/user-attachments/assets/89c7d99d-4b1f-485f-bc67-9771d7dd239f" />

mobile
<img width="874" height="2340" alt="Screenshot_20260812_012414_Gallery" src="https://github.com/user-attachments/assets/ffc01fff-5d6d-41ff-99c6-29ec61713f4a" />
<img width="750" height="2024" alt="634599161-f3351ec9-c0a5-4a0f-9ee6-361af2eeabb0" src="https://github.com/user-attachments/assets/74e4c493-041a-438c-96c1-7893514747c2" />





























