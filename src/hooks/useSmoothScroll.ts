import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // CSS for smooth scrolling behavior
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar styling (like Apple) */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: hsl(var(--background));
      }
      
      ::-webkit-scrollbar-thumb {
        background: hsl(var(--muted-foreground) / 0.3);
        border-radius: 10px;
        transition: background 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: hsl(var(--primary) / 0.5);
      }
      
      /* Hide scrollbar for Firefox */
      html {
        scrollbar-width: thin;
        scrollbar-color: hsl(var(--muted-foreground) / 0.3) hsl(var(--background));
      }
      
      /* Momentum scrolling for iOS */
      * {
        -webkit-overflow-scrolling: touch;
      }
      
      /* Reduce motion for users who prefer it */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        html {
          scroll-behavior: auto;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
};