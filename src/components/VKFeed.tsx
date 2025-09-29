import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, ExternalLink, Calendar } from 'lucide-react';
import './VKFeed.css';

interface VKPost {
  id: number;
  text: string;
  image?: string;
  video?: string;
  likes: number;
  comments: number;
  shares: number;
  date: string;
  author: string;
  avatar: string;
}

const VKFeed: FC = () => {
  const [posts, setPosts] = useState<VKPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock VK posts data
    const mockPosts: VKPost[] = [
      {
        id: 1,
        text: "🚀 Exciting news! We've just completed our latest AI project - an advanced chatbot that can handle complex customer queries with 95% accuracy. The future is here! #AI #Innovation #ProjectTeam",
        image: "/api/placeholder/500/300",
        likes: 245,
        comments: 18,
        shares: 12,
        date: "2024-01-15",
        author: "ProjectTeam Official",
        avatar: "/api/placeholder/50/50"
      },
      {
        id: 2,
        text: "🎮 Behind the scenes of our latest Minecraft server development! Check out these amazing structures our team has been building. What do you think? #Minecraft #GameDev #Creative",
        image: "/api/placeholder/500/300",
        likes: 189,
        comments: 25,
        shares: 8,
        date: "2024-01-12",
        author: "ProjectTeam Official",
        avatar: "/api/placeholder/50/50"
      },
      {
        id: 3,
        text: "📊 Just deployed a new CRM automation tool for one of our clients. Efficiency increased by 300%! If you need custom automation solutions, let us know. #CRM #Automation #BusinessGrowth",
        likes: 156,
        comments: 14,
        shares: 22,
        date: "2024-01-10",
        author: "ProjectTeam Official",
        avatar: "/api/placeholder/50/50"
      }
    ];

    // Simulate API call
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  if (loading) {
    return (
      <div className="vk-feed">
        <div className="vk-feed-header">
          <div className="vk-logo">
            <div className="vk-icon">VK</div>
            <span>Latest from VK</span>
          </div>
        </div>
        <div className="vk-loading">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="post-skeleton"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="vk-feed">
      <div className="vk-feed-header">
        <div className="vk-logo">
          <div className="vk-icon">VK</div>
          <span>Latest from VK</span>
        </div>
        <a 
          href="https://vk.com/projectteam" 
          target="_blank" 
          rel="noopener noreferrer"
          className="follow-link"
        >
          <span>Follow Us</span>
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="vk-posts">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            className="vk-post"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="post-header">
              <div className="post-author">
                <img src={post.avatar} alt={post.author} className="author-avatar" />
                <div className="author-info">
                  <h4 className="author-name">{post.author}</h4>
                  <div className="post-date">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="post-content">
              <p className="post-text">{post.text}</p>
              {post.image && (
                <motion.div 
                  className="post-image"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={post.image} alt="Post content" />
                </motion.div>
              )}
            </div>

            <div className="post-actions">
              <motion.button 
                className="action-button likes"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart size={18} />
                <span>{formatNumber(post.likes)}</span>
              </motion.button>

              <motion.button 
                className="action-button comments"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} />
                <span>{formatNumber(post.comments)}</span>
              </motion.button>

              <motion.button 
                className="action-button shares"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share size={18} />
                <span>{formatNumber(post.shares)}</span>
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div 
        className="view-more"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a 
          href="https://vk.com/projectteam" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-more-link"
        >
          <span>View All Posts</span>
          <ExternalLink size={16} />
        </a>
      </motion.div>
    </div>
  );
};

export default VKFeed;