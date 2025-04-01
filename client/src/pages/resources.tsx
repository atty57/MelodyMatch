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
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Resource Library</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Access our comprehensive collection of guides, templates, and tools for music industry compliance.
              </p>
            </div>
          </div>
        </section>
        
        {/* Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-neutral-50 shadow rounded-lg p-6 md:p-8 mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-neutral-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button 
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => {/* Trigger search */}}
                >
                  Search Resources
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>
            </Tabs>
            
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border border-neutral-200 animate-pulse">
                    <div className="h-48 w-full bg-neutral-200"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-6 w-16 bg-neutral-200 rounded-full"></div>
                        <div className="ml-2 h-4 w-24 bg-neutral-200 rounded"></div>
                      </div>
                      <div className="h-6 w-full bg-neutral-200 rounded mb-3"></div>
                      <div className="h-4 w-full bg-neutral-200 rounded mb-2"></div>
                      <div className="h-4 w-3/4 bg-neutral-200 rounded mb-4"></div>
                      <div className="h-4 w-32 bg-neutral-200 rounded"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {error && (
              <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-600">Failed to load resources. Please try again later.</p>
              </div>
            )}
            
            {filteredResources && filteredResources.length === 0 && (
              <div className="text-center p-8 bg-neutral-50 rounded-lg border border-neutral-200">
                <p className="text-neutral-600">No resources found. Try adjusting your search criteria.</p>
              </div>
            )}
            
            {filteredResources && filteredResources.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource) => (
                  <Card key={resource.id} className="bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] duration-300">
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
                            ? 'text-primary bg-primary bg-opacity-10'
                            : resource.category === 'Tool'
                              ? 'text-secondary bg-secondary bg-opacity-10'
                              : 'text-accent bg-accent bg-opacity-10'
                        } rounded-full`}>
                          {resource.category}
                        </span>
                        <span className="ml-2 text-sm text-neutral-500">{resource.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{resource.title}</h3>
                      <p className="text-neutral-600 mb-4">
                        {resource.description}
                      </p>
                      {resource.downloadLink && (
                        <a href={resource.downloadLink} className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                          Download PDF <Download className="ml-2 h-4 w-4" />
                        </a>
                      )}
                      {resource.accessLink && (
                        <a href={resource.accessLink} className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                          Access Tool <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex rounded-md">
                <Button variant="outline" className="rounded-l-md rounded-r-none border-r-0">
                  Previous
                </Button>
                <Button variant="outline" className="rounded-none border-x-0 bg-primary text-white">
                  1
                </Button>
                <Button variant="outline" className="rounded-none border-x-0">
                  2
                </Button>
                <Button variant="outline" className="rounded-none border-x-0">
                  3
                </Button>
                <Button variant="outline" className="rounded-r-md rounded-l-none border-l-0">
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
