import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  image = "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920",
  children 
}) => {
  return (
    <>
      <Helmet>
        <title>{`${title} | Modern Rusiya Group`}</title>
        <meta name="description" content={description || `${title} - Modern Rusiya Group building materials`} />
      </Helmet>
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-primary-900/50 z-10"></div>
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 min-h-[300px] md:min-h-[400px] flex items-center justify-center pt-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
            {description && <p className="text-lg max-w-2xl mx-auto">{description}</p>}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;