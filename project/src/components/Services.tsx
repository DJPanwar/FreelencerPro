import React from 'react';
import { Code, PenTool, Megaphone, BarChart } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesData: Service[] = [
  {
    icon: <Code size={36} className="text-emerald-500 mb-4" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies. Responsive, fast, and user-friendly solutions tailored to your specific needs."
  },
  {
    icon: <PenTool size={36} className="text-emerald-500 mb-4" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience. From wireframes to final designs, creating interfaces that users love to interact with."
  },
  {
    icon: <Megaphone size={36} className="text-emerald-500 mb-4" />,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns to boost your online presence. SEO, content marketing, and social media strategies to reach your target audience."
  },
  {
    icon: <BarChart size={36} className="text-emerald-500 mb-4" />,
    title: "Analytics & SEO",
    description: "Data-driven optimization to increase visibility and performance. Comprehensive analysis and implementation of SEO best practices."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Services</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            High-quality freelance services tailored to help your business grow and succeed in the digital landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg p-8 transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:-translate-y-2"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;