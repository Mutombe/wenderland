import React, { useEffect,useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const InteractiveMap = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Shop coordinates (replace with actual location)
    const shopLocation = [-17.869085, 31.047436]; 

    // Only initialize map if container exists
    if (mapContainerRef.current && !mapRef.current) {
      // Create map instance
      const map = L.map(mapContainerRef.current).setView(shopLocation, 13);

      // Add tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Create custom marker icon
      const customIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      });

      // Add marker for shop location
      L.marker(shopLocation, { icon: customIcon })
        .addTo(map)
        .bindPopup('Wonderland Panel Beating')
        .openPopup();

      // Store map reference
      mapRef.current = map;
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-96 rounded-lg shadow-md"
    />
  );
};


const ContactPage = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    sending: false,
    success: false,
    error: false
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Simulate form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset previous status
    setFormStatus({ sending: true, success: false, error: false });

    // Simulated async submission
    setTimeout(() => {
      // Simulate potential success/failure scenarios
      if (formData.name && formData.email && formData.message) {
        setFormStatus({ 
          sending: false, 
          success: true, 
          error: false 
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus({ 
          sending: false, 
          success: false, 
          error: true 
        });
      }
    }, 1500);
  };

  return (
    <div className="container mx-auto py-16 sm:py-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Contact Wonderland
          </h1>
          
          {/* Contact Details */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center">
              <MapPin className="mr-4 text-blue-600 flex-shrink-0" size={24} />
              <div>
                <p className="font-medium text-gray-700">Our Workshop</p>
                <p className="text-sm text-gray-600">
                  Granite Side, Harare, Zimbabwe
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="mr-4 text-blue-600 flex-shrink-0" size={24} />
              <div>
                <p className="font-medium text-gray-700">Call Us</p>
                <p className="text-sm text-gray-600">+263 77 233 4587</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Mail className="mr-4 text-blue-600 flex-shrink-0" size={24} />
              <div>
                <p className="font-medium text-gray-700">Email</p>
                <p className="text-sm text-gray-600">info@wonderland.com</p>
              </div>
            </div>
            
            <div className="flex items-center bg-blue-50 p-4 rounded-lg">
              <Clock className="mr-4 text-blue-600 flex-shrink-0" size={24} />
              <div>
                <p className="font-medium text-gray-700">Business Hours</p>
                <p className="text-sm text-gray-600">
                  Mon-Fri: 8am - 6pm | Sat: 9am - 3pm
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-blue-50 p-6 rounded-lg"
          >
            <h3 className="font-semibold mb-4 flex items-center text-gray-800">
              <MessageCircle className="mr-2 text-blue-600" size={24} /> 
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name" 
                className="w-full mb-4 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email" 
                className="w-full mb-4 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message" 
                className="w-full mb-4 p-3 border rounded-md h-32 focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
              
              {/* Form Status Indicators */}
              {formStatus.sending && (
                <div className="mb-4 text-yellow-600 flex items-center">
                  <AlertTriangle className="mr-2" />
                  Sending your message...
                </div>
              )}
              
              {formStatus.success && (
                <div className="mb-4 text-green-600 flex items-center">
                  <CheckCircle2 className="mr-2" />
                  Message sent successfully!
                </div>
              )}
              
              {formStatus.error && (
                <div className="mb-4 text-red-600 flex items-center">
                  <AlertTriangle className="mr-2" />
                  Please fill out all fields.
                </div>
              )}
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
                disabled={formStatus.sending}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
        
        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Location</h2>
          <div className="bg-gray-100 h-96 rounded-lg overflow-hidden flex items-center justify-center">

                        <InteractiveMap/>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;