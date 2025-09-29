import { useRef } from 'react';
import type { FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Camera, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import VideoCard from '../components/VideoCard';
import VKFeed from '../components/VKFeed';
import './HomePage.css';

const HomePage: FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Mock data for featured projects
  const featuredProjects = [
    {
      id: 1,
      name: 'AI ChatBot Assistant',
      status: 'Ready' as const,
      category: 'AI',
      description: 'Advanced conversational AI for customer support',
      preview: '/api/placeholder/300/200',
      technologies: ['Python', 'TensorFlow', 'FastAPI']
    },
    {
      id: 2,
      name: 'Minecraft Survival Server',
      status: 'In Development' as const,
      category: 'Minecraft',
      description: 'Custom survival server with unique mechanics',
      preview: '/api/placeholder/300/200',
      technologies: ['Java', 'Spigot', 'MySQL']
    },
    {
      id: 3,
      name: 'CRM Automation Tool',
      status: 'Ready' as const,
      category: 'CRM/Automation',
      description: 'Streamline your business processes with smart automation',
      preview: '/api/placeholder/300/200',
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ];

  // Mock data for featured videos
  const featuredVideos = [
    {
      id: 1,
      title: 'AI Development Deep Dive',
      thumbnail: '/api/placeholder/400/225',
      duration: '15:32',
      category: 'AI',
      views: '12K'
    },
    {
      id: 2,
      title: 'Building Epic Minecraft Structures',
      thumbnail: '/api/placeholder/400/225',
      duration: '23:45',
      category: 'Minecraft',
      views: '8.5K'
    },
    {
      id: 3,
      title: 'Team Behind the Scenes',
      thumbnail: '/api/placeholder/400/225',
      duration: '10:18',
      category: 'Vlogs',
      views: '5.2K'
    }
  ];

  const quickLinks = [
    { icon: Briefcase, label: 'Projects', path: '/projects', color: '#00F5FF' },
    { icon: Users, label: 'Team', path: '/team', color: '#FF6B6B' },
    { icon: Camera, label: 'Media', path: '/media', color: '#FFA07A' },
    { icon: MessageSquare, label: 'Contacts', path: '/contacts', color: '#00CED1' }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="hero-section"
        style={{ opacity: heroOpacity }}
      >
        <motion.div 
          className="hero-background"
          style={{ scale: heroScale }}
        >
          <div className="hero-gradient" />
          <div className="hero-particles">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="hero-particle"
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut'
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1 
              className="hero-slogan"
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 245, 255, 0.5)',
                  '0 0 40px rgba(0, 245, 255, 0.8)',
                  '0 0 20px rgba(0, 245, 255, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              FURTHER IS MORE
            </motion.h1>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              We are ProjectTeam - pushing the boundaries of innovation through AI development, 
              creative content, and cutting-edge solutions.
            </motion.p>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Link to="/projects" className="cta-button primary">
              <span>Explore Projects</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/team" className="cta-button secondary">
              <Users size={20} />
              <span>Meet the Team</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-line" />
          <span>Scroll to explore</span>
        </motion.div>
      </motion.section>

      {/* Quick Links Section */}
      <motion.section 
        className="quick-links-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="quick-links-grid">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={link.path} className="quick-link-card">
                    <motion.div 
                      className="quick-link-icon"
                      style={{ color: link.color }}
                      whileHover={{ scale: 1.1, rotateY: 15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={32} />
                    </motion.div>
                    <span className="quick-link-label">{link.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section 
        className="featured-projects-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Featured Projects</h2>
            <p>Discover our latest innovations and ongoing developments</p>
            <Link to="/projects" className="view-all-link">
              View All Projects <ArrowRight size={16} />
            </Link>
          </motion.div>
          
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Videos Section */}
      <motion.section 
        className="featured-videos-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Best Videos</h2>
            <p>Watch our latest content and behind-the-scenes moments</p>
            <Link to="/media" className="view-all-link">
              View All Videos <ArrowRight size={16} />
            </Link>
          </motion.div>
          
          <div className="videos-grid">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <VideoCard video={video} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* VK Feed Section */}
      <motion.section 
        className="vk-feed-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Latest Updates</h2>
            <p>Stay connected with our latest news and announcements</p>
          </motion.div>
          
          <VKFeed />
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;