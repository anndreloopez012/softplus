import nodemailer from 'nodemailer';

// Email configuration from email-configuration.md
const emailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'ventas@softplusgt.com',
    pass: process.env.SMTP_PASS || '', // Set this in your environment
  },
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Email template
const createEmailTemplate = (formData: any) => {
  return {
    from: `"SoftPlus GT - Formulario Web" <${emailConfig.auth.user}>`,
    to: ['ventas@softplusgt.com', 'contacto@softplusgt.com'],
    subject: `🚀 Nuevo Lead de Proyecto - ${formData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">🎯 Nuevo Proyecto Tecnológico</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Solicitud desde SoftPlus GT</p>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: #667eea; margin-bottom: 20px;">📋 Información del Cliente</h2>
          
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #667eea; font-weight: bold;">👤 Nombre:</td>
                <td style="padding: 8px 0;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #667eea; font-weight: bold;">📧 Email:</td>
                <td style="padding: 8px 0;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #667eea; font-weight: bold;">📱 Teléfono:</td>
                <td style="padding: 8px 0;">${formData.phone || 'No proporcionado'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #667eea; font-weight: bold;">🏢 Empresa:</td>
                <td style="padding: 8px 0;">${formData.company || 'No proporcionada'}</td>
              </tr>
            </table>
          </div>
          
          <h2 style="color: #667eea; margin-bottom: 15px;">💭 Mensaje del Proyecto</h2>
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; line-height: 1.6;">${formData.message}</p>
          </div>
          
          <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); padding: 20px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #667eea; font-weight: bold;">⏰ Enviado el ${new Date().toLocaleString('es-GT')}</p>
          </div>
        </div>
        
        <div style="background: rgba(255,255,255,0.02); padding: 20px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
          <p style="margin: 0; color: #888; font-size: 14px;">
            📧 Correo generado automáticamente desde softplusgt.com
          </p>
        </div>
      </div>
    `,
    text: `
      NUEVO PROYECTO TECNOLÓGICO - SoftPlus GT
      
      Información del Cliente:
      - Nombre: ${formData.name}
      - Email: ${formData.email}
      - Teléfono: ${formData.phone || 'No proporcionado'}
      - Empresa: ${formData.company || 'No proporcionada'}
      
      Mensaje del Proyecto:
      ${formData.message}
      
      Enviado el: ${new Date().toLocaleString('es-GT')}
    `
  };
};

// Send email function
export const sendContactEmail = async (formData: any) => {
  try {
    // Verify transporter configuration
    await transporter.verify();
    
    // Create email content
    const emailOptions = createEmailTemplate(formData);
    
    // Send email
    const result = await transporter.sendMail(emailOptions);
    
    console.log('✅ Email enviado exitosamente:', result.messageId);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('❌ Error enviando email:', error);
    
    // Log detailed error for debugging
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
    }
    
    throw new Error('Error al enviar el correo electrónico');
  }
};

// Test email configuration
export const testEmailConnection = async () => {
  try {
    await transporter.verify();
    console.log('✅ Configuración de correo válida');
    return true;
  } catch (error) {
    console.error('❌ Error en configuración de correo:', error);
    return false;
  }
};