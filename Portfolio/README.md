# Portafolio Personal — Silvana Reyes

## Descripción

Este proyecto consiste en un portafolio personal desarrollado con React y Vite. Su objetivo es presentar mi información personal, experiencia laboral, formación académica y proyectos de desarrollo de software.

El portafolio utiliza una estructura de componentes basada en Atomic Design para organizar el código y facilitar su mantenimiento.

## Objetivos del proyecto

- Presentar mi perfil profesional.
- Mostrar mi experiencia laboral y estudios.
- Exhibir los proyectos DecoHogar e Identity Simulation.
- Facilitar la navegación entre las distintas secciones.
- Incorporar un formulario de contacto con validaciones.
- Aplicar buenas prácticas de organización, calidad y pruebas de software.

## Tecnologías utilizadas

- **React:** construcción de la interfaz de usuario.
- **Vite:** desarrollo y compilación de la aplicación.
- **JavaScript:** programación de la funcionalidad.
- **Ant Design:** componentes de interfaz.
- **CSS:** estilos visuales y adaptación del diseño.
- **Vitest:** ejecución de pruebas automatizadas.
- **React Testing Library:** pruebas de los componentes.
- **jest-dom:** comprobaciones de elementos de la interfaz.
- **ESLint:** detección de errores y revisión del código.

## Estructura del proyecto

```text
src/
├── assets/
│   ├── profile/
│   ├── projects/
│   └── decorative/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── layout/
├── hooks/
├── pages/
├── setupTests.js
├── App.jsx
├── App.css
└── main.jsx
```

La estructura puede ampliarse a medida que se incorporen nuevas funcionalidades.

## Instalación

Es necesario tener Node.js y npm instalados.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/ShiimiChan/EV2Portfolio.git
   ```

2. Entrar en la carpeta del proyecto:

   ```bash
   cd EV2Portfolio/Portfolio
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará la dirección local para abrir el portafolio en el navegador.

## Compilación y revisión del código

Para comprobar que el proyecto puede compilarse:

```bash
npm run build
```

Para revisar posibles errores de código:

```bash
npm run lint
```

## Pruebas automatizadas

Las pruebas se ejecutan mediante:

```bash
npm run test
```

Se utilizará Vitest junto con React Testing Library para verificar el comportamiento de los componentes y las funcionalidades del portafolio.

## Funcionalidades principales

- Navegación entre secciones.
- Presentación personal.
- Experiencia laboral.
- Formación académica.
- Galería de proyectos.
- Formulario de contacto con validaciones.
- Pie de página con año dinámico.

## Organización mediante Atomic Design

- **Atoms:** componentes básicos y reutilizables, como enlaces.
- **Molecules:** combinación de componentes básicos para formar elementos más completos.
- **Organisms:** componentes funcionales más complejos, como la galería de proyectos y el formulario.
- **Layout:** estructura y distribución general de las secciones.
- **Pages:** páginas que reúnen los componentes para construir la vista de la aplicación.

## Autora

Silvana Reyes Acchiardi

Portafolio personal desarrollado con fines académicos y profesionales.
