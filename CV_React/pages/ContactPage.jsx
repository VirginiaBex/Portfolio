import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

export default function ContactPage() {
  const theme = useTheme();

  const contactLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/VirginiaBex',
      description: 'Ver mis proyectos y código'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      description: 'Mi perfil profesional'
    },
    {
      name: 'Twitter/X',
      url: 'https://twitter.com',
      description: 'Sígueme en redes'
    }
  ];

  return (
    <div style={{ backgroundColor: theme.colors.background, color: theme.colors.text, minHeight: '100vh' }}>
      <Container className="py-5">
        <div className="contact-page">
          <h1 
            className="text-center mb-3" 
            style={{ color: theme.colors.text, fontSize: '3rem', fontWeight: 'bold' }}
          >
            Contacto
          </h1>
          
          <p 
            className="text-center mb-5" 
            style={{ color: theme.colors.text, fontSize: '1.1rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Soy el tipo de persona que combina creatividad con lógica, que aprende por pasión y que siempre busca el siguiente reto.
            Si mi portafolio te ha gustado, espera a conocerme. Conecta conmigo.
          </p>

          <Row className="g-4" style={{ justifyContent: 'center', marginTop: '3rem' }}>
            {contactLinks.map((link, index) => (
              <Col md={6} lg={4} key={index}>
                <div 
                  style={{
                    backgroundColor: theme.colors.cardBg,
                    border: `2px solid ${theme.colors.cardBorder}`,
                    borderRadius: '12px',
                    padding: '2rem',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div>
                    <h2 style={{ color: theme.colors.text, marginBottom: '1rem', fontSize: '1.8rem' }}>
                      {link.name}
                    </h2>
                    <p style={{ color: theme.colors.text, marginBottom: '1.5rem', fontSize: '1rem' }}>
                      {link.description}
                    </p>
                  </div>
                  
                  <Button
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: theme.colors.primary,
                      borderColor: theme.colors.primary,
                      color: theme.isDark ? '#1a1a1a' : '#F5E6D3',
                      fontSize: '1rem',
                      padding: '0.8rem 2rem',
                      fontWeight: '600',
                      width: '100%'
                    }}
                  >
                    Visitar
                  </Button>
                </div>
              </Col>
            ))}
          </Row>

          <div 
            style={{
              textAlign: 'center',
              marginTop: '4rem',
              padding: '2rem',
              backgroundColor: theme.colors.cardBg,
              borderRadius: '8px',
              border: `2px solid ${theme.colors.cardBorder}`
            }}
          >
            <h3 style={{ color: theme.colors.text, marginBottom: '1rem' }}>
              Por último...
            </h3>
            <p style={{ color: theme.colors.text, marginBottom: 0 }}>
              Gracias por llegar hasta aquí. Te mereces un café y un proyecto sin bugs. 
              Espero que tengas un excelente día (y que tu código compile al primer intento).
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
