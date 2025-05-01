import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Cement',
    category: 'Cement & Concrete',
    description: 'High-quality cement for all construction projects, ensuring strength and durability.',
    image: 'https://images.pexels.com/photos/271723/pexels-photo-271723.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'Structural Steel',
    category: 'Steel & Reinforcement',
    description: 'Industrial-grade structural steel for frameworks that stand the test of time.',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    name: 'Engineered Wood',
    category: 'Timber & Wood',
    description: 'Sustainable engineered wood products for a variety of construction applications.',
    image: 'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '4',
    name: 'Decorative Bricks',
    category: 'Bricks & Blocks',
    description: 'Aesthetically pleasing bricks that combine beauty with structural integrity.',
    image: 'https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Featured Products"
          subtitle="Discover our premium selection of building materials that combine quality, durability, and value."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="card group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-sm font-medium text-primary-600">{product.category}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <Link 
                  to={`/products#${product.id}`} 
                  className="text-sm font-medium text-primary-700 hover:text-primary-800"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;