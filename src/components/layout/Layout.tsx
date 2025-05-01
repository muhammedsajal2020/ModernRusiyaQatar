import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+97474496085"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 z-50 flex items-center justify-center group animate-bounce-slow hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default Layout;