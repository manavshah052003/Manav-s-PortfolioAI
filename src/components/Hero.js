import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaKaggle, FaEnvelope } from 'react-icons/fa';
import { AiOutlineFileText } from "react-icons/ai";
import { HiCode, HiChip, HiLightningBolt } from 'react-icons/hi';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/manavshah052003', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/manav-shah-6a667a1a9', label: 'LinkedIn' },
    { icon: AiOutlineFileText, href: 'https://drive.google.com/file/d/1TCbcNYGwsAWiEkxs6FfU8yxyhtKRt1jf/view?usp=sharing', label: 'Resume' },

    { icon: FaKaggle, href: 'https://www.kaggle.com/manavshah2003', label: 'Kaggle' },
    { icon: FaEnvelope, href: 'mailto:manavshah052003@gmail.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 neural-bg"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-neon-blue/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.01, duration: 0.5 }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-blue-600">Manav</span>{' '}
              <span className="text-purple-600">Shah</span>
            </motion.h1>
            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-exo font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-cyan-600">AI Engineer</span> |{' '}
              <span className="text-blue-600">M.Tech Student</span> |{' '}
              <span className="text-purple-600">Deep Learning Enthusiast</span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            AI Engineer and M.Tech (AI) student with hands-on experience in deep learning, computer vision, and
            real-time AI systems. Passionate about applying AI to solve real-world challenges in health, media, and
            smart environments.
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="flex flex-col items-center"
            >
              <HiChip className="text-4xl text-blue-600 mb-2" />
              <span className="text-sm text-gray-600">Deep Learning</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="flex flex-col items-center"
            >
              <HiCode className="text-4xl text-purple-600 mb-2" />
              <span className="text-sm text-gray-600">Computer Vision</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="flex flex-col items-center"
            >
              <HiLightningBolt className="text-4xl text-cyan-600 mb-2" />
              <span className="text-sm text-gray-600">Real-time AI</span>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block glass px-8 py-4 rounded-lg text-lg font-semibold text-blue-600 hover:text-cyan-600 transition-all duration-300 glass-hover"
            >
              Explore My Work
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-600 hover:text-blue-600 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-blue-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
