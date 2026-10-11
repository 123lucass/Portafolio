// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animar hamburguesa
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

// Cerrar menú al hacer click en un link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        if (spans.length >= 3) {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===== SCROLL ANIMATIONS (INTERSECTION OBSERVER) =====
const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos clave
document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
document.querySelectorAll('.skill-category').forEach(category => observer.observe(category));
document.querySelectorAll('.workflow-card').forEach(card => observer.observe(card));
document.querySelectorAll('.about-text').forEach(text => observer.observe(text));
document.querySelectorAll('.timeline').forEach(timeline => observer.observe(timeline));
document.querySelectorAll('.contact-form').forEach(form => observer.observe(form));
document.querySelectorAll('.stat').forEach(stat => observer.observe(stat));

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== MODAL FUNCTIONALITY =====
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

function openModal(projectId) {
    if (!modal || !modalBody) return;
    const content = getProjectModalContent(projectId);
    modalBody.innerHTML = content;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

// Contenido detallado de los proyectos
function getProjectModalContent(projectId) {
    const projects = {
        1: {
            title: 'Silusoft — Software a Medida & Automatización',
            category: 'Empresa Propia · Software Factory',
            link: 'https://silusoft.com.ar',
            linkLabel: 'Visitar silusoft.com.ar',
            problem: 'Muchas empresas e instituciones pierden competitividad y tiempo valioso debido a sistemas obsoletos, procesos manuales repetitivos y plataformas desintegradas que impiden su escalabilidad en Argentina.',
            solution: 'Fundé y lidero Silusoft como partner tecnológico estratégico para diseñar soluciones digitales de principio a fin: sistemas web a medida, integraciones de APIs y automatización inteligente que optimizan costos y aceleran el crecimiento operativo.',
            features: [
                'Desarrollo de software empresarial personalizado adaptado a las operaciones del cliente',
                'Arquitectura web moderna con Next.js, React, Node.js y bases de datos relacionales',
                'Automatización de procesos empresariales y flujos de trabajo con n8n y webhooks',
                'Integración de APIs RESTful y sincronización de datos en tiempo real',
                'Despliegues en la nube con monitoreo de alta disponibilidad y soporte continuo'
            ],
            tech: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
            learned: [
                'Gestión integral de proyectos de software desde el relevamiento hasta el deploy en producción',
                'Diseño de arquitecturas escalables preparadas para alta concurrencia y tolerancia a fallos',
                'Consultoría técnica con clientes para traducir necesidades operativas en código eficiente',
                'Implementación de metodologías ágiles y control de calidad continuo'
            ],
            next: [
                'Incorporación de módulos con Inteligencia Artificial generativa para análisis predictivo',
                'Desarrollo de componentes SaaS reutilizables para optimizar tiempos de entrega',
                'Expansión de integraciones con plataformas contables y de facturación electrónica'
            ]
        },
        2: {
            title: 'Gala Fitness — Centro de Entrenamiento',
            category: 'Cliente Real · Plataforma Deportiva',
            link: 'https://galafitenes.netlify.app',
            linkLabel: 'Visitar galafitenes.netlify.app',
            problem: 'El centro de entrenamiento Gala Fitness (Ramada Paso) requería una presencia digital impactante y dinámica que comunicara su propuesta deportiva, presentara a los profesores, mostrase los planes y facilitara el agendamiento directo de nuevos alumnos.',
            solution: 'Diseñé y programé una landing page de alta conversión con estética deportiva moderna, efectos de partículas interactivas, llamadas a la acción directas hacia canales de WhatsApp y carga ultra-rápida optimizada para dispositivos móviles.',
            features: [
                'Diseño dark theme atlético de alto impacto con canvas interactivo de partículas',
                'Sistema de agendamiento rápido de clases y contacto directo para interesados',
                'Secciones completas para presentación de disciplinas, profesores, galería y testimonios',
                'Estructura 100% responsiva (Mobile-First) pensada para usuarios en smartphones',
                'Despliegue continuo en la red global CDN de Netlify con tiempos de respuesta instantáneos'
            ],
            tech: ['HTML5', 'CSS3 Avanzado', 'JavaScript ES6+', 'HTML5 Canvas', 'Netlify CDN', 'SEO Local'],
            learned: [
                'Optimización de la tasa de conversión (CRO) y diseño de llamadas a la acción efectivas',
                'Animación de alto rendimiento en navegadores móviles mediante Canvas API y requestAnimationFrame',
                'Optimización de imágenes y recursos para alcanzar métricas sobresalientes en Core Web Vitals'
            ],
            next: [
                'Módulo interactivo para reserva de turnos en tiempo real con control de cupos',
                'Portal de autogestión para que los alumnos puedan consultar sus rutinas semanales'
            ]
        },
        3: {
            title: 'The Pace Brand — Tienda Online Shopify',
            category: 'E-Commerce Shopify · Athleisure',
            link: 'https://www.thepacebrand.com/',
            linkLabel: 'Visitar thepacebrand.com',
            problem: 'The Pace Brand necesitaba una plataforma de comercio electrónico global con una imagen de marca sofisticada, que combinara la cultura del tenis y la filosofía estoica en una experiencia de compra minimalista, fluida y de alta gama.',
            solution: 'Construí y configuré la tienda virtual en Shopify, personalizando el storefront con Liquid, implementando navegación por colecciones, selección dinámica de variantes y una pasarela de pago optimizada para transacciones seguras.',
            features: [
                'Storefront personalizado con estética de lujo y tipografía minimalista',
                'Catálogo interactivo con filtrado de productos por colección, variantes de talle y color',
                'Carro de compras interactivo deslizable y checkout ágil para maximizar conversiones',
                'Configuración integral de métodos de pago internacionales (Stripe, PayPal, tarjetas)',
                'Optimización para compras en dispositivos móviles y cálculo dinámico de envíos'
            ],
            tech: ['Shopify', 'Liquid', 'JavaScript ES6+', 'E-Commerce UX', 'Checkout Optimization', 'Stripe'],
            learned: [
                'Dominio del ecosistema de desarrollo de tiendas en Shopify y plantillas Liquid',
                'Buenas prácticas de diseño UX/UI en moda y athleisure para reducir carritos abandonados',
                'Manejo de inventario multivariante, analítica de comercio electrónico y pasarelas de pago'
            ],
            next: [
                'Implementación de asistente de talles inteligente para reducir devoluciones',
                'Automatización de campañas de retención y recompensas para la comunidad atlética'
            ]
        }
    };

    const project = projects[projectId];
    if (!project) return '<p>Proyecto no encontrado.</p>';

    return `
        <div class='modal-header-section'>
            <span class='modal-badge'>${project.category}</span>
            <h2 class='modal-title'>${project.title}</h2>
        </div>
        
        <div class='modal-live-link-box'>
            <a href='${project.link}' target='_blank' rel='noopener noreferrer' class='btn btn-primary btn-sm'>
                <i class='fas fa-external-link-alt'></i> ${project.linkLabel}
            </a>
            <span class='modal-live-indicator'><i class='fas fa-circle-check'></i> Proyecto en producción</span>
        </div>

        <div class='modal-section'>
            <h3><i class='fas fa-bullseye'></i> 1. El Desafío</h3>
            <p>${project.problem}</p>
        </div>
        
        <div class='modal-section'>
            <h3><i class='fas fa-lightbulb'></i> 2. Solución Desarrollada</h3>
            <p>${project.solution}</p>
        </div>
        
        <div class='modal-section'>
            <h3><i class='fas fa-check-circle'></i> 3. Características Clave</h3>
            <ul class='modal-list'>
                ${project.features.map(feature => `<li><i class='fas fa-angle-right'></i> ${feature}</li>`).join('')}
            </ul>
        </div>

        <div class='modal-section'>
            <h3><i class='fas fa-layer-group'></i> 4. Stack Tecnológico</h3>
            <div class='modal-tech-tags'>
                ${project.tech.map(t => `<span class='tag'>${t}</span>`).join('')}
            </div>
        </div>
        
        <div class='modal-section'>
            <h3><i class='fas fa-graduation-cap'></i> 5. Aprendizajes & Valor Técnico</h3>
            <ul class='modal-list'>
                ${project.learned.map(item => `<li><i class='fas fa-check'></i> ${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class='modal-section'>
            <h3><i class='fas fa-arrow-trend-up'></i> 6. Próximos Pasos & Visión</h3>
            <ul class='modal-list'>
                ${project.next.map(item => `<li><i class='fas fa-rocket'></i> ${item}</li>`).join('')}
            </ul>
        </div>

        <div class='modal-footer-action'>
            <a href='${project.link}' target='_blank' rel='noopener noreferrer' class='btn btn-primary'>
                <i class='fas fa-external-link-alt'></i> Abrir Sitio Web en Vivo
            </a>
            <button class='btn btn-secondary' onclick='closeModal()'>Cerrar</button>
        </div>
    `;
}

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validaciones
        if (name.length < 2) {
            showFormMessage('Por favor ingresá un nombre válido', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage('Por favor ingresá un email válido', 'error');
            return;
        }

        if (message.length < 10) {
            showFormMessage('El mensaje debe tener al menos 10 caracteres', 'error');
            return;
        }

        // Simulación de envío exitoso y redirección opcional
        showFormMessage('¡Muchas gracias por tu mensaje! Me pondré en contacto contigo a la brevedad.', 'success');
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    if (!formMessage) return;
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 6000);
}

// ===== FOOTER YEAR =====
const currentYearEl = document.getElementById('currentYear');
if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (navbar) {
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    lastScroll = currentScroll;
});

// ===== ANIMACIÓN INICIAL =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
