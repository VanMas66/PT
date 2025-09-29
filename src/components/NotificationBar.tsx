import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, MessageCircle, Radio } from 'lucide-react';
import './NotificationBar.css';

interface NotificationBarProps {
  show: boolean;
  onClose: () => void;
  message: string;
  type: 'video' | 'post' | 'stream' | 'general';
  link?: string;
}

const NotificationBar: FC<NotificationBarProps> = ({
  show,
  onClose,
  message,
  type,
  link
}) => {
  const getIcon = () => {
    switch (type) {
      case 'video':
        return <Play size={16} />;
      case 'post':
        return <MessageCircle size={16} />;
      case 'stream':
        return <Radio size={16} />;
      default:
        return null;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'video':
        return '#FF6B6B';
      case 'post':
        return '#00F5FF';
      case 'stream':
        return '#FFA07A';
      default:
        return '#00CED1';
    }
  };

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="notification-bar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          style={{ borderBottom: `3px solid ${getTypeColor()}` }}
        >
          <motion.div
            className="notification-content"
            onClick={handleClick}
            style={{ cursor: link ? 'pointer' : 'default' }}
            whileHover={link ? { scale: 1.02 } : {}}
          >
            <div className="notification-icon" style={{ color: getTypeColor() }}>
              {getIcon()}
            </div>
            <div className="notification-message">
              {message}
            </div>
            {link && (
              <div className="notification-cta" style={{ color: getTypeColor() }}>
                Click to view →
              </div>
            )}
          </motion.div>
          <motion.button
            className="notification-close"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={16} />
          </motion.button>
          
          {/* Animated background gradient */}
          <motion.div
            className="notification-gradient"
            animate={{
              background: [
                `linear-gradient(90deg, transparent 0%, ${getTypeColor()}20 50%, transparent 100%)`,
                `linear-gradient(90deg, transparent 20%, ${getTypeColor()}40 50%, transparent 80%)`,
                `linear-gradient(90deg, transparent 0%, ${getTypeColor()}20 50%, transparent 100%)`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBar;