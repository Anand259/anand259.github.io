import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Anand Pandey
              </h3>
              <p className="text-gray-400">
                Senior Web Developer
              </p>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <span>© {currentYear} Anand Pandey</span>
                </div>
                <span className="hidden md:inline">•</span>
                <span>All rights reserved.</span>
              </div>
              
              <div className="mt-4 text-sm text-gray-500">
                <p>
                  Built with React, TypeScript, Vite and Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;