import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Shield, 
  Car,
  ArrowRight,
  Clock,
  Check,
  Cog,
  Star
} from 'lucide-react';


const ServiceCards = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Expert Repairs',
      description: 'State-of-the-art panel beating with precision engineering and advanced techniques.',
      benefits: ['Certified technicians', 'Latest equipment', 'Lifetime warranty'],
      gradient: 'from-blue-600/95 to-blue-400/95',
      link: '/services',
      backgroundImage: '/pb1.png',
      overlayColor: 'from-blue-900/90 to-blue-800/90'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive quality control process ensuring superior workmanship on every repair.',
      benefits: ['Multi-point inspection', '100% satisfaction guarantee', 'Industry certification'],
      gradient: 'from-blue-500/95 to-blue-300/95',
      link: '/process',
      backgroundImage: '/w1.jpg',
      overlayColor: 'from-blue-800/90 to-blue-700/90'
    },
    {
      icon: Car,
      title: 'Complete Restoration',
      description: 'Full-service automotive restoration from minor repairs to major collision work.',
      benefits: ['Color matching expertise', 'Original parts', 'Detailed documentation'],
      gradient: 'from-blue-700/95 to-blue-500/95',
      link: '/services',
      backgroundImage: '/w2.jpg',
      overlayColor: 'from-blue-900/90 to-blue-800/90'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Our Expert Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Delivering excellence in automotive repair with cutting-edge technology and certified expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl h-full">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={service.backgroundImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${service.overlayColor} transition-opacity duration-300`} />
                </div>

                {/* Content Container */}
                <div className="relative h-full flex flex-col">
                  {/* Header Section */}
                  <div className={`p-6 bg-gradient-to-r ${service.gradient} backdrop-blur-sm`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center">
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-grow backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-blue-50/90 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits List */}
                    <ul className="space-y-3 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-white/90">
                          <Check className="w-5 h-5 text-blue-300 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Section */}
                  <div className="p-6 border-t border-white/10 backdrop-blur-sm">
                    <Link 
                      to={service.link}
                      className="inline-flex items-center justify-between w-full px-4 py-3 bg-white/10 rounded-xl text-white font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Quick Turnaround</h4>
                <p className="text-gray-600">Most repairs completed within 48 hours</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Cog className="w-8 h-8 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Advanced Equipment</h4>
                <p className="text-gray-600">State-of-the-art diagnostic tools</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Guaranteed Work</h4>
                <p className="text-gray-600">5-year warranty on all repairs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


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

  const reviews = [
    {
      name: "Simbarashe Mutombe",
      rating: 5,
      text: "Absolutely incredible work! My car looks brand new after their expert panel beating.",
      location: "Downtown"
    },
    {
      name: "Tanyaradzwa Matarutse",
      rating: 5,
      text: "Professional, quick, and their attention to detail is second to none. Highly recommended!",
      location: "Chitungwiza"
    },
    {
      name: "Sarah Smith",
      rating: 4,
      text: "Great service and reasonable pricing. Restored my vintage car to its former glory.",
      location: "Braside"
    }
  ];

  // Animation variants for reviews
  const reviewVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100 
      }
    }
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 inline-block ${
          index < rating ? 'text-yellow-500' : 'text-gray-300'
        }`} 
      />
    ));
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Enhanced Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img 
            src="/pb.png" 
            alt="Workshop background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60" />
        </div>
        
        <div className="container mx-auto text-center relative px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="inline-block backdrop-blur-sm bg-white/10 p-8 rounded-2xl shadow-xl"
          >
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"
            >
              Wonderland Panelbeaters
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl md:text-2xl text-blue-100 mb-12 font-light"
            >
              Quality you can bank on
            </motion.p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -8px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get a Free Quote →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.header>

      {/* Enhanced Services Section */}
      <ServiceCards />
      <motion.section 
        className="container mx-auto py-24 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Our Expert Services
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {serviceSections.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="
                bg-white rounded-2xl p-8 
                shadow-2xl hover:shadow-3xl
                transform transition-all duration-300 
                hover:-translate-y-2 border-b-4 border-blue-600
              "
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <service.icon className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link 
                to={service.link} 
                className="
                  inline-flex items-center text-blue-600 hover:text-blue-800 
                  font-semibold group transition-all
                "
              >
                <span className="mr-2">Explore Service</span>
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Client Experiences
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  bg-white rounded-2xl p-8 
                  shadow-xl hover:shadow-2xl
                  transition-all duration-300
                  transform hover:-translate-y-2
                  border-t-4 border-blue-600
                "
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">
                      {review.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 italic relative pl-6">
                  <span className="absolute left-0 top-0 text-3xl text-blue-600">“</span>
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/reviews" 
              className="
                inline-block bg-blue-600 text-white 
                px-8 py-4 rounded-full font-semibold
                hover:bg-blue-700 transform transition-all
                hover:scale-105 shadow-lg hover:shadow-xl
              "
            >
              Read More Testimonials
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;