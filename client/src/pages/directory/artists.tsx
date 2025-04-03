import React, { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Search, ArrowRight, MapPin, MusicIcon, PlusCircle, Star, Headphones, RadioIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { DirectoryEntry } from '@shared/schema';
import { Link } from 'wouter';
import { PageLoader } from '@/components/ui/loader';

export default function ArtistsDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: entries, isLoading } = useQuery<DirectoryEntry[]>({
    queryKey: ['/api/directory'],
  });
  
  const filteredEntries = entries?.filter(entry => {
    const matchesSearch = searchTerm === '' || 
      entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
    return matchesSearch && entry.type === 'Artist';
  });
  
  if (isLoading) {
    return <PageLoader show={true} />;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl -translate-y-1/2 animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          <div className="absolute top-1/4 right-0 w-40 h-[800px] bg-gradient-to-b from-pink-500/5 to-orange-500/5 skew-x-12 blur-2xl"></div>
          <div className="absolute top-20 left-0 w-40 h-[600px] bg-gradient-to-b from-red-500/5 to-pink-500/5 -skew-x-12 blur-2xl"></div>
          
          {/* Music notes abstraction */}
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-pink-500/20 rounded-full opacity-30"></div>
          <div className="absolute bottom-40 right-40 w-20 h-20 border border-orange-500/20 rounded-full opacity-20"></div>
          <div className="absolute top-60 left-40 w-30 h-30 border border-red-500/20 rounded-full opacity-20"></div>
        </div>
        
        {/* Hero Banner */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 py-10 space-y-6 relative z-10 max-w-7xl">
            <div className="text-center space-y-4 relative mx-auto max-w-4xl mb-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-600/20 via-orange-600/20 to-red-600/20 blur-xl transform scale-110 animate-pulse-slow"></div>
              
              <div className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-pink-500/20 rounded-2xl px-6 py-10 backdrop-blur-sm shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-orange-400 to-red-500">
                    Artist Directory
                  </span>
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                  Discover incredible musical talent from around the world. Connect with artists 
                  for collaborations, bookings, and creative partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Directory Content */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Search */}
            <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-pink-500/20 shadow-lg shadow-pink-500/10 backdrop-blur-sm overflow-hidden mb-10">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search by artist name, genre, location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white shadow-lg shadow-pink-500/20"
                  >
                    Find Artists
                  </Button>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-pink-500/20 border-pink-500/30 text-pink-300">
                    Pop
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-pink-500/20 border-pink-500/30 text-pink-300">
                    Rock
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-pink-500/20 border-pink-500/30 text-pink-300">
                    Hip Hop
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-pink-500/20 border-pink-500/30 text-pink-300">
                    Electronic
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-pink-500/20 border-pink-500/30 text-pink-300">
                    Jazz
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-pink-500/20 border-pink-500/30 text-pink-300">
                    Indie
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-pink-500/20 border-pink-500/30 text-pink-300">
                    Trending
                  </Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Directory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEntries?.map((entry) => (
                <Card 
                  key={entry.id} 
                  className="group backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-pink-500/20 shadow-lg shadow-pink-500/5 hover:shadow-pink-500/20 hover:border-pink-500/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-red-500"></div>
                  
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className={`h-14 w-14 rounded-md bg-${entry.bgColor === 'primary' ? 'primary' : entry.bgColor === 'secondary' ? 'pink-700' : 'red-600'} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                        {entry.initials}
                      </div>
                      <div>
                        <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                          {entry.name}
                        </CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
                          {entry.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {entry.tags.map((tag, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="bg-pink-500/10 border-pink-500/30 text-pink-300 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <MusicIcon className="h-4 w-4 mr-2 text-pink-400" />
                        <span className="text-sm text-gray-300">{entry.id + 3} Albums</span>
                      </div>
                      <div className="flex items-center">
                        <Headphones className="h-4 w-4 mr-2 text-pink-400" />
                        <span className="text-sm text-gray-300">{(entry.id + 1) * 25}K Streams</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-pink-400" />
                        <span className="text-sm text-gray-300">{(entry.id % 3) + 3} ★ Rating</span>
                      </div>
                      <div className="flex items-center">
                        <RadioIcon className="h-4 w-4 mr-2 text-pink-400" />
                        <span className="text-sm text-gray-300">Available for Booking</span>
                      </div>
                    </div>
                    
                    <Separator className="my-4 bg-gray-800" />
                    
                    <Link 
                      href={`/directory/${entry.id}`}
                      className="inline-flex items-center group text-pink-300 hover:text-pink-200 transition-colors"
                    >
                      View Artist Profile 
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredEntries?.length === 0 && (
              <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-pink-500/20 shadow-lg p-10 text-center">
                <div className="text-xl font-medium text-gray-400">No artists found</div>
                <p className="text-gray-500 mt-2">Try adjusting your search or check back later for new listings</p>
              </Card>
            )}
            
            {/* Directory Navigation */}
            <div className="mt-12 flex justify-between items-center">
              <Button variant="outline" className="border-pink-500/30 text-pink-300 hover:bg-pink-500/10">
                <Link href="/directory" className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Back to All
                </Link>
              </Button>
              
              <div className="flex items-center space-x-2">
                <Link href="/directory/labels">
                  <Button variant="outline" className="border-pink-500/30 text-pink-300 hover:bg-pink-500/10">
                    Labels
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/directory/distributors">
                  <Button variant="outline" className="border-pink-500/30 text-pink-300 hover:bg-pink-500/10">
                    Distributors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}