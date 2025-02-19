import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Truck, 
  Wrench, 
  ShieldCheck, 
  Car, 
  PaintBucket, 
  Sparkle,
  Gauge
} from 'lucide-react';

// Process Page Component with Enhanced Animations and Mobile-First Design
export const ProcessPage = () => {
  const steps = [
    { 
      icon: <BookOpen />, 
      title: 'Initial Assessment', 
      description: 'Comprehensive damage evaluation using advanced diagnostic tools and detailed quote generation.',
      color: 'bg-blue-50'
    },
    { 
      icon: <Users />, 
      title: 'Insurance Coordination', 
      description: 'Seamless communication and direct billing with major insurance providers to simplify your repair journey.',
      color: 'bg-green-50'
    },
    { 
      icon: <Truck />, 
      title: 'Vehicle Disassembly', 
      description: 'Careful and methodical dismantling to uncover and address hidden structural and cosmetic damage.',
      color: 'bg-purple-50'
    },
    { 
      icon: <Wrench />, 
      title: 'Precision Repair', 
      description: 'Expert restoration utilizing cutting-edge techniques, OEM-grade parts, and factory-certified methods.',
      color: 'bg-orange-50'
    },
    { 
      icon: <ShieldCheck />, 
      title: 'Quality Control', 
      description: 'Rigorous multi-point inspection ensuring absolute perfection, backed by our comprehensive warranty.',
      color: 'bg-red-50'
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
        Our Comprehensive Repair Process
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.2, 
              type: "spring", 
              stiffness: 100 
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className={`
              text-center p-4 sm:p-6 rounded-xl shadow-md 
              transform transition-all duration-300 
              hover:shadow-xl ${step.color}
            `}
          >
            <div className="text-blue-600 flex justify-center mb-3 sm:mb-4">
              {React.cloneElement(step.icon, { 
                size: 40, 
                strokeWidth: 1.5 
              })}
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Services Page Component with Enhanced Styling and Mobile Responsiveness
const ServicesPage = () => {
  const services = [
    {
      icon: <Car />,
      title: 'Comprehensive Collision Repair',
      description: 'Advanced full-scale restoration solving complex damage challenges while preserving vehicle structural integrity and aesthetic excellence.',
      color: 'border-blue-500',
      details: [
        'Advanced frame straightening',
        'Computer-assisted structural analysis',
        'Paint-matched panel replacements'
      ]
    },
    {
      icon: <Wrench />,
      title: 'Precision Dent Removal',
      description: 'Cutting-edge paintless dent repair techniques that maintain your vehicle\'s original factory finish and market value.',
      color: 'border-green-500',
      details: [
        'Non-invasive repair methods',
        'Preserves original paint',
        'Quick turnaround times'
      ]
    },
    {
      icon: <PaintBucket />,
      title: 'Professional Paint Restoration',
      description: 'Sophisticated color matching and premium painting technologies delivering flawless, showroom-quality refinishing.',
      color: 'border-purple-500',
      details: [
        'Computerized color matching',
        'High-durability clear coats',
        'Environmental-friendly paint systems'
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4 sm:py-24 m-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
        Our Specialized Automotive Solutions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.3, 
              type: "spring", 
              stiffness: 100 
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className={`
              bg-white p-6 rounded-xl shadow-md 
              border-l-4 ${service.color} 
              hover:shadow-xl transition-all duration-300
            `}
          >
            <div className="flex justify-center mb-4 text-blue-600">
              {React.cloneElement(service.icon, { 
                size: 48, 
                strokeWidth: 1.5 
              })}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 text-center">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 text-center">
              {service.description}
            </p>
            <div className="border-t pt-4 mt-4">
              <h4 className="text-sm font-semibold mb-2 text-gray-700">
                Key Features:
              </h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <Sparkle size={12} className="mr-2 text-blue-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage ;