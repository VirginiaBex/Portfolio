import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const theme = useTheme();

  return (
    <footer 
      className="footer"
      style={{
        backgroundColor: theme.isDark ? '#0d0d0d' : '#2a2a2a',
        color: theme.colors.accentLight
      }}
    >
      <p>&copy; 2026 Mi CV. Todos los derechos reservados.</p>
      <div className="social-links">
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: theme.colors.accentLight }}
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/VirginiaBex" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: theme.colors.accentLight }}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
