import React from 'react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
}

const branches: Branch[] = [
  {
    id: "main-branch",
    name: "Main Branch - Headquarters",
    address: "Birkat Al Awamer, Qatar",
    phone: "+974 3129 4939",
    email: "info@rusiyaqatart.com",
    hours: "Monday-Sunday: 5am-10pm, Friday: 5am-10am, 4pm-10pm",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=790,fit=crop/YZ9bMZ3W9lu7ae4r/birkath-ALpobr9LVlHeXZoW.jpg"
  },
  {
    id: "north-branch",
    name: "North District Branch",
    address: "456 Builder's Road, North District, 12345",
    phone: "+1 (555) 234-5678",
    email: "north@modernrusiya.com",
    hours: "Monday-Friday: 8am-6pm, Saturday: 9am-5pm",
    image: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "east-branch",
    name: "East Industrial Zone",
    address: "789 Industrial Park, East District, 12345",
    phone: "+1 (555) 345-6789",
    email: "east@modernrusiya.com",
    hours: "Monday-Friday: 8am-6pm, Saturday: 9am-5pm",
    image: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "west-branch",
    name: "West Commercial Center",
    address: "321 Commercial Blvd, West District, 12345",
    phone: "+1 (555) 456-7890",
    email: "west@modernrusiya.com",
    hours: "Monday-Friday: 8am-6pm, Saturday: 9am-5pm",
    image: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "south-branch",
    name: "South Retail Outlet",
    address: "654 Retail Street, South District, 12345",
    phone: "+1 (555) 567-8901",
    email: "south@modernrusiya.com",
    hours: "Monday-Friday: 8am-6pm, Saturday: 9am-5pm",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Branches: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Our Branches" 
        description="Find a Modern Rusiya Group location near you."
        image="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Branch Locations"
            subtitle="Visit any of our branches to explore our products and talk to our experts."
            centered
          />
          
          <div className="space-y-12">
            {branches.map((branch, index) => (
              <div 
                key={branch.id}
                id={branch.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`order-2 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <h3 className="text-2xl font-bold mb-4">{branch.name}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex">
                      <MapPin className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <span>{branch.address}</span>
                    </div>
                    
                    <div className="flex">
                      <Phone className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <span>{branch.phone}</span>
                    </div>
                    
                    <div className="flex">
                      <Mail className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <span>{branch.email}</span>
                    </div>
                    
                    <div className="flex">
                      <Clock className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Get Directions
                  </a>
                </div>
                
                <div className={`order-1 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                {index < branches.length - 1 && (
                  <div className="col-span-1 md:col-span-2 order-3">
                    <hr className="my-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="Find Us Nationwide"
            subtitle="Our network of branches is constantly growing to serve you better."
            centered
          />
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1620329772078!5m2!1sen!2sca" 
                width="100%" 
                height="500" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Branch Locations Map"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Branches;