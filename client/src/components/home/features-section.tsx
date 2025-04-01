import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { FEATURES } from '@/lib/types';

export const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const renderIcon = (iconName: string) => {
    return (
      <svg 
        className="w-6 h-6" 
        fill="currentColor" 
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {getIconPath(iconName)}
      </svg>
    );
  };

  const getIconPath = (iconName: string) => {
    switch (iconName) {
      case 'copyright':
        return <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />;
      case 'file-contract':
        return <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />;
      case 'coins':
        return <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" />;
      case 'globe':
        return <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />;
      case 'shield-alt':
        return <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />;
      case 'graduation-cap':
        return <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />;
      default:
        return <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent bg-accent/10 py-1 px-3 rounded-full mb-3">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">Comprehensive Music Compliance Solutions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
            Everything you need to navigate music industry regulations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.id}
              className={`
                relative bg-white rounded-lg p-8 
                shadow-sm hover:shadow-glow-accent 
                transition-all duration-500 flex flex-col 
                border border-neutral-100
                transform hover:-translate-y-2
                ${hoveredFeature === feature.id ? 'z-10 scale-105' : ''}
              `}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div 
                className={`
                  flex items-center justify-center w-16 h-16 
                  rounded-2xl bg-primary text-white mb-6
                  transition-all duration-300
                  ${hoveredFeature === feature.id ? 'bg-gradient-to-r from-primary to-secondary transform rotate-6' : ''}
                `}
              >
                {renderIcon(feature.icon)}
              </div>
              
              <div className="h-1 w-12 bg-accent/30 rounded-full mb-4"></div>
              
              <h3 className={`
                text-2xl font-bold mb-4 
                transition-colors duration-300
                ${hoveredFeature === feature.id ? 'text-gradient' : 'text-primary'}
              `}>
                {feature.title}
              </h3>
              
              <p className="text-neutral-600 text-lg flex-grow mb-6">
                {feature.description}
              </p>
              
              <Link 
                href={`/compliance/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                className={`
                  mt-auto text-accent hover:text-accent/80 
                  font-medium inline-flex items-center group
                `}
              >
                <span className="border-b border-transparent group-hover:border-accent transition-all duration-300">
                  Learn more
                </span> 
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className={`
                  absolute transform rotate-45 bg-accent/10 
                  w-16 h-3 top-6 -right-8
                  transition-all duration-300
                  ${hoveredFeature === feature.id ? 'bg-accent/30' : ''}
                `}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
