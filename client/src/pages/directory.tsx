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
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Music Industry Directory</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Connect with verified music industry professionals, labels, and service providers from around the world.
              </p>
            </div>
          </div>
        </section>
        
        {/* Directory */}
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
                    placeholder="Search by name, type, location or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button 
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => {/* Trigger search */}}
                >
                  Search Directory
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="labels">Labels</TabsTrigger>
                <TabsTrigger value="distributors">Distributors</TabsTrigger>
                <TabsTrigger value="publishers">Publishers</TabsTrigger>
                <TabsTrigger value="artists">Artists</TabsTrigger>
              </TabsList>
            </Tabs>
            
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border border-neutral-200 animate-pulse">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 rounded-md bg-neutral-200 mr-4"></div>
                        <div className="w-full">
                          <div className="h-5 bg-neutral-200 rounded w-2/3 mb-2"></div>
                          <div className="h-4 bg-neutral-200 rounded w-1/2 mb-2"></div>
                          <div className="flex gap-2 mt-2">
                            <div className="h-6 w-16 bg-neutral-200 rounded-full"></div>
                            <div className="h-6 w-20 bg-neutral-200 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-neutral-200">
                        <div className="h-4 bg-neutral-200 rounded w-28"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {error && (
              <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-600">Failed to load directory. Please try again later.</p>
              </div>
            )}
            
            {filteredEntries && filteredEntries.length === 0 && (
              <div className="text-center p-8 bg-neutral-50 rounded-lg border border-neutral-200">
                <p className="text-neutral-600">No matches found. Try adjusting your search criteria.</p>
              </div>
            )}
            
            {filteredEntries && filteredEntries.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEntries.map((entry) => (
                  <Card key={entry.id} className="border border-neutral-200 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 rounded-md overflow-hidden mr-4">
                          <div className={`bg-${entry.bgColor} h-full w-full flex items-center justify-center text-white text-xl font-bold`}>
                            {entry.initials}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary">{entry.name}</h3>
                          <p className="text-sm text-neutral-500">{entry.type} • {entry.location}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {entry.tags.map((tag, index) => (
                              <span 
                                key={index}
                                className={`px-2 py-1 text-xs ${
                                  entry.bgColor === 'primary' 
                                    ? 'text-primary bg-primary bg-opacity-10'
                                    : entry.bgColor === 'secondary'
                                      ? 'text-secondary bg-secondary bg-opacity-10'
                                      : 'text-accent bg-accent bg-opacity-10'
                                } rounded-full`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-neutral-200">
                        <Link 
                          href={`/directory/${entry.id}`}
                          className="text-accent hover:text-accent/80 font-medium inline-flex items-center"
                        >
                          View Profile <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
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
                <Button variant="outline" className="rounded-none border-x-0">
                  1
                </Button>
                <Button variant="outline" className="rounded-none border-x-0 bg-primary text-white">
                  2
                </Button>
                <Button variant="outline" className="rounded-none border-x-0">
                  3
                </Button>
                <Button variant="outline" className="rounded-none border-x-0">
                  ...
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
