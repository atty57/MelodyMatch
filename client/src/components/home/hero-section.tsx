import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Music, Shield, FileText, BarChart4 } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 transform transition-transform duration-3000 scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient overlay with animated background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-gray-900/98 to-gray-800/95 z-0 animate-gradient-x"
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradient-animation 15s ease infinite',
        }}
      />
      
      {/* Secondary gradient for more depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent opacity-60 z-1"
      />
      
      {/* Floating music icons */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <div className="music-note absolute top-1/4 left-1/4 text-white/20 animate-float">
          <Music size={48} />
        </div>
        <div className="music-note absolute top-3/4 left-1/3 text-white/10 animate-float-slow">
          <Shield size={64} />
        </div>
        <div className="music-note absolute top-1/3 right-1/4 text-white/15 animate-float-reverse">
          <FileText size={52} />
        </div>
        <div className="music-note absolute bottom-1/4 right-1/3 text-white/10 animate-float-slow-reverse">
          <BarChart4 size={56} />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
        <div 
          className={`md:w-2/3 transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 leading-tight">
            Music Industry Compliance Made Simple
          </h1>
          <p className="mt-6 text-xl text-neutral-100 max-w-3xl backdrop-blur-sm bg-white/5 p-4 rounded-lg shadow-glow">
            Navigate the complex world of music regulations and standards with confidence. Your comprehensive platform for music industry compliance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100 hover:shadow-glow transition-all duration-300 transform hover:translate-y-[-3px]"
            >
              <Link href="/compliance">
                Explore Solutions
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:translate-y-[-3px]"
            >
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated wave footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-gray-900 animate-wave">
          <path fill="currentColor" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};
