'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: '01', name: 'Home' },
    { id: 'about', label: '02', name: 'About' },
    { id: 'experience', label: '03', name: 'Experience' },
    { id: 'projects', label: '04', name: 'Projects' },
    { id: 'skills', label: '05', name: 'Skills' },
    { id: 'contact', label: '06', name: 'Contact' },
  ];

  return (
    <>
      {/* Logo/Name - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-8 left-8 z-50 hidden md:block"
      >
        <button
          onClick={() => scrollToSection('hero')}
          className="text-sm font-mono tracking-wider text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          &lt;SikinamNithin /&gt;
        </button>
      </motion.div>

      {/* Minimal Side Navigation */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center justify-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="mr-4 text-xs font-mono text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.name}
              </span>
              <div className="flex items-center">
                <div
                  className={`h-px transition-all ${
                    activeSection === item.id
                      ? 'w-12 bg-gray-900 dark:bg-gray-100'
                      : 'w-6 bg-gray-300 dark:bg-gray-700 group-hover:w-10 group-hover:bg-gray-600 dark:group-hover:bg-gray-400'
                  }`}
                />
                <span
                  className={`ml-2 text-xs font-mono transition-colors ${
                    activeSection === item.id
                      ? 'text-gray-900 dark:text-gray-100 font-semibold'
                      : 'text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
      >
        <div className="flex justify-between items-center px-6 py-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-mono tracking-wider text-gray-900 dark:text-gray-100"
          >
            &lt;SikinamNithin /&gt;
          </button>
          <div className="flex space-x-4 text-xs font-mono">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
