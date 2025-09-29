import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Play, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import './ProjectCard.css';

interface Project {
  id: number;
  name: string;
  status: 'Ready' | 'In Development' | 'Planned';
  category: string;
  description: string;
  preview: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getStatusIcon = () => {
    switch (project.status) {
      case 'Ready':
        return <CheckCircle size={16} className="status-icon ready" />;
      case 'In Development':
        return <Clock size={16} className="status-icon development" />;
      case 'Planned':
        return <AlertCircle size={16} className="status-icon planned" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (project.status) {
      case 'Ready':
        return '#00F5FF';
      case 'In Development':
        return '#FFA07A';
      case 'Planned':
        return '#FF6B6B';
      default:
        return '#00CED1';
    }
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="project-card-container">
      <motion.div
        className={`project-card ${isExpanded ? 'expanded' : ''}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Front Face */}
        <motion.div
          className="card-face front"
          onClick={handleCardClick}
          whileTap={{ scale: 0.98 }}
        >
          <div className="project-preview">
            <img src={project.preview} alt={project.name} />
            <motion.div
              className="preview-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Play size={40} className="play-icon" />
            </motion.div>
          </div>

          <div className="project-info">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              <div 
                className="project-status"
                style={{ borderColor: getStatusColor(), color: getStatusColor() }}
              >
                {getStatusIcon()}
                <span>{project.status}</span>
              </div>
            </div>

            <div className="project-category">{project.category}</div>
            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="tech-tag more">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <motion.div
              className="expand-hint"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Click to explore →
            </motion.div>
          </div>
        </motion.div>

        {/* Expanded View */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="card-face expanded-face"
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              <motion.button
                className="close-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>

              <div className="expanded-content">
                <div className="expanded-header">
                  <h3>{project.name}</h3>
                  <div 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor() }}
                  >
                    {getStatusIcon()}
                    {project.status}
                  </div>
                </div>

                <div className="expanded-details">
                  <div className="detail-section">
                    <h4>Description</h4>
                    <p>{project.description}</p>
                  </div>

                  <div className="detail-section">
                    <h4>Technologies</h4>
                    <div className="tech-list">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="detail-section">
                    <h4>Category</h4>
                    <span className="category-badge">{project.category}</span>
                  </div>
                </div>

                <div className="expanded-actions">
                  <Link 
                    to={`/projects/${project.id}`}
                    className="action-button primary"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </Link>

                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button secondary"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button secondary"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Effect Layers */}
        <motion.div
          className="card-depth"
          animate={{ 
            rotateX: isHovered ? 5 : 0,
            rotateY: isHovered ? 5 : 0,
            z: isHovered ? 20 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default ProjectCard;