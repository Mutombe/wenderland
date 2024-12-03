import React, { useState } from 'react';
import { Navigation } from './components/nav/nav';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation 
} from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  ChevronDown,
  Mail,
} from 'lucide-react';
import HomePage from './components/home/home';
import AboutPage from './components/about/about';
import ServicesPage  from './components/services/services';
import { ProcessPage } from './components/services/services';
import GalleryPage from './components/gallery/gallery';
import ContactPage from './components/contact/contact';




// Page Transition Component
const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Footer Component

const Footer = () => {
  // State to manage accordion-like expandable sections on mobile
  const [activeSection, setActiveSection] = useState(null);

  // Footer sections with collapsible design
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { icon: Phone, text: '+263 77 233 4587' },
        { icon: Mail, text: 'info@wonderland.com' },
        { icon: MapPin, text: 'Granite Side, Harare, Zimbabwe' }
      ]
    }
  ];

  // Social media links
  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/perfectpanels', 
      label: 'Facebook' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/perfectpanels', 
      label: 'Twitter' 
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/perfectpanels', 
      label: 'Instagram' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/company/perfectpanels', 
      label: 'LinkedIn' 
    }
  ];

  // Toggle section expansion on mobile
  const toggleSection = (sectionTitle) => {
    setActiveSection(activeSection === sectionTitle ? null : sectionTitle);
  };

  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Company Branding and Tagline */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Wonderland</h2>
          <p className="text-blue-200 max-w-xl mx-auto">
            Innovative solutions for modern spaces, delivering quality and excellence in every project.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white hover:text-blue-300 
                transform hover:scale-110 
                transition-all duration-300 
                flex items-center justify-center
              "
              aria-label={`${social.label} Profile`}
            >
              <social.icon className="w-7 h-7" />
            </a>
          ))}
        </div>

        {/* Mobile-First Accordion-Style Sections */}
        <div className="space-y-4">
          {footerSections.map((section) => (
            <div 
              key={section.title} 
              className="border-b border-blue-700 pb-4"
            >
              {/* Section Header (Works on Mobile and Desktop) */}
              <button
                onClick={() => toggleSection(section.title)}
                className="
                  w-full flex justify-between items-center 
                  text-lg font-semibold py-3
                  focus:outline-none
                "
              >
                <span>{section.title}</span>
                <ChevronDown 
                  className={`
                    w-5 h-5 transform transition-transform duration-300
                    md:hidden
                    ${activeSection === section.title ? 'rotate-180' : ''}
                  `}
                />
              </button>

              {/* Content (Responsive Visibility) */}
              <div 
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${activeSection === section.title 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'}
                  space-y-2 mt-2
                `}
              >
                {section.links.map((link, index) => (
                  link.path ? (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="
                        block text-blue-200 hover:text-white 
                        transition-colors py-1
                      "
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <div 
                      key={index} 
                      className="flex items-center space-x-2 text-blue-200"
                    >
                      {link.icon && <link.icon className="w-5 h-5" />}
                      <span>{link.text}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-4 border-t border-blue-700">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Wonderland. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


// Main App Component
function PanelBeatingApp() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </PageTransition>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default PanelBeatingApp;
