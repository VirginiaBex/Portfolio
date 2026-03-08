import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = {
    isDark,
    colors: isDark ? {
      background: '#1a1a1a',
      text: '#f0f0f0',
      cardBg: '#2a2a2a',
      cardBorder: '#444444',
      accentDark: '#0d0d0d',
      accentLight: '#f5f5f5',
      primary: '#e8a87c',
      secondary: '#c8a882'
    } : {
      background: '#F5E6D3',
      text: '#2a2a2a',
      cardBg: '#FFFBF5',
      cardBorder: '#E8DCC8',
      accentDark: '#2a2a2a',
      accentLight: '#E8DCC8',
      primary: '#2a2a2a',
      secondary: '#D4C5B9'
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
};
