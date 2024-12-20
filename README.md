# Taller 19 - Grupo 03

## Descripción del Proyecto
Este proyecto consiste en una landing page basada en el sitio [ElectroStationEC](https://electrostationec.netlify.app/), dividida en componentes reutilizables utilizando React. La implementación se centra en estructurar el código de forma modular y ordenada para facilitar su mantenimiento y escalabilidad.

### Objetivos
1. Descomponer una página web existente en componentes reutilizables.
2. Practicar la organización y estructuración de un proyecto React.
3. Desarrollar habilidades para replicar y adaptar interfaces utilizando React.

---

## Contenido del Proyecto

### 1. Componentes creados
La página se dividió en los siguientes componentes principales:

1. **Header:**
   - Contiene el logo y el menú de navegación.
2. **Footer:**
   - Incluye enlaces de contacto, redes sociales y otros elementos secundarios.
3. **Main:**
   - Contiene la estructura principal de la landing page, incluyendo las secciones principales como hero, características, y llamadas a la acción.
4. **HeroSection:**
   - Sección inicial con un encabezado llamativo y un botón principal.
5. **Features:**
   - Lista de características o servicios destacados.
6. **CallToAction:**
   - Sección con botones y mensajes dirigidos a los usuarios para realizar acciones específicas.

#### Estructura del Proyecto
```plaintext
/src
  /components
    Header.jsx
    Footer.jsx
    Main.jsx
    HeroSection.jsx
    Features.jsx
    CallToAction.jsx
  App.jsx
  main.jsx
```

---

## Instrucciones de Uso

### Instalación
1. Clona este repositorio.
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Accede al directorio del proyecto.
   ```bash
   cd <NOMBRE_DEL_DIRECTORIO>
   ```
3. Instala las dependencias.
   ```bash
   npm install
   ```

### Ejecución
Inicia el servidor de desarrollo.
```bash
npm run dev
```
Accede a la aplicación en tu navegador en `http://localhost:5173`.

---

## Conclusión
Esta actividad permitió a los integrantes del grupo 3 fortalecer sus habilidades en React al trabajar en la división y organización de una landing page. La creación de componentes reutilizables mejora la legibilidad y facilita futuras modificaciones.
