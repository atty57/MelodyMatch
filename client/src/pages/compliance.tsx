import React from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { FeaturesSection } from '@/components/home/features-section';
import { CTASection } from '@/components/home/cta-section';
import { FEATURES } from '@/lib/types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Compliance() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Music Industry Compliance</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Navigate the complex world of music regulations with our comprehensive compliance solutions designed for artists, labels, and industry professionals.
              </p>
            </div>
          </div>
        </section>
        
        {/* Compliance Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary">Compliance Areas</h2>
              <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
                Explore our suite of compliance solutions designed to address every aspect of the music industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="flex border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white mr-6">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-neutral-600 mb-4">{feature.description}</p>
                    <Link 
                      href={`/compliance/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-accent hover:text-accent/80 font-medium inline-flex items-center"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Our Compliance Solutions</h2>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-primary">Industry Expertise</h3>
                      <p className="mt-1 text-neutral-600">
                        Our team includes professionals with decades of experience in music licensing, royalty management, and copyright law.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-primary">Comprehensive Coverage</h3>
                      <p className="mt-1 text-neutral-600">
                        We provide end-to-end solutions covering every aspect of music industry compliance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-primary">Up-to-Date Information</h3>
                      <p className="mt-1 text-neutral-600">
                        Our resources are constantly updated to reflect the latest regulations and industry standards.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-primary">Personalized Support</h3>
                      <p className="mt-1 text-neutral-600">
                        Get tailored solutions and dedicated support for your specific compliance needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-200">
                  <h3 className="text-2xl font-bold text-primary mb-6">Compliance Assessment</h3>
                  <p className="text-neutral-600 mb-6">
                    Not sure where to start? Take our free compliance assessment to identify areas that need attention in your music business.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mr-4">1</div>
                      <p className="text-neutral-700">Answer a few questions about your music business</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mr-4">2</div>
                      <p className="text-neutral-700">Receive a personalized compliance report</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mr-4">3</div>
                      <p className="text-neutral-700">Get recommendations for improvement</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href="/compliance/assessment">
                      <button className="w-full py-3 px-4 bg-accent hover:bg-accent/90 text-white font-medium rounded-md">
                        Start Free Assessment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
