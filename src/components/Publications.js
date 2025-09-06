import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaExternalLinkAlt, FaQuoteLeft } from 'react-icons/fa';
import { HiAcademicCap, HiTrendingUp } from 'react-icons/hi';

const Publications = () => {
  const publications = [
    {
      title: "AI-Driven Smart Mini Greenhouse for Automated Mushroom Cultivation",
      authors: "Manav Shah",
      venue: "International Conference on Communication and Networking Technologies (ICCNT 2025), IIT Indore",
      year: "2025",
      type: "Conference",
      citations: 0,
      pdf: "https://arxiv.org/pdf/iccnt2025-mushroom-greenhouse.pdf",
      abstract: "Developed a Smart Mini Greenhouse system integrating IoT, computer vision, and deep learning for automated cultivation and disease detection of white button mushrooms (Agaricus bisporus). Designed a two-stage pipeline using YOLOv8 for real-time detection and Vision Transformers (ViT) for fine-grained quality grading (fresh, rotten, spoiled), achieving ~87% accuracy with high precision and recall. Implemented low-cost Raspberry Pi 5 with sensor integration (soil moisture, pH, temperature, humidity) and a camera module for real-time monitoring, coupled with a connected mobile app for remote management. The system enables sustainable urban farming by automating crop monitoring, disease prevention, and data-informed decision-making.",
      featured: true
    }
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const PublicationCard = ({ publication, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`glass p-6 rounded-lg glass-hover ${
        publication.featured ? 'border-l-4 border-cyan-600' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              publication.type === 'Conference' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-purple-100 text-purple-600'
            }`}>
              {publication.type}
            </span>
            {publication.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-600">
                Featured
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
            {publication.title}
          </h3>
          
          <p className="text-blue-600 font-medium mb-2">{publication.authors}</p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <span>{publication.venue}</span>
            <span>•</span>
            <span>{publication.year}</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <HiTrendingUp size={14} />
              <span>{publication.citations} citations</span>
            </span>
          </div>
        </div>
        
        <motion.a
          href={publication.pdf}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="text-blue-600 hover:text-cyan-600 transition-colors ml-4"
        >
          <FaFilePdf size={20} />
        </motion.a>
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        {publication.abstract}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <FaQuoteLeft size={12} />
          <span>Abstract available</span>
        </div>
        
        <motion.a
          href={publication.pdf}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 text-blue-600 hover:text-cyan-600 transition-colors text-sm font-medium"
        >
          <span>Read Paper</span>
          <FaExternalLinkAlt size={12} />
        </motion.a>
      </div>
    </motion.div>
  );

  return (
    <section id="publications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4"
          >
            <span className="text-blue-600">Research</span>{' '}
            <span className="text-purple-600">Publications</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Cutting-edge research in artificial intelligence and machine learning
          </motion.p>
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 mb-16"
        >
          {publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} index={index} />
          ))}
        </motion.div>


        {/* Google Scholar Link */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://scholar.google.com/citations?user=manavshah"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 glass px-8 py-4 rounded-lg text-lg font-semibold text-blue-600 hover:text-cyan-600 transition-all duration-300 glass-hover"
          >
            <HiAcademicCap size={24} />
            <span>View Google Scholar Profile</span>
            <FaExternalLinkAlt size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
