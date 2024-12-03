import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Car, 
  Wrench, 
  Shield, 
  Camera, 
  ClipboardList, 
  PhoneCall 
} from 'lucide-react';

const HomePage = () => {
  // Section configuration for services and features
  const serviceSections = [
    {
      icon: Wrench,
      title: 'Expert Repairs',
      description: 'Precision panel beating with cutting-edge techniques.',
      link: '/services'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Guaranteed workmanship and lasting results.',
      link: '/process'
    },
    {
      icon: Car,
      title: 'Complete Restoration',
      description: 'From minor dents to major collision repairs.',
      link: '/services'
    }
  ];

  // Animation variants for consistent motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center h-screen flex items-center"
        style={{
          backgroundImage: `url('/pb.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="container mx-auto text-center text-white px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="bg-gray-800 bg-opacity-70 p-6 rounded-lg"
          >
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Wonderland Panel Beating
            </motion.h1>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl mb-8"
            >
              Restoring Vehicles to Perfection, One Panel at a Time
            </motion.p>
          </motion.div>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold mt-8"
            >
              Get a Free Quote
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Services Preview Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto py-16 px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {serviceSections.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="
                bg-white shadow-lg rounded-lg p-6 
                text-center transform transition-all 
                hover:scale-105 hover:shadow-xl
              "
            >
              <div className="flex justify-center mb-4">
                <service.icon 
                  className="w-12 h-12 text-blue-600" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link 
                to={service.link} 
                className="
                  text-blue-600 hover:text-blue-800 
                  font-medium inline-flex items-center
                "
              >
                Learn More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Quick Navigation Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore More
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Camera, 
                title: 'Gallery', 
                description: 'View our completed projects',
                link: '/gallery'
              },
              { 
                icon: ClipboardList, 
                title: 'Our Process', 
                description: 'Understanding our workflow',
                link: '/process'
              },
              { 
                icon: PhoneCall, 
                title: 'Contact Us', 
                description: 'Get in touch with our team',
                link: '/contact'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  bg-white rounded-lg shadow-md p-6 
                  text-center hover:shadow-xl 
                  transform transition-all hover:scale-105
                "
              >
                <div className="flex justify-center mb-4">
                  <item.icon 
                    className="w-10 h-10 text-blue-600" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <Link 
                  to={item.link} 
                  className="
                    text-blue-600 hover:text-blue-800 
                    font-medium inline-flex items-center
                  "
                >
                  Discover More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;