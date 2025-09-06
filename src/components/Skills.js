import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaDocker
} from 'react-icons/fa';
import { 
  SiPytorch, SiTensorflow, SiScikitlearn, SiKeras, SiOpenai,
  SiCplusplus, SiRust, SiGo, SiKubernetes, SiJenkins, SiMongodb, SiPostgresql
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML Frameworks",
      color: "text-blue-600",
      skills: [
        { name: "PyTorch", icon: SiPytorch, level: 90 },
        { name: "TensorFlow", icon: SiTensorflow, level: 85 },
        { name: "Scikit-learn", icon: SiScikitlearn, level: 88 },
        { name: "OpenCV", icon: SiTensorflow, level: 92 },
        { name: "NumPy", icon: SiKeras, level: 95 },
        { name: "Pandas", icon: SiOpenai, level: 90 }
      ]
    },
    {
      title: "Programming Languages",
      color: "text-purple-600",
      skills: [
        { name: "Python", icon: FaPython, level: 95 },
        { name: "C++", icon: SiCplusplus, level: 80 },
        { name: "JavaScript", icon: FaJs, level: 75 },
        { name: "C", icon: FaJava, level: 85 },
        { name: "PHP", icon: SiRust, level: 70 },
        { name: "SQL", icon: SiGo, level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      color: "text-cyan-600",
      skills: [
        { name: "Tableau", icon: FaDocker, level: 85 },
        { name: "Matplotlib", icon: SiKubernetes, level: 88 },
        { name: "Seaborn", icon: SiJenkins, level: 85 },
        { name: "HTML/CSS", icon: SiMongodb, level: 80 },
        { name: "Raspberry Pi", icon: SiPostgresql, level: 85 },
        { name: "IoT", icon: FaReact, level: 80 },
        { name: "Computer Vision", icon: FaNodeJs, level: 90 }
      ]
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
    <section id="skills" className="py-20 relative">
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
            <span className="text-blue-600">Technical</span>{' '}
            <span className="text-purple-600">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Expertise in cutting-edge AI/ML technologies and modern development tools
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass p-8 rounded-lg glass-hover"
            >
              <motion.h3
                variants={itemVariants}
                className={`text-2xl font-orbitron font-bold mb-8 text-center ${category.color}`}
              >
                {category.title}
              </motion.h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="glass p-4 rounded-lg glass-hover"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="text-xl text-blue-600" />
                        <span className="text-gray-900 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyan-600 font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${
                          category.color === 'text-blue-600' ? 'from-blue-600 to-cyan-600' :
                          category.color === 'text-purple-600' ? 'from-purple-600 to-pink-600' :
                          'from-cyan-600 to-blue-600'
                        } rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
