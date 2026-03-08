import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

export default function ProjectCard({ title, description, image, link, tags }) {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
      className="h-100 shadow-sm" 
      style={{ 
        borderColor: theme.colors.cardBorder, 
        backgroundColor: theme.colors.cardBg,
        color: theme.colors.text,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: expanded ? 'scale(1.05)' : 'scale(1)',
        boxShadow: expanded ? '0 8px 20px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.1)'
      }}
      onClick={handleToggle}
    >
      {image && (
        <Card.Img 
          variant="top" 
          src={image} 
          alt={title}
          style={{ 
            height: '200px', 
            objectFit: 'cover',
            opacity: expanded ? 0.7 : 1,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
      <Card.Body>
        <Card.Title style={{ color: theme.colors.text }}>
          {title}
          <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', color: theme.colors.secondary }}>
            {expanded ? '▼' : '▶'}
          </span>
        </Card.Title>
        
        <Card.Text style={{ color: theme.colors.text }}>{description}</Card.Text>
        
        {tags && tags.length > 0 && (
          <div className="mb-3">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                style={{ 
                  backgroundColor: '#2a2a2a',
                  color: '#FFFFFF',
                  marginRight: '0.5rem',
                  marginBottom: '0.5rem'
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {expanded && (
          <div style={{
            animation: 'fadeIn 0.3s ease',
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: `2px solid ${theme.colors.cardBorder}`
          }}>
            <p style={{ fontSize: '0.95rem', color: theme.isDark ? theme.colors.secondary : '#2a2a2a', marginBottom: '1rem' }}>
              <strong>Tecnologías principales:</strong> {tags?.join(', ')}
            </p>
            {link && (
              <Button 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: theme.isDark ? '#1a1a1a' : '#FFFFFF', 
                  backgroundColor: theme.colors.primary,
                  borderColor: theme.colors.primary 
                }} 
                onClick={(e) => e.stopPropagation()}
              >
                Abrir Repositorio
              </Button>
            )}
          </div>
        )}

        {!expanded && link && (
          <Button 
            style={{ color: theme.colors.primary, borderColor: theme.colors.primary }} 
            variant="outline-secondary"
            onClick={(e) => {
              e.stopPropagation();
              window.open(link, '_blank');
            }}
          >
            Ver proyecto
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

