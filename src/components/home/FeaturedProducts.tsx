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
    category: 'Building Materials',
    description: 'High-quality cement for construction projects. Trusted by top building materials suppliers in Qatar.',
    image: 'https://images.pexels.com/photos/271723/pexels-photo-271723.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'Structural Steel',
    category: 'Building Materials',
    description: 'Durable structural steel for frameworks. Ideal for top 10 building material shops.',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    name: 'Engineered Wood',
    category: 'Building Materials',
    description: 'Sustainable wood products for construction. Available at the best hardware shop in Qatar.',
    image: 'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '4',
    name: 'Decorative Bricks',
    category: 'Building Materials',
    description: 'Aesthetic bricks combining beauty with strength. Find them at a building materials shop near you.',
    image: 'https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '5',
    name: 'Electrical Wiring',
    category: 'Electrical Equipment',
    description: 'Premium-grade wiring for residential and commercial needs. From electrical equipment suppliers in Qatar.',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '6',
    name: 'Hand Tools Set',
    category: 'Hand Tools',
    description: 'Essential hand tools for professionals. Supplied by top hand tools suppliers in Qatar.',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '7',
    name: 'Premium Paints',
    category: 'Paints',
    description: 'Interior and exterior paints for lasting beauty. Available at paints suppliers in Qatar.',
    image: 'https://images.pexels.com/photos/5691549/pexels-photo-5691549.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '8',
    name: 'PVC Pipes',
    category: 'Plumbing Materials',
    description: 'Reliable PVC pipes for all plumbing installations. From trusted plumbing materials suppliers in Qatar.',
    image: 'https://images.pexels.com/photos/461074/pexels-photo-461074.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '9',
    name: 'Cordless Power Drill',
    category: 'Power Tools',
    description: 'Versatile and powerful drill. Preferred by best power tools suppliers in Qatar.',
    image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '10',
    name: 'Safety Helmet',
    category: 'Safety Equipment',
    description: 'Protective gear for construction safety. Offered by top safety equipment suppliers in Qatar.',
    image: 'https://images.pexels.com/photos/209719/pexels-photo-209719.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '11',
    name: 'Ceramic Floor Tiles',
    category: 'Tiles',
    description: 'Elegant ceramic tiles for floors and walls. Find them at tiles suppliers in Qatar.',
    image: 'https://images.pexels.com/photos/4792504/pexels-photo-4792504.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Featured Products"
          subtitle="Discover top-quality building materials, tools, and equipment from leading suppliers in Qatar."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="card group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
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
                  Learn more about {product.name}
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
