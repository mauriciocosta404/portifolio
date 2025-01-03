import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-purple-500">Dev.Portfolio</a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-purple-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-purple-500 transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-purple-500 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-500 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-300 hover:text-purple-500 transition-colors">Home</a>
            <a href="#about" className="block text-gray-300 hover:text-purple-500 transition-colors">About</a>
            <a href="#projects" className="block text-gray-300 hover:text-purple-500 transition-colors">Projects</a>
            <a href="#contact" className="block text-gray-300 hover:text-purple-500 transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;