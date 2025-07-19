# SoftPlus GT - Sitio Web Corporativo

## Información del Proyecto

Sitio web corporativo desarrollado con tecnologías modernas para SoftPlus GT, empresa líder en desarrollo de software en Guatemala.

## Cómo editar este código

Hay varias formas de editar esta aplicación:

**Usar tu IDE preferido**

Si quieres trabajar localmente usando tu propio IDE, puedes clonar este repo y hacer push de los cambios.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Características Principales

- ✨ **Diseño Moderno**: Interfaz futurística con efectos visuales avanzados
- 📱 **PWA Ready**: Aplicación web progresiva para instalación móvil
- 🔒 **Seguridad**: Sistema de protección contra ataques y validaciones robustas
- 📧 **Sistema de Contacto**: Formulario funcional con EmailJS
- 🌙 **Dark Theme**: Tema oscuro optimizado para mejor experiencia
- ⚡ **Performance**: Optimizado para carga rápida y navegación fluida

## Configuración del Sistema de Correo

El formulario de contacto está configurado con EmailJS. Para activarlo:

1. Revisa el archivo `email-configuration.md` para instrucciones detalladas
2. Configura las credenciales de EmailJS en `src/components/ContactSection.tsx`
3. Los mensajes se enviarán a: ventas@softplusgt.com

## Cómo desplegar este proyecto

1. **Netlify/Vercel**: Conecta el repositorio para despliegue automático
2. **GitHub Pages**: Usa `npm run build` y despliega la carpeta `dist`
3. **Tu propio servidor**: Ejecuta `npm run build` y sube el contenido
