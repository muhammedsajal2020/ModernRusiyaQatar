import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-black/70 z-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern construction site"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
      </div>
      
      {/* Content */}
      <div className="relative min-h-screen flex items-center z-20 pt-20">
        <div className="container-custom">
          <div className="max-w-3xl stagger-animation">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Building the Future with Quality Materials
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-xl">
              Modern Rusiya Group provides premium construction materials for all your building needs, from foundation to finish.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products" 
                className="btn btn-primary group"
              >
                Explore Products 
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-outline border-white text-white hover:bg-white/10 hover:border-white/80"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;