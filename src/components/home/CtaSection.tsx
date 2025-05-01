import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-primary-950 py-12 sm:py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-5 gap-6 lg:gap-8 items-center">
          <div className="md:col-span-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to start your construction project?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 md:mb-0">
              Our team is ready to help you select the right materials for your needs.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-wrap gap-3 sm:gap-4 justify-start md:justify-end">
            <Link to="/products" className="btn bg-white text-primary-950 hover:bg-slate-100">
              Browse Products
            </Link>
            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;