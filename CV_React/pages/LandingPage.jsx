import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function LandingPage() {
  const navigate = useNavigate();
  const theme = useTheme();

  const skills = [
    { name: 'HTML, CSS & JavaScript', level: 'Nivel alto' },
    { name: 'Bases de Datos Relacionales', level: 'Nivel alto' },
    { name: 'Java', level: 'Nivel alto' },
    { name: 'Power BI', level: 'Nivel alto' },
    { name: 'React, PHP & Laravel', level: 'Nivel Medio' },
  ];

  return (
    <div style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      {/* Hero Section */}
      <Container fluid className="py-5" style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        textAlign: 'center'
      }}>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                borderRadius: '20px',
                width: '300px',
                height: '360px',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                padding: '0'
              }}>
                <img 
                  src={`${import.meta.env.BASE_URL}sinFondo.png`} 
                  alt="Virginia María Berenguel Expósito" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center center',
                    borderRadius: '14px',
                    display: 'block',
                    transform: 'scale(1.08)',
                    transformOrigin: 'center center'
                  }}
                />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <h1 
              className="text-center mb-3"
              style={{ color: theme.colors.text, fontSize: '3rem', fontWeight: 'bold' }}
            >
              Virginia María Berenguel Expósito
            </h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', opacity: 0.9, color: theme.colors.text }}>
              Desarrolladora Web en Formación
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8', color: theme.colors.text }}>
              Estudiante de Desarrollo de Aplicaciones Web (DAW) en el IES Al-Ándalus. 
              <strong> Autodidacta</strong>, con capacidad para resolver tareas que requieren cierta complejidad. 
              Domino HTML, CSS, JavaScript, Java y Bases de Datos Relacionales. Nivel medio en React, PHP y Laravel. 
              Certificada en Power BI para análisis de datos.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button 
                href="https://github.com/VirginiaBex"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: theme.colors.primary, 
                  borderColor: theme.colors.primary,
                  color: theme.isDark ? '#1a1a1a' : '#F5E6D3',
                  fontSize: '1rem',
                  padding: '0.8rem 1.5rem'
                }}
              >
                GitHub
              </Button>
              <Button 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: theme.colors.primary, 
                  borderColor: theme.colors.primary,
                  color: theme.isDark ? '#1a1a1a' : '#F5E6D3',
                  fontSize: '1rem',
                  padding: '0.8rem 1.5rem'
                }}
              >
                LinkedIn
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Main Content */}
      <Container className="py-5">
        {/* Habilidades Destacadas */}
        <section className="mb-5">
          <h2 style={{ color: theme.colors.text, marginBottom: '2rem', textAlign: 'center' }}>
            Tecnologías y Habilidades
          </h2>
          <Row className="g-4">
            {skills.map((skill, index) => (
              <Col md={6} lg={4} key={index}>
                <Card style={{ 
                  borderColor: theme.colors.cardBorder, 
                  backgroundColor: theme.colors.cardBg,
                  color: theme.colors.text,
                  textAlign: 'center',
                  height: '100%'
                }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1.5rem', marginBottom: '1rem', color: theme.colors.text }}>
                      {skill.name}
                    </Card.Title>
                    <Card.Text style={{ fontSize: '1.1rem', color: theme.colors.text }}>
                      {skill.level}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1rem', color: theme.colors.text, fontStyle: 'italic' }}>
            Autodidacta con capacidad para resolver tareas complejas y aprender nuevas tecnologías
          </p>
        </section>

        {/* Call to Action */}
        <section style={{ textAlign: 'center' }}>
          <h3 style={{ color: theme.colors.text, marginBottom: '1.5rem' }}>
            ¿Quieres ver mis proyectos?
          </h3>
          <Button 
            style={{ 
              backgroundColor: theme.colors.primary, 
              borderColor: theme.colors.primary,
              color: theme.isDark ? '#1a1a1a' : '#F5E6D3',
              fontSize: '1.1rem',
              padding: '1rem 2rem'
            }} 
            size="lg" 
            onClick={() => navigate('/portfolio')}
          >
            Explora mi Portafolio
          </Button>
        </section>
      </Container>
    </div>
  );
}
