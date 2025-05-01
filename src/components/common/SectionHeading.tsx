import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-8 sm:mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">{title}</h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-16 sm:w-24 bg-secondary-500 mt-3 sm:mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;