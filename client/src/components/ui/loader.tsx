import React, { useEffect, useState } from 'react';
import { Music, Disc, Radio, Mic2 } from 'lucide-react';

interface LoaderProps {
  show: boolean;
}

export const PageLoader = ({ show }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // If show is false, start the fade out animation
    if (!show) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 600); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [show]);
  
  if (!isVisible) return null;
  
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 transition-opacity duration-600 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="backdrop-blur-xl bg-black/20 p-12 rounded-2xl shadow-glow border border-purple-500/20">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="loader-orbit">
              <div className="loader-planet">
                <Disc className="text-white h-6 w-6" />
              </div>
            </div>
            <div className="loader-orbit" style={{ animationDelay: '-4s' }}>
              <div className="loader-planet">
                <Radio className="text-white h-6 w-6" />
              </div>
            </div>
            <div className="loader-orbit" style={{ animationDelay: '-8s' }}>
              <div className="loader-planet">
                <Mic2 className="text-white h-6 w-6" />
              </div>
            </div>
            <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-glow">
              <Music className="text-primary h-8 w-8" />
            </div>
          </div>
          <h2 className="mt-6 text-xl font-bold text-white">Loading MusicPliance</h2>
          <div className="mt-4 relative h-2 w-48 bg-white/20 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-white rounded-full loading-progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionLoader = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="absolute -inset-4 bg-purple-500/10 rounded-full animate-pulse-glow"></div>
        <div className="h-16 w-16 rounded-full border-4 border-gray-800 border-t-purple-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Music className="h-6 w-6 text-purple-400 animate-pulse" />
        </div>
      </div>
      <div className="ml-4 text-gray-300 text-sm font-medium animate-pulse">Loading...</div>
    </div>
  );
};