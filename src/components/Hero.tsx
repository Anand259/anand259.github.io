import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Anand_Pandey from './../../public/assets/AnandPandey.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold text-primary-600 overflow-hidden">
                <img src={Anand_Pandey}/>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-8 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Anand Pandey
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-600 font-medium mb-6">
              Senior Web Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Dedicated and experienced PHP developer with ten years of expertise in web development, 
              seeking challenging opportunities to leverage my skills and contribute to innovative projects in the field.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <a 
                href="tel:+919451941696" 
                className="flex items-center gap-2 hover:text-primary-600 transition-colors group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span>+91-9451-941-696</span>
              </a>
              <a 
                href="mailto:anandpandey259@gmail.com" 
                className="flex items-center gap-2 hover:text-primary-600 transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>anandpandey259@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Varanasi, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/anand-pandey-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Anand259"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:anandpandey259@gmail.com"
                className="w-12 h-12 bg-accent-600 text-white rounded-full flex items-center justify-center hover:bg-accent-700 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-3 rounded-full font-medium hover:from-primary-700 hover:to-accent-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;