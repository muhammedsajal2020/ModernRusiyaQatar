import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building size={28} className="text-white" />
              <div>
                <span className="font-display text-lg font-bold text-white block leading-tight">
                  Modern Rusiya Group
                </span>
                <span className="text-xs text-slate-300 font-medium block -mt-1">
                The Perfect Building Partner
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Premium building materials for all your construction needs. Quality products, exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/branches" className="text-slate-300 hover:text-white transition-colors">
                  Branches
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition-colors">
                  Cement & Concrete
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition-colors">
                  Bricks & Blocks
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition-colors">
                  Steel & Reinforcement
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition-colors">
                  Timber & Wood
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition-colors">
                  Paints & Finishes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-slate-400 mr-3 mt-0.5" />
                <span className="text-slate-300">
                  123 Construction Avenue, Building District, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-slate-400 mr-3" />
                <span className="text-slate-300">+97474496085</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-slate-400 mr-3" />
                <span className="text-slate-300">info@rusiyaqatar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Modern Rusiya Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;