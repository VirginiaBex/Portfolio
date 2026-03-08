import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExperienceItem from '../components/ExperienceItem';
import { useTheme } from '../context/ThemeContext';

export default function ExperiencePage() {
  const theme = useTheme();
  const experiences = [
    {
      role: 'Estudiante de Desarrollo de Aplicaciones Web (DAW)',
      place: 'IES Al-Ándalus',
      dates: '2023 - 2026',
      details: [
        'Formación integral en desarrollo web con énfasis en frontend y backend',
        'Especialización en JavaScript, React, HTML5, CSS3 y frameworks modernos',
        'Prácticas en desarrollo responsive y diseño UX/UI',
        'Trabajos en equipo y metodologías ágiles (Scrum)',
        'Proyectos individuales y grupales con entregas iterativas'
      ]
    },
    {
      role: 'Certificación: Power BI (Análisis de Datos)',
      place: 'Formación Complementaria',
      dates: '2024',
      details: [
        'Dominio de Power BI para visualización y análisis de datos',
        'Creación de dashboards interactivos y reportes dinámicos',
        'Conexión con múltiples fuentes de datos y transformación con Power Query',
        'Análisis exploratorio de datos (EDA)',
        'Competencias en Business Intelligence aplicado'
      ]
    },
    {
      role: 'Experiencia Técnica Adquirida',
      place: 'Proyectos Educativos',
      dates: '2023 - Presente',
      details: [
        'Nivel alto: HTML5, CSS3, JavaScript ES6+, Java, Bases de Datos Relacionales',
        'Nivel Medio: React, PHP, Laravel',
        'Power BI: Visualización de datos, dashboards interactivos y análisis',
        'Herramientas: Git, GitHub, VS Code, Figma, DevTools',
        'Control de versiones y colaboración en equipo',
        'Autodidacta con capacidad de resolver tareas complejas',
        'Testing, debugging y deployment (Vercel, Netlify, GitHub Pages)'
      ]
    }
  ];

  return (
    <Container className="py-5" style={{ backgroundColor: theme.colors.background }}>
      <div className="experience-page">
        <h2 className="mb-5 text-center" style={{ color: '#2a2a2a', fontWeight: 'bold', fontSize: '2.5rem' }}>Mi Trayectoria Académica</h2>
        <Row>
          <Col md={8} className="mx-auto">
            <div className="experience-container">
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  role={exp.role}
                  place={exp.place}
                  dates={exp.dates}
                  details={exp.details}
                />
              ))}
            </div>
          </Col>
        </Row>

        {/* Sección de Habilidades Técnicas */}
        <Row className="mt-5">
          <Col md={8} className="mx-auto">
            <div style={{
              backgroundColor: theme.colors.cardBg,
              color: theme.colors.text,
              padding: '2rem',
              borderRadius: '8px',
              border: `2px solid ${theme.colors.cardBorder}`
            }}>
              <h3 style={{ color: theme.colors.text, marginBottom: '1.5rem' }}>
                Stack Tecnológico
              </h3>
              <Row>
                <Col md={6} className="mb-3">
                  <h5 style={{ color: theme.colors.text }}>Nivel alto</h5>
                  <p style={{ color: theme.colors.text }}>
                    HTML5 • CSS3 • JavaScript • Java • Bases de Datos Relacionales • Power BI
                  </p>
                </Col>
                <Col md={6} className="mb-3">
                  <h5 style={{ color: theme.colors.text }}>Nivel Medio</h5>
                  <p style={{ color: theme.colors.text }}>
                    React • PHP • Laravel
                  </p>
                </Col>
                <Col md={6}>
                  <h5 style={{ color: theme.colors.text }}>Herramientas</h5>
                  <p style={{ color: theme.colors.text }}>
                    Git • GitHub • VS Code • Figma • DevTools • Github Pages 
                  </p>
                </Col>
                <Col md={6}>
                  <h5 style={{ color: theme.colors.text }}>Características</h5>
                  <p style={{ color: theme.colors.text }}>
                    Autodidacta • Tareas Complejas • Trabajo en Equipo • Problem-solving 
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
