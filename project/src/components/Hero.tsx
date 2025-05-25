import React from 'react';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center overflow-hidden">
      {/* Spline Animation Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Spline 
          scene="/assets/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center md:mx-0 md:text-left">
          <div className="inline-block bg-emerald-500/10 px-4 py-1 rounded-full mb-6">
            <p className="text-emerald-400 font-medium">Make Your Vision a Reality</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Turning Your <span className="text-emerald-500">Vision</span> Into Digital <span className="text-emerald-500">Reality</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            Expert freelance services delivering exceptional results that exceed expectations.
            Specializing in web development, design, and digital marketing solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all duration-300 font-medium flex items-center gap-2 group w-full sm:w-auto text-center justify-center backdrop-blur-sm"
            >
              Hire Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a 
              href="#portfolio" 
              className="px-8 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 rounded-full transition-all duration-300 font-medium w-full sm:w-auto text-center backdrop-blur-sm"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;