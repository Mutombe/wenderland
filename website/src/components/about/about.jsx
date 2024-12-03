import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Hammer, Users, Trophy } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 sm:py-24">
        {/* Mobile and Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Column Content - Stacked on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 order-2 md:order-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center md:text-left">
              The Perfect Panels Journey
            </h1>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Origin</h2>
              <p className="text-sm sm:text-base text-gray-600">
                In 2005, Perfect Panels emerged from a passionate commitment to automotive restoration. What began in a small garage with two dedicated technicians has now blossomed into a premier vehicle restoration studio recognized nationwide.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Philosophy</h2>
              <p className="text-sm sm:text-base text-gray-600">
                We believe every vehicle tells a story. Our mission is not just to repair, but to revive - transforming each panel, each curve into a testament of automotive artistry and precision engineering.
              </p>
            </div>
          </motion.div>

          {/* Workshop Image - Responsive Sizing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative order-1 md:order-2"
          >
            <img
              src="/ws.jpg"
              alt="Our Workshop"
              className="w-full h-64 sm:h-96 md:h-[600px] object-cover rounded-2xl shadow-2xl sm:py-24"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 sm:p-6 rounded-b-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base sm:text-xl font-bold">State-of-the-Art Facility</h3>
                  <p className="text-xs sm:text-sm">Where technology meets craftsmanship</p>
                </div>
                <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Strengths Section - Mobile-Friendly Grid */}
        <div className="mt-12 sm:mt-24 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
            Why Choose Perfect Panels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                icon: Hammer, 
                title: "Advanced Technology", 
                description: "Cutting-edge diagnostic tools and precision equipment ensure unmatched restoration quality."
              },
              { 
                icon: Users, 
                title: "Expert Team", 
                description: "Decades of combined experience with continuous training in the latest automotive restoration techniques."
              },
              { 
                icon: Trophy, 
                title: "Award-Winning Service", 
                description: "Recognized nationally for excellence in vehicle restoration and customer satisfaction."
              }
            ].map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col items-center">
                  <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;