import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, Users, TrendingUp } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const AboutSection: React.FC = () => {
  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <SectionHeading
              title="Building Success Together"
              subtitle="Modern Rusiya Group has been a trusted name in construction materials for over 15 years."
            />
            
            <p className="mb-6 text-base sm:text-lg text-slate-600">
              As a leading supplier of building materials, we take pride in offering only the highest quality products that meet international standards. Our extensive range includes everything from structural components to finishing materials.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="flex items-start hover:transform hover:scale-105 transition-transform duration-300">
                <Clock className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold text-base sm:text-lg">15+ Years</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Industry Experience</p>
                </div>
              </div>
              <div className="flex items-start hover:transform hover:scale-105 transition-transform duration-300">
                <Award className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Premium Quality</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Certified Materials</p>
                </div>
              </div>
              <div className="flex items-start hover:transform hover:scale-105 transition-transform duration-300">
                <Users className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold text-base sm:text-lg">10,000+</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Happy Customers</p>
                </div>
              </div>
              <div className="flex items-start hover:transform hover:scale-105 transition-transform duration-300">
                <TrendingUp className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Growing Network</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Across Regions</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern Rusiya Building Materials Warehouse"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 sm:w-40 h-32 sm:h-40 bg-secondary-500 rounded-lg hidden md:flex items-center justify-center animate-float">
              <div className="text-center text-white p-4">
                <span className="block text-2xl sm:text-3xl font-bold">15+</span>
                <span className="block text-xs sm:text-sm">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;