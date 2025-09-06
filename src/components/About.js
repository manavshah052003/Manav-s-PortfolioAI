import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaRocket, FaBrain } from 'react-icons/fa';






const About = () => {
  const achievements = [
    {
      icon: FaGraduationCap,
      title: "M.Tech in AI",
      description: "Pursuing Masters in Artificial Intelligence at PDEU",
      color: "text-blue-600"
    },
    {
      icon: FaAward,
      title: "Research Excellence",
      description: "Published research paper at ICCNT 2025, IIT Indore",
      color: "text-purple-600"
    },
    {
      icon: FaRocket,
      title: "Industry Experience",
      description: "AI Development Intern at Schbang, Data Scientist roles",
      color: "text-cyan-600"
    },
    {
      icon: FaBrain,
      title: "Innovation",
      description: "Real-time AI systems for health and smart environments",
      color: "text-pink-600"
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

  return (
    <section id="about" className="py-20 relative">
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
            <span className="text-blue-600">About</span>{' '}
            <span className="text-purple-600">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="relative inline-block mb-8"
            >
              <div className="w-64 h-64 mx-auto lg:mx-0 relative">
                {/* Profile Image Placeholder */}
                <div className="w-full h-full rounded-full glass border-4 border-blue-600/30 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <FaBrain className="text-6xl text-blue-600" />
                  </div>
                </div>
                {/* Glowing Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-blue-600/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-3xl font-orbitron font-bold mb-4 text-cyan-600"
            >
              AI Engineer & M.Tech Student
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed mb-6"
            >
              I'm a passionate AI engineer and M.Tech student specializing in deep learning, 
              computer vision, and real-time AI systems. My work focuses on developing 
              innovative solutions for healthcare, media, and smart environments.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed mb-8"
            >
              Currently pursuing my Masters in Artificial Intelligence at Pandit Deendayal Energy University, 
              I have hands-on experience as an AI Development Intern at Schbang and Data Scientist roles 
              at various companies. My expertise spans from real-time computer vision systems to 
              explainable AI for clinical applications.
            </motion.p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-lg glass-hover"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-blue-100 mr-4`}>
                    <achievement.icon className={`text-2xl text-blue-600`} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {achievement.title}
                  </h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education & Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-orbitron font-bold text-center mb-12 text-blue-600"
          >
            Education & Experience
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-12">
              {[
                {
                  year: "June 2025 - August 2025",
                  title: "AI Development Intern",
                  company: "Schbang",
                  description: "Designed and deployed AI agents for automated video analysis and categorization. Built scalable web scraping pipelines and developed innovative image-to-video transformation models."
                },
                {
                  year: "May 2023 - July 2023",
                  title: "Data Scientist",
                  company: "Microtech IT System Pvt Ltd",
                  description: "Utilized Python libraries (Pandas, NumPy) and SQL to manipulate data and extract insights from large datasets. Performed data preprocessing and cleaning."
                },
                {
                  year: "August 2021 - February 2022",
                  title: "Data Scientist",
                  company: "Dev Information Technology Limited",
                  description: "Applied predictive analytics to forecast trends and collaborated with data science team to clean, analyze, and visualize large datasets using Python."
                },
                {
                  year: "July 2024 - Present",
                  title: "M.Tech in AI",
                  company: "Pandit Deendayal Energy University",
                  description: "Coursework focuses on Machine Learning Algorithms, Deep Learning, Neural Networks, Optimization Techniques for AI, and Computer Vision."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="glass p-6 rounded-lg glass-hover"
                    >
                      <div className="text-cyan-600 font-semibold mb-2">{item.year}</div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <div className="text-blue-600 font-medium mb-2">{item.company}</div>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
