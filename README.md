# Minha Loja Online

Uma loja online moderna e responsiva criada com HTML, CSS e JavaScript puro.

## 🚀 Funcionalidades

- ✅ Layout responsivo (mobile, tablet, desktop)
- ✅ Catálogo de produtos dinâmico
- ✅ Carrinho de compras com persistência local
- ✅ Sistema de quantidades
- ✅ Cálculo automático de totais
- ✅ Interface amigável e moderna

## 📁 Estrutura do Projeto

```
.
├── index.html       # Página principal da loja
├── styles.css       # Estilos CSS
├── script.js        # Lógica JavaScript
└── README.md        # Este arquivo
```

## 🎯 Como Usar

1. **Abrir a loja**: Abra o arquivo `index.html` em um navegador
2. **Ver produtos**: A página carrega com 6 produtos de exemplo
3. **Adicionar ao carrinho**: Clique no botão "Adicionar ao Carrinho"
4. **Gerenciar carrinho**: Clique no ícone do carrinho 🛒 para ver/editar
5. **Finalizar compra**: Clique em "Finalizar Compra"

## ⚙️ Personalizações

### Adicionar Novos Produtos

Edite o arquivo `script.js` e adicione ao array `produtos`:

```javascript
{
    id: 7,
    nome: 'Novo Produto',
    descricao: 'Descrição do novo produto',
    preco: 199.99,
    emoji: '🎁'
}
```

### Mudar Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
    --primary-color: #007bff;      /* Cor principal */
    --secondary-color: #0056b3;    /* Cor secundária */
    --text-color: #333;            /* Cor do texto */
}
```

### Integrar com Backend

Para conectar a um servidor real:

1. Modifique as funções em `script.js` para fazer requisições HTTP
2. Use `fetch()` ou `axios` para comunicar com sua API
3. Implemente sistema de pagamento (Stripe, PayPal, etc.)

## 💾 Armazenamento

O carrinho é salvo automaticamente no `localStorage` do navegador, permitindo que os itens sejam preservados mesmo após fechar o navegador.

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilo e responsividade
- **JavaScript Vanilla** - Interatividade

## 📱 Responsividade

A loja funciona perfeitamente em:
- 📱 Dispositivos móveis (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1200px+)

## 🎨 Customizações Futuras

- [ ] Integração com banco de dados
- [ ] Sistema de autenticação
- [ ] Gateway de pagamento
- [ ] Painel administrativo
- [ ] Sistema de avaliações
- [ ] Filtros e busca avançada

---

**Desenvolvido com ❤️ por Matabadaw**
