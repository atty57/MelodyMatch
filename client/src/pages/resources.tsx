import React, { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Search, Download, ExternalLink } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Resource } from '@shared/schema';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const { data: resources, isLoading, error } = useQuery<Resource[]>({
    queryKey: ['/api/resources'],
  });
  
  const filteredResources = resources?.filter(resource => {
    const matchesSearch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesTab = activeTab === 'all' || 
      (activeTab === 'guides' && resource.category === 'Guide') ||
      (activeTab === 'tools' && resource.category === 'Tool') ||
      (activeTab === 'templates' && resource.category === 'Template');
    
    return matchesSearch && matchesTab;
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background with depth effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 z-0"></div>
          
          {/* Background pattern for depth */}
          <div className="absolute inset-0 bg-dot-pattern opacity-5 z-0"></div>
          
          {/* Decorative elements for depth */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl z-0"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-800/10 rounded-full blur-3xl z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Resource Library</h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-300 backdrop-blur-sm bg-black/10 p-3 rounded-xl inline-block">
                Access our comprehensive collection of guides, templates, and tools for music industry compliance.
              </p>
            </div>
          </div>
        </section>
        
        {/* Resources */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 shadow-lg rounded-xl p-6 md:p-8 mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-purple-300" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-purple-800 hover:shadow-glow-accent text-white transition-all duration-300"
                  onClick={() => {/* Trigger search */}}
                >
                  Search Resources
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-4 bg-gray-800/70 p-1 rounded-xl">
                <TabsTrigger 
                  value="all" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  All Resources
                </TabsTrigger>
                <TabsTrigger 
                  value="guides"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Guides
                </TabsTrigger>
                <TabsTrigger 
                  value="tools"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Tools
                </TabsTrigger>
                <TabsTrigger 
                  value="templates"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Templates
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border border-gray-700/50 glass-dark animate-pulse rounded-xl">
                    <div className="h-48 w-full bg-gray-700/60"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-6 w-16 bg-gray-700/60 rounded-full"></div>
                        <div className="ml-2 h-4 w-24 bg-gray-700/60 rounded"></div>
                      </div>
                      <div className="h-6 w-full bg-gray-700/60 rounded mb-3"></div>
                      <div className="h-4 w-full bg-gray-700/60 rounded mb-2"></div>
                      <div className="h-4 w-3/4 bg-gray-700/60 rounded mb-4"></div>
                      <div className="h-4 w-32 bg-gray-700/60 rounded"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {error && (
              <div className="text-center p-8 bg-red-900/20 backdrop-blur-md rounded-xl border border-red-900/40">
                <p className="text-red-400">Failed to load resources. Please try again later.</p>
              </div>
            )}
            
            {filteredResources && filteredResources.length === 0 && (
              <div className="text-center p-8 bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-700/50">
                <p className="text-gray-300">No resources found. Try adjusting your search criteria.</p>
              </div>
            )}
            
            {filteredResources && filteredResources.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource) => (
                  <Card 
                    key={resource.id} 
                    className="border border-gray-700/50 glass-dark hover:shadow-glow hover:shadow-primary/10 transition-all duration-300 rounded-xl overflow-hidden backdrop-blur-lg hover:translate-y-[-4px]"
                  >
                    <div className="h-48 w-full overflow-hidden">
                      <img 
                        src={resource.imageUrl}
                        alt={resource.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <span className={`px-3 py-1 text-xs font-semibold ${
                          resource.category === 'Guide' 
                            ? 'text-purple-200 bg-purple-800/30 border border-purple-700/40'
                            : resource.category === 'Tool'
                              ? 'text-indigo-200 bg-indigo-800/30 border border-indigo-700/40'
                              : 'text-blue-200 bg-blue-800/30 border border-blue-700/40'
                        } rounded-full`}>
                          {resource.category}
                        </span>
                        <span className="ml-2 text-sm text-gray-400">{resource.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                      <p className="text-gray-300 mb-4">
                        {resource.description}
                      </p>
                      {resource.downloadLink && (
                        <a href={resource.downloadLink} className="text-purple-300 hover:text-purple-200 font-medium inline-flex items-center group transition-all duration-300">
                          Download PDF <Download className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                        </a>
                      )}
                      {resource.accessLink && (
                        <a href={resource.accessLink} className="text-purple-300 hover:text-purple-200 font-medium inline-flex items-center group transition-all duration-300">
                          Access Tool <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex rounded-xl overflow-hidden glass-dark p-1 border border-gray-700/50">
                <Button variant="ghost" className="rounded-l-lg rounded-r-none hover:bg-gray-700/50 text-gray-300">
                  Previous
                </Button>
                <Button className="rounded-lg bg-primary hover:bg-primary/90 text-white">
                  1
                </Button>
                <Button variant="ghost" className="rounded-none hover:bg-gray-700/50 text-gray-300">
                  2
                </Button>
                <Button variant="ghost" className="rounded-none hover:bg-gray-700/50 text-gray-300">
                  3
                </Button>
                <Button variant="ghost" className="rounded-r-lg rounded-l-none hover:bg-gray-700/50 text-gray-300">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
