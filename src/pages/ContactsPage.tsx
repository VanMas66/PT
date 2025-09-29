import type { FC } from 'react';
import { motion } from 'framer-motion';

const ContactsPage: FC = () => {
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
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#00CED1' }}>Contacts</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Get in touch with ProjectTeam</p>
      </div>
    </motion.div>
  );
};

export default ContactsPage;