import React from 'react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import { Check, Target, Clock, Trophy, Users, BarChart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="About Us" 
        description="Learn about Modern Rusiya Group, our history, mission, and commitment to quality."
        image="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="Delivering quality building materials since 2010."
              />
              
              <p className="mb-4 text-slate-600">
                Modern Rusiya Group was founded with a vision to provide high-quality building materials to construction professionals and homeowners alike. What began as a small supplier has grown into a trusted name in the construction industry.
              </p>
              
              <p className="mb-4 text-slate-600">
                Over the years, we have expanded our product range and geographical presence to better serve our customers. Our commitment to quality and customer satisfaction has remained unwavering throughout our journey.
              </p>
              
              <p className="text-slate-600">
                Today, we continue to build on our legacy by sourcing the finest materials, staying ahead of industry trends, and providing exceptional service to our valued customers.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern Rusiya Group Founding Team"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-500 rounded-lg hidden md:flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="block text-3xl font-bold">15+</span>
                  <span className="block text-sm">Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="Guiding principles that drive our business forward."
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Target size={32} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 mb-4">
                To provide superior quality building materials that enable the construction of safe, sustainable, and beautiful structures while delivering exceptional value to our customers.
              </p>
              <ul className="space-y-2">
                {['Quality without compromise', 'Customer satisfaction', 'Sustainable practices', 'Innovative solutions'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-accent-600 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <BarChart size={32} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 mb-4">
                To become the most trusted and preferred supplier of building materials, recognized for our commitment to quality, innovation, and exceptional customer service.
              </p>
              <ul className="space-y-2">
                {['Industry leadership', 'Geographical expansion', 'Technological advancement', 'Environmental responsibility'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-accent-600 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock size={36} className="text-primary-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-1">15+</h4>
              <p className="text-slate-600">Years of Experience</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Trophy size={36} className="text-primary-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-1">20+</h4>
              <p className="text-slate-600">Industry Awards</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users size={36} className="text-primary-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-1">10,000+</h4>
              <p className="text-slate-600">Happy Customers</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target size={36} className="text-primary-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-1">1000+</h4>
              <p className="text-slate-600">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the dedicated professionals behind Modern Rusiya Group."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "John Smith",
                position: "CEO & Founder",
                photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                name: "Sarah Johnson",
                position: "Operations Director",
                photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                name: "Michael Chang",
                position: "Product Specialist",
                photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                name: "Emma Wilson",
                position: "Customer Relations",
                photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((member, index) => (
              <div key={index} className="card group text-center">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;