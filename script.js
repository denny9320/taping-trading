/* ========================================
   TapingTrading - JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeader();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initNewsletter();
    initQuickView();
    
    // Initialize product system
    initProductSystem();
    
    // Initialize search & cart
    initSearch();
    initCartSidebar();
    initProductModal();
});

/* ========================================
   Header Scroll Effect
   ======================================== */
function initHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/* ========================================
   Mobile Menu
   ======================================== */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    
    if (!menuBtn || !nav) return;
    
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuBtn.classList.toggle('active');
        
        // Animate hamburger
        const spans = menuBtn.querySelectorAll('span');
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
            
            const spans = menuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking a link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
            
            const spans = menuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

/* ========================================
   Scroll Reveal Animation
   ======================================== */
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for product cards
                const card = entry.target;
                const parent = card.parentElement;
                const siblings = Array.from(parent.querySelectorAll('.product-card'));
                const cardIndex = siblings.indexOf(card);
                
                setTimeout(() => {
                    card.classList.add('visible');
                }, cardIndex * 100);
                
                observer.unobserve(card);
            }
        });
    }, observerOptions);
    
    // Observe product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        observer.observe(card);
    });
    
    // Also observe sections for fade in effect
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
}

/* ========================================
   Smooth Scroll
   ======================================== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========================================
   Newsletter Form
   ======================================== */
function initNewsletter() {
    const form = document.querySelector('.newsletter-form');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const input = form.querySelector('.newsletter-input');
        const email = input.value.trim();
        
        if (email) {
            // Simple validation
            if (isValidEmail(email)) {
                // Show success message (in production, this would send to server)
                showNotification('感谢订阅！我们将定期为您发送最新资讯。', 'success');
                input.value = '';
            } else {
                showNotification('请输入有效的邮箱地址。', 'error');
            }
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

/* ========================================
   Quick View Button
   ======================================== */
function initQuickView() {
    const quickViewBtns = document.querySelectorAll('.quick-view-btn');
    
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const productCard = btn.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            const productCategory = productCard.querySelector('.product-category').textContent;
            
            // In production, this would open a modal with product details
            console.log('Quick View:', productName, productPrice, productCategory);
            
            // Show a placeholder notification
            showNotification(`正在加载 ${productName}...`, 'info');
        });
    });
}

/* ========================================
   Add CSS for notifications
   ======================================== */
const notificationStyles = `
    .notification {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        padding: 16px 32px;
        background-color: #333;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 9999;
    }
    
    .notification.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    
    .notification-success {
        background-color: #2ecc71;
    }
    
    .notification-error {
        background-color: #e74c3c;
    }
    
    .notification-info {
        background-color: #3498db;
    }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

/* ========================================
   Cart Functionality (Placeholder)
   ======================================== */
let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cartCount;
    
    // Animate cart
    cartCountElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);
    
    showNotification(`${productName} 已添加到购物车`, 'success');
}

/* ========================================
   Image Lazy Loading Enhancement
   ======================================== */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ========================================
   Dynamic Product System
   ======================================== */
let productData = { clothing: [], fragrance: [] };
let cart = [];

async function initProductSystem() {
    try {
        const response = await fetch('data/products.json');
        productData = await response.json();
        
        // Render featured products
        renderFeaturedProducts();
        
        // Initialize product filters
        initProductFilters();
        
        console.log('Product system initialized:', 
            productData.clothing.length + productData.fragrance.length, 'products');
    } catch (error) {
        console.error('Failed to load products:', error);
        // Fallback to static HTML content
    }
}

function renderFeaturedProducts() {
    // Render clothing products
    const clothingGrid = document.querySelector('#clothing .products-grid');
    if (clothingGrid) {
        const featuredClothing = productData.clothing.filter(p => p.featured);
        clothingGrid.innerHTML = featuredClothing.map(product => 
            createProductCard(product, 'clothing')
        ).join('');
    }
    
    // Render fragrance products
    const fragranceGrid = document.querySelector('#fragrance .products-grid');
    if (fragranceGrid) {
        const featuredFragrance = productData.fragrance.filter(p => p.featured);
        fragranceGrid.innerHTML = featuredFragrance.map(product => 
            createProductCard(product, 'fragrance')
        ).join('');
    }
    
    // Re-initialize quick view buttons
    initQuickView();
}

function createProductCard(product, type) {
    const priceFormatted = product.price.toLocaleString('zh-CN');
    
    return `
        <div class="product-card" data-id="${product.id}" data-type="${type}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-overlay">
                    <button class="quick-view-btn" data-id="${product.id}" data-type="${type}">快速查看</button>
                    <button class="add-to-cart-btn" data-id="${product.id}" data-type="${type}">加入购物车</button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-name-en">${product.nameEn}</span>
                <span class="product-price">¥${priceFormatted}</span>
            </div>
        </div>
    `;
}

/* ========================================
   Product Filters & Search
   ======================================== */
function initProductFilters() {
    const searchInput = document.querySelector('.search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterProducts(e.target.value);
        });
    }
    
    if (filterButtons.length) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                filterByCategory(category);
                
                // Update active state
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }
}

function filterProducts(searchTerm) {
    const term = searchTerm.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const name = card.querySelector('.product-name').textContent.toLowerCase();
        const category = card.querySelector('.product-category').textContent.toLowerCase();
        
        if (name.includes(term) || category.includes(term)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterByCategory(category) {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = '';
        } else {
            const cardCategory = card.querySelector('.product-category').textContent;
            if (cardCategory === category) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

/* ========================================
   Shopping Cart
   ======================================== */
function addToCart(productId, type) {
    const products = productData[type];
    const product = products.find(p => p.id === productId);
    
    if (product) {
        // Check if already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        updateCartDisplay();
        showNotification(`已添加 ${product.name} 到购物车`, 'success');
        
        // Save to localStorage
        saveCartToStorage();
    }
}

function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartCount) {
        cartCount.textContent = totalItems;
        
        // Animate
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}

function saveCartToStorage() {
    localStorage.setItem('taping_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('taping_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartDisplay();
    }
}

// Initialize cart from storage
loadCartFromStorage();

/* ========================================
   Add to Cart Button Handler
   ======================================== */
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const productId = e.target.dataset.id;
        const type = e.target.dataset.type;
        addToCart(productId, type);
    }
});

/* ========================================
   Search Functionality
   ======================================== */
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchClose = document.getElementById('searchClose');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    
    if (!searchBtn || !searchOverlay) return;
    
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        if (searchInput) searchInput.focus();
    });
    
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });
}

function performSearch(term) {
    const resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer) return;
    
    if (term.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    const results = [...productData.clothing, ...productData.fragrance]
        .filter(p => p.name.toLowerCase().includes(term.toLowerCase()) || 
                     p.nameEn.toLowerCase().includes(term.toLowerCase()) ||
                     p.category.toLowerCase().includes(term.toLowerCase()))
        .slice(0, 8);
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">未找到相关产品</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(product => `
        <div class="search-result-item" data-id="${product.id}" data-type="${productData.clothing.find(c => c.id === product.id) ? 'clothing' : 'fragrance'}">
            <img src="${product.image}" alt="${product.name}">
            <div class="search-result-info">
                <span class="search-result-category">${product.category}</span>
                <h4>${product.name}</h4>
                <span>¥${product.price.toLocaleString('zh-CN')}</span>
            </div>
        </div>
    `).join('');
}

/* ========================================
   Cart Sidebar
   ======================================== */
function initCartSidebar() {
    const cartBtn = document.querySelector('.cart-btn');
    const cartClose = document.getElementById('cartClose');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (!cartBtn || !cartSidebar) return;
    
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });
    
    if (cartClose) {
        cartClose.addEventListener('click', closeCartSidebar);
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCartSidebar);
    }
}

function closeCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="cart-empty">购物车是空的</p>';
        if (cartTotalElement) cartTotalElement.textContent = '¥0';
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-price">¥${item.price.toLocaleString('zh-CN')}</span>
                <div class="cart-item-quantity">
                    <button class="qty-btn qty-minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    `).join('');
    
    // Calculate total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (cartTotalElement) {
        cartTotalElement.textContent = `¥${total.toLocaleString('zh-CN')}`;
    }
}

// Cart quantity handlers
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('qty-minus')) {
        const id = e.target.dataset.id;
        updateCartQuantity(id, -1);
    } else if (e.target.classList.contains('qty-plus')) {
        const id = e.target.dataset.id;
        updateCartQuantity(id, 1);
    } else if (e.target.classList.contains('cart-item-remove') || e.target.closest('.cart-item-remove')) {
        const id = e.target.dataset.id || e.target.closest('.cart-item-remove').dataset.id;
        removeFromCart(id);
    }
});

function updateCartQuantity(id, change) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            renderCartItems();
            updateCartDisplay();
            saveCartToStorage();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCartItems();
    updateCartDisplay();
    saveCartToStorage();
    showNotification('已从购物车移除', 'info');
}

/* ========================================
   Product Modal
   ======================================== */
function initProductModal() {
    const modal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    if (modalClose) {
        modalClose.addEventListener('click', closeProductModal);
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProductModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProductModal();
        }
    });
    
    // Handle quick view clicks
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-view-btn')) {
            const productId = e.target.dataset.id;
            const type = e.target.dataset.type;
            openProductModal(productId, type);
        }
    });
}

function openProductModal(productId, type) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    const products = productData[type];
    const product = products.find(p => p.id === productId);
    
    if (!product || !modalBody) return;
    
    const isClothing = type === 'clothing';
    
    modalBody.innerHTML = `
        <div class="modal-product-grid">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-product-details">
                <span class="modal-product-category">${product.category}</span>
                <h2 class="modal-product-name">${product.name}</h2>
                <p class="modal-product-name-en">${product.nameEn}</p>
                <p class="modal-product-price">¥${product.price.toLocaleString('zh-CN')}</p>
                <p class="modal-product-description">${product.description}</p>
                
                ${isClothing ? `
                    <div class="product-options">
                        <div class="option-group">
                            <label>尺码</label>
                            <div class="option-buttons">
                                ${product.sizes.map(size => `
                                    <button class="option-btn" data-option="size">${size}</button>
                                `).join('')}
                            </div>
                        </div>
                        <div class="option-group">
                            <label>颜色</label>
                            <div class="option-buttons">
                                ${product.colors.map(color => `
                                    <button class="option-btn" data-option="color">${color}</button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                ` : `
                    <div class="product-options">
                        <div class="option-group">
                            <label>香调</label>
                            <p class="product-notes">${product.notes}</p>
                        </div>
                        <div class="option-group">
                            <label>规格</label>
                            <p class="product-size">${product.size}</p>
                        </div>
                    </div>
                `}
                
                <div class="modal-product-actions">
                    <button class="btn btn-primary modal-add-to-cart" data-id="${product.id}" data-type="${type}">
                        加入购物车
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add option button handlers
    const optionBtns = modalBody.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            optionBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });
    
    // Add to cart from modal
    const addToCartBtn = modalBody.querySelector('.modal-add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            addToCart(product.id, type);
            closeProductModal();
        });
    }
    
    modal.classList.add('active');
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) modal.classList.remove('active');
}