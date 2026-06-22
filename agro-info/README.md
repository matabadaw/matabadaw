# 🌾 AgroInfo - Site de Informações sobre Agropecuária

Um site moderno e responsivo com informações completas sobre agricultura e pecuária sustentável no Brasil.

## 📍 Como Acessar o Site

### Opção 1: Localmente (No seu Computador)
1. Clone ou baixe os arquivos do repositório
2. Navegue até a pasta `agro-info`
3. Abra o arquivo `index.html` no seu navegador

### Opção 2: GitHub Pages (Online - Recomendado)
O site está disponível em:
**https://matabadaw.github.io/matabadaw/agro-info/**

> Se o link acima não funcionar, configure o GitHub Pages nas configurações do seu repositório

### Opção 3: Através do GitHub
1. Acesse: https://github.com/matabadaw/matabadaw
2. Navegue até a pasta `agro-info`
3. Abra o arquivo `index.html`
4. Clique no botão "View raw" para visualizar

---

## 📁 Estrutura do Projeto

```
agro-info/
├── index.html       # Página principal (HTML)
├── styles.css       # Estilos (CSS)
├── script.js        # Funcionalidades (JavaScript)
└── README.md        # Este arquivo
```

---

## 🚀 Funcionalidades

### 🌱 Agricultura
Informações sobre principais culturas:
- 🌽 **Milho** - Plantio: Set-Dez | Colheita: Mar-Jun
- 🌾 **Trigo** - Plantio: Abr-Jun | Colheita: Set-Out
- 🥔 **Batata** - Plantio: Fev-Mar | Colheita: Jun-Jul
- 🍅 **Tomate** - Plantio: Ago-Dez | Ciclo: 60-80 dias
- 🌱 **Soja** - Plantio: Out-Nov | Colheita: Fev-Mar
- 🥕 **Cenoura** - Plantio: Mar-Set | Ciclo: 70-90 dias

### 🐄 Pecuária
Informações sobre criação de animais:
- 🐄 **Gado de Corte** - Ciclo: 18-24 meses
- 🐄 **Gado de Leite** - Produção: 20-30L/dia
- 🐷 **Suinocultura** - Ciclo: 150-180 dias
- 🐔 **Avicultura** - Ciclo: 42-48 dias
- 🐑 **Ovinocultura** - Ciclo: 120-150 dias
- 🐴 **Equinocultura** - Maturidade: 4-5 anos

### 💡 Dicas Práticas
- 🌍 Sustentabilidade
- 💧 Irrigação eficiente
- 🐛 Controle de pragas
- 🧪 Análise de solo
- 🌤️ Previsão do tempo
- 📚 Capacitação

### 📊 Dados Estatísticos
- 850+ milhões de hectares
- 215+ bilhões em exportações
- 42% do PIB brasileiro
- 1º exportador de alimentos

---

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo e moderno
- **JavaScript Vanilla** - Interatividade e navegação suave

---

## ✨ Características Especiais

✅ **Responsivo** - Funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1200px+)

✅ **Navegação Suave** - Links com scroll suave entre seções

✅ **Design Moderno** - Cores em degradê e efeitos hover elegantes

✅ **Animações** - Cards e elementos com efeitos visuais ao carregar

✅ **SEO Otimizado** - Meta tags e estrutura semântica

---

## 🎨 Cores do Tema

```css
--primary-color: #2ecc71       /* Verde principal */
--secondary-color: #27ae60     /* Verde escuro */
--accent-color: #3498db        /* Azul destaque */
--text-color: #333             /* Cinza escuro */
```

---

## 📝 Como Usar Localmente

### Passo 1: Clonar o Repositório
```bash
git clone https://github.com/matabadaw/matabadaw.git
cd matabadaw/agro-info
```

### Passo 2: Abrir no Navegador
```bash
# No Windows
start index.html

# No Mac
open index.html

# No Linux
xdg-open index.html
```

Ou simplesmente clique duas vezes no arquivo `index.html`

---

## 🔧 Personalizar o Site

### Adicionar Novas Culturas
Edite o arquivo `script.js` e adicione ao array `agricultura`:
```javascript
const agricultura = [
    // ... culturas existentes
    { id: 7, nome: 'Sua Cultura', emoji: '🌾', meses: 'Período' }
];
```

### Mudar Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #sua-cor;
    --secondary-color: #sua-cor;
    --accent-color: #sua-cor;
}
```

### Adicionar Novo Conteúdo
Edite o arquivo `index.html` diretamente e adicione novas seções

---

## 📱 Responsividade

O site utiliza media queries para adaptar-se a diferentes tamanhos de tela:

- **Desktop (1200px+)** - Layout completo com 3 colunas
- **Tablet (768px - 1199px)** - Layout com 2 colunas
- **Mobile (até 767px)** - Layout com 1 coluna

---

## 🌐 Hospedagem Online

Para deixar o site online permanentemente:

### Opção 1: GitHub Pages (Grátis)
1. Vá em Configurações do repositório
2. Role até "GitHub Pages"
3. Selecione branch `main`
4. Salve e acesse o link gerado

### Opção 2: Vercel (Grátis)
1. Acesse https://vercel.com
2. Faça login com GitHub
3. Importe este repositório
4. Deploy automático

### Opção 3: Netlify (Grátis)
1. Acesse https://netlify.com
2. Conecte seu GitHub
3. Selecione o repositório
4. Publique

---

## 🐛 Troubleshooting

**P: O site não abre quando clico no arquivo HTML**
R: Use um navegador moderno (Chrome, Firefox, Safari, Edge)

**P: Os estilos não estão aparecendo**
R: Certifique-se de que os três arquivos estão na mesma pasta

**P: As animações não funcionam**
R: Verifique se o JavaScript está habilitado no navegador

---

## 📚 Recursos Adicionais

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools - HTML, CSS, JS](https://www.w3schools.com/)
- [Documentação GitHub Pages](https://pages.github.com/)

---

## 🤝 Contribuições

Sugestões de melhorias são bem-vindas! Você pode:
1. Fazer um Fork do projeto
2. Criar uma branch para sua feature
3. Fazer commit das mudanças
4. Enviar um Pull Request

---

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

---

## 👨‍💻 Desenvolvido por

**Matabadaw**

Com ❤️ para a comunidade agrícola brasileira

---

## 📞 Contato

- 📧 Email: info@agroinfo.com.br
- 📱 WhatsApp: Para mais informações, acesse o site
- 🌐 Website: https://matabadaw.github.io/matabadaw/agro-info/

---

**Última atualização:** 22 de Junho de 2026
