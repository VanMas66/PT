import type { FC } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen: FC = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loading-background">
        <motion.div
          className="gradient-overlay"
          animate={{
            background: [
              'linear-gradient(45deg, #1A1A2E 0%, #16213E 50%, #1A1A2E 100%)',
              'linear-gradient(45deg, #16213E 0%, #1A1A2E 50%, #16213E 100%)',
              'linear-gradient(45deg, #1A1A2E 0%, #16213E 50%, #1A1A2E 100%)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Animated particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [-100, window.innerHeight + 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'linear',
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="loading-content">
        <motion.div
          className="logo-container"
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
        >
          <motion.h1
            className="team-name"
            animate={{
              textShadow: [
                '0 0 10px #00F5FF',
                '0 0 20px #00F5FF, 0 0 30px #00F5FF',
                '0 0 10px #00F5FF',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            ProjectTeam
          </motion.h1>
        </motion.div>

        <motion.div
          className="slogan-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.h2
            className="slogan"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            FURTHER IS MORE
          </motion.h2>
        </motion.div>

        <motion.div
          className="loading-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div className="loading-bar">
            <motion.div
              className="loading-progress"
              animate={{ width: ['0%', '100%'] }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
          </div>
          <motion.p
            className="loading-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Initializing creativity...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;