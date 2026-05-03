/* ========================================
    TapingTrading - JavaScript
    ======================================== */

// Multi-language translations object
const translations = {};
let currentLang = 'en';

// Currency system with exchange rates
const currencies = {
    'USD': { symbol: '$', rate: 1, name: 'US Dollar' },
    'CNY': { symbol: '¥', rate: 7.2, name: 'Chinese Yuan' },
    'EUR': { symbol: '€', rate: 0.92, name: 'Euro' },
    'GBP': { symbol: '£', rate: 0.79, name: 'British Pound' },
    'JPY': { symbol: '¥', rate: 149, name: 'Japanese Yen' }
};
let currentCurrency = 'USD';

// Format price with currency
function formatPrice(usdPrice, currencyCode = currentCurrency) {
    const currency = currencies[currencyCode] || currencies['USD'];
    const convertedPrice = usdPrice * currency.rate;
    
    if (currencyCode === 'JPY') {
        return currency.symbol + Math.round(convertedPrice).toLocaleString();
    }
    return currency_symbol = currency.symbol + convertedPrice.toFixed(2);
}

// Get currency selector HTML
function getCurrencySelector() {
    return currencies.map(c => 
        `<option value="${c.code}" ${c.code === currentCurrency ? 'selected' : ''}>${c.code} - ${c.name}</option>`
    ).join('');
}

// Available languages
const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

// Translation data (embedded for reliability)
const translationsData = {
'en': {
        meta: { langCode: 'en', langName: 'English', dir: 'ltr' },
        nav: { home: 'Home', clothing: 'Clothing', fragrance: 'Fragrance', about: 'About', signIn: 'Sign In', createAccount: 'Create Account', profile: 'My Profile', myOrders: 'My Orders', addresses: 'Addresses', accountSettings: 'Account Settings', signOut: 'Sign Out' },
        hero: { subtitle: 'Elegance Redefined', title: 'Discover Luxury', desc: 'Curated high-end fashion and premium fragrances', ctaClothing: 'Explore Clothing', ctaFragrance: 'Discover Fragrance', scroll: 'Scroll Down' },
        categories: { subtitle: 'Collections', title: 'Curated Selections', clothing: 'Fashion Collection', clothingDesc: 'Exquisite tailoring', fragrance: 'Fragrance Collection', fragranceDesc: 'Premium ingredients', explore: 'Explore More →' },
        products: { featured: 'Featured', clothingTitle: 'Featured Clothing', fragranceTitle: 'Signature Fragrances', viewAllClothing: 'View All', viewAllFragrance: 'View All', quickView: 'Quick View', addToCart: 'Add to Cart' },
        about: { subtitle: 'Our Story', title: 'About TapingTrading', text1: 'TapingTrading is dedicated to curating the finest high-end fashion.', text2: 'Every product is carefully selected.', years: 'Years of Experience', brands: 'Brand Partnerships', customers: 'Loyal Customers' },
        newsletter: { title: 'Subscribe', desc: 'Get latest updates', placeholder: 'Enter your email', button: 'Subscribe' },
        footer: { desc: 'Curating luxury fashion from around the world.', quickLinks: 'Quick Links', service: 'Customer Service', contact: 'Contact Us', shipping: 'Shipping', returns: 'Returns', privacy: 'Privacy', contactUs: 'Contact', globalSourcing: 'Global sourcing', copyright: 'All rights reserved.', email: 'Email: kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19186706454' },
        returns: { 
            title: 'Returns & Exchanges Policy',
            scope: 'This policy applies to all wholesale (B2B) and custom (OEM/ODM) orders.',
            eligibilityTitle: 'Return Eligibility',
            eligibilityDesc: 'You are eligible for a return if:',
            eligibility1: 'Within <strong>30 days</strong> of receipt for quality issues or manufacturing defects (functional defects)',
            eligibility2: 'Product materially deviates from confirmed specifications (size, material, function, standards, etc.)',
            eligibility3: 'Wrong item shipped (wrong model, configuration, quantity beyond tolerance)',
            eligibility4: 'Visible damage or shortage during transit (report within <strong>48 hours</strong> of delivery)',
            nonReturnableTitle: '❌ Non-Returnable Items',
            nonReturnable1: '<strong>Custom Products (OEM/ODM):</strong> Products customized with your logo, specific colors, or unique packaging cannot be returned unless functionally defective.',
            nonReturnable2: '<strong>Clearance Items:</strong> Unless otherwise agreed in writing, clearance items are final sale.',
            nonReturnable3: '<strong>Buyer\'s Remorse:</strong> Change of mind, ordering errors, or refusal to pay customs duties are not eligible for return.',
            nonReturnable4: '<strong>Tampered Items:</strong> Products disassembled, modified, or altered by the buyer are not eligible for return.',
            processTitle: 'Return Process (RMA System)',
            step1Title: 'Step 1: Contact Support',
            step1Desc: 'Within <strong>7 days</strong> of delivery, contact our support team:',
            step1Email: 'Email',
            step1Whatsapp: 'WhatsApp',
            step1Evidence: 'Provide order number, reason for return, and clear photo/video evidence',
            step2Title: 'Step 2: Get RMA Authorization',
            step2Desc: 'Our support team will review your request within <strong>24-48 hours</strong> and provide via email:',
            step2Rma: 'Return Merchandise Authorization (RMA) number',
            step2Address: 'Return address and packing instructions',
            step3Title: 'Step 3: Ship the Return',
            step3Desc: 'Ship the item back within <strong>14 days</strong> of receiving RMA:',
            step3Trackable: 'Use a trackable shipping service (DHL, FedEx, UPS, etc.)',
            step3Mark: 'Clearly mark the RMA number on the package',
            step3Keep: 'Keep the tracking number as proof',
            step3Include: 'Item must include all accessories and original packaging',
            customsTitle: '⚠️ Customs Declaration',
            customsDesc: 'For international returns, mark the parcel as "Returned Goods – No Commercial Value" to avoid duties. If duties occur due to incorrect declaration, they will be deducted from your refund.',
            step4Title: 'Step 4: Inspection & Refund',
            step4Desc: 'After our warehouse receives your return, we will inspect:',
            step4Process: 'Refund will be processed within <strong>5-10 business days</strong> after inspection',
            step4Method: 'Refund will be issued to your original payment method',
            step4Bank: 'Your bank/payment provider may take an additional <strong>5-15 business days</strong> to post the credit',
            costDeductionsTitle: '️ Cost Deductions',
            costDeductions1: 'Original shipping fees (if any) are non-refundable unless return is due to our error',
            costDeductions2: 'Missing accessories or damaged packaging may result in reasonable deductions',
            costDeductions3: 'Bank fees, payment processing fees, and currency exchange losses are non-refundable',
            costTitle: 'Cost Responsibility',
            costReason: 'Reason',
            costShipping: 'Shipping Cost',
            costReturn: 'Return Shipping',
            costQuality: 'Quality Defect',
            costWrong: 'Wrong Item Shipped',
            costTransit: 'Transit Damage',
            costRemorse: 'Buyer\'s Remorse',
            costOrdering: 'Ordering Error',
            costCustoms: 'Refused Customs Duties',
            costWePay: '✓ We pay',
            costBuyerPay: '✗ Buyer pays',
            costBuyerFee: '✗ Buyer pays + 20% fee',
            exchangeTitle: 'Exchange Policy',
            exchangeDesc: 'Due to the nature of B2B wholesale and custom orders, we <strong>do not offer direct exchanges</strong>.',
            exchangeInstruction: 'If you need a replacement, please:',
            exchange1: 'First return the original item and receive refund following the process above',
            exchange2: 'Then place a new order for the desired item',
            exchange3: 'This ensures faster processing and accurate inventory management',
            cancelTitle: 'Order Cancellation',
            cancelDesc: 'Orders can be cancelled if:',
            cancel1: 'Once packing and shipping have started, cancellation is no longer possible',
            cancel2: 'Custom orders can be cancelled before specs are confirmed and production begins',
            cancelContact: 'Please contact us as soon as possible',
            disputeTitle: 'Dispute Resolution',
            disputeDesc: 'If you are not satisfied with our resolution, you can appeal:',
            dispute1: 'Appeal within <strong>7 days</strong> of receiving our resolution',
            dispute2: 'Provide new evidence or detailed explanation',
            dispute3: 'We will re-review and provide a final decision within <strong>48 hours</strong>',
            contactTitle: 'Contact Us',
            contactDesc: 'For any return/exchange questions, feel free to contact us:',
            contactEmail: 'Email',
            contactWhatsapp: 'WhatsApp',
            contactHours: 'Working Hours',
            contactHoursValue: 'Monday-Friday, 9:00-18:00 (GMT+8)',
            contactAddress: 'Return Address',
            contactAddressValue: 'Will be provided in RMA email',
            updateTitle: '📌 Policy Updates',
            updateDesc: 'We reserve the right to modify this policy at any time. Significant changes will be notified via email or website notice.',
            effectiveDate: 'Effective Date',
            effectiveDateValue: 'May 3, 2026'
        },
        cart: { title: 'Shopping Cart', empty: 'Your cart is empty', total: 'Total', checkout: 'Checkout', addedToCart: 'added to cart' },
        search: { placeholder: 'Search products...', noResults: 'No products found' },
        notifications: { subscribeSuccess: 'Thank you!', invalidEmail: 'Invalid email', cartAdded: 'added to cart' }
    },
    'zh': {
        meta: { langCode: 'zh', langName: '中文', dir: 'ltr' },
        nav: { home: '首页', clothing: '服装', fragrance: '香水', about: '关于我们', signIn: '登录', createAccount: '创建账户', profile: '个人信息', myOrders: '我的订单', addresses: '收货地址', accountSettings: '账户设置', signOut: '退出登录' },
        hero: { subtitle: '优雅重新定义', title: '探索奢华', desc: '精选高端时装与香氛', ctaClothing: '探索服装', ctaFragrance: '发现香水', scroll: '向下滚动' },
        categories: { subtitle: '系列', title: '精选系列', clothing: '时装系列', clothingDesc: '精致剪裁', fragrance: '香氛系列', fragranceDesc: '顶级香料', explore: '探索更多 →' },
        products: { featured: '精选', clothingTitle: '精选服装', fragranceTitle: '甄选香水', viewAllClothing: '查看全部', viewAllFragrance: '查看全部', quickView: '快速查看', addToCart: '加入购物车' },
        about: { subtitle: '品牌故事', title: '关于 TapingTrading', text1: '致力于为您甄选全球最优质的高端产品。', text2: '每一件产品都经过精心挑选。', years: '年采购经验', brands: '品牌合作', customers: '忠实客户' },
        newsletter: { title: '订阅资讯', desc: '获取最新产品信息', placeholder: '输入您的邮箱', button: '订阅' },
        footer: { desc: '甄选全球高端时装与香氛。', quickLinks: '快速链接', service: '客户服务', contact: '联系我们', shipping: '配送说明', returns: '退换政策', privacy: '隐私条款', contactUs: '联系方式', globalSourcing: '全球采购', copyright: '版权所有。', email: '邮箱: kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19186706454' },
        returns: { 
            title: '退换货政策',
            scope: '本政策适用于所有批发（B2B）和定制（OEM/ODM）订单。',
            eligibilityTitle: '一、退货资格',
            eligibilityDesc: '在以下情况下，您有资格申请退货：',
            eligibility1: '收到商品后 <strong>30天内</strong> 发现质量问题或制造缺陷（功能性缺陷）',
            eligibility2: '收到的商品与确认的规格严重不符（尺寸、材质、功能、标准等）',
            eligibility3: '发货错误（发错型号、配置、数量超出公差范围）',
            eligibility4: '运输过程中包装破损或商品损坏（需在收货后<strong>48小时内</strong>报告）',
            nonReturnableTitle: '❌ 不可退货的情况',
            nonReturnable1: '<strong>定制产品（OEM/ODM）：</strong>已印制Logo、特殊颜色、定制包装、特殊规格的产品，除非存在功能性质量问题，否则不接受退货。',
            nonReturnable2: '<strong>清仓/特价商品：</strong>除非另有书面约定，否则清仓商品视为最终销售，不接受退货。',
            nonReturnable3: '<strong>买家原因：</strong>因买家改变主意、订购错误、未支付关税等原因，不接受退货（除非商品存在质量问题）。',
            nonReturnable4: '<strong>已拆改商品：</strong>买家自行拆解、改装、维修或物理改动的产品，不接受退货。',
            processTitle: '二、退货流程（RMA系统）',
            step1Title: '第1步：联系客服',
            step1Desc: '在收货后 <strong>7天内</strong>，通过以下方式联系我们的客服团队：',
            step1Email: '邮箱',
            step1Whatsapp: 'WhatsApp',
            step1Evidence: '提供订单号、退货原因、以及清晰的照片/视频证据',
            step2Title: '第2步：获取RMA授权',
            step2Desc: '我们的客服团队将在 <strong>24-48小时内</strong> 审核您的申请，并通过邮件发送：',
            step2Rma: '退货授权号（RMA Number）',
            step2Address: '退货地址和包装指引',
            step3Title: '第3步：寄回商品',
            step3Desc: '在收到RMA后 <strong>14天内</strong> 寄回商品：',
            step3Trackable: '使用可追踪的物流服务（DHL、FedEx、UPS等）',
            step3Mark: '在包裹外清晰标注RMA号码',
            step3Keep: '保留运单号作为凭证',
            step3Include: '商品需包含全部配件和原包装',
            customsTitle: '⚠️ 海关申报',
            customsDesc: '国际退货时，请在包裹上标注"Returned Goods – No Commercial Value"以避免关税。如因申报不当产生关税，将从您的退款中扣除。',
            step4Title: '第4步：验收与退款',
            step4Desc: '我们的仓库收到退货后，将进行验收：',
            step4Process: '验收通过后，将在 <strong>5-10个工作日</strong> 内处理退款',
            step4Method: '退款将原路返回至您的原支付方式',
            step4Bank: '您的银行/支付提供商可能需要额外 <strong>5-15个工作日</strong> 完成入账',
            costDeductionsTitle: '️ 费用扣除',
            costDeductions1: '原始运费（如有）不予退还，除非退货原因是我们的错误',
            costDeductions2: '如缺少配件、包装破损或商品被使用/损坏，将合理扣除相应费用',
            costDeductions3: '银行手续费、支付处理费（如PayPal费用）和汇率波动损失不予退还',
            costTitle: '三、费用责任',
            costReason: '退货原因',
            costShipping: '运费责任',
            costReturn: '退货运费',
            costQuality: '质量问题',
            costWrong: '发错商品',
            costTransit: '运输损坏',
            costRemorse: '买家改变主意',
            costOrdering: '订购错误',
            costCustoms: '拒付关税',
            costWePay: '✓ 我们承担',
            costBuyerPay: '✗ 买家承担',
            costBuyerFee: '✗ 买家承担 + 20% 手续费',
            exchangeTitle: '四、换货政策',
            exchangeDesc: '由于B2B批发和定制订单的特殊性，我们<strong>不直接提供换货服务</strong>。',
            exchangeInstruction: '如需更换商品，请：',
            exchange1: '先按上述流程退回原商品并获得退款',
            exchange2: '然后重新下单购买所需商品',
            exchange3: '这样可确保更快的处理速度和准确的库存管理',
            cancelTitle: '五、订单取消',
            cancelDesc: '订单在以下情况下可以取消：',
            cancel1: '商品尚未进入包装和发货流程',
            cancel2: '定制订单在确认规格并投入生产前',
            cancelContact: '请尽快联系客服',
            disputeTitle: '六、争议解决',
            disputeDesc: '如对我们的处理结果不满意，您可以通过以下方式申诉：',
            dispute1: '在收到处理结果后 <strong>7天内</strong> 提出申诉',
            dispute2: '提供新的证据或详细说明争议点',
            dispute3: '我们将在 <strong>48小时内</strong> 重新审核并给出最终决定',
            contactTitle: '七、联系我们',
            contactDesc: '如有任何退换货相关问题，请随时联系我们：',
            contactEmail: '邮箱',
            contactWhatsapp: 'WhatsApp',
            contactHours: '工作时间',
            contactHoursValue: '周一至周五，9:00-18:00 (GMT+8)',
            contactAddress: '退货地址',
            contactAddressValue: '将在RMA邮件中提供',
            updateTitle: '📌 政策更新',
            updateDesc: '我们保留随时修改本退换货政策的权利。重大变更将通过邮件或网站通知。',
            effectiveDate: '生效日期',
            effectiveDateValue: '2026年5月3日'
        },
        cart: { title: '购物车', empty: '购物车是空的', total: '总计', checkout: '立即结算', addedToCart: '已添加到购物车' },
        search: { placeholder: '搜索产品...', noResults: '未找到产品' },
        notifications: { subscribeSuccess: '感谢订阅！', invalidEmail: '请输入有效邮箱', cartAdded: '已添加' }
    },
'de': {
        meta: { langCode: 'de', langName: 'Deutsch', dir: 'ltr' },
        nav: { home: 'Startseite', clothing: 'Kleidung', fragrance: 'Düfte', about: 'Über uns', signIn: 'Anmelden', createAccount: 'Konto erstellen', profile: 'Mein Profil', myOrders: 'Meine Bestellungen', addresses: 'Adressen', accountSettings: 'Kontoeinstellungen', signOut: 'Abmelden' },
        hero: { subtitle: 'Eleganz', title: 'Entdecken Sie Luxus', desc: 'Hochwertige Mode und Düfte', ctaClothing: 'Kleidung', ctaFragrance: 'Düfte', scroll: 'Scroll' },
        categories: { subtitle: 'Kollektionen', title: 'Auswahl', clothing: 'Mode', clothingDesc: 'Exquisit', fragrance: 'Düfte', fragranceDesc: 'Premium', explore: 'Mehr →' },
        products: { featured: 'Empfohlen', clothingTitle: 'Kleidung', fragranceTitle: 'Düfte', viewAllClothing: 'Alle', viewAllFragrance: 'Alle', quickView: 'Schnellansicht', addToCart: 'In den Warenkorb' },
        about: { subtitle: 'Geschichte', title: 'Über uns', text1: 'Wir kuratieren die feinste Mode.', text2: 'Jedes Produkt wird sorgfältig ausgewählt.', years: 'Jahre', brands: 'Marken', customers: 'Kunden' },
        newsletter: { title: 'Newsletter', desc: 'Updates erhalten', placeholder: 'Email', button: 'Abonnieren' },
        footer: { desc: 'Luxusmode aus aller Welt.', quickLinks: 'Links', service: 'Service', contact: 'Kontakt', shipping: 'Versand', returns: 'Retouren', privacy: 'Datenschutz', contactUs: 'Kontakt', globalSourcing: 'Global', copyright: 'Rechte vorbehalten.', email: 'Email: kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19186706454' },
        cart: { title: 'Warenkorb', empty: 'Leer', total: 'Gesamt', checkout: 'Kasse', addedToCart: 'hinzugefügt' },
        search: { placeholder: 'Suchen...', noResults: 'Keine Ergebnisse' },
        notifications: { subscribeSuccess: 'Danke!', invalidEmail: 'Ungültige Email', cartAdded: 'hinzugefügt' }
    },
    'fr': {
        meta: { langCode: 'fr', langName: 'Français', dir: 'ltr' },
        nav: { home: 'Accueil', clothing: 'Vêtements', fragrance: 'Parfums', about: 'À propos', signIn: 'Se connecter', createAccount: 'Créer un compte', profile: 'Mon profil', myOrders: 'Mes commandes', addresses: 'Adresses', accountSettings: 'Paramètres du compte', signOut: 'Se déconnecter' },
        hero: { subtitle: 'Élégance', title: 'Découvrez le luxe', desc: 'Mode et parfums premium', ctaClothing: 'Vêtements', ctaFragrance: 'Parfums', scroll: 'Défiler' },
        categories: { subtitle: 'Collections', title: 'Sélection', clothing: 'Mode', clothingDesc: 'Exquise', fragrance: 'Parfums', fragranceDesc: 'Premium', explore: 'Explorer →' },
        products: { featured: 'En vedette', clothingTitle: 'Vêtements', fragranceTitle: 'Parfums', viewAllClothing: 'Tous', viewAllFragrance: 'Tous', quickView: 'Aperçu', addToCart: 'Ajouter au panier' },
        about: { subtitle: 'Notre histoire', title: 'À propos', text1: 'Nous curons les meilleurs produits.', text2: 'Chaque produit est soigneusement choisi.', years: 'Ans', brands: 'Marques', customers: 'Clients' },
        newsletter: { title: 'Newsletter', desc: 'Recevez les mises à jour', placeholder: 'Email', button: "S'abonner" },
        footer: { desc: 'Mode luxe du monde entier.', quickLinks: 'Liens', service: 'Service', contact: 'Contact', shipping: 'Livraison', returns: 'Retours', privacy: 'Confidentialité', contactUs: 'Contact', globalSourcing: 'Mondial', copyright: 'Droits réservés.', email: 'Email: kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19186706454' },
        cart: { title: 'Panier', empty: 'Vide', total: 'Total', checkout: 'Commander', addedToCart: 'ajouté' },
        search: { placeholder: 'Rechercher...', noResults: 'Aucun résultat' },
        notifications: { subscribeSuccess: 'Merci!', invalidEmail: 'Email invalide', cartAdded: 'ajouté' }
    },
    'es': {
        meta: { langCode: 'es', langName: 'Español', dir: 'ltr' },
        nav: { home: 'Inicio', clothing: 'Ropa', fragrance: 'Fragancias', about: 'Nosotros', signIn: 'Iniciar sesión', createAccount: 'Crear cuenta', profile: 'Mi perfil', myOrders: 'Mis pedidos', addresses: 'Direcciones', accountSettings: 'Configuración de cuenta', signOut: 'Cerrar sesión' },
        hero: { subtitle: 'Elegancia', title: 'Descubre el lujo', desc: 'Moda y fragancias premium', ctaClothing: 'Ropa', ctaFragrance: 'Fragancias', scroll: 'Desplazar' },
        categories: { subtitle: 'Colecciones', title: 'Selección', clothing: 'Moda', clothingDesc: 'Exquisita', fragrance: 'Fragancias', fragranceDesc: 'Premium', explore: 'Explorar →' },
        products: { featured: 'Destacados', clothingTitle: 'Ropa', fragranceTitle: 'Fragancias', viewAllClothing: 'Ver todos', viewAllFragrance: 'Ver todos', quickView: 'Vista rápida', addToCart: 'Añadir al carrito' },
        about: { subtitle: 'Nuestra historia', title: 'Sobre nosotros', text1: 'Curamos los mejores productos.', text2: 'Cada producto se selecciona cuidadosamente.', years: 'Años', brands: 'Marcas', customers: 'Clientes' },
        newsletter: { title: 'Newsletter', desc: 'Recibe actualizaciones', placeholder: 'Email', button: 'Suscribirse' },
        footer: { desc: 'Moda de lujo de todo el mundo.', quickLinks: 'Enlaces', service: 'Servicio', contact: 'Contacto', shipping: 'Envío', returns: 'Devoluciones', privacy: 'Privacidad', contactUs: 'Contacto', globalSourcing: 'Global', copyright: 'Derechos reservados.', email: 'Email: kyx9320@163.com', whatsapp1: 'WhatsApp: +86 13397655758', whatsapp2: 'WhatsApp: +86 19186706454' },
        cart: { title: 'Carrito', empty: 'Vacío', total: 'Total', checkout: 'Finalizar', addedToCart: 'añadido' },
        search: { placeholder: 'Buscar...', noResults: 'Sin resultados' },
        notifications: { subscribeSuccess: '¡Gracias!', invalidEmail: 'Email inválido', cartAdded: 'añadido' }
    },
    'ar': {
        meta: { langCode: 'ar', langName: 'العربية', dir: 'rtl' },
        nav: { home: 'الرئيسية', clothing: 'الأزياء', fragrance: 'العطور', about: 'من نحن', signIn: 'تسجيل الدخول', createAccount: 'إنشاء حساب', profile: 'ملفي', myOrders: 'طلباتي', addresses: 'العناوين', accountSettings: 'إعدادات الحساب', signOut: 'تسجيل الخروج' },
        hero: { subtitle: 'الأناقة', title: 'اكتشف الفخامة', desc: 'أزياء وعطور فاخرة', ctaClothing: 'الأزياء', ctaFragrance: 'العطور', scroll: 'انتقل للأسفل' },
        categories: { subtitle: 'المجموعات', title: 'اختيارات', clothing: 'الأزياء', clothingDesc: 'رائعة', fragrance: 'العطور', fragranceDesc: 'فاخرة', explore: 'اكتشف المزيد ←' },
        products: { featured: 'مميز', clothingTitle: 'الأزياء', fragranceTitle: 'العطور', viewAllClothing: 'عرض الكل', viewAllFragrance: 'عرض الكل', quickView: 'عرض سريع', addToCart: 'أضف للسلة' },
        about: { subtitle: 'قصتنا', title: 'عن TapingTrading', text1: 'ن curate أفضل المنتجات.', text2: 'كل منتج يتم اختياره بعناية.', years: 'سنوات', brands: 'علامات', customers: 'عملاء' },
        newsletter: { title: 'النشرة', desc: 'احصل على التحديثات', placeholder: 'البريد', button: 'اشترك' },
        footer: { desc: 'أزياء فاخرة من كل العالم.', quickLinks: 'روابط', service: 'خدمة', contact: 'اتصل', shipping: 'شحن', returns: 'إرجاع', privacy: 'خصوصية', contactUs: 'اتصل', globalSourcing: 'عالمي', copyright: 'جميع الحقوق.', email: 'البريد: kyx9320@163.com', whatsapp1: 'واتساب: +86 13397655758', whatsapp2: 'واتساب: +86 19186706454' },
        cart: { title: 'السلة', empty: 'فارغة', total: 'المجموع', checkout: 'إتمام', addedToCart: 'تمت الإضافة' },
        search: { placeholder: 'ابحث...', noResults: 'لا نتائج' },
        notifications: { subscribeSuccess: 'شكراً!', invalidEmail: 'بريد غير صالح', cartAdded: 'تمت الإضافة' }
    }
};

// Initialize translations from embedded data
Object.keys(translationsData).forEach(key => {
    translations[key] = translationsData[key];
});

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
    initCartSidebar();
    initProductModal();
    
    // Initialize multi-language
    initI18n();
    // Attempt to synchronize cart with server if user is logged in
    syncCartFromServerIfNeeded();
    // Listen for login/logout in other tabs and resync cart when it changes
    window.addEventListener('storage', (e) => {
        if (e.key === 'taping_user_token') {
            syncCartFromServerIfNeeded();
        }
    });
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
    
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        observer.observe(card);
    });
    
    // Section reveal - simplified: sections are visible by default
    // Animation is handled by CSS if needed
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.01, rootMargin: '100px' });
    
    sections.forEach(section => {
        // Don't add reveal-hidden - let sections be visible by default
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
                // Show success message
                showNotification('Thank you for subscribing!', 'success');
                input.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
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
            showNotification(`Loading ${productName}...`, 'info');
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
   Cart Functionality
   ======================================== */
let cartCount = 0;

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

// Expose to global scope
window.productData = productData;
window.cart = cart;

async function initProductSystem() {
    try {
        console.log('Loading products from data/products.json...');
        
        // Try fetching with cache bypass
        const response = await fetch('data/products.json?_=' + Date.now());
        
        if (!response.ok) {
            console.error('Fetch failed:', response.status, response.statusText);
            throw new Error('Failed to fetch: ' + response.status);
        }
        
        const json = await response.json();
        console.log('Raw JSON:', json);
        
        productData = json;
        window.productData = productData; // Sync to window
        console.log('productData set to:', productData);
        
        // Render featured products with current language
        renderFeaturedProducts();
        
        // Initialize product filters
        initProductFilters();
        
        // Initialize search (after products are loaded)
        initSearch();
        
        console.log('Product system initialized');
    } catch (error) {
        console.error('Failed to load products:', error);
        
        // Try loading embedded fallback data
        console.log('Using fallback product data');
        productData = {
            clothing: [
                { id: "c00001", nameZh: "经典夹克", nameEn: "Classic Jacket", nameDe: "Klassische Jacke", nameFr: "Veste Classique", nameEs: "Chaqueta Clásica", nameAr: "سترة كلاسيكية", price: 170, category: "Clothing" },
                { id: "c00002", nameZh: "羽绒外套", nameEn: "Puffer Jacket", nameDe: "Daunenjacke", nameFr: "Doudoune", nameEs: "Chaqueta Acolchada", nameAr: "سترة مبطنة", price: 95, category: "Clothing" },
                { id: "c00003", nameZh: "风衣", nameEn: "Trench Coat", nameDe: "Trenchcoat", nameFr: "Trench-coat", nameEs: "Gabardina", nameAr: "معطف ترنش", price: 280, category: "Clothing" }
            ],
            fragrance: [
                { id: "f00001", nameZh: "经典五号", nameEn: "Classic No.5", nameDe: "Klassisch Nr.5", nameFr: "Classique No.5", nameEs: "Clásico No.5", nameAr: "كلاسيكي رقم 5", price: 120, category: "Fragrance" },
                { id: "f00002", nameZh: "野生香水", nameEn: "Wild Fragrance", nameDe: "Wildes Parfüm", nameFr: "Parfum Sauvage", nameEs: "Fragancia Salvaje", nameAr: "عطر بري", price: 95, category: "Fragrance" },
                { id: "f00003", nameZh: "乌木香水", nameEn: "Oud Wood", nameDe: "Oud-Holz", nameFr: "Bois de Oud", nameEs: "Madera de Oud", nameAr: "خشب العود", price: 180, category: "Fragrance" }
            ]
        };
        renderFeaturedProducts();
        initSearch();
    }
}

function renderFeaturedProducts() {
    console.log('renderFeaturedProducts called, productData:', productData);
    
    // Render clothing products with background images (3x4 grid)
    const clothingGrid = document.getElementById('clothingGrid');
    if (clothingGrid && productData?.clothing?.length > 0) {
        console.log('Rendering', productData.clothing.length, 'clothing products');
        clothingGrid.innerHTML = productData.clothing.map(product => 
            createFeaturedCard(product, 'clothing')
        ).join('');
    }
    
    // Render fragrance products with background images (3x4 grid)
    const fragranceGrid = document.getElementById('fragranceGrid');
    if (fragranceGrid && productData?.fragrance?.length > 0) {
        console.log('Rendering', productData.fragrance.length, 'fragrance products');
        fragranceGrid.innerHTML = productData.fragrance.map(product => 
            createFeaturedCard(product, 'fragrance')
        ).join('');
    }
}

// Helper function to get product name based on current language
function getProductName(product) {
    const langMap = {
        'zh': product.nameZh,
        'en': product.nameEn,
        'de': product.nameDe,
        'fr': product.nameFr,
        'es': product.nameEs,
        'ar': product.nameAr
    };
    return langMap[currentLang] || product.nameEn || product.nameZh || product.name || '';
}

function createFeaturedCard(product, type) {
    const priceFormatted = formatPrice(product.price);
    const images = product.images && product.images.length > 0 ? product.images : [];
    const mainImage = images[0] || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlNWViIi8+PC9zdmc+';
    
    // Get product name based on current language
    const displayName = getProductName(product);
    
    return `
        <div class="featured-card" data-id="${product.id}" data-type="${type}" onclick="openProductModal(this.dataset.id, this.dataset.type)" style="background-image: url('${mainImage}'); cursor: pointer;">
            <div class="featured-overlay">
                <div class="featured-info">
                    <h3 class="featured-name">${displayName}</h3>
                    <div class="featured-price">${priceFormatted}</div>
                </div>
            </div>
        </div>
    `;
}

function createProductCard(product, type) {
    const priceFormatted = formatPrice(product.price);
    // Check if image is valid
    const placeholder = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlNWViIi8+PC9zdmc+';
    
    // Use product images if available, otherwise use placeholder
    const images = product.images && product.images.length > 0 ? product.images : [placeholder];
    const mainImage = images[0];
    const displayName = getProductName(product);
    
    return `
        <div class="product-card" data-id="${product.id}" data-type="${type}" onclick="openProductModal('${product.id}', '${type}')" style="cursor: pointer;">
            <div class="product-image">
                <img src="${mainImage}" alt="${displayName}" class="product-img-simple" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${type === 'clothing' ? (currentLang === 'zh' ? '服装' : currentLang === 'de' ? 'Kleidung' : currentLang === 'fr' ? 'Vêtements' : currentLang === 'es' ? 'Ropa' : currentLang === 'ar' ? 'الأزياء' : 'Clothing') : (currentLang === 'zh' ? '香水' : currentLang === 'de' ? 'Düfte' : currentLang === 'fr' ? 'Parfums' : currentLang === 'es' ? 'Fragancias' : currentLang === 'ar' ? 'العطور' : 'Fragrance')}</span>
                <h3 class="product-name">${displayName}</h3>
                <span class="product-name-en">${product.nameEn || ''}</span>
                <div class="product-price-display">¥${priceFormatted}</div>
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
    console.log('addToCart called:', productId, type);
    
    // 找不到type的话，根据ID推断
    if (!type) {
        type = String(productId).startsWith('f') ? 'fragrance' : 'clothing';
    }
    
    console.log('Looking in type:', type);
    
    // 确保数据加载
    if (!productData) {
        console.error('productData not loaded');
        showNotification('请稍候再试', 'error');
        return;
    }
    
    const products = productData[type];
    if (!products) {
        console.error('No products for type:', type);
        // 尝试其他类型
        if (productData.clothing) {
            type = 'clothing';
        } else if (productData.fragrance) {
            type = 'fragrance';
        } else {
            showNotification('产品数据未加载', 'error');
            return;
        }
    }
    
    const product = products ? products.find(p => p.id === productId) : null;
    
    if (!product) {
        console.error('Product not found:', productId);
        showNotification('产品未找到', 'error');
        return;
    }
    
    console.log('Adding to cart:', product.name);
    
    // Google Analytics event
    if (window.gtag) {
        gtag('event', 'add_to_cart', {
            'items': [{
                'id': product.id,
                'name': getProductName(product),
                'price': product.price,
                'quantity': 1
            }]
        });
    }
    
    // Facebook Pixel event
    if (window.fbq) {
        fbq('track', 'AddToCart', {
            content_name: getProductName(product),
            content_ids: [product.id],
            content_type: 'product',
            value: product.price,
            currency: 'USD'
        });
    }
    
    // 检查是否已在购物车
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
        showNotification(currentLang === 'zh' ? '已添加到购物车' : 'Added to cart', 'success');
    } else {
        cart.push({ ...product, quantity: 1 });
        showNotification(currentLang === 'zh' ? '已添加到购物车' : 'Added to cart', 'success');
    }
    
    // 立即更新显示
    updateCartDisplay();
    saveCartToStorage();
    
    console.log('Cart now has', cart.length, 'items');
}

function updateCartDisplay() {
    console.log('updateCartDisplay called, cart items:', cart.length);
    
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    
    console.log('Total items:', totalItems, 'Total price:', cartTotal);
    
    cartCountElements.forEach(cartCount => {
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
            
            // Animate
            cartCount.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        }
    });
    
    // 更新总价显示
    const cartTotalElement = document.getElementById('cartTotal');
    if (cartTotalElement) {
        cartTotalElement.textContent = formatPrice(cartTotal);
        console.log('Cart total updated to:', formatPrice(cartTotal));
    }
    
    // 更新购物车侧边栏
    const cartItemsContainer = document.getElementById('cartItems');
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty">' + (currentLang === 'zh' ? '购物车是空的' : 'Your cart is empty') + '</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.images ? item.images[0] : ''}" alt="${item.name}" class="cart-item-image" loading="lazy">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>${formatPrice(item.price)}</p>
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                            <span class="qty-display">${item.quantity || 1}</span>
                            <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                            <button class="remove-btn" onclick="removeFromCart(${index})">${currentLang === 'zh' ? '删除' : 'Remove'}</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}

// 增加/减少数量
window.changeQuantity = function(index, change) {
    if (cart[index]) {
        cart[index].quantity = (cart[index].quantity || 1) + change;
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1;
        }
        updateCartDisplay();
        saveCartToStorage();
    }
}

// 删除产品
window.removeFromCart = function(index) {
    if (cart[index]) {
        const removedItem = cart[index].name;
        cart.splice(index, 1);
        updateCartDisplay();
        saveCartToStorage();
        showNotification(currentLang === 'zh' ? '已删除 ' + removedItem : 'Removed ' + removedItem, 'success');
    }
}

function saveCartToStorage() {
    localStorage.setItem('taping_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('taping_cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            console.error('Failed to parse cart from storage:', e);
            cart = [];
        }
        // Ensure UI reflects the persisted cart state
        renderCartItems();
        updateCartDisplay();
    }
}

// Attempt to synchronize cart with server if user is logged in
async function syncCartFromServerIfNeeded() {
    try {
        const userToken = localStorage.getItem('taping_user_token');
        const isLoggedIn = !!userToken;
        if (!isLoggedIn) return;
        // Minimalistic sync: fetch current server cart for the user
        const resp = await fetch('/api/cart', {
            credentials: 'include',
            headers: { 'Authorization': 'Bearer ' + userToken }
        });
        if (!resp.ok) {
            console.warn('Server cart sync failed:', resp.status);
            return;
        }
        const serverCart = await resp.json();
        if (Array.isArray(serverCart?.items)) {
            cart = serverCart.items.map(it => ({ ...it }));
            renderCartItems();
            updateCartDisplay();
            saveCartToStorage();
            console.log('Cart synchronized with server. Items:', cart.length);
        }
    } catch (err) {
        console.warn('Cart server sync error:', err);
    }
}

// Initialize cart from storage
loadCartFromStorage();

// Currency change function
window.changeCurrency = function(currencyCode) {
    currentCurrency = currencyCode;
    renderFeaturedProducts(); // Re-render to update prices
};

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
    
    const termLower = term.toLowerCase();
    const allProducts = [...(productData.clothing || []), ...(productData.fragrance || [])];
    
    const results = allProducts
        .filter(p => 
            (p.nameZh && p.nameZh.toLowerCase().includes(termLower)) || 
            (p.nameEn && p.nameEn.toLowerCase().includes(termLower)) ||
            (p.nameDe && p.nameDe.toLowerCase().includes(termLower)) ||
            (p.nameFr && p.nameFr.toLowerCase().includes(termLower)) ||
            (p.nameEs && p.nameEs.toLowerCase().includes(termLower)) ||
            (p.nameAr && p.nameAr.toLowerCase().includes(termLower)) ||
            (p.category && p.category.toLowerCase().includes(termLower))
        )
        .slice(0, 10);
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results" style="padding:20px;text-align:center;color:#666;">未找到相关产品</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="openProductFromSearch('${product.id}', '${product.category === "Clothing" ? "clothing" : "fragrance"}')">
            <img src="${product.images && product.images[0] ? product.images[0] : ''}" alt="${getProductName(product)}" loading="lazy">
            <div class="search-result-info">
                <span class="search-result-category">${product.category}</span>
                <h4>${getProductName(product)}</h4>
                <span>${formatPrice(product.price)}</span>
            </div>
        </div>
    `).join('');
}

// Open product from search results
window.openProductFromSearch = function(id, type) {
    const product = productData[type].find(p => p.id === id);
    if (product) {
        openProductModal(product, type);
        document.getElementById('searchOverlay').classList.remove('active');
    }
};

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
    showNotification('Removed from cart', 'info');
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
    console.log('Opening modal for productId:', productId, 'type:', type);
    
    // 确保type有效
    if (!type) {
        console.error('type is undefined!');
        // 尝试从ID判断类型
        type = productId && productId.startsWith('f') ? 'fragrance' : 'clothing';
        console.log('Using inferred type:', type);
    }
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modalBody) {
        console.error('modalBody not found');
        return;
    }
    
    if (!productData) {
        console.error('productData not loaded');
        return;
    }
    
    // 使用正确的key
    const products = productData[type];
    if (!products) {
        console.error('No products for type:', type, 'Available keys:', Object.keys(productData));
        // 尝试其他key
        if (productData.clothing) {
            type = 'clothing';
        } else if (productData.fragrance) {
            type = 'fragrance';
        }
    }
    
    const product = products ? products.find(p => p.id === productId) : null;
    
    if (!product) {
        console.error('Product not found, id:', productId, 'in type:', type);
        // 尝试查找
        if (productData.clothing) {
            product = productData.clothing.find(p => p.id === productId);
            type = 'clothing';
        }
        if (!product && productData.fragrance) {
            product = productData.fragrance.find(p => p.id === productId);
            type = 'fragrance';
        }
        if (!product) {
            return;
        }
    }
    
console.log('Found product:', product.name, 'type:', type);
    
    const isClothing = type === 'clothing';
    const productImages = product.images || [product.image || ''];
    
    // 存储当前产品图片数组供切换函数使用
    window.currentModalProductImages = productImages;
    
    const indicators = productImages.map((img, index) => 
        `<span class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
    ).join('');
    // 缩略图HTML - 大图下方可滚动选择（仅多图时显示）
    // 使用滚动监听：当缩略图滚动到中间时，主图自动切换
    const thumbnailsHTML = productImages.length > 1 ? productImages.map((img, index) => 
        `<img src="${img}" alt="${getProductName(product)}" class="modal-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}" onmouseenter="previewThumbnail(this)" onclick="selectThumbnail(this)" loading="lazy">`
    ).join('') : '';
    
    modalBody.innerHTML = `
        <div class="modal-product-grid">
            <div class="modal-product-image">
                <div class="modal-main-image-container">
                    <img src="${productImages[0]}" alt="${getProductName(product)}" class="modal-main-image" id="modalMainImage" loading="lazy">
                </div>
                ${productImages.length > 1 ? `
                <div class="thumbnail-nav-row">
                    <button class="thumb-nav-btn" onclick="changeThumbnailImage(-1)">‹</button>
                    <div class="thumbnail-strip" id="thumbnailStrip">
                        ${thumbnailsHTML}
                    </div>
                    <button class="thumb-nav-btn" onclick="changeThumbnailImage(1)">›</button>
                </div>
                ` : ''}
            </div>
            <div class="modal-product-details">
                <span class="modal-product-category">${product.category}</span>
                <h2 class="modal-product-name">${getProductName(product)}</h2>
                <p class="modal-product-name-en">${product.nameEn || product.nameZh || ''}</p>
                <p class="modal-product-price">${formatPrice(product.price)}</p>
                <p class="modal-product-description">${product.description}</p>
                
${isClothing ? `
                    <div class="product-options">
                        ${product['规格1'] ? `
                        <div class="option-group">
                            <label>${product['规格1']}</label>
                            <p class="product-size">${product['规格值1'] || '默认'}</p>
                        </div>
                        ` : ''}
                        ${product['规格2'] ? `
                        <div class="option-group">
                            <label>${product['规格2']}</label>
                            <p class="product-size">${product['规格值2'] || ''}</p>
                        </div>
                        ` : ''}
                    </div>
                ` : `
                    <div class="product-options">
                        ${product['规格1'] ? `
                        <div class="option-group">
                            <label>${product['规格1']}</label>
                            <p class="product-size">${product['规格值1']}</p>
                        </div>
                        ` : ''}
                        ${product['规格2'] ? `
                        <div class="option-group">
                            <label>${product['规格2']}</label>
                            <p class="product-size">${product['规格值2']}</p>
                        </div>
                        ` : ''}
                        ${product['规格3'] ? `
                        <div class="option-group">
                            <label>${product['规格3']}</label>
                            <p class="product-size">${product['规格值3']}</p>
                        </div>
                        ` : ''}
                    </div>
`}
                
                <div class="modal-product-actions">
                    <button class="btn btn-primary modal-add-to-cart" data-id="${product.id}" data-type="${type}">
                        ${currentLang === 'zh' ? '加入购物车' : 'Add to Cart'}
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

/* ========================================
   Product Image Carousel
   ======================================== */
function prevImage(navBtn) {
    const carousel = navBtn.closest('.product-carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    switchImage(carousel, newIndex);
}

function nextImage(navBtn) {
    const carousel = navBtn.closest('.product-carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    switchImage(carousel, newIndex);
}

function switchImage(carousel, newIndex) {
    const images = carousel.querySelectorAll('.carousel-image');
    const thumbnails = carousel.querySelectorAll('.carousel-thumbnail');
    
    images.forEach((img, i) => {
        img.classList.toggle('active', i === newIndex);
    });
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === newIndex);
    });
}

// Initialize thumbnail click handlers after products render
document.addEventListener('click', function(e) {
    if (e.target.closest('.carousel-thumbnail')) {
        const thumb = e.target.closest('.carousel-thumbnail');
        const carousel = thumb.closest('.product-carousel');
        const index = parseInt(thumb.dataset.index);
        switchImage(carousel, index);
    }
});

/* Modal Carousel Functions */
function modalPrevImage(navBtn) {
    const modalCarousel = navBtn.closest('.modal-carousel');
    const images = modalCarousel.querySelectorAll('.modal-carousel-image');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    images.forEach((img, i) => img.classList.toggle('active', i === newIndex));
    modalCarousel.querySelectorAll('.carousel-dot').forEach((dot, i) => dot.classList.toggle('active', i === newIndex));
}

function modalNextImage(navBtn) {
    const modalCarousel = navBtn.closest('.modal-product-image');
    const images = modalCarousel.querySelectorAll('.modal-carousel-image');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    images.forEach((img, i) => img.classList.toggle('active', i === newIndex));
    
    // 更新缩略图
    const thumbnails = modalCarousel.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => thumb.classList.toggle('active', i === newIndex));
}

// 点击缩略图切换
window.showImage = function(index) {
    const modalImage = document.querySelector('.modal-product-image');
    if (!modalImage) return;
    
    const images = modalImage.querySelectorAll('.modal-carousel-image');
    images.forEach((img, i) => img.classList.toggle('active', i === index));
    
    const thumbnails = modalImage.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => thumb.classList.toggle('active', i === index));
}

// 切换主图 - 悬停预览时调用（或点击后保持选中）
window.previewThumbnail = function(thumbEl) {
    const mainImage = document.getElementById('modalMainImage');
    if (mainImage && window.currentModalProductImages) {
        const index = parseInt(thumbEl.dataset.index);
        mainImage.src = window.currentModalProductImages[index];
    }
}

// 选中缩略图 - 点击时调用
window.selectThumbnail = function(thumbEl) {
    // 先预览
    window.previewThumbnail(thumbEl);
    
    // 更新选中状态
    const thumbnails = document.querySelectorAll('.modal-thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbEl.classList.add('active');
}

// 左右箭头切换缩略图和大图
window.currentThumbnailIndex = 0;

window.changeThumbnailImage = function(direction) {
    if (!window.currentModalProductImages) return;
    
    const total = window.currentModalProductImages.length;
    window.currentThumbnailIndex = (window.currentThumbnailIndex + direction + total) % total;
    
    // 更新大图
    const mainImage = document.getElementById('modalMainImage');
    if (mainImage) {
        mainImage.src = window.currentModalProductImages[window.currentThumbnailIndex];
    }
    
    // 更新缩略图选中状态
    const thumbnails = document.querySelectorAll('.modal-thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === window.currentThumbnailIndex);
    });
    
    // 滚动缩略图到可见区域
    const activeThumb = thumbnails[window.currentThumbnailIndex];
    if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

/* ========================================
   Multi-language System (i18n)
   ======================================== */
function initI18n() {
    // Get saved language or detect browser language
    const savedLang = localStorage.getItem('taping_lang');
    const browserLang = navigator.language.split('-')[0];
    
    // Priority: saved > browser > default (en)
    let targetLang = savedLang || 
        (translations[browserLang] ? browserLang : 'en');
    
    // Ensure we have the target language
    if (!translations[targetLang]) {
        targetLang = 'en';
    }
    
    setLanguage(targetLang);
    createLanguageSwitcher();
}

function setLanguage(langCode) {
    if (!translations[langCode]) return;
    
    currentLang = langCode;
    localStorage.setItem('taping_lang', langCode);
    
    // Update document direction (for RTL support)
    const dir = translations[langCode].meta.dir;
    document.documentElement.dir = dir;
    document.documentElement.lang = langCode;
    
    // Update all translatable elements
    updatePageTranslations();
    updateLanguageSwitcher();
    
    // Re-render products with new language (check if productData is loaded)
    if (productData && productData.clothing && productData.fragrance) {
        renderFeaturedProducts();
    } else {
        // If productData is not loaded yet, wait for it to load and then re-render
        const checkInterval = setInterval(() => {
            if (productData && productData.clothing && productData.fragrance) {
                clearInterval(checkInterval);
                renderFeaturedProducts();
            }
        }, 100);

        // Clear interval after 5 seconds to prevent infinite loop
        setTimeout(() => clearInterval(checkInterval), 5000);
    }
}

function updatePageTranslations() {
    const t = translations[currentLang];
    if (!t) return;
    
// Navigation
    updateElement('[data-i18n="nav.home"]', t.nav.home);
    updateElement('[data-i18n="nav.clothing"]', t.nav.clothing);
    updateElement('[data-i18n="nav.fragrance"]', t.nav.fragrance);
    updateElement('[data-i18n="nav.about"]', t.nav.about);
    
    // User dropdown menu
    updateElements('[data-i18n="nav.profile"]', t.nav.profile);
    updateElements('[data-i18n="nav.myOrders"]', t.nav.myOrders);
    updateElements('[data-i18n="nav.addresses"]', t.nav.addresses);
    updateElements('[data-i18n="nav.accountSettings"]', t.nav.accountSettings);
    updateElements('[data-i18n="nav.signOut"]', t.nav.signOut);
    
    // Hero section
    updateElement('[data-i18n="hero.subtitle"]', t.hero.subtitle);
    updateElement('[data-i18n="hero.title"]', t.hero.title);
    updateElement('[data-i18n="hero.desc"]', t.hero.desc);
    updateElement('[data-i18n="hero.ctaClothing"]', t.hero.ctaClothing);
    updateElement('[data-i18n="hero.ctaFragrance"]', t.hero.ctaFragrance);
    updateElement('[data-i18n="hero.scroll"]', t.hero.scroll);
    
    // Categories
    updateElement('[data-i18n="categories.subtitle"]', t.categories.subtitle);
    updateElement('[data-i18n="categories.title"]', t.categories.title);
    updateElement('[data-i18n="categories.clothing"]', t.categories.clothing);
    updateElement('[data-i18n="categories.clothingDesc"]', t.categories.clothingDesc);
    updateElement('[data-i18n="categories.fragrance"]', t.categories.fragrance);
    updateElement('[data-i18n="categories.fragranceDesc"]', t.categories.fragranceDesc);
    updateElements('[data-i18n="categories.explore"]', t.categories.explore);
    
    // Products
    updateElement('[data-i18n="products.subtitle"]', t.products.featured);
    updateElement('[data-i18n="products.clothingTitle"]', t.products.clothingTitle);
    updateElement('[data-i18n="products.fragranceTitle"]', t.products.fragranceTitle);
    updateElement('[data-i18n="products.viewAllClothing"]', t.products.viewAllClothing);
    updateElement('[data-i18n="products.viewAllFragrance"]', t.products.viewAllFragrance);
    
    // About section
    updateElement('[data-i18n="about.subtitle"]', t.about.subtitle);
    updateElement('[data-i18n="about.title"]', t.about.title);
    updateElements('[data-i18n="about.text1"]', t.about.text1);
    updateElements('[data-i18n="about.text2"]', t.about.text2);
    updateElement('[data-i18n="about.years"]', t.about.years);
    updateElement('[data-i18n="about.brands"]', t.about.brands);
    updateElement('[data-i18n="about.customers"]', t.about.customers);
    
    // Newsletter
    updateElement('[data-i18n="newsletter.title"]', t.newsletter.title);
    updateElement('[data-i18n="newsletter.desc"]', t.newsletter.desc);
    updateElement('[data-i18n="newsletter.button"]', t.newsletter.button);
    
    // Footer
    updateElement('[data-i18n="footer.desc"]', t.footer.desc);
    updateElement('[data-i18n="footer.quickLinks"]', t.footer.quickLinks);
    updateElement('[data-i18n="footer.service"]', t.footer.service);
    updateElement('[data-i18n="footer.contact"]', t.footer.contact);
    updateElement('[data-i18n="footer.shipping"]', t.footer.shipping);
    updateElement('[data-i18n="footer.returns"]', t.footer.returns);
    updateElement('[data-i18n="footer.privacy"]', t.footer.privacy);
    updateElement('[data-i18n="footer.contactUs"]', t.footer.contactUs);
    updateElement('[data-i18n="footer.globalSourcing"]', t.footer.globalSourcing);
    updateElement('[data-i18n="footer.email"]', t.footer.email);
    updateElement('[data-i18n="footer.whatsapp1"]', t.footer.whatsapp1);
    updateElement('[data-i18n="footer.whatsapp2"]', t.footer.whatsapp2);
    updateElement('[data-i18n="footer.copyright"]', t.footer.copyright);
    
    // Cart
    updateElement('[data-i18n="cart.title"]', t.cart.title);
    updateElement('[data-i18n="cart.empty"]', t.cart.empty);
    updateElement('[data-i18n="cart.total"]', t.cart.total);
    updateElement('[data-i18n="cart.checkout"]', t.cart.checkout);
    
    // Search
    updateElement('[data-i18n="search.placeholder"]', t.search.placeholder);
    
    // Update newsletter placeholder
    const newsletterInput = document.querySelector('.newsletter-input');
    if (newsletterInput) newsletterInput.placeholder = t.newsletter.placeholder;
    
    // Update quick view buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.textContent = t.products.quickView;
    });
    
    // Update add to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.textContent = t.products.addToCart;
    });
    
    // Returns page translations
    if (t.returns) {
        updateElement('[data-i18n="returns.title"]', t.returns.title);
        updateElement('[data-i18n="returns.scope"]', t.returns.scope);
        updateElement('[data-i18n="returns.eligibilityTitle"]', t.returns.eligibilityTitle);
        updateElement('[data-i18n="returns.eligibilityDesc"]', t.returns.eligibilityDesc);
        updateElement('[data-i18n="returns.eligibility1"]', t.returns.eligibility1);
        updateElement('[data-i18n="returns.eligibility2"]', t.returns.eligibility2);
        updateElement('[data-i18n="returns.eligibility3"]', t.returns.eligibility3);
        updateElement('[data-i18n="returns.eligibility4"]', t.returns.eligibility4);
        updateElement('[data-i18n="returns.nonReturnableTitle"]', t.returns.nonReturnableTitle);
        updateElement('[data-i18n="returns.nonReturnable1"]', t.returns.nonReturnable1);
        updateElement('[data-i18n="returns.nonReturnable2"]', t.returns.nonReturnable2);
        updateElement('[data-i18n="returns.nonReturnable3"]', t.returns.nonReturnable3);
        updateElement('[data-i18n="returns.nonReturnable4"]', t.returns.nonReturnable4);
        updateElement('[data-i18n="returns.processTitle"]', t.returns.processTitle);
        updateElement('[data-i18n="returns.step1Title"]', t.returns.step1Title);
        updateElement('[data-i18n="returns.step1Desc"]', t.returns.step1Desc);
        updateElement('[data-i18n="returns.step1Email"]', t.returns.step1Email);
        updateElement('[data-i18n="returns.step1Whatsapp"]', t.returns.step1Whatsapp);
        updateElement('[data-i18n="returns.step1Evidence"]', t.returns.step1Evidence);
        updateElement('[data-i18n="returns.step2Title"]', t.returns.step2Title);
        updateElement('[data-i18n="returns.step2Desc"]', t.returns.step2Desc);
        updateElement('[data-i18n="returns.step2Rma"]', t.returns.step2Rma);
        updateElement('[data-i18n="returns.step2Address"]', t.returns.step2Address);
        updateElement('[data-i18n="returns.step3Title"]', t.returns.step3Title);
        updateElement('[data-i18n="returns.step3Desc"]', t.returns.step3Desc);
        updateElement('[data-i18n="returns.step3Trackable"]', t.returns.step3Trackable);
        updateElement('[data-i18n="returns.step3Mark"]', t.returns.step3Mark);
        updateElement('[data-i18n="returns.step3Keep"]', t.returns.step3Keep);
        updateElement('[data-i18n="returns.step3Include"]', t.returns.step3Include);
        updateElement('[data-i18n="returns.customsTitle"]', t.returns.customsTitle);
        updateElement('[data-i18n="returns.customsDesc"]', t.returns.customsDesc);
        updateElement('[data-i18n="returns.step4Title"]', t.returns.step4Title);
        updateElement('[data-i18n="returns.step4Desc"]', t.returns.step4Desc);
        updateElement('[data-i18n="returns.step4Process"]', t.returns.step4Process);
        updateElement('[data-i18n="returns.step4Method"]', t.returns.step4Method);
        updateElement('[data-i18n="returns.step4Bank"]', t.returns.step4Bank);
        updateElement('[data-i18n="returns.costDeductionsTitle"]', t.returns.costDeductionsTitle);
        updateElement('[data-i18n="returns.costDeductions1"]', t.returns.costDeductions1);
        updateElement('[data-i18n="returns.costDeductions2"]', t.returns.costDeductions2);
        updateElement('[data-i18n="returns.costDeductions3"]', t.returns.costDeductions3);
        updateElement('[data-i18n="returns.costTitle"]', t.returns.costTitle);
        updateElement('[data-i18n="returns.costReason"]', t.returns.costReason);
        updateElement('[data-i18n="returns.costShipping"]', t.returns.costShipping);
        updateElement('[data-i18n="returns.costReturn"]', t.returns.costReturn);
        updateElement('[data-i18n="returns.costQuality"]', t.returns.costQuality);
        updateElement('[data-i18n="returns.costWrong"]', t.returns.costWrong);
        updateElement('[data-i18n="returns.costTransit"]', t.returns.costTransit);
        updateElement('[data-i18n="returns.costRemorse"]', t.returns.costRemorse);
        updateElement('[data-i18n="returns.costOrdering"]', t.returns.costOrdering);
        updateElement('[data-i18n="returns.costCustoms"]', t.returns.costCustoms);
        updateElement('[data-i18n="returns.costWePay"]', t.returns.costWePay);
        updateElement('[data-i18n="returns.costBuyerPay"]', t.returns.costBuyerPay);
        updateElement('[data-i18n="returns.costBuyerFee"]', t.returns.costBuyerFee);
        updateElement('[data-i18n="returns.exchangeTitle"]', t.returns.exchangeTitle);
        updateElement('[data-i18n="returns.exchangeDesc"]', t.returns.exchangeDesc);
        updateElement('[data-i18n="returns.exchangeInstruction"]', t.returns.exchangeInstruction);
        updateElement('[data-i18n="returns.exchange1"]', t.returns.exchange1);
        updateElement('[data-i18n="returns.exchange2"]', t.returns.exchange2);
        updateElement('[data-i18n="returns.exchange3"]', t.returns.exchange3);
        updateElement('[data-i18n="returns.cancelTitle"]', t.returns.cancelTitle);
        updateElement('[data-i18n="returns.cancelDesc"]', t.returns.cancelDesc);
        updateElement('[data-i18n="returns.cancel1"]', t.returns.cancel1);
        updateElement('[data-i18n="returns.cancel2"]', t.returns.cancel2);
        updateElement('[data-i18n="returns.cancelContact"]', t.returns.cancelContact);
        updateElement('[data-i18n="returns.disputeTitle"]', t.returns.disputeTitle);
        updateElement('[data-i18n="returns.disputeDesc"]', t.returns.disputeDesc);
        updateElement('[data-i18n="returns.dispute1"]', t.returns.dispute1);
        updateElement('[data-i18n="returns.dispute2"]', t.returns.dispute2);
        updateElement('[data-i18n="returns.dispute3"]', t.returns.dispute3);
        updateElement('[data-i18n="returns.contactTitle"]', t.returns.contactTitle);
        updateElement('[data-i18n="returns.contactDesc"]', t.returns.contactDesc);
        updateElement('[data-i18n="returns.contactEmail"]', t.returns.contactEmail);
        updateElement('[data-i18n="returns.contactWhatsapp"]', t.returns.contactWhatsapp);
        updateElement('[data-i18n="returns.contactHours"]', t.returns.contactHours);
        updateElement('[data-i18n="returns.contactHoursValue"]', t.returns.contactHoursValue);
        updateElement('[data-i18n="returns.contactAddress"]', t.returns.contactAddress);
        updateElement('[data-i18n="returns.contactAddressValue"]', t.returns.contactAddressValue);
        updateElement('[data-i18n="returns.updateTitle"]', t.returns.updateTitle);
        updateElement('[data-i18n="returns.updateDesc"]', t.returns.updateDesc);
        updateElement('[data-i18n="returns.effectiveDate"]', t.returns.effectiveDate);
        updateElement('[data-i18n="returns.effectiveDateValue"]', t.returns.effectiveDateValue);
    }
}

function updateElement(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
}

function updateElements(selector, text) {
    document.querySelectorAll(selector).forEach(el => el.textContent = text);
}

function createLanguageSwitcher() {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions) return;
    
    // Check if switcher already exists
    if (document.querySelector('.lang-switcher')) return;
    
    const currentLangInfo = languages.find(l => l.code === currentLang) || languages[0];
    
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
        <button class="lang-current" id="langCurrent">
            <span class="lang-flag">${currentLangInfo.flag}</span>
            <span class="lang-code">${currentLang.toUpperCase()}</span>
            <svg class="lang-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </button>
        <div class="lang-dropdown" id="langDropdown">
            ${languages.map(lang => `
                <button class="lang-option ${lang.code === currentLang ? 'active' : ''}" data-lang="${lang.code}">
                    <span class="lang-flag">${lang.flag}</span>
                    <span class="lang-name">${lang.name}</span>
                </button>
            `).join('')}
        </div>
    `;
    
    const cartBtn = headerActions.querySelector('.cart-btn');
    if (cartBtn) cartBtn.after(switcher);
    
    document.getElementById('langCurrent').addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('langDropdown').classList.toggle('show');
        e.currentTarget.classList.toggle('active');
    });
    
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            setLanguage(option.dataset.lang);
            document.getElementById('langDropdown').classList.remove('show');
            document.getElementById('langCurrent').classList.remove('active');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!switcher.contains(e.target)) {
            document.getElementById('langDropdown').classList.remove('show');
            document.getElementById('langCurrent').classList.remove('active');
        }
    });
}

function updateLanguageSwitcher() {
    const currentFlag = document.querySelector('.lang-flag');
    const currentCode = document.querySelector('.lang-code');
    const currentLangInfo = languages.find(l => l.code === currentLang);
    
    if (currentFlag && currentLangInfo) currentFlag.textContent = currentLangInfo.flag;
    if (currentCode) currentCode.textContent = currentLang.toUpperCase();
    
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === currentLang);
    });
}

// Expose functions to global scope
window.addToCart = addToCart;

window.setLanguage = setLanguage;
