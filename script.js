// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
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
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
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
        const sectionTop = section.offsetTop - 100;
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
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
document.querySelectorAll('.skill-category').forEach(category => observer.observe(category));
document.querySelectorAll('.workflow-card').forEach(card => observer.observe(card));
document.querySelectorAll('.about-text').forEach(text => observer.observe(text));
document.querySelectorAll('.timeline').forEach(timeline => observer.observe(timeline));
document.querySelectorAll('.contact-form').forEach(form => observer.observe(form));

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.getElementById('scrollTop');

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

// ===== MODAL FUNCTIONALITY =====
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

function openModal(projectId) {
    const content = getProjectModalContent(projectId);
    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Contenido de modales por proyecto
function getProjectModalContent(projectId) {
    const projects = {
        1: {
            title: 'Turnero Pro',
            problem: 'Los consultorios médicos necesitaban una forma eficiente de gestionar turnos, evitar solapamientos y permitir que los pacientes reserven online.',
            solution: 'Sistema web completo con autenticación JWT, roles diferenciados (admin/usuario) y panel de administración para gestionar turnos, pacientes y profesionales.',
            features: [
                'Autenticación segura con JWT y refresh tokens',
                'Sistema de roles (admin, profesional, paciente)',
                'CRUD completo de turnos con validación de horarios',
                'Dashboard con estadísticas en tiempo real',
                'Notificaciones por email de confirmación',
                'Calendario interactivo para visualizar disponibilidad',
                'Filtros y búsqueda avanzada',
                'Exportación de reportes'
            ],
            learned: [
                'Implementación de autenticación con JWT y refresh tokens',
                'Manejo de roles y permisos en frontend y backend',
                'Validaciones complejas de horarios y disponibilidad',
                'Optimización de queries SQL para mejorar performance'
            ],
            next: [
                'Integración con Google Calendar',
                'Sistema de recordatorios automáticos por WhatsApp',
                'App móvil con React Native',
                'Pagos online para reservas'
            ]
        },
        2: {
            title: 'Stock & Ventas Mini-ERP',
            problem: 'Pequeños comercios necesitaban controlar su inventario, registrar ventas y generar reportes sin sistemas complejos y costosos.',
            solution: 'Sistema de gestión integral con módulos de stock, ventas y reportes visuales. Incluye alertas automáticas de stock bajo y exportación de datos.',
            features: [
                'Control de inventario con alertas de stock mínimo',
                'Módulo de ventas con facturación',
                'Gestión de proveedores y productos',
                'Reportes visuales con Chart.js',
                'Exportación a Excel de inventario y ventas',
                'Búsqueda y filtros avanzados',
                'Historial de movimientos de stock',
                'Dashboard con métricas clave'
            ],
            learned: [
                'Diseño de base de datos relacional compleja',
                'Implementación de transacciones SQL para consistencia',
                'Generación de reportes y gráficos dinámicos',
                'Exportación de datos a diferentes formatos'
            ],
            next: [
                'Código de barras para productos',
                'Integración con impresora fiscal',
                'Multi-sucursal',
                'Predicción de demanda con ML'
            ]
        },
        3: {
            title: 'Automation Hub con n8n',
            problem: 'Tareas repetitivas como envío de notificaciones, sincronización de datos entre plataformas y procesamiento de información consumían mucho tiempo.',
            solution: 'Workflows de automatización con n8n que integran múltiples servicios (Slack, Google Sheets, email, WhatsApp) y procesan datos automáticamente.',
            features: [
                'Automatización de notificaciones por email y WhatsApp',
                'Integración con Slack para alertas del equipo',
                'Sincronización automática con Google Sheets',
                'Webhooks para recibir eventos de APIs externas',
                'Procesamiento y transformación de datos',
                'Programación de tareas con cron',
                'Logs y monitoreo de ejecuciones',
                'Manejo de errores y reintentos'
            ],
            learned: [
                'Diseño de workflows complejos con n8n',
                'Integración con múltiples APIs REST',
                'Manejo de webhooks y eventos asíncronos',
                'Transformación de datos entre diferentes formatos'
            ],
            next: [
                'Integración con más servicios (Notion, Airtable)',
                'Dashboard de monitoreo en tiempo real',
                'Automatizaciones con IA (OpenAI API)',
                'Sistema de aprobaciones para workflows críticos'
            ]
        },
        4: {
            title: 'Estructuras de Datos en C++',
            problem: 'Necesidad de comprender a fondo las estructuras de datos fundamentales y su implementación desde cero para la carrera universitaria.',
            solution: 'Implementaciones completas de estructuras de datos clásicas (pilas, colas, listas, árboles) con análisis de complejidad y casos de prueba.',
            features: [
                'Pilas (Stack) con operaciones push, pop, peek',
                'Colas (Queue) simples y circulares',
                'Listas enlazadas simples y dobles',
                'Árboles binarios de búsqueda (BST)',
                'Árboles AVL con balanceo automático',
                'Análisis de complejidad temporal y espacial',
                'Casos de prueba exhaustivos',
                'Documentación detallada de cada implementación'
            ],
            learned: [
                'Gestión manual de memoria con punteros en C++',
                'Algoritmos de balanceo de árboles (rotaciones)',
                'Análisis de complejidad Big O',
                'Debugging de problemas con memoria (memory leaks)'
            ],
            next: [
                'Implementación de grafos y algoritmos (Dijkstra, BFS, DFS)',
                'Tablas hash con manejo de colisiones',
                'Heaps y priority queues',
                'Visualizador web de estructuras de datos'
            ]
        }
    };
    
    const project = projects[projectId];
    
    return `
        <h2>${project.title}</h2>
        
        <h3>🎯 Problema</h3>
        <p>${project.problem}</p>
        
        <h3>💡 Solución</h3>
        <p>${project.solution}</p>
        
        <h3>✨ Funcionalidades Implementadas</h3>
        <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        
        <h3>📚 Qué Aprendí</h3>
        <ul>
            ${project.learned.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        <h3>🚀 Próximos Pasos</h3>
        <ul>
            ${project.next.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

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
    
    // Simulación de envío exitoso
    showFormMessage('¡Mensaje enviado exitosamente! Te responderé pronto.', 'success');
    contactForm.reset();
    
    // En producción, aquí harías un fetch a tu backend o servicio de email
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) })
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// ===== FOOTER YEAR =====
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== ANIMACIÓN INICIAL =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
