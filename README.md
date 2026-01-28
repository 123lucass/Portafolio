# Portafolio Web - Lucas Rodolfo Silvano Dominguez

Portafolio profesional de Desarrollador Full Stack Jr con diseño moderno, responsive y modo oscuro/claro.

## 🚀 Características

- ✅ Diseño moderno y profesional
- ✅ Responsive (mobile-first)
- ✅ Dark/Light mode con persistencia
- ✅ Animaciones suaves al scroll
- ✅ SEO optimizado
- ✅ Accesibilidad (WCAG)
- ✅ Sin dependencias pesadas

## 📁 Estructura del Proyecto

```
portafolio/
├── index.html          # Página principal
├── styles.css          # Estilos completos
├── script.js           # Funcionalidad JavaScript
├── README.md           # Este archivo
└── assets/
    ├── img/
    │   ├── profile.jpg
    │   ├── project-1.png
    │   ├── project-2.png
    │   ├── project-3.png
    │   └── project-4.png
    ├── CV_Lucas_Dominguez.pdf
    ├── og-image.png
    └── favicon.ico
```

## 🛠️ Cómo Usar con Live Server

### Opción 1: VS Code Live Server (Recomendado)

1. Abrí VS Code
2. Instalá la extensión "Live Server" de Ritwick Dey
3. Abrí la carpeta del proyecto
4. Click derecho en `index.html` → "Open with Live Server"
5. El navegador se abrirá automáticamente en `http://localhost:5500`

### Opción 2: Abrir directamente

1. Navegá a la carpeta del proyecto
2. Doble click en `index.html`
3. Se abrirá en tu navegador predeterminado

## ✏️ Personalización

### 1. Datos de Contacto

Editá `index.html` y buscá estas secciones:

**Navbar (línea ~40):**
```html
<a href="./assets/CV_Lucas_Dominguez.pdf" download class="btn btn-outline btn-sm">
<a href="https://github.com/tu-usuario" target="_blank" class="btn btn-outline btn-sm">
```

**Sección Contacto (línea ~600):**
```html
<a href="mailto:tu-email@ejemplo.com" class="contact-link">
<a href="https://linkedin.com/in/tu-perfil" target="_blank" class="contact-link">
<a href="https://github.com/tu-usuario" target="_blank" class="contact-link">
<a href="https://wa.me/5493794123456" target="_blank" class="contact-link">
```

**Footer (línea ~680):**
```html
<a href="https://github.com/tu-usuario" target="_blank">
<a href="https://linkedin.com/in/tu-perfil" target="_blank">
<a href="mailto:tu-email@ejemplo.com">
```

### 2. Proyectos

Buscá la sección `<!-- Proyectos Section -->` (línea ~150) y editá:

- **Título del proyecto:** `<h3 class="project-title">`
- **Descripción:** `<p class="project-description">`
- **Stack:** `<span class="tag">` (agregá o quitá tecnologías)
- **Features:** `<li>` dentro de `<ul class="project-features">`
- **Links:** `<a href="URL">` en `<div class="project-links">`

### 3. Imágenes

Reemplazá las imágenes en `assets/img/`:

- `profile.jpg` - Tu foto de perfil
- `project-1.png` a `project-4.png` - Capturas de tus proyectos
- `og-image.png` - Imagen para compartir en redes (1200x630px)
- `favicon.ico` - Ícono del sitio

### 4. CV

Subí tu CV en PDF a `assets/CV_Lucas_Dominguez.pdf`

## 📤 Deploy

### GitHub Pages

1. Creá un repositorio en GitHub
2. Subí todos los archivos:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/portafolio.git
git push -u origin main
```
3. Andá a Settings → Pages
4. Source: Deploy from branch `main` → carpeta `/ (root)`
5. Guardá y esperá 1-2 minutos
6. Tu sitio estará en `https://tu-usuario.github.io/portafolio`

### Netlify

1. Andá a [netlify.com](https://netlify.com) y registrate
2. Click en "Add new site" → "Deploy manually"
3. Arrastrá la carpeta del proyecto
4. Netlify te dará una URL tipo `https://random-name.netlify.app`
5. (Opcional) Cambiá el nombre en Site settings → Site details → Change site name

### Vercel

1. Instalá Vercel CLI:
```bash
npm install -g vercel
```
2. En la carpeta del proyecto:
```bash
vercel
```
3. Seguí las instrucciones (login, configuración)
4. Tu sitio estará en `https://portafolio-xxx.vercel.app`

**O desde la web:**
1. Andá a [vercel.com](https://vercel.com) y registrate
2. Click en "Add New" → "Project"
3. Importá tu repositorio de GitHub
4. Click en "Deploy"

## ✅ Checklist Final

Antes de publicar, verificá:

- [ ] Todos los links funcionan (GitHub, LinkedIn, Email, WhatsApp)
- [ ] CV en PDF subido y descargable
- [ ] Imágenes de proyectos agregadas
- [ ] Capturas de pantalla de demos (si aplica)
- [ ] Links a demos y repositorios actualizados
- [ ] Foto de perfil agregada
- [ ] Favicon personalizado
- [ ] Meta tags de SEO completos (title, description)
- [ ] Open Graph image para redes sociales
- [ ] Probado en mobile y desktop
- [ ] Dark/Light mode funciona correctamente
- [ ] Formulario de contacto valida correctamente
- [ ] Todas las animaciones funcionan
- [ ] Sin errores en consola del navegador

## 🎨 Personalización Avanzada

### Cambiar Colores

Editá `styles.css` en la sección `:root` (línea ~10):

```css
:root {
    --primary: #6366f1;     /* Color principal */
    --secondary: #8b5cf6;   /* Color secundario */
    --accent: #ec4899;      /* Color de acento */
    /* ... más variables */
}
```

### Agregar Más Proyectos

1. Copiá un `<article class="project-card">` completo
2. Cambiá `data-project="X"` al siguiente número
3. Actualizá contenido, links e imagen
4. Agregá el modal correspondiente en `script.js` (función `getProjectModalContent`)

### Modificar Animaciones

En `script.js`, buscá `IntersectionObserver` (línea ~150) y ajustá:
- `threshold: 0.1` - Cuándo se activa (0.1 = 10% visible)
- `rootMargin: '0px'` - Margen antes de activar

## 🐛 Troubleshooting

**Las imágenes no se ven:**
- Verificá que las rutas sean correctas (`./assets/img/nombre.png`)
- Asegurate que los archivos existan en la carpeta

**El dark mode no persiste:**
- Verificá que JavaScript esté habilitado
- Revisá la consola del navegador por errores

**Las animaciones no funcionan:**
- Probá en un navegador moderno (Chrome, Firefox, Edge)
- Verificá que `script.js` esté cargando correctamente

**El formulario no envía:**
- Este es un formulario de frontend solamente
- Para enviar emails reales, necesitás un backend o servicio como Formspree

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Licencia

Este proyecto es de uso personal. Podés modificarlo y usarlo libremente para tu propio portafolio.

---

**Hecho con ❤️ por Lucas Rodolfo Silvano Dominguez**
