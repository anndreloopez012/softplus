# 📧 Configuración del Sistema de Correo - SoftPlus GT

## 🚨 Estado Actual del Sistema

**FUNCIONANDO**: El formulario de contacto está configurado con EmailJS y enviará correos reales una vez que configures las credenciales.

## 📋 Ubicación del Código

- **Archivo**: `src/components/ContactSection.tsx`
- **Líneas**: 18-22 (configuración EmailJS)
- **Estado**: Configurado con EmailJS - **REQUIERE CREDENCIALES**

## ⚙️ Configuración EmailJS - IMPLEMENTADO

### ✅ EmailJS Ya Está Configurado

El sistema ya está implementado usando EmailJS. Solo necesitas configurar las credenciales.

**Archivo**: `src/components/ContactSection.tsx` (líneas 18-22)

```javascript
// Configuración actual - REEMPLAZA ESTOS VALORES
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx',    // Reemplaza con tu Service ID
  TEMPLATE_ID: 'template_xxxxxxx',  // Reemplaza con tu Template ID  
  PUBLIC_KEY: 'tu_public_key'       // Reemplaza con tu Public Key
};
```

### 🔧 Pasos Para Configurar EmailJS:

1. **Crear cuenta en EmailJS**:
   - Ve a https://www.emailjs.com/
   - Registra una cuenta gratuita

2. **Agregar servicio de correo**:
   - Conecta Gmail, Outlook, o tu proveedor de correo
   - Autoriza EmailJS para enviar correos

3. **Crear template de correo**:
   - Crea un template con estos campos:
     - `{{from_name}}` - Nombre del remitente
     - `{{from_email}}` - Email del remitente
     - `{{phone}}` - Teléfono (opcional)
     - `{{company}}` - Empresa (opcional)
     - `{{message}}` - Mensaje
     - `{{to_email}}` - Email destino (ventas@softplusgt.com)

4. **Obtener credenciales**:
   - Service ID (ej: service_abc123)
   - Template ID (ej: template_xyz789)
   - Public Key (ej: user_mno456)

5. **Actualizar código**:
   - Reemplaza los valores en `EMAILJS_CONFIG`

## 🎯 A Dónde Van los Mensajes

**📧 ventas@softplusgt.com** - Una vez configurado EmailJS

**Estado actual**: Configurado pero pendiente de credenciales

Los usuarios recibirán:
- ✅ "¡Mensaje enviado exitosamente!" (si la configuración es correcta)
- ❌ "Error al enviar" (si faltan credenciales o hay error de configuración)

## ✅ EmailJS YA ESTÁ IMPLEMENTADO

**Dependencia instalada**: `@emailjs/browser` ✅
**Código actualizado**: `src/components/ContactSection.tsx` ✅
**Falta**: Solo configurar las credenciales en el código

### 📝 Template Sugerido para EmailJS:

```
Asunto: Nuevo mensaje de contacto - {{from_name}}

Hola equipo de SoftPlus GT,

Has recibido un nuevo mensaje de contacto:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Empresa: {{company}}

Mensaje:
{{message}}

--
Este mensaje fue enviado desde el formulario de contacto de softplusgt.com
```

## 📧 Configuración de Correo Sugerida

**Correo de Destino**: ventas@softplusgt.com
**Correos de Respaldo**: 
- contacto@softplusgt.com
- soporte@softplusgt.com

## 🔑 Credenciales EmailJS Necesarias

**IMPORTANTE**: Estas credenciales deben reemplazarse en el código directamente.

```javascript
// En src/components/ContactSection.tsx líneas 18-22
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',     // Tu Service ID real
  TEMPLATE_ID: 'template_xyz789',   // Tu Template ID real  
  PUBLIC_KEY: 'user_mno456'         // Tu Public Key real
};
```

**📍 Dónde obtener cada credencial:**
- **Service ID**: Dashboard EmailJS > Email Services > tu servicio
- **Template ID**: Dashboard EmailJS > Email Templates > tu template  
- **Public Key**: Dashboard EmailJS > Account > General

## 📱 Contactos Alternativos Funcionales

En la página SÍ funcionan:
- ✅ WhatsApp: +502 3011 5830
- ✅ Teléfono: +502 3011 5830
- ✅ Email directo: ventas@softplusgt.com (abre cliente de correo)

## 🚀 Próximos Pasos INMEDIATOS

1. ✅ **EmailJS ya está implementado** - Solo falta configurar
2. 🔑 **Obtener credenciales de EmailJS** (15 minutos)
3. 📝 **Reemplazar valores en código** (2 minutos)
4. 🧪 **Probar envío de correos** (5 minutos)
5. 📧 **Configurar notificaciones adicionales** (opcional)

## 🎯 ¿Cómo probar que funciona?

1. Completa la configuración de credenciales
2. Envía un mensaje de prueba desde el formulario
3. Revisa tu bandeja de entrada en ventas@softplusgt.com
4. Si no llega, revisa las credenciales en EmailJS dashboard

---

**Estado**: ✅ **LISTO PARA CONFIGURAR** - Solo faltan las credenciales