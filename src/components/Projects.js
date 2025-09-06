import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { HiChip, HiLightningBolt, HiCode } from 'react-icons/hi';

const Projects = () => {
  const projects = [
    {
      title: "A Deep Vision System for Assessing and Classifying Mushroom Quality in Real-Time",
      description: "Developed a real-time mushroom quality assessment system using Raspberry Pi, deep learning (YOLOv8), and computer vision. Trained a custom model to classify mushrooms based on health status (healthy, infected, or damaged) using annotated image data. Integrated environmental sensors (temperature, humidity, light) with IoT to monitor growing conditions and improve cultivation accuracy. Enabled live camera feed analysis and on-device predictions to automate decisions in a Mini Smart Greenhouse setup.",
      image: "/api/placeholder/400/300",
      technologies: ["YOLOv8", "Raspberry Pi", "IoT", "OpenCV", "Python", "Environmental Sensors"],
      github: "https://github.com/manavshah052003/mushroom-quality-system",
      demo: "https://mushroom-quality-demo.com",
      category: "Computer Vision",
      featured: true
    },
    {
      title: "Uncertainty-Aware Sleep Stage Classification System Using Bayesian Deep Learning",
      description: "Developed a deep learning pipeline to classify sleep stages (W, N1, N2, N3, REM) from EEG signals using Bayesian CNNs and Monte Carlo Dropout for uncertainty estimation. Processed and segmented polysomnography (PSG) data from the Sleep-EDF Expanded dataset, incorporating signal preprocessing, epoch extraction, and class balancing (SMOTE/ADASYN). Achieved high accuracy (≥88%) with low expected calibration error (~0.61%), ensuring model predictions are well-calibrated and interpretable for clinical trust.",
      image: "/api/placeholder/400/300",
      technologies: ["PyTorch", "Bayesian Deep Learning", "EEG", "Monte Carlo Dropout", "SMOTE", "Python"],
      github: "https://github.com/manavshah052003/sleep-classification",
      demo: "https://sleep-classification-demo.com",
      category: "Deep Learning",
      featured: true
    },
    {
      title: "Explainable Deep Learning for Sleep Staging & Apnea Detection",
      description: "Developed a hybrid deep learning pipeline integrating CNNs, Vision Transformers (ViT), and BiLSTMs to capture local spectral patterns, global contextual features, and temporal sleep-stage dynamics from multimodal PSG signals (EEG, EOG, EMG, ECG). Enhanced robustness through advanced data augmentation (SpecAugment, temporal warping, Gaussian noise injection, channel dropout, mixup) on spectrogram representations. Integrated explainable AI techniques (Grad-CAM, Integrated Gradients, LIME) to highlight spectrotemporal patterns and quantify modality-specific contributions, improving clinical interpretability.",
      image: "/api/placeholder/400/300",
      technologies: ["PyTorch", "Vision Transformers", "BiLSTM", "Grad-CAM", "LIME", "HMM", "Python"],
      github: "https://github.com/manavshah052003/explainable-sleep-ai",
      demo: "https://explainable-sleep-demo.com",
      category: "Explainable AI",
      featured: true
    },
    {
      title: "AI-Powered Creative Content Intelligence Platform",
      description: "Designed and deployed AI agents to automate video analysis and categorization workflows. Built robust, scalable web scraping pipelines to ingest and structure large volumes of video and image data, supporting training datasets for content recommendation and generation systems. Developed innovative transformation models enabling image-to-video and video-to-image conversions, driving automated creative asset production for marketing campaigns.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "Web Scraping", "Computer Vision", "AI Agents", "Content Analysis", "Deep Learning"],
      github: "https://github.com/manavshah052003/content-intelligence",
      demo: "https://content-intelligence-demo.com",
      category: "AI Applications",
      featured: false
    },
    {
      title: "Interactive Sales Dashboard – Tableau",
      description: "Developed an interactive Tableau dashboard using the Sample Superstore dataset to analyze sales, profits, and regional performance. Utilized features like calculated fields, filters, and parameters for dynamic insights and better decision-making. Designed visualizations (heat maps, bar charts, line graphs) to identify trends in product performance and customer behavior. Highlighted key metrics such as profit margins, sales growth, and underperforming regions to drive strategic actions.",
      image: "/api/placeholder/400/300",
      technologies: ["Tableau", "Data Visualization", "Business Intelligence", "Dashboard Design", "Analytics"],
      github: "https://github.com/manavshah052003/sales-dashboard",
      demo: "https://sales-dashboard-demo.com",
      category: "Data Visualization",
      featured: false
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

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`glass rounded-lg overflow-hidden glass-hover ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-neon-blue/50">
            {project.category === 'Deep Learning' && <HiChip />}
            {project.category === 'Computer Vision' && <FaEye />}
            {project.category === 'Healthcare AI' && <HiLightningBolt />}
            {project.category === 'NLP' && <HiCode />}
            {project.category === 'Autonomous Systems' && <HiChip />}
            {project.category === 'Recommendation Systems' && <HiLightningBolt />}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-neon-cyan text-black px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-neon-blue font-semibold text-sm">{project.category}</span>
          <div className="flex space-x-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-neon-cyan transition-colors"
            >
              <FaExternalLinkAlt size={18} />
            </motion.a>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
        <p className="text-black text-sm leading-relaxed mb-4">
  {project.description}
</p>


        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded-full border border-neon-blue/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative">
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
            <span className="neon-blue">Featured</span>{' '}
            <span className="neon-purple">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Innovative AI solutions and cutting-edge research projects
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/manavshah052003"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block glass px-8 py-4 rounded-lg text-lg font-semibold neon-blue hover:neon-cyan transition-all duration-300 glass-hover"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
