import { useState } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Eye } from 'lucide-react';
import './VideoCard.css';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  views: string;
  youtubeUrl?: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (video.youtubeUrl) {
      window.open(video.youtubeUrl, '_blank');
    }
  };

  const getCategoryColor = () => {
    switch (video.category.toLowerCase()) {
      case 'ai':
        return '#00F5FF';
      case 'minecraft':
        return '#00CED1';
      case 'vlogs':
        return '#FFA07A';
      default:
        return '#FF6B6B';
    }
  };

  return (
    <motion.div
      className="video-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        
        <motion.div
          className="play-overlay"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            scale: isHovered ? 1 : 0.8 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="play-button">
            <Play size={32} fill="currentColor" />
          </div>
        </motion.div>

        <div className="video-duration">
          <Clock size={12} />
          <span>{video.duration}</span>
        </div>

        <div 
          className="video-category"
          style={{ backgroundColor: getCategoryColor() }}
        >
          {video.category}
        </div>
      </div>

      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <div className="video-stats">
          <div className="video-views">
            <Eye size={14} />
            <span>{video.views} views</span>
          </div>
        </div>
      </div>

      <motion.div
        className="video-glow"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
        style={{ 
          background: `radial-gradient(circle, ${getCategoryColor()}20 0%, transparent 70%)` 
        }}
      />
    </motion.div>
  );
};

export default VideoCard;