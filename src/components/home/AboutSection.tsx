import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, Users, TrendingUp, Hammer, Wrench, Paintbrush, ShieldCheck, Grid, Pipette, Zap, Building } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const AboutSection = () => {
  // Define a placeholder image component
  const PlaceholderImage = () => (
    <div className="relative w-full h-full">
      <img
        src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Placeholder"
        className="w-full h-full object-cover"
      />
      Optional overlays can go here if needed
      {/* Example overlay box */}
     </div>
  );
  
  

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <SectionHeading
              title="Best Building Materials & Hardware Shop in Qatar"
              subtitle="Modern Rusiya Group has been a trusted name in construction materials and hardware for over 32 years."
            />
            
            <p className="mb-6 text-base sm:text-lg text-slate-600">
              As a leading supplier of building materials in Qatar, we take pride in offering only the highest quality products that meet international standards. Our extensive range includes everything from structural components to electrical equipment, hand tools, paints, plumbing materials, power tools, safety equipment, and tiles.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="flex items-start hover:scale-105 transition-transform duration-300">
                <Clock className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-base sm:text-lg">32+ Years</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Industry Experience</p>
                </div>
              </div>
              <div className="flex items-start hover:scale-105 transition-transform duration-300">
                <Award className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Premium Quality</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Building Materials</p>
                </div>
              </div>
              <div className="flex items-start hover:scale-105 transition-transform duration-300">
                <Users className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-base sm:text-lg">50,000+</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Happy Customers</p>
                </div>
              </div>
              <div className="flex items-start hover:scale-105 transition-transform duration-300">
                <TrendingUp className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Top 10 Supplier</h4>
                  <p className="text-xs sm:text-sm text-slate-600">In Qatar</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold text-lg mb-3">Our Comprehensive Range:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <li className="flex items-center text-sm text-slate-700">
                  <Hammer className="text-primary-600 w-4 h-4 mr-2 flex-shrink-0" />
                  Power Tools
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <Wrench className="text-primary-600 w-4 h-4 mr-2 flex-shrink-0" />
                  Hand Tools
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <Paintbrush className="text-primary-600 w-4 h-4 mr-2 flex-shrink-0" />
                  Paints
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <ShieldCheck className="text-primary-600 w-4 h-4 mr-2 flex-shrink-0" />
                  Safety Equipment
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <Grid className="text-primary-600 w-4 h-4 mr-2 flex-shrink-0" />
                  Tiles
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <Pipette className="text-primary-600 w-4 h-4 mr-2 flex-shrink-0" />
                  Plumbing Materials
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <Zap className="text-primary-600 w-4 h-4 mr-2 flex-shrink-0" />
                  Electrical Equipment
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <Building className="text-primary-600 w-4 h-4 mr-2 flex-shrink-0" />
                  Building Materials
                </li>
              </ul>
            </div>
            
            <Link 
              to="/branches" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-md transition-colors duration-300"
            >
              Find Hardware Shop Near Me
            </Link>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              {/* Custom SVG placeholder - guaranteed to work */}
              <div className="w-full h-52 sm:h-64 md:h-80 lg:h-96 bg-white">
                <PlaceholderImage />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4 sm:p-6 bg-white bg-opacity-80 rounded-lg">
                    {/* <Building className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-primary-600" /> */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">Modern Rusiya Group</h3>
                    <p className="text-sm sm:text-base text-slate-600">Best Building Materials Shop in Qatar</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-secondary-500 rounded-lg flex items-center justify-center shadow-lg">
              <div className="text-center text-white p-2 sm:p-4">
                <span className="block text-xl sm:text-2xl md:text-3xl font-bold">32+</span>
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