import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const theme = useTheme();

  return (
    <header 
      className="header"
      style={{
        background: theme.isDark 
          ? `linear-gradient(135deg, #333333 0%, #1a1a1a 100%)`
          : `linear-gradient(135deg, #E8DCC8 0%, #D4C5B9 100%)`,
        color: theme.colors.text,
        borderBottom: `3px solid ${theme.colors.primary}`,
        padding: '1.5rem 2rem'
      }}
    >
      <h1 
        className="text-center" 
        style={{ color: theme.colors.text, fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}
      >
        Virginia María Berenguel Expósito
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 0 }}>Desarrolladora Web en Formación | Estudiante DAW IES Al-Ándalus</p>
    </header>
  );
}
