import React, { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Search } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { DirectoryEntry } from '@shared/schema';

export const DirectorySection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  
  const { data: entries, isLoading, error } = useQuery<DirectoryEntry[]>({
    queryKey: ['/api/directory'],
  });
  
  const filteredEntries = entries?.filter(entry => {
    const matchesSearch = searchTerm === '' || 
      entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesCategory = category === 'all' || entry.type === category;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Music Industry Directory</h2>
          <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
            Connect with verified music industry professionals, labels, and service providers
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-grow flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search directory..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Record Label">Record Labels</SelectItem>
                  <SelectItem value="Artist">Artists</SelectItem>
                  <SelectItem value="Music Distributor">Distributors</SelectItem>
                  <SelectItem value="Publishing Agency">Publishers</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              Search Directory
            </Button>
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm animate-pulse">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-md bg-neutral-200 mr-4"></div>
                  <div className="w-full">
                    <div className="h-5 bg-neutral-200 rounded w-2/3 mb-2"></div>
                    <div className="h-4 bg-neutral-200 rounded w-1/2 mb-2"></div>
                    <div className="flex gap-2 mt-2">
                      <div className="h-6 w-16 bg-neutral-200 rounded-full"></div>
                      <div className="h-6 w-20 bg-neutral-200 rounded-full"></div>
                      <div className="h-6 w-14 bg-neutral-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <div className="h-4 bg-neutral-200 rounded w-28"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-600">Failed to load directory. Please try again later.</p>
          </div>
        )}

        {filteredEntries && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEntries.map((entry) => (
              <div key={entry.id} className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                <div className="p-6">
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
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/directory">
              Explore Full Directory <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
