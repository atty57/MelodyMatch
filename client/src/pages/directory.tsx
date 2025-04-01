import React, { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Search, ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { DirectoryEntry } from '@shared/schema';
import { Link } from 'wouter';

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const { data: entries, isLoading, error } = useQuery<DirectoryEntry[]>({
    queryKey: ['/api/directory'],
  });
  
  const filteredEntries = entries?.filter(entry => {
    const matchesSearch = searchTerm === '' || 
      entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesTab = activeTab === 'all' || 
      (activeTab === 'labels' && entry.type === 'Record Label') ||
      (activeTab === 'distributors' && entry.type === 'Music Distributor') ||
      (activeTab === 'publishers' && entry.type === 'Publishing Agency') ||
      (activeTab === 'artists' && entry.type === 'Artist');
    
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Music Industry Directory</h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-300 backdrop-blur-sm bg-black/10 p-3 rounded-xl inline-block">
                Connect with verified music industry professionals, labels, and service providers from around the world.
              </p>
            </div>
          </div>
        </section>
        
        {/* Directory */}
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
                    placeholder="Search by name, type, location or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-purple-800 hover:shadow-glow-accent text-white transition-all duration-300"
                  onClick={() => {/* Trigger search */}}
                >
                  Search Directory
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-5 bg-gray-800/70 p-1 rounded-xl">
                <TabsTrigger 
                  value="all" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="labels"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Labels
                </TabsTrigger>
                <TabsTrigger 
                  value="distributors"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Distributors
                </TabsTrigger>
                <TabsTrigger 
                  value="publishers"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Publishers
                </TabsTrigger>
                <TabsTrigger 
                  value="artists"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Artists
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border border-gray-700/50 glass-dark animate-pulse rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 rounded-md bg-gray-700/60 mr-4"></div>
                        <div className="w-full">
                          <div className="h-5 bg-gray-700/60 rounded w-2/3 mb-2"></div>
                          <div className="h-4 bg-gray-700/60 rounded w-1/2 mb-2"></div>
                          <div className="flex gap-2 mt-2">
                            <div className="h-6 w-16 bg-gray-700/60 rounded-full"></div>
                            <div className="h-6 w-20 bg-gray-700/60 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-700/50">
                        <div className="h-4 bg-gray-700/60 rounded w-28"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {error && (
              <div className="text-center p-8 bg-red-900/20 backdrop-blur-md rounded-xl border border-red-900/40">
                <p className="text-red-400">Failed to load directory. Please try again later.</p>
              </div>
            )}
            
            {filteredEntries && filteredEntries.length === 0 && (
              <div className="text-center p-8 bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-700/50">
                <p className="text-gray-300">No matches found. Try adjusting your search criteria.</p>
              </div>
            )}
            
            {filteredEntries && filteredEntries.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEntries.map((entry) => (
                  <Card 
                    key={entry.id} 
                    className="border border-gray-700/50 glass-dark hover:shadow-glow hover:shadow-primary/10 transition-all duration-300 rounded-xl overflow-hidden backdrop-blur-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-14 w-14 rounded-md overflow-hidden mr-4">
                          <div className={`bg-${entry.bgColor === 'primary' ? 'primary' : entry.bgColor === 'secondary' ? 'purple-700' : 'indigo-600'} h-full w-full flex items-center justify-center text-white text-xl font-bold shadow-inner`}>
                            {entry.initials}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{entry.name}</h3>
                          <p className="text-sm text-gray-400">{entry.type} • {entry.location}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {entry.tags.map((tag, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 text-xs font-medium text-white bg-purple-600/80 border border-purple-500 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-700/40">
                        <Link 
                          href={`/directory/${entry.id}`}
                          className="text-purple-300 hover:text-purple-200 font-medium inline-flex items-center group transition-all duration-300"
                        >
                          View Profile <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
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
                <Button variant="ghost" className="rounded-none hover:bg-gray-700/50 text-gray-300">
                  1
                </Button>
                <Button className="rounded-lg bg-primary hover:bg-primary/90 text-white">
                  2
                </Button>
                <Button variant="ghost" className="rounded-none hover:bg-gray-700/50 text-gray-300">
                  3
                </Button>
                <Button variant="ghost" className="rounded-none hover:bg-gray-700/50 text-gray-300">
                  ...
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
