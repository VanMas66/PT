import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import NotificationBar from './components/NotificationBar';

// Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import TeamPage from './pages/TeamPage';
import MediaPage from './pages/MediaPage';
import ContactsPage from './pages/ContactsPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check for new content notifications (mock)
    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => clearTimeout(notificationTimer);
  }, []);

  return (
    <Router>
      <div className="App">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="main-content"
            >
              <NotificationBar 
                show={showNotification}
                onClose={() => setShowNotification(false)}
                message="🎬 New video released: 'AI Development Deep Dive'"
                type="video"
              />
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/media" element={<MediaPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;