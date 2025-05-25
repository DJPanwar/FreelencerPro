import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: "Web Development", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Digital Marketing", level: 85 },
    { name: "Branding", level: 80 },
    { name: "SEO Optimization", level: 85 },
    { name: "Mobile App Development", level: 75 }
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative group">
              <div className="absolute -inset-4 rounded-xl bg-emerald-500/20 blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Freelancer working" 
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white px-6 py-4 rounded-lg shadow-xl transform group-hover:translate-y-2 transition-transform duration-300">
                <p className="text-xl font-bold">1+ Years Experience</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="w-24 h-1 bg-emerald-500 mb-8 transition-all duration-300 hover:w-32"></div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate freelancer with a mission to transform creative visions into digital realities. With over 1 years of experience in web development, design, and digital marketing, I've helped businesses of all sizes establish their online presence and achieve their goals.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              My approach combines technical expertise with creative problem-solving, ensuring that every project not only looks great but also delivers results. I believe in collaborative partnerships with my clients, transparent communication, and exceptional service from concept to completion.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%`, transform: 'scaleX(0)', transformOrigin: 'left', animation: 'growRight 1.5s ease-out forwards', animationDelay: `${index * 0.2}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Why Work With Me?</h3>
              <ul className="space-y-3">
                {["Dedicated to exceeding expectations", 
                  "Detail-oriented with an eye for design", 
                  "Results-driven approach to every project",
                  "Committed to ongoing communication"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;