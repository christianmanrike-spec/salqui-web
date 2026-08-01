# Salqui Visión — Sitio web

Landing B2B de **Salqui**, marca de lentes oftálmicos de alta calidad para ópticas y optometrías en Colombia.
Sitio estático, sin build ni dependencias de servidor.

- Producción prevista: **salquivision.com**
- Contacto comercial: comercial@salquivision.com
- Desarrollado por [Comper Creativo](https://compercreativo.com/)

## Estructura

```
salqui-web/
├── index.html                  # Página completa (entrada del sitio)
├── support.js                  # Runtime del componente de diseño
├── assets/                     # Logos, isotipos e iconos de marca (PNG)
├── uploads/                    # Fotografía de producto y de canal
├── _ds/                        # Salqui Design System (tokens + bundle)
│   └── salqui-design-system-.../
│       ├── styles.css          # Entrada global (importa todos los tokens)
│       ├── _ds_bundle.js       # Componentes del sistema de diseño
│       └── tokens/             # colors · typography · fonts · layout · base
├── src/
│   └── Salqui.dc.html          # Fuente editable (misma página, para edición)
├── package.json
├── .gitignore
└── README.md
```

## Secciones de la página

1. Hero — "Claridad diseñada"
2. Diferenciales técnicos (asférico, baja reflexión, nitidez, precisión)
3. Tecnología — construcción del lente
4. **Tipos de lentes** — filtro de luz azul, fotocromáticos y Transitions®
5. Calidad 9/10 — comparativo
6. Negocio para la óptica
7. Proceso de pedido
8. Acompañamiento comercial
9. Contacto (WhatsApp, correo, dirección)
10. Redes sociales
11. Footer

## Uso local

Cualquier servidor estático sirve. Por ejemplo:

```bash
npx serve .
# o
python3 -m http.server 8000
```

Abre `http://localhost:8000`. No abras `index.html` con `file://`: el navegador bloquea la carga de los módulos locales.

## Publicación

**GitHub Pages** — sube el contenido de esta carpeta a la rama `main` y activa Pages sobre la raíz.
Añade un archivo `CNAME` con `salquivision.com` si vas a usar el dominio propio.

**Netlify / Vercel** — arrastra la carpeta; sin comando de build, directorio de publicación `/`.

## Notas

- `_ds/` contiene el sistema de diseño de la marca: colores, tipografía (Archivo + IBM Plex Mono) y espaciados. Cambia tokens ahí, no valores sueltos en la página.
- Todas las animaciones respetan `prefers-reduced-motion`.
- El logo de Transitions® es marca registrada de su titular y se usa con fines de referencia de producto.

© 2026 Salqui Colombia. Todos los derechos reservados.
