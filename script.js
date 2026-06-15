// Produtos de exemplo
const produtos = [
    {
        id: 1,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        emoji: '📱'
    },
    {
        id: 2,
        nome: 'Produto 2',
        descricao: 'Descrição do produto 2',
        preco: 149.99,
        emoji: '💻'
    },
    {
        id: 3,
        nome: 'Produto 3',
        descricao: 'Descrição do produto 3',
        preco: 79.99,
        emoji: '🎧'
    },
    {
        id: 4,
        nome: 'Produto 4',
        descricao: 'Descrição do produto 4',
        preco: 199.99,
        emoji: '⌚'
    },
    {
        id: 5,
        nome: 'Produto 5',
        descricao: 'Descrição do produto 5',
        preco: 129.99,
        emoji: '📷'
    },
    {
        id: 6,
        nome: 'Produto 6',
        descricao: 'Descrição do produto 6',
        preco: 89.99,
        emoji: '🎮'
    }
];

// Carrinho de compras
let carrinho = [];

// Carregar produtos na página
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    carregarCarrinho();
});

function carregarProdutos() {
    const produtosGrid = document.getElementById('produtosGrid');
    produtosGrid.innerHTML = '';

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.innerHTML = `
            <div class="produto-imagem">${produto.emoji}</div>
            <div class="produto-info">
                <h3 class="produto-nome">${produto.nome}</h3>
                <p class="produto-descricao">${produto.descricao}</p>
                <p class="produto-preco">R$ ${produto.preco.toFixed(2)}</p>
                <button class="btn-add-cart" onclick="adicionarAoCarrinho(${produto.id})">
                    Adicionar ao Carrinho
                </button>
            </div>
        `;
        produtosGrid.appendChild(card);
    });
}

function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    const itemCarrinho = carrinho.find(item => item.id === produtoId);

    if (itemCarrinho) {
        itemCarrinho.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    salvarCarrinho();
    atualizarContagem();
    alert(`${produto.nome} adicionado ao carrinho!`);
}

function atualizarContagem() {
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    document.getElementById('cartCount').textContent = totalItens;
}

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregarCarrinho() {
    const saved = localStorage.getItem('carrinho');
    if (saved) {
        carrinho = JSON.parse(saved);
        atualizarContagem();
    }
}

function abrirCarrinho() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    
    if (carrinho.length === 0) {
        cartItems.innerHTML = '<p>Seu carrinho está vazio</p>';
    } else {
        let html = '';
        carrinho.forEach(item => {
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.nome}</h4>
                        <p>R$ ${item.preco.toFixed(2)} x ${item.quantidade}</p>
                        <p><strong>Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2)}</strong></p>
                    </div>
                    <div class="cart-item-controls">
                        <button onclick="diminuirQuantidade(${item.id})">-</button>
                        <button onclick="aumentarQuantidade(${item.id})">+</button>
                        <button onclick="removerDoCarrinho(${item.id})" class="btn-secondary">Remover</button>
                    </div>
                </div>
            `;
        });
        cartItems.innerHTML = html;
    }
    
    atualizarTotal();
    modal.style.display = 'block';
}

function fecharCarrinho() {
    document.getElementById('cartModal').style.display = 'none';
}

function aumentarQuantidade(produtoId) {
    const item = carrinho.find(p => p.id === produtoId);
    if (item) {
        item.quantidade++;
        salvarCarrinho();
        atualizarContagem();
        abrirCarrinho();
    }
}

function diminuirQuantidade(produtoId) {
    const item = carrinho.find(p => p.id === produtoId);
    if (item) {
        if (item.quantidade > 1) {
            item.quantidade--;
        } else {
            removerDoCarrinho(produtoId);
            return;
        }
        salvarCarrinho();
        atualizarContagem();
        abrirCarrinho();
    }
}

function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    salvarCarrinho();
    atualizarContagem();
    abrirCarrinho();
}

function atualizarTotal() {
    const total = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
    document.getElementById('cartTotal').textContent = total.toFixed(2);
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const total = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
    alert(`Compra finalizada!\nTotal: R$ ${total.toFixed(2)}\n\nObrigado pela compra!`);
    
    carrinho = [];
    salvarCarrinho();
    atualizarContagem();
    fecharCarrinho();
}

// Abrir carrinho ao clicar no ícone
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', abrirCarrinho);
    }
});

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
