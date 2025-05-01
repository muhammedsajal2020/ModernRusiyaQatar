import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import { Filter } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

const productCategories = [
  "All Categories",
  "Cement & Concrete",
  "Bricks & Blocks",
  "Steel & Reinforcement",
  "Timber & Wood",
  "Paints & Finishes",
  "Roofing Materials"
];

const productList: Product[] = [
  {
    id: "premium-cement",
    name: "Premium Portland Cement",
    category: "Cement & Concrete",
    description: "High-quality Portland cement suitable for a wide range of construction applications. Provides excellent strength and durability.",
    features: ["High strength", "Fast setting time", "Weather resistant", "Versatile application"],
    image: "https://images.pexels.com/photos/271723/pexels-photo-271723.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "structural-steel",
    name: "Structural Steel Beams",
    category: "Steel & Reinforcement",
    description: "Industrial-grade structural steel beams for load-bearing applications in construction projects of all sizes.",
    features: ["High tensile strength", "Corrosion resistant", "Precise dimensions", "Quality tested"],
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "engineered-wood",
    name: "Engineered Hardwood",
    category: "Timber & Wood",
    description: "Premium engineered hardwood panels ideal for flooring, furniture, and architectural applications.",
    features: ["Sustainable sourcing", "Dimensional stability", "Multiple finishes", "Easy installation"],
    image: "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "decorative-bricks",
    name: "Decorative Clay Bricks",
    category: "Bricks & Blocks",
    description: "Aesthetically pleasing clay bricks for facades, interior walls, and decorative elements in construction.",
    features: ["Uniform size", "Frost resistant", "Variety of colors", "Traditional look"],
    image: "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "exterior-paint",
    name: "Weather Shield Exterior Paint",
    category: "Paints & Finishes",
    description: "High-performance exterior paint with advanced weather protection for long-lasting color and finish.",
    features: ["UV resistant", "Waterproof", "10-year warranty", "Low VOC"],
    image: "https://images.pexels.com/photos/6368836/pexels-photo-6368836.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "concrete-blocks",
    name: "Heavy Duty Concrete Blocks",
    category: "Bricks & Blocks",
    description: "Durable concrete blocks for foundation and structural walls, providing excellent strength and insulation.",
    features: ["High compression strength", "Uniform dimensions", "Fire resistant", "Sound insulating"],
    image: "https://images.pexels.com/photos/2469651/pexels-photo-2469651.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "rebar-steel",
    name: "Ribbed Reinforcement Bars",
    category: "Steel & Reinforcement",
    description: "High-quality ribbed steel bars for reinforcing concrete structures and ensuring structural integrity.",
    features: ["High tensile strength", "Corrosion resistant", "Available in multiple sizes", "Meets BS standards"],
    image: "https://images.pexels.com/photos/2902440/pexels-photo-2902440.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "asphalt-shingles",
    name: "Architectural Roof Shingles",
    category: "Roofing Materials",
    description: "Premium asphalt roofing shingles designed for durability, weather resistance, and aesthetic appeal.",
    features: ["Wind resistant", "30-year warranty", "Multiple colors available", "Easy installation"],
    image: "https://images.pexels.com/photos/1170385/pexels-photo-1170385.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "plywood-sheets",
    name: "Marine Grade Plywood",
    category: "Timber & Wood",
    description: "Water-resistant plywood sheets ideal for areas exposed to moisture and exterior applications.",
    features: ["Water resistant", "Warp resistant", "Smooth finish", "Multiple thicknesses"],
    image: "https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "metal-roofing",
    name: "Standing Seam Metal Roofing",
    category: "Roofing Materials",
    description: "Durable metal roofing panels with concealed fasteners, providing modern aesthetics and long-lasting performance.",
    features: ["Lightweight", "50-year lifespan", "Energy efficient", "Recyclable material"],
    image: "https://images.pexels.com/photos/1001990/pexels-photo-1001990.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  
  const filteredProducts = selectedCategory === "All Categories" 
    ? productList 
    : productList.filter(product => product.category === selectedCategory);
  
  return (
    <>
      <PageHeader 
        title="Our Products" 
        description="Discover our comprehensive range of high-quality building materials."
        image="https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Building Materials Catalog"
            subtitle="Browse our extensive selection of premium construction materials for all your building needs."
            centered
          />
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar filters - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-slate-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {productCategories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary-100 text-primary-800 font-medium'
                            : 'hover:bg-slate-100'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Mobile filters button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="flex items-center bg-slate-100 px-4 py-2 rounded-md text-slate-800 w-full"
              >
                <Filter size={18} className="mr-2" />
                <span>{selectedCategory}</span>
              </button>
              
              {mobileFilterOpen && (
                <div className="bg-white shadow-lg rounded-md mt-2 p-4 absolute z-10 left-4 right-4 animate-slide-down">
                  <h3 className="font-bold mb-2">Select Category</h3>
                  <ul className="space-y-2">
                    {productCategories.map(category => (
                      <li key={category}>
                        <button
                          onClick={() => {
                            setSelectedCategory(category);
                            setMobileFilterOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-md ${
                            selectedCategory === category
                              ? 'bg-primary-100 text-primary-800 font-medium'
                              : ''
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Products grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} id={product.id} className="card group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                      
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="space-y-1 mb-4">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-sm flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="text-sm font-medium text-primary-700 hover:text-primary-800">
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12 bg-slate-50 rounded-lg">
                  <p className="text-lg text-slate-600">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;