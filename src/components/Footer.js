import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaKaggle, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/manavshah052003', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/manav-shah-6a667a1a9', label: 'LinkedIn' },
    { icon: SiGooglescholar, href: 'https://scholar.google.com/citations?user=manavshah', label: 'Google Scholar' },
    { icon: FaKaggle, href: 'https://www.kaggle.com/manavshah2003', label: 'Kaggle' },
    { icon: FaEnvelope, href: 'mailto:manavshah052003@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      {/* Animated Background */}
      <div className="absolute inset-0 neural-bg opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-2xl font-orbitron font-bold neon-blue mb-4">
              Manav Shah
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              AI Engineer and M.Tech (AI) student passionate about applying AI to solve real-world 
              challenges in health, media, and smart environments.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-600 hover:text-neon-blue transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="text-neon-blue">Email:</span> manavshah052003@gmail.com
              </p>
              <p className="text-gray-700">
                <span className="text-neon-blue">Location:</span> Gandhinagar, Gujarat, India
              </p>
              <p className="text-gray-700">
                <span className="text-neon-blue">Status:</span> Available for opportunities
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 my-8"
        />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 text-gray-600 mb-4 md:mb-0"
          >
            <span>© {currentYear} Manav Shah. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              <FaHeart />
            </motion.span>
            <span>and cutting-edge AI</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6 text-sm text-gray-600"
          >
            <a href="/privacy" className="hover:text-neon-blue transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-neon-blue transition-colors">
              Terms of Service
            </a>
            <span className="flex items-center space-x-1">
              <span>Powered by</span>
              <span className="text-neon-cyan font-semibold">React</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-8"
        >
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block glass px-6 py-3 rounded-full text-neon-blue hover:text-neon-cyan transition-colors duration-300 glass-hover"
          >
            Back to Top
          </motion.a>
        </motion.div>
      </div>

      {/* Animated Glow Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />
    </footer>
  );
};

export default Footer;
