// Security utilities for protecting the application

// XSS Protection
export const sanitizeInput = (input: string): string => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};

// CSRF Token generation
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Content Security Policy headers
export const getSecurityHeaders = () => ({
  'Content-Security-Policy': `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googleapis.com *.gstatic.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com fonts.googleapis.com;
    font-src 'self' fonts.gstatic.com data:;
    img-src 'self' data: https: blob:;
    connect-src 'self' *.supabase.co;
    frame-src 'none';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
  `.replace(/\s+/g, ' ').trim(),
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
});

// Rate limiting for forms
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  
  constructor(private maxAttempts: number = 5, private windowMs: number = 15 * 60 * 1000) {}
  
  canAttempt(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    this.attempts.set(identifier, validAttempts);
    return true;
  }
  
  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

export const formRateLimiter = new RateLimiter();

// Input validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 100 && /^[a-zA-ZÀ-ÿ\s]+$/.test(name);
};

// Security logging
export const logSecurityEvent = (event: string, details: any = {}) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Security Event: ${event}`, details);
  }
  // In production, send to monitoring service
};

// Honeypot field for bot detection
export const createHoneypot = (): HTMLInputElement => {
  const honeypot = document.createElement('input');
  honeypot.type = 'text';
  honeypot.name = 'website';
  honeypot.style.position = 'absolute';
  honeypot.style.left = '-9999px';
  honeypot.style.opacity = '0';
  honeypot.tabIndex = -1;
  honeypot.autocomplete = 'off';
  return honeypot;
};