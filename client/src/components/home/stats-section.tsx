import React from 'react';
import { STATS } from '@/lib/types';

export const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16 md:py-20 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by the Music Industry</h2>
          <p className="mt-4 text-xl text-neutral-100 max-w-3xl mx-auto">
            Join thousands of artists, labels, and music professionals worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <p className="text-neutral-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
