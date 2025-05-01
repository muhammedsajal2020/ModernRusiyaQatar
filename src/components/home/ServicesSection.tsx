import React from 'react';
import { Truck, Hammer, Headset as HeadSet, ShieldCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Truck size={40} className="text-primary-600" />,
    title: "Fast Delivery",
    description: "We provide timely delivery to your construction site, ensuring your project stays on schedule."
  },
  {
    icon: <ShieldCheck size={40} className="text-primary-600" />,
    title: "Quality Assurance",
    description: "All our materials undergo strict quality control to ensure they meet industry standards."
  },
  {
    icon: <Hammer size={40} className="text-primary-600" />,
    title: "Custom Solutions",
    description: "We offer tailored solutions for unique construction requirements and special projects."
  },
  {
    icon: <HeadSet size={40} className="text-primary-600" />,
    title: "Expert Support",
    description: "Our team of experts is always available to provide guidance on material selection."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="We offer comprehensive services to meet all your construction material needs."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4 animate-float">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;