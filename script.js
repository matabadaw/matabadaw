// Produtos de exemplo com categorias
const produtos = [
    {
        id: 1,
        nome: 'Smartphone Pro',
        descricao: 'Smartphone de última geração',
        preco: 299.99,
        emoji: '📱',
        categoria: 'eletrônicos'
    },
    {
        id: 2,
        nome: 'Notebook Ultra',
        descricao: 'Notebook de alta performance',
        preco: 399.99,
        emoji: '💻',
        categoria: 'eletrônicos'
    },
    {
        id: 3,
        nome: 'Fone Bluetooth',
        descricao: 'Fone com cancelamento de ruído',
        preco: 79.99,
        emoji: '🎧',
        categoria: 'acessórios'
    },
    {
        id: 4,
        nome: 'Smartwatch Elite',
        descricao: 'Relógio inteligente avançado',
        preco: 199.99,
        emoji: '⌚',
        categoria: 'eletrônicos'
    },
    {
        id: 5,
        nome: 'Câmera Digital',
        descricao: 'Câmera profissional 4K',
        preco: 249.99,
        emoji: '📷',
        categoria: 'eletrônicos'
    },
    {
        id: 6,
        nome: 'Console Gaming',
        descricao: 'Console de última geração',
        preco: 349.99,
        emoji: '🎮',
        categoria: 'games'
    },
    {
        id: 7,
        nome: 'Controle Sem Fio',
        descricao: 'Controle para consoles',
        preco: 69.99,
        emoji: '🕹️',
        categoria: 'games'
    },
    {
        id: 8,
        nome: 'Capa para Celular',
        descricao: 'Capa resistente e estilosa',
        preco: 29.99,
        emoji: '📱',
        categoria: 'acessórios'
    },
    {
        id: 9,
        nome: 'Carregador Rápido',
        descricao: 'Carregador 100W super rápido',
        preco: 49.99,
        emoji: '⚡',
        categoria: 'acessórios'
    }
];

// Carrinho de compras
let carrinho = [];
let produtosFiltrados = [...produtos];

// Carregar produtos na página
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    carregarCarrinho();
    atualizarSliderLabel();
});

// Atualizar label do slider
function atualizarSliderLabel() {
    const slider = document.getElementById('filtroPreco');
    slider.addEventListener('input', (e) => {
        document.getElementById('precoValor').textContent = e.target.value;
    });
}

function carregarProdutos() {
    const produtosGrid = document.getElementById('produtosGrid');
    produtosGrid.innerHTML = '';

    if (produtosFiltrados.length === 0) {
        produtosGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Nenhum produto encontrado</p>';
        return;
    }

    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.innerHTML = `
            <div class="produto-imagem">${produto.emoji}</div>
            <div class="produto-info">
                <p class="produto-categoria">${produto.categoria}</p>
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

function aplicarFiltros() {
    const categoria = document.getElementById('filtroCategoria').value;
    const precoMaximo = parseFloat(document.getElementById('filtroPreco').value);
    const ordenacao = document.getElementById('filtroOrdenacao').value;

    // Filtrar por categoria
    produtosFiltrados = produtos.filter(produto => {
        const categoryMatch = categoria === '' || produto.categoria === categoria;
        const priceMatch = produto.preco <= precoMaximo;
        return categoryMatch && priceMatch;
    });

    // Aplicar ordenação
    switch(ordenacao) {
        case 'nome-asc':
            produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        case 'nome-desc':
            produtosFiltrados.sort((a, b) => b.nome.localeCompare(a.nome));
            break;
        case 'preco-asc':
            produtosFiltrados.sort((a, b) => a.preco - b.preco);
            break;
        case 'preco-desc':
            produtosFiltrados.sort((a, b) => b.preco - a.preco);
            break;
    }

    // Atualizar resultado
    atualizarResultado();
    carregarProdutos();
}

function atualizarResultado() {
    const resultadoDiv = document.getElementById('resultadoFiltro');
    if (produtosFiltrados.length === 0) {
        resultadoDiv.textContent = 'Nenhum produto encontrado com os filtros selecionados';
    } else {
        resultadoDiv.textContent = `${produtosFiltrados.length} produto(s) encontrado(s)`;
    }
}

function limparFiltros() {
    document.getElementById('filtroCategoria').value = '';
    document.getElementById('filtroPreco').value = 500;
    document.getElementById('filtroOrdenacao').value = 'nome-asc';
    document.getElementById('precoValor').textContent = '500';
    produtosFiltrados = [...produtos];
    document.getElementById('resultadoFiltro').textContent = '';
    carregarProdutos();
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
