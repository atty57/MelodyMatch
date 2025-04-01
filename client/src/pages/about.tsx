import React from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { CTASection } from '@/components/home/cta-section';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About MusicPliance</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Dedicated to simplifying music industry compliance for artists, labels, and music professionals worldwide.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 mb-4">
                  At MusicPliance, our mission is to demystify the complex world of music industry compliance, making it accessible and manageable for everyone in the music ecosystem.
                </p>
                <p className="text-gray-300 mb-4">
                  We believe that artists and music professionals should be able to focus on what they do best—creating and sharing music—without being held back by regulatory complexities.
                </p>
                <p className="text-gray-300">
                  Through our comprehensive platform, we provide the tools, resources, and guidance needed to navigate copyright laws, royalty regulations, licensing requirements, and distribution standards with confidence.
                </p>
              </div>
              <div className="glass-dark p-8 rounded-lg border border-gray-700/50 bg-gray-800/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Our Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-white">Integrity</p>
                      <p className="text-gray-300">We provide accurate, up-to-date information you can trust.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-white">Accessibility</p>
                      <p className="text-gray-300">We make complex compliance information easy to understand.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-white">Innovation</p>
                      <p className="text-gray-300">We constantly evolve our solutions to match the changing industry.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-white">Community</p>
                      <p className="text-gray-300">We foster connections between music professionals worldwide.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Meet the experts behind MusicPliance — music industry veterans with decades of combined experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-dark p-6 rounded-lg border border-gray-700/50 bg-gray-800/40 backdrop-blur-sm shadow-lg">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-4">
                  JM
                </div>
                <h3 className="text-xl font-bold text-white">James Mitchell</h3>
                <p className="text-purple-400 mb-3">Founder & CEO</p>
                <p className="text-gray-300 mb-4">
                  Former music rights attorney with 15+ years of experience in copyright law and royalty management.
                </p>
              </div>
              
              <div className="glass-dark p-6 rounded-lg border border-gray-700/50 bg-gray-800/40 backdrop-blur-sm shadow-lg">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-white text-xl font-bold mb-4">
                  LR
                </div>
                <h3 className="text-xl font-bold text-white">Lucia Rodriguez</h3>
                <p className="text-purple-400 mb-3">Chief Compliance Officer</p>
                <p className="text-gray-300 mb-4">
                  Previously led compliance teams at major record labels, specializing in global distribution regulations.
                </p>
              </div>
              
              <div className="glass-dark p-6 rounded-lg border border-gray-700/50 bg-gray-800/40 backdrop-blur-sm shadow-lg">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-white text-xl font-bold mb-4">
                  DK
                </div>
                <h3 className="text-xl font-bold text-white">David Kim</h3>
                <p className="text-purple-400 mb-3">Head of Technology</p>
                <p className="text-gray-300 mb-4">
                  Tech innovator with extensive experience developing platforms for the music industry.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Our Story</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="text-xl font-bold text-purple-400 mb-2">2018</div>
                  <div className="text-lg font-medium text-white">The Beginning</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-300">
                    MusicPliance was founded by James Mitchell after witnessing countless artists and small labels struggle with compliance issues. Recognizing the need for accessible guidance in an increasingly complex music landscape, James assembled a team of industry experts to create a solution.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="text-xl font-bold text-purple-400 mb-2">2020</div>
                  <div className="text-lg font-medium text-white">Expanding Resources</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-300">
                    As digital distribution transformed the industry, we expanded our platform to include comprehensive resources for global compliance, royalty management tools, and an industry directory to connect professionals worldwide.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="text-xl font-bold text-purple-400 mb-2">2022</div>
                  <div className="text-lg font-medium text-white">Global Reach</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-300">
                    MusicPliance expanded its services to cover over 120 countries, becoming the go-to resource for music compliance information across borders. We formed partnerships with leading industry organizations to ensure our platform remains at the forefront of regulatory changes.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="text-xl font-bold text-purple-400 mb-2">Today</div>
                  <div className="text-lg font-medium text-white">Leading the Way</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-300">
                    Today, MusicPliance serves thousands of music professionals worldwide, from independent artists to major labels. Our commitment remains the same: making music industry compliance accessible, understandable, and manageable for everyone.
                  </p>
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
