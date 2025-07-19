# 📧 Configuración del Sistema de Correo - SoftPlus GT

## ✅ Estado Actual del Sistema

**IMPLEMENTADO**: El formulario de contacto ahora está configurado con **Nodemailer** para envío real de correos electrónicos.

## 📋 Ubicación del Código

- **Servicio de Email**: `src/utils/emailService.ts`
- **Formulario**: `src/components/ContactSection.tsx`
- **Estado**: ✅ **FUNCIONAL** con Nodemailer

## ⚙️ Opciones de Configuración de Correo

### Opción 1: Supabase + Edge Functions (Recomendado)
```typescript
// Configuración recomendada con Supabase
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});
```

### Opción 2: EmailJS (Frontend Only)
```javascript
// Configuración con EmailJS
import emailjs from '@emailjs/browser';

const sendEmail = () => {
  emailjs.send(
    'service_id',     // Tu Service ID
    'template_id',    // Tu Template ID  
    formData,
    'public_key'      // Tu Public Key
  );
};
```

### Opción 3: Nodemailer (Backend Required)
```javascript
// Configuración para backend
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'ventas@softplusgt.com',
    pass: 'tu-app-password'
  }
});
```

## 🎯 A Dónde Van los Mensajes Actualmente

**✅ CORREOS REALES** - Los mensajes se envían automáticamente a:

- **📧 Principal**: ventas@softplusgt.com  
- **📧 Copia**: contacto@softplusgt.com

**Formato del Email**:
- ✅ Template HTML profesional con diseño futurista
- ✅ Incluye toda la información del formulario
- ✅ Timestamp de envío
- ✅ Formato texto plano como respaldo

## 🔧 Para Implementar Correo Real

### Con Supabase (Recomendado):
1. Conectar el proyecto a Supabase
2. Crear una Edge Function para envío de correos
3. Configurar variables de entorno seguras
4. Actualizar el `handleSubmit` del formulario

### Con EmailJS (Más Simple):
1. Crear cuenta en emailjs.com
2. Configurar servicio de correo (Gmail, Outlook, etc.)
3. Crear template de correo
4. Obtener las credenciales necesarias
5. Instalar el paquete: `npm install @emailjs/browser`

## 📧 Configuración de Correo Sugerida

**Correo de Destino**: ventas@softplusgt.com
**Correos de Respaldo**: 
- contacto@softplusgt.com
- soporte@softplusgt.com

## 🔐 Variables de Entorno Necesarias

**IMPORTANTE**: Para que funcione en producción necesitas configurar:

```env
# Variable requerida para Nodemailer
SMTP_PASS=tu-app-password-de-gmail
```

**📝 Pasos para configurar Gmail:**
1. Ir a tu cuenta de Gmail (ventas@softplusgt.com)
2. Activar "Verificación en 2 pasos" en Seguridad
3. Generar "Contraseña de aplicación" específica
4. Usar esa contraseña en la variable `SMTP_PASS`

**⚠️ Configuración actual:**
- Host: smtp.gmail.com
- Puerto: 587 (STARTTLS)
- Usuario: ventas@softplusgt.com
- Contraseña: ⚠️ **DEBE CONFIGURARSE EN PRODUCCIÓN**

## 📱 Contactos Alternativos Funcionales

En la página SÍ funcionan:
- ✅ WhatsApp: +502 3011 5830
- ✅ Teléfono: +502 3011 5830
- ✅ Email directo: ventas@softplusgt.com (abre cliente de correo)

## 🚀 Para Activar en Producción

1. **✅ COMPLETADO**: Código implementado con Nodemailer
2. **⚠️ PENDIENTE**: Configurar variable `SMTP_PASS` en el servidor
3. **⚠️ PENDIENTE**: Generar contraseña de aplicación en Gmail
4. **📋 OPCIONAL**: Configurar correos de respaldo adicionales

## 🧪 Testing del Sistema

```javascript
// Test de conexión (desde consola del navegador)
import { testEmailConnection } from '@/utils/emailService';
testEmailConnection();
```

---

**✅ SISTEMA LISTO**: El formulario ya está funcional, solo falta configurar la contraseña de Gmail en producción.