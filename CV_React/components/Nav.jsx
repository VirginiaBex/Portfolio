import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

export default function NavigationBar() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar 
      style={{ 
        backgroundColor: theme.isDark ? '#0d0d0d' : '#2a2a2a'
      }} 
      variant="dark"
      expand="lg" 
      sticky="top"
      className="px-3"
      expanded={expanded}
    >
      <Navbar.Brand as={Link} to="/" onClick={closeMenu} className="fw-bold me-3" style={{ color: theme.colors.accentLight, fontSize: '1.5rem' }}>
        Mi CV
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        aria-label="Abrir o cerrar navegación"
        className="custom-navbar-toggler"
        onClick={() => setExpanded(!expanded)}
        style={{ borderColor: theme.colors.accentLight }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto text-center">
          <Nav.Link as={Link} to="/" onClick={closeMenu} style={{ color: theme.colors.accentLight }}>Inicio</Nav.Link>
          <Nav.Link as={Link} to="/portfolio" onClick={closeMenu} style={{ color: theme.colors.accentLight }}>Portafolio</Nav.Link>
          <Nav.Link as={Link} to="/experience" onClick={closeMenu} style={{ color: theme.colors.accentLight }}>Experiencia</Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={closeMenu} style={{ color: theme.colors.accentLight }}>Contacto</Nav.Link>
        </Nav>
        <Button
          variant="outline-light"
          onClick={theme.toggleTheme}
          aria-label={theme.isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          title={theme.isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          className="ms-lg-3 mt-3 mt-lg-0"
          style={{
            borderColor: theme.colors.accentLight,
            color: theme.colors.accentLight
          }}
        >
          {theme.isDark ? '☀️' : '🌙'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
