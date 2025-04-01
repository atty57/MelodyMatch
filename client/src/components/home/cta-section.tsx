import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const CTASection = () => {
  const benefits = [
    "Simplified compliance process",
    "Expert support team",
    "Regular updates on regulations",
    "Time-saving tools and resources"
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated background with radial gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90 animate-gradient-x"
      />
      
      {/* Depth-creating dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 z-1"></div>
      
      {/* Floating particles for depth */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <div className="absolute h-2 w-2 rounded-full bg-white/20 top-1/4 left-1/5 animate-float"></div>
        <div className="absolute h-3 w-3 rounded-full bg-white/30 top-3/4 left-1/3 animate-float-slow"></div>
        <div className="absolute h-4 w-4 rounded-full bg-white/10 top-1/3 right-1/4 animate-float-reverse"></div>
        <div className="absolute h-2 w-2 rounded-full bg-white/20 bottom-1/4 right-1/5 animate-float-slow-reverse"></div>
        <div className="absolute h-3 w-3 rounded-full bg-white/20 top-2/3 left-1/6 animate-float-slow"></div>
        <div className="absolute h-2 w-2 rounded-full bg-white/30 bottom-1/3 right-1/6 animate-float"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'white\'/%3E%3C/svg%3E")',
          backgroundSize: '30px 30px',
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-3/5 md:pr-12">
            <div className="p-1 rounded-full inline-block bg-white/20 text-white backdrop-blur-sm mb-4">
              <span className="px-4 py-1 text-sm font-medium">Ready to get started?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-100 leading-tight mb-6">
              Simplify Your Music Compliance Journey Today
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mb-8 backdrop-blur-sm bg-white/5 p-4 rounded-lg shadow-glow border border-white/10">
              Join thousands of music professionals who trust MusicPliance for their compliance needs. Our platform provides everything you need to navigate the complex world of music industry regulations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 mr-2 text-white/70 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 md:mt-0 md:w-2/5">
            <div className="glass-card p-8 rounded-2xl shadow-glow-strong border border-white/20 transform transition-all duration-500 hover:scale-105 relative hardware-accelerated">
              {/* Depth effect with inner highlight */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/50 via-transparent to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Start Your Compliance Journey</h3>
              <p className="text-white/80 mb-6">
                Get access to our comprehensive suite of tools and expert resources.
              </p>
              <div className="space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href="/contact">
                    Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Link href="/compliance">
                    Explore Solutions
                  </Link>
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-6 text-center">
                No credit card required • Free 14-day trial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
