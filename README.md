# Teste Front-End Econverse

Projeto desenvolvido como teste técnico para o processo seletivo da vaga
Front-End da Econverse.

## Tecnologias utilizadas

- React
- TypeScript
- Sass
- Vite
- ESLint

## Funcionalidades

- Exibição de produtos consumidos do JSON de produtos da Econverse.
- Vitrines reutilizáveis de produtos com `ProductCard`.
- Navegação horizontal nas vitrines por meio das setas.
- Abertura de modal ao selecionar um produto.
- Exibição, no modal, da imagem, nome, descrição, preço e quantidade do produto.
- Fechamento do modal pelo botão, pelo overlay externo ou pela tecla `Escape`.
- Formatação dos preços no padrão brasileiro (`pt-BR` e `BRL`).
- Seções de categorias, parceiros e marcas.
- Newsletter com campos de nome, e-mail e aceite dos termos.
- Footer com navegação institucional e ícones de redes sociais.
- Layout responsivo para diferentes tamanhos de tela.

O formulário da Newsletter possui apenas comportamento visual nesta etapa e
impede o recarregamento padrão da página. Não há envio real de e-mails.

## Estrutura do projeto

```text
src/
├── assets/
│   ├── categories/
│   ├── icons/
│   └── images/
├── components/
│   ├── BrandList/
│   ├── CategoryList/
│   ├── Footer/
│   ├── Header/
│   ├── MainBanner/
│   ├── Newsletter/
│   ├── PartnerSection/
│   ├── ProductCard/
│   ├── ProductModal/
│   └── ProductSection/
├── services/
│   └── products.ts
├── types/
│   └── Product.ts
├── utils/
│   └── formatCurrency.ts
├── App.tsx
├── index.css
└── main.tsx
```

- `App.tsx`: organiza as seções da página, carrega os produtos e controla o
  produto selecionado no modal.
- `components/`: reúne os componentes visuais da página e seus estilos Sass.
- `services/products.ts`: busca e retorna os produtos do JSON.
- `types/`: contém as interfaces TypeScript dos dados.
- `utils/formatCurrency.ts`: centraliza a formatação de valores em reais.
- `assets/`: contém as imagens e os ícones utilizados pela aplicação.

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite disponibilizará a aplicação no endereço informado no terminal.

## Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

Também é possível validar o código com:

```bash
npm run lint
```

## Observações

- Durante o desenvolvimento, o Vite encaminha `/api-produtos/produtos.json`
  para o endpoint de produtos da Econverse.
- As setas da seção de marcas são visuais nesta versão e não implementam
  carrossel funcional.
- A Newsletter não possui integração de envio.
- Os links institucionais e de redes sociais estão representados
  visualmente conforme o layout; não há integrações de destino implementadas.
- Os textos de apoio em Lorem ipsum foram mantidos onde aparecem na referência
  visual e não representam conteúdo funcional adicional.

## Créditos

Desenvolvido por **Thiago Hens Suchi** para o processo seletivo/teste técnico
da Econverse.
