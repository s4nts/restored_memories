# Memórias Restauradas

Site de vendas para serviço de restauração de fotos antigas, desenvolvido com Next.js, React, Tailwind CSS e shadcn/ui.

## Funcionalidades

- Landing page persuasiva e profissional
- Comparador interativo de fotos antes/depois (arraste para comparar)
- Seções de recursos, depoimentos e preços
- Design responsivo e moderno
- Otimizado para GitHub Pages

## Tecnologias

- Next.js 13
- React 18
- Tailwind CSS
- shadcn/ui
- Lucide Icons

## Como Usar

### Desenvolvimento Local

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

### Build para Produção

```bash
npm run build
```

### Deploy no GitHub Pages

O projeto está configurado com GitHub Actions para deploy automático. Para ativar:

1. Faça push para o branch `main`
2. Vá em Settings > Pages no seu repositório
3. Em "Source", selecione "GitHub Actions"
4. O deploy será feito automaticamente

## Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── ImageCompare.tsx    # Componente de comparação de imagens
│   └── ui/                 # Componentes UI do shadcn
├── public/
│   └── images/
│       └── restoration-examples/  # Imagens de exemplo
└── .github/
    └── workflows/
        └── nextjs.yml      # Workflow do GitHub Actions
```

## Personalização

### Adicionar mais exemplos de fotos

Coloque as imagens em `public/images/restoration-examples/` e atualize o array `examples` em `app/page.tsx`:

```typescript
const examples = [
  {
    before: '/images/restoration-examples/foto-antes.jpg',
    after: '/images/restoration-examples/foto-depois.jpg',
  },
  // adicione mais...
];
```

### Alterar preços

Edite o array `pricing` em `app/page.tsx` com seus planos e valores.

### Modificar cores

O site usa tons de âmbar (amber). Para alterar, busque por `amber` em `app/page.tsx` e substitua pela cor desejada do Tailwind.

## Licença

MIT
