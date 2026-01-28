# GUÍA RÁPIDA: Cómo Configurar la Descarga del CV

## Paso 1: Preparar tu CV

1. Abrí tu CV en Word, Google Docs o el programa que uses
2. Exportalo/Guardalo como **PDF**
3. Renombralo exactamente a: `CV_Lucas_Dominguez.pdf`

## Paso 2: Colocar el CV en el Portafolio

1. Copiá el archivo `CV_Lucas_Dominguez.pdf`
2. Pegalo en la carpeta: `C:\Users\lucas\OneDrive\Desktop\Portafolio\assets\`
3. Asegurate que el nombre sea exactamente `CV_Lucas_Dominguez.pdf`

## Paso 3: Verificar que Funciona

1. Abrí `index.html` con Live Server
2. Buscá el botón "Descargar CV" en el navbar
3. Hacé click y debería descargarse tu CV automáticamente

## ¿Dónde está configurado?

El botón de descarga está en **3 lugares** del código HTML:

### 1. Navbar (línea ~40)
```html
<a href="./assets/CV_Lucas_Dominguez.pdf" download class="btn btn-outline btn-sm">
    <i class="fas fa-download"></i> CV
</a>
```

### 2. Versión móvil del navbar (misma línea)
El mismo botón aparece en el menú móvil

## ¿Querés cambiar el nombre del archivo?

Si querés usar otro nombre (por ejemplo: `mi-cv.pdf`), tenés que:

1. Cambiar el nombre del archivo PDF
2. Actualizar las 2 líneas en `index.html` que dicen:
   ```html
   href="./assets/CV_Lucas_Dominguez.pdf"
   ```
   Por:
   ```html
   href="./assets/mi-cv.pdf"
   ```

## Importante

- El atributo `download` hace que el navegador descargue el archivo en vez de abrirlo
- La ruta `./assets/` es relativa a la ubicación de `index.html`
- Asegurate que el archivo PDF esté en la carpeta `assets/`

---

**¡Listo!** Una vez que coloques tu CV en la carpeta assets, el botón funcionará automáticamente.
