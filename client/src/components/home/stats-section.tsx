import React, { useState, useEffect } from 'react';
import { STATS } from '@/lib/types';
import { Music, Users, Award, Globe } from 'lucide-react';

export const StatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState<{[key: number]: string}>({});
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Simulate intersection observer
    const timer = setTimeout(() => {
      setIsInView(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    
    STATS.forEach((stat, index) => {
      // Parse the numeric value
      const numericValue = parseInt(stat.value.replace(/,/g, ''));
      let startValue = 0;
      
      // Animate the counters
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentValue = Math.floor(numericValue * progress);
        
        if (frame === totalFrames) {
          clearInterval(timer);
          setAnimatedStats(prev => ({...prev, [stat.id]: stat.value}));
        } else {
          setAnimatedStats(prev => ({...prev, [stat.id]: currentValue.toLocaleString()}));
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    });
  }, [isInView]);

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Music className="w-8 h-8" />;
      case 1: return <Users className="w-8 h-8" />;
      case 2: return <Award className="w-8 h-8" />;
      case 3: return <Globe className="w-8 h-8" />;
      default: return <Music className="w-8 h-8" />;
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-gradient-x"
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Patterned overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundSize: '20px 20px',
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-white bg-white/10 py-1 px-3 rounded-full mb-3 backdrop-blur-sm">Our Impact</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Trusted by the Music Industry</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto mb-6 rounded-full"></div>
          <p className="mt-4 text-xl text-neutral-100 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 p-3 rounded-lg inline-block">
            Join thousands of artists, labels, and music professionals worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`
                text-center glass p-6 rounded-xl
                border border-white/20 transform transition-all duration-700
                ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                hover:shadow-glow hover:bg-white/20 hover:scale-105 relative hardware-accelerated
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Depth effect overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-40 pointer-events-none"></div>
              
              {/* Inner glow on hover */}
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/50 to-transparent transform transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
                {getIcon(index)}
              </div>
              <div className="text-4xl md:text-6xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                {animatedStats[stat.id] || '0'}
              </div>
              <p className="text-neutral-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-white opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};
