import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import CtaSection from '../components/home/CtaSection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Modern Rusiya Group | Premium Building Materials</title>
        <meta 
          name="description" 
          content="Modern Rusiya Group is a leading provider of premium building materials. Explore our range of quality construction products for all your building needs." 
        />
      </Helmet>
      
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <ServicesSection />
      <CtaSection />
    </>
  );
};

export default Home;