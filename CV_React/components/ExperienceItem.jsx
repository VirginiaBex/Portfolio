import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ExperienceItem({ role, place, dates, details }) {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <article 
      className="mb-4 p-4" 
      style={{ 
        borderLeft: `5px solid ${theme.colors.primary}`, 
        backgroundColor: theme.colors.cardBg,
        borderRadius: '4px',
        color: theme.colors.text,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: expanded ? '0 6px 16px rgba(0,0,0,0.12)' : '0 2px 6px rgba(0,0,0,0.08)',
        transform: expanded ? 'translateX(5px)' : 'translateX(0)'
      }}
      onClick={handleToggle}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ color: theme.colors.text, marginBottom: '0.5rem' }}>
            {role}
            <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', color: theme.colors.secondary }}>
              {expanded ? '▼' : '▶'}
            </span>
          </h3>
          <p style={{ color: '#8B7355', fontStyle: 'italic', margin: '0.5rem 0' }}>
            {place}
          </p>
        </div>
        {dates && (
          <p style={{ color: '#8B7355', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
            {dates}
          </p>
        )}
      </div>
      
      {expanded && details && (
        <ul 
          style={{ 
            marginTop: '1rem', 
            paddingLeft: '1.5rem',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          {Array.isArray(details) ? (
            details.map((detail, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: '0.5rem', 
                  color: theme.colors.text,
                  lineHeight: '1.6'
                }}
              >
                {detail}
              </li>
            ))
          ) : (
            <li style={{ color: theme.colors.text }}>{details}</li>
          )}
        </ul>
      )}
    </article>
  );
}
