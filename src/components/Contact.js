import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaKaggle } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
          const serviceId = 'service_etgcyb7'; // Replace with your service ID
          const templateId = 'template_9jq8qc6'; // Your template ID
          const publicKey = 'UOuEw403z_57zXbXd'; // Replace with your public key
            
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'manavshah052003@gmail.com'
        },
        publicKey
      );
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "manavshah052003@gmail.com",
      link: "mailto:manavshah052003@gmail.com",
      color: "neon-blue"
    },
    {
      icon: HiPhone,
      title: "Phone",
      value: "+91 8128362204",
      link: "tel:+918128362204",
      color: "neon-purple"
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Ahmedabad, Gujarat, India",
      link: "https://maps.google.com/?q=Gandhinagar,Gujarat,India",
      color: "neon-cyan"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/manavshah052003",
      color: "hover:text-gray-300"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/manav-shah-6a667a1a9",
      color: "hover:text-blue-400"
    },
    {
      icon: SiGooglescholar,
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=manavshah",
      color: "hover:text-blue-300"
    },
    {
      icon: FaKaggle,
      name: "Kaggle",
      url: "https://www.kaggle.com/manavshah2003",
      color: "hover:text-blue-500"
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
    <section id="contact" className="py-20 relative">
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
            <span>Get In</span>{' '}
            <span >Touch</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Let's collaborate on the next breakthrough in AI. I'm always interested in discussing new opportunities and innovative projects.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-orbitron font-bold mb-8 neon-cyan"
            >
              Contact Information
            </motion.h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 glass p-4 rounded-lg glass-hover"
                >
                  <div className={`p-3 rounded-lg bg-${info.color}/20`}>
                    <info.icon className={`text-2xl ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-black-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-3xl text-gray-400 ${social.color} transition-colors duration-300`}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="glass p-6 rounded-lg"
            >
              <h4 className="text-lg font-semibold text-white mb-3">Current Status</h4>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
                <span className="text-gray-300">Available for new opportunities</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Typically respond within 24 hours
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-orbitron font-bold mb-8 neon-purple"
            >
              Send Message
            </motion.h3>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg border border-glass-border text-black placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg border border-glass-border text-black placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg border border-glass-border text-black placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass rounded-lg border border-glass-border text-black placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full glass px-8 py-4 rounded-lg text-lg font-semibold neon-blue hover:neon-cyan transition-all duration-300 glass-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass p-4 rounded-lg border border-green-500/50 bg-green-50"
                >
                  <p className="text-green-600 font-medium">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass p-4 rounded-lg border border-red-500/50 bg-red-50"
                >
                  <p className="text-red-600 font-medium">
                    ❌ Failed to send message. Please try again or contact me directly at manavshah052003@gmail.com
                  </p>
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
