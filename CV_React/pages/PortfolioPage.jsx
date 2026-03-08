import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Projects from '../components/Projects';

export default function PortfolioPage() {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      <Projects />
    </div>
  );
}
