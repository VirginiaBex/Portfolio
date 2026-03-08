import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    // Cargar proyectos desde JSON
    const loadProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/projects.json`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error al cargar proyectos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <Container className="py-5" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
        <h2 className="text-center">Cargando proyectos...</h2>
      </Container>
    );
  }

  return (
    <Container className="py-5" style={{ backgroundColor: theme.colors.background }}>
      <div className="projects-section">
        <h1 className="text-center mb-5" style={{ color: theme.colors.text, fontSize: '3rem', fontWeight: 'bold' }}>Mis Proyectos</h1>
        <Row className="g-4">
          {projects.map(project => (
            <Col md={4} key={project.id}>
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                tags={project.tags}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
