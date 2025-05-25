import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "web",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A modern e-commerce platform with a seamless shopping experience.",
    link: "#"
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "design",
    image: "https://images.pexels.com/photos/6804073/pexels-photo-6804073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Complete brand identity design including logo, colors, and guidelines.",
    link: "https://www.figma.com/design/gEpazLDCtHVBwHeXLeFiNn/Untitled?t=Q4bWofTCcgd20uQu-1"
  },
  {
    id: 3,
    title: "SEO Campaign",
    category: "marketing",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Successful SEO campaign resulting in 300% traffic increase.",
    link: "#"
  },
  {
    id: 4,
    title: "Mobile Application",
    category: "web",
    image: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Intuitive mobile app with cross-platform functionality.",
    link: "#"
  },
  {
    id: 5,
    title: "Social Media Strategy",
    category: "marketing",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Comprehensive social media strategy for brand growth.",
    link: "https://www.figma.com/design/2MEV8NJLbqZM3UmTwCjUV7/Untitled?node-id=0-1&t=N11vNiTXA8ays4Qo-1"
  },
  {
    id: 6,
    title: "UI/UX Redesign",
    category: "design",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Complete redesign of user interface improving conversion rates.",
    link: "https://www.figma.com/design/mJ2ujjUkP2BRPHRHfcYf25/Untitled?node-id=0-1&t=6HEqNSHmCMUrppYc-1"
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'web', 'design', 'marketing'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Portfolio</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my recent projects and discover how I've helped clients achieve their goals
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg bg-gray-800 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;