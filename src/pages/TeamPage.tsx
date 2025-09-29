import type { FC } from 'react';
import { motion } from 'framer-motion';

const TeamPage: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ 
        minHeight: '100vh',
        paddingTop: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#FF6B6B' }}>Team</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Meet our talented team members and their services</p>
      </div>
    </motion.div>
  );
};

export default TeamPage;