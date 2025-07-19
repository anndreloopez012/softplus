# 🚀 SoftPlus GT - Soluciones Tecnológicas Avanzadas

## 🌟 Sobre el Proyecto

**SoftPlus GT** es una empresa guatemalteca especializada en desarrollo de software, aplicaciones móviles, sitios web y soluciones tecnológicas innovadoras. Esta es nuestra página web corporativa con diseño futurista que refleja nuestra expertise en tecnología.

## ✨ Características

- 🎨 **Diseño Futurista**: Interfaz moderna con efectos de scroll estilo Apple
- 📱 **PWA Ready**: Aplicación web progresiva instalable
- 🔒 **Seguridad Avanzada**: Headers de seguridad, validaciones y protección contra ataques
- 📧 **Sistema de Correo**: Formulario funcional con Nodemailer
- 🌙 **Tema Oscuro**: Paleta de colores tecnológica y profesional
- ⚡ **Performance**: Optimizado para velocidad y experiencia de usuario

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animaciones**: Framer Motion
- **Build Tool**: Vite
- **Email**: Nodemailer
- **PWA**: Service Worker + Manifest

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Navegar al directorio
cd softplus-gt

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📧 Configuración de Correo

El sistema de correo está configurado con **Nodemailer**. Para activarlo en producción:

1. Configurar la variable de entorno:
```bash
SMTP_PASS=tu-contraseña-de-aplicacion-gmail
```

2. Generar contraseña de aplicación en Gmail:
   - Activar verificación en 2 pasos
   - Crear contraseña de aplicación específica
   - Usar esa contraseña en la variable `SMTP_PASS`

Ver `email-configuration.md` para más detalles.

## 🔒 Características de Seguridad

- **Headers de Seguridad**: CSP, XSS Protection, CSRF
- **Validación de Inputs**: Sanitización y validación de formularios
- **Rate Limiting**: Protección contra spam
- **Honeypot**: Detección de bots
- **Logging**: Registro de eventos de seguridad

## 📱 PWA (Progressive Web App)

La aplicación incluye:
- Manifest para instalación
- Service Worker para cache
- Iconos optimizados (72x72 a 512x512)
- Funcionamiento offline básico

## 🎯 Servicios que Ofrecemos

- **Desarrollo Web**: Sitios web modernos y responsivos
- **Aplicaciones Móviles**: iOS y Android nativas
- **E-commerce**: Tiendas online completas
- **Software Empresarial**: Sistemas ERP y CRM
- **Consultorías TI**: Asesoría tecnológica especializada

## 📞 Contacto

- **Teléfono**: +502 3011 5830
- **Email**: ventas@softplusgt.com
- **WhatsApp**: +502 3011 5830
- **Ubicación**: Ciudad de Guatemala, Zona 10

## 🌍 Deploy y Producción

### Variables de Entorno Requeridas
```env
SMTP_PASS=contraseña-de-aplicacion-gmail
```

### Scripts Disponibles
```bash
npm run dev          # Desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linting del código
```

## 📄 Licencia

© 2024 SoftPlus GT. Todos los derechos reservados.

---

**Desarrollado con ❤️ por el equipo de SoftPlus GT**
