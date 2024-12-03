import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Fullscreen, 
  ChevronLeft, 
  ChevronRight, 
  X 
} from 'lucide-react';

const GalleryPage = () => {
  // Simulated before and after image pairs with descriptions
  const galleryImages = [
    {
      before: '/pb1.jpg',
      after: '/pb2.jpg',
      title: 'Major Collision Repair',
      description: 'Comprehensive restoration of severe side panel damage'
    },
    {
      before: '/pb3.jpg',
      after: '/pb4.jpg',
      title: 'Paintless Dent Removal',
      description: 'Precision technique preserving original paint'
    },
    {
      before: '/pb5.jpg',
      after: '/pb5b.jpg',
      title: 'Full Color Restoration',
      description: 'Complete color match and finish refinement'
    },
    {
      before: '/pb7.jpg',
      after: '/pb8.jpg',
      title: 'Structural Realignment',
      description: 'Advanced frame straightening and repair'
    },
    {
      before: '/pb9.jpg',
      after: '/pb10.jpg',
      title: 'Cosmetic Touch-Up',
      description: 'Precision detailing and surface correction'
    },
    {
      before: '/pb11.jpg',
      after: '/pb12.jpg',
      title: 'Complete Vehicle Refinishing',
      description: 'Full-scale paint and finish restoration'
    }
  ];

  // State for managing image modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Modal for detailed image view
  const ImageModal = ({ image, onClose }) => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
    >
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-60 text-gray-600 hover:text-gray-900"
        >
          <X size={32} />
        </button>
        <div className="grid md:grid-cols-2 gap-4 p-6">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Before
            </h3>
            <img 
              src={image.before} 
              alt="Before repair" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              After
            </h3>
            <img 
              src={image.after} 
              alt="After repair" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-4 text-center">
          <h4 className="text-xl font-semibold text-gray-800">
            {image.title}
          </h4>
          <p className="text-gray-600">
            {image.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="container mx-auto py-16 sm:py-24 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 flex justify-center items-center">
        <Camera className="inline mr-4 text-blue-600" size={40} /> 
        Before & After Gallery
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={image.before}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 
              transition-all duration-300 rounded-lg flex items-center justify-center">
              <Fullscreen 
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity" 
                size={48} 
              />
            </div>
            <div className="mt-2 text-center">
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                {image.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;