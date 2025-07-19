# 📧 Configuración del Sistema de Correo - SoftPlus GT

## 🚨 Estado Actual del Sistema

**IMPORTANTE**: Actualmente el formulario de contacto NO está enviando correos reales. Es una simulación que solo muestra un mensaje de éxito.

## 📋 Ubicación del Código

- **Archivo**: `src/components/ContactSection.tsx`
- **Líneas**: 93-106 (función `handleSubmit`)
- **Estado**: Simulación con `setTimeout` de 2 segundos

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

**NINGÚN LUGAR** - Es solo una simulación visual.

Los usuarios ven este mensaje:
- ✅ "¡Mensaje enviado exitosamente!"
- ✅ "Nos pondremos en contacto contigo muy pronto."

Pero los datos del formulario NO se envían a ningún correo.

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

## 🔐 Variables de Entorno Necesarias (Ejemplo)

```env
# Para Nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ventas@softplusgt.com
SMTP_PASS=tu-app-password

# Para EmailJS
EMAILJS_SERVICE_ID=service_xxxxxxx
EMAILJS_TEMPLATE_ID=template_xxxxxxx
EMAILJS_PUBLIC_KEY=tu_public_key
```

## 📱 Contactos Alternativos Funcionales

En la página SÍ funcionan:
- ✅ WhatsApp: +502 3011 5830
- ✅ Teléfono: +502 3011 5830
- ✅ Email directo: ventas@softplusgt.com (abre cliente de correo)

## 🚀 Próximos Pasos

1. **Decidir el método de envío** (Supabase, EmailJS, etc.)
2. **Configurar las credenciales** necesarias
3. **Actualizar el código** del formulario
4. **Probar el envío** de correos
5. **Configurar notificaciones** de respaldo

---

**Nota**: Te recomiendo usar **Supabase con Edge Functions** para máxima seguridad y escalabilidad.