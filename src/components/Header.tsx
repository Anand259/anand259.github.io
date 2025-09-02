import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>((localStorage.getItem("theme") as "light" | "dark") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"));

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);


  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };



  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/50 backdrop-blur shadow-sm border-b border-gray-100 dark:bg-gray-600/50 dark:border-gray-800'
        : 'bg-white/50 backdrop-blur shadow-sm border-b border-gray-100 dark:bg-gray-600/50 dark:border-gray-800'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            Anand Pandey
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-600 hover:text-primary-600 dark:text-white dark:hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl transition duration-300 bg-gray-200 dark:bg-gray-700 dark:text-white"
            >
              {theme === "dark" ? <Moon /> : <Sun className='text-yellow-600'/>}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
                onClick={toggleTheme}
                className="p-2 rounded-sm transition duration-300 bg-gray-200 dark:bg-gray-700 ml-[262px] dark:text-white md:hidden lg:hidden xl:hidden"
              >
                {theme === "dark" ? <Moon /> : <Sun className='text-yellow-600'/>}
              </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600  dark:hover:text-gray-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-gray-600 hover:text-primary-600 dark:text-white dark:hover:text-primary-400 transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              
            </div>
            
          </div>
          
        )}
      </nav>
    </header>
  );
};

export default Header;