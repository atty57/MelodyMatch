import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16 md:py-20 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to simplify your music compliance?</h2>
            <p className="mt-4 text-xl text-neutral-100 max-w-3xl">
              Join thousands of music professionals who trust MusicPliance for their compliance needs.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-neutral-100"
            >
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
