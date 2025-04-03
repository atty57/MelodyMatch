import React from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Globe, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowLeft, 
  Calendar, 
  Users,
  Building,
  Music,
  Share2,
  Headphones,
  Award
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { DirectoryEntry } from '@shared/schema';
import { Link, useRoute, useLocation } from 'wouter';
import { PageLoader } from '@/components/ui/loader';

export default function DirectoryEntryDetail() {
  // Get the ID from the URL
  const [match, params] = useRoute('/directory/:id');
  const [location, setLocation] = useLocation();
  const entryId = params?.id ? parseInt(params.id) : undefined;
  
  // Fetch all entries from API
  const { data: entries, isLoading } = useQuery<DirectoryEntry[]>({
    queryKey: ['/api/directory'],
  });
  
  // Find the specific entry by ID
  const entry = entries?.find(e => e.id === entryId);
  
  // If loading, show loader
  if (isLoading) {
    return <PageLoader show={true} />;
  }
  
  // If entry not found, redirect to directory
  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-indigo-500/20 shadow-lg p-10 text-center">
          <div className="text-xl font-medium text-gray-400">Entry not found</div>
          <p className="text-gray-500 mt-2">The directory entry you're looking for doesn't exist</p>
          <Button 
            className="mt-6 bg-indigo-600 hover:bg-indigo-700" 
            onClick={() => setLocation('/directory')}
          >
            Back to Directory
          </Button>
        </Card>
      </div>
    );
  }
  
  // Determine header and icon colors based on entity type
  const getTypeStyles = () => {
    switch(entry.type) {
      case 'Record Label':
        return {
          gradient: 'from-blue-600/20 via-indigo-600/20 to-purple-600/20',
          border: 'border-indigo-500/20',
          textGradient: 'from-blue-400 via-indigo-400 to-purple-500',
          accentColor: 'indigo',
          glow: 'shadow-indigo-500/10',
          headerBg: 'from-gray-900/80 to-gray-800/80',
          iconBorder: 'border-indigo-500/20'
        };
      case 'Publishing Agency':
        return {
          gradient: 'from-purple-600/20 via-blue-600/20 to-indigo-600/20',
          border: 'border-purple-500/20',
          textGradient: 'from-purple-400 via-blue-400 to-indigo-500',
          accentColor: 'purple',
          glow: 'shadow-purple-500/10',
          headerBg: 'from-gray-900/80 to-gray-800/80',
          iconBorder: 'border-purple-500/20'
        };
      case 'Music Distributor':
        return {
          gradient: 'from-cyan-600/20 via-teal-600/20 to-blue-600/20',
          border: 'border-teal-500/20',
          textGradient: 'from-cyan-400 via-teal-400 to-blue-500',
          accentColor: 'teal',
          glow: 'shadow-teal-500/10',
          headerBg: 'from-gray-900/80 to-gray-800/80',
          iconBorder: 'border-teal-500/20'
        };
      case 'Artist':
        return {
          gradient: 'from-pink-600/20 via-orange-600/20 to-red-600/20',
          border: 'border-pink-500/20',
          textGradient: 'from-pink-400 via-orange-400 to-red-500',
          accentColor: 'pink',
          glow: 'shadow-pink-500/10',
          headerBg: 'from-gray-900/80 to-gray-800/80',
          iconBorder: 'border-pink-500/20'
        };
      default:
        return {
          gradient: 'from-blue-600/20 via-indigo-600/20 to-purple-600/20',
          border: 'border-indigo-500/20',
          textGradient: 'from-blue-400 via-indigo-400 to-purple-500',
          accentColor: 'indigo',
          glow: 'shadow-indigo-500/10',
          headerBg: 'from-gray-900/80 to-gray-800/80',
          iconBorder: 'border-indigo-500/20'
        };
    }
  };
  
  const styles = getTypeStyles();
  
  // Generate a random description based on entry type
  const getDescription = () => {
    switch(entry.type) {
      case 'Record Label':
        return `${entry.name} is a leading record label with a diverse roster of talented artists across multiple genres. Founded in ${2000 + entry.id}, they have established themselves as a key player in the music industry, known for innovative marketing strategies and artist development.`;
      case 'Publishing Agency':
        return `${entry.name} is a prestigious music publishing agency that represents songwriters and manages music rights around the world. With an extensive catalog of ${5000 + entry.id * 1000}+ works and partnerships with major media companies, they excel at maximizing value for their clients' creative output.`;
      case 'Music Distributor':
        return `${entry.name} is a forward-thinking digital music distribution service helping independent artists get their music on all major platforms. Their powerful analytics, royalty management, and marketing tools empower artists to grow their audience while maintaining full ownership of their work.`;
      case 'Artist':
        return `${entry.name} is a ${entry.tags[0] || 'talented'} artist known for their distinctive sound and artistic vision. With ${entry.id + 3} albums and worldwide performances, they continue to push musical boundaries and connect with fans around the globe.`;
      default:
        return `${entry.name} is a respected music industry company based in ${entry.location}. They specialize in ${entry.tags.join(', ')}.`;
    }
  };
  
  const description = getDescription();
  
  // Generate some random stats based on entity type
  const getEntityStats = () => {
    switch(entry.type) {
      case 'Record Label':
        return [
          { label: 'Founded', value: `${2000 + entry.id}`, icon: <Calendar className="h-5 w-5" /> },
          { label: 'Artists', value: `${10 + entry.id}`, icon: <Users className="h-5 w-5" /> },
          { label: 'Offices', value: entry.id + 1, icon: <Building className="h-5 w-5" /> },
          { label: 'Awards', value: entry.id * 2, icon: <Award className="h-5 w-5" /> }
        ];
      case 'Publishing Agency':
        return [
          { label: 'Founded', value: `${1998 + entry.id}`, icon: <Calendar className="h-5 w-5" /> },
          { label: 'Catalog Size', value: `${5000 + entry.id * 1000}`, icon: <Music className="h-5 w-5" /> },
          { label: 'Songwriters', value: `${100 + entry.id * 20}`, icon: <Users className="h-5 w-5" /> },
          { label: 'Countries', value: 30 + entry.id, icon: <Globe className="h-5 w-5" /> }
        ];
      case 'Music Distributor':
        return [
          { label: 'Founded', value: `${2010 + entry.id}`, icon: <Calendar className="h-5 w-5" /> },
          { label: 'Artists Served', value: `${1000 * (entry.id + 1)}+`, icon: <Users className="h-5 w-5" /> },
          { label: 'Platforms', value: '150+', icon: <Share2 className="h-5 w-5" /> },
          { label: 'Royalty Rate', value: `${80 + entry.id}%`, icon: <Award className="h-5 w-5" /> }
        ];
      case 'Artist':
        return [
          { label: 'Active Since', value: `${2010 + entry.id}`, icon: <Calendar className="h-5 w-5" /> },
          { label: 'Albums', value: entry.id + 3, icon: <Music className="h-5 w-5" /> },
          { label: 'Monthly Listeners', value: `${(entry.id + 1) * 25}K`, icon: <Headphones className="h-5 w-5" /> },
          { label: 'Awards', value: entry.id + 1, icon: <Award className="h-5 w-5" /> }
        ];
      default:
        return [
          { label: 'Founded', value: `${2005 + entry.id}`, icon: <Calendar className="h-5 w-5" /> },
          { label: 'Team Size', value: entry.id * 5, icon: <Users className="h-5 w-5" /> },
          { label: 'Location', value: entry.location, icon: <MapPin className="h-5 w-5" /> }
        ];
    }
  };

  const stats = getEntityStats();
  
  // Generate services based on entity type
  const getEntityServices = () => {
    switch(entry.type) {
      case 'Record Label':
        return [
          'Artist Development', 
          'Music Production', 
          'Marketing & Promotion', 
          'Distribution', 
          'Tour Support', 
          'Rights Management'
        ];
      case 'Publishing Agency':
        return [
          'Rights Management', 
          'Licensing', 
          'Sync Placements', 
          'Royalty Collection', 
          'Copyright Administration', 
          'International Publishing'
        ];
      case 'Music Distributor':
        return [
          'Digital Distribution', 
          'Physical Distribution', 
          'Marketing Services', 
          'Analytics Dashboard', 
          'Royalty Management', 
          'Playlist Pitching'
        ];
      case 'Artist':
        return [
          'Live Performances', 
          'Studio Recording', 
          'Collaborations', 
          'Merchandise', 
          'Licensing'
        ];
      default:
        return ['Music Services', 'Industry Consulting', 'Artist Support'];
    }
  };

  const services = getEntityServices();
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          <div className="absolute top-1/4 right-0 w-40 h-[800px] bg-gradient-to-b from-blue-500/5 to-purple-500/5 skew-x-12 blur-2xl"></div>
          <div className="absolute top-20 left-0 w-40 h-[600px] bg-gradient-to-b from-indigo-500/5 to-blue-500/5 -skew-x-12 blur-2xl"></div>
          
          {/* Music notes abstraction */}
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-indigo-500/20 rounded-full opacity-30"></div>
          <div className="absolute bottom-40 right-40 w-20 h-20 border border-blue-500/20 rounded-full opacity-20"></div>
          <div className="absolute top-60 left-40 w-30 h-30 border border-purple-500/20 rounded-full opacity-20"></div>
        </div>
        
        {/* Back Navigation */}
        <div className="container mx-auto px-4 sm:px-6 py-6 relative z-10 max-w-7xl">
          <Link href="/directory">
            <Button variant="ghost" className={`text-${styles.accentColor}-300 hover:text-${styles.accentColor}-200 hover:bg-${styles.accentColor}-500/10 -ml-3`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Directory
            </Button>
          </Link>
        </div>
        
        {/* Entity Header */}
        <section className="relative py-8 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 py-10 space-y-6 relative z-10 max-w-7xl">
            <div className="relative mx-auto max-w-6xl">
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${styles.gradient} blur-xl transform scale-110 animate-pulse-slow`}></div>
              
              <div className={`relative bg-gradient-to-r ${styles.headerBg} border ${styles.border} rounded-2xl px-6 py-8 backdrop-blur-sm shadow-lg ${styles.glow}`}>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  {/* Entity Logo/Avatar */}
                  <div className={`h-24 w-24 md:h-32 md:w-32 rounded-xl bg-${entry.bgColor === 'primary' ? 'primary' : styles.accentColor}-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg border ${styles.iconBorder}`}>
                    {entry.initials}
                  </div>
                  
                  {/* Entity info */}
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                      <span className={`bg-clip-text text-transparent bg-gradient-to-r ${styles.textGradient}`}>
                        {entry.name}
                      </span>
                    </h1>
                    
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-3">
                      <Badge variant="secondary" className="font-medium text-sm">
                        {entry.type}
                      </Badge>
                      {entry.tags.map((tag, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className={`bg-${styles.accentColor}-500/10 border-${styles.accentColor}-500/30 text-${styles.accentColor}-300 text-xs`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="mt-4 text-muted-foreground max-w-3xl text-lg">
                      {description}
                    </p>
                    
                    {/* Contact/Location */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm">
                      <div className="flex items-center">
                        <MapPin className={`h-4 w-4 mr-2 text-${styles.accentColor}-400`} />
                        <span className="text-gray-300">{entry.location}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Globe className={`h-4 w-4 mr-2 text-${styles.accentColor}-400`} />
                        <a 
                          href="#" 
                          className={`text-${styles.accentColor}-300 hover:text-${styles.accentColor}-200 transition-colors`}
                        >
                          www.{entry.name.toLowerCase().replace(/\s+/g, '')}.com
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className={`h-4 w-4 mr-2 text-${styles.accentColor}-400`} />
                        <a 
                          href="#" 
                          className={`text-${styles.accentColor}-300 hover:text-${styles.accentColor}-200 transition-colors`}
                        >
                          contact@{entry.name.toLowerCase().replace(/\s+/g, '')}.com
                        </a>
                      </div>
                    </div>
                    
                    {/* Social Media */}
                    <div className="mt-6 flex items-center justify-center md:justify-start space-x-4">
                      <a 
                        href="#" 
                        className={`text-gray-400 hover:text-${styles.accentColor}-300 transition-colors rounded-full bg-gray-800/50 p-2 hover:bg-${styles.accentColor}-500/10`}
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className={`text-gray-400 hover:text-${styles.accentColor}-300 transition-colors rounded-full bg-gray-800/50 p-2 hover:bg-${styles.accentColor}-500/10`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className={`text-gray-400 hover:text-${styles.accentColor}-300 transition-colors rounded-full bg-gray-800/50 p-2 hover:bg-${styles.accentColor}-500/10`}
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className={`text-gray-400 hover:text-${styles.accentColor}-300 transition-colors rounded-full bg-gray-800/50 p-2 hover:bg-${styles.accentColor}-500/10`}
                      >
                        <Youtube className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Entity Details */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className={`grid w-full max-w-md mx-auto grid-cols-3 bg-gray-800/70 border ${styles.border} p-1 rounded-xl`}>
                <TabsTrigger 
                  value="overview" 
                  className={`data-[state=active]:bg-${styles.accentColor}-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg`}
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="services" 
                  className={`data-[state=active]:bg-${styles.accentColor}-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg`}
                >
                  Services
                </TabsTrigger>
                <TabsTrigger 
                  value="contact" 
                  className={`data-[state=active]:bg-${styles.accentColor}-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg`}
                >
                  Contact
                </TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Stats Card */}
                  <Card className={`backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border ${styles.border} shadow-lg ${styles.glow}`}>
                    <CardHeader>
                      <CardTitle className={`text-xl text-${styles.accentColor}-300`}>Key Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                          <div key={i} className={`p-3 bg-${styles.accentColor}-500/5 rounded-lg border border-${styles.accentColor}-500/20`}>
                            <div className={`text-${styles.accentColor}-400 mb-1`}>
                              {stat.icon}
                            </div>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      <Separator className="bg-gray-800" />
                      
                      {/* About Section */}
                      <div>
                        <h3 className="text-lg font-medium mb-2">About</h3>
                        <p className="text-muted-foreground text-sm">
                          {description} With a focus on {entry.tags[0] || 'quality'} and innovation, 
                          they continue to lead in their field and adapt to the evolving music landscape.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Detailed Info Card */}
                  <Card className={`backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border ${styles.border} shadow-lg ${styles.glow} lg:col-span-2`}>
                    <CardHeader>
                      <CardTitle className={`text-xl text-${styles.accentColor}-300`}>Profile Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Background</h3>
                        <p className="text-muted-foreground">
                          {entry.name} has established itself as a respected name in the {entry.type.toLowerCase()} 
                          business since its founding. With a strong presence in {entry.location} and 
                          beyond, they've built a reputation for excellence and innovation.
                        </p>
                        <p className="text-muted-foreground mt-3">
                          Their expertise in {entry.tags.join(', ')} has positioned them at the 
                          forefront of the industry, consistently delivering value to their clients and partners.
                        </p>
                      </div>
                      
                      <Separator className="bg-gray-800" />
                      
                      {/* Specialized Content Based on Type */}
                      {entry.type === 'Record Label' && (
                        <div>
                          <h3 className="text-lg font-medium mb-3">Artist Roster</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {Array.from({length: 6}).map((_, i) => (
                              <div key={i} className={`p-3 bg-${styles.accentColor}-500/5 rounded-lg border border-${styles.accentColor}-500/20 flex items-center gap-3`}>
                                <div className={`h-8 w-8 rounded-full flex items-center justify-center bg-${styles.accentColor}-600/50 text-white text-xs font-bold`}>
                                  {String.fromCharCode(65 + i)}
                                </div>
                                <div>
                                  <div className="text-sm font-medium">Artist {i+1}</div>
                                  <div className="text-xs text-muted-foreground">Genre {i+1}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {entry.type === 'Publishing Agency' && (
                        <div>
                          <h3 className="text-lg font-medium mb-3">Notable Works</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {Array.from({length: 6}).map((_, i) => (
                              <div key={i} className={`p-3 bg-${styles.accentColor}-500/5 rounded-lg border border-${styles.accentColor}-500/20 flex items-center gap-3`}>
                                <div className={`h-8 w-8 rounded-full flex items-center justify-center bg-${styles.accentColor}-600/50 text-white text-xs font-bold`}>
                                  <Music className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium">Hit Song {i+1}</div>
                                  <div className="text-xs text-muted-foreground">Songwriter {i+1}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {entry.type === 'Music Distributor' && (
                        <div>
                          <h3 className="text-lg font-medium mb-3">Distribution Platforms</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {Array.from({length: 8}).map((_, i) => (
                              <div key={i} className={`p-2 bg-${styles.accentColor}-500/5 rounded-lg border border-${styles.accentColor}-500/20 flex items-center justify-center`}>
                                <div className="text-sm font-medium">Platform {i+1}</div>
                              </div>
                            ))}
                          </div>
                          
                          <h3 className="text-lg font-medium mb-3 mt-5">Distribution Features</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {['Analytics Dashboard', 'Release Scheduling', 'Royalty Splits', 'Marketing Tools'].map((feature, i) => (
                              <div key={i} className="flex items-center">
                                <div className={`h-2 w-2 rounded-full bg-${styles.accentColor}-500 mr-2`}></div>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {entry.type === 'Artist' && (
                        <div>
                          <h3 className="text-lg font-medium mb-3">Top Releases</h3>
                          <div className="space-y-3">
                            {Array.from({length: 3}).map((_, i) => (
                              <div key={i} className={`p-3 bg-${styles.accentColor}-500/5 rounded-lg border border-${styles.accentColor}-500/20 flex items-center gap-3`}>
                                <div className={`h-10 w-10 rounded flex items-center justify-center bg-${styles.accentColor}-600/50 text-white text-xs font-bold`}>
                                  <Music className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium">Album {i+1}</div>
                                  <div className="text-xs text-muted-foreground">Released in 20{20 + i}</div>
                                </div>
                                <div className="flex items-center">
                                  <Star className={`h-3 w-3 text-${styles.accentColor}-500`} />
                                  <span className="text-xs ml-1">{4 + (i % 2) * 0.5}/5</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <h3 className="text-lg font-medium mb-3 mt-5">Upcoming Events</h3>
                          <div className="space-y-2">
                            {Array.from({length: 2}).map((_, i) => (
                              <div key={i} className="flex items-center">
                                <div className={`h-2 w-2 rounded-full bg-${styles.accentColor}-500 mr-2`}></div>
                                <span className="text-sm">Event {i+1} - {['New York', 'Los Angeles', 'London', 'Tokyo'][i % 4]}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Services Tab */}
              <TabsContent value="services" className="pt-8">
                <Card className={`backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border ${styles.border} shadow-lg ${styles.glow}`}>
                  <CardHeader>
                    <CardTitle className={`text-xl text-${styles.accentColor}-300`}>Services & Capabilities</CardTitle>
                    <CardDescription>
                      Comprehensive solutions provided by {entry.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {services.map((service, i) => (
                        <Card key={i} className={`bg-${styles.accentColor}-500/5 border border-${styles.accentColor}-500/20 hover:border-${styles.accentColor}-500/40 transition-colors group`}>
                          <CardHeader className="pb-2">
                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center bg-${styles.accentColor}-600/50 text-white mb-3 group-hover:bg-${styles.accentColor}-600 transition-colors`}>
                              {i % 2 === 0 ? 
                                <Award className="h-5 w-5" /> : 
                                <Music className="h-5 w-5" />
                              }
                            </div>
                            <CardTitle className="text-lg">{service}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Professional {service.toLowerCase()} services tailored to meet the specific 
                              needs of clients in the music industry.
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Contact Tab */}
              <TabsContent value="contact" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className={`backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border ${styles.border} shadow-lg ${styles.glow}`}>
                    <CardHeader>
                      <CardTitle className={`text-xl text-${styles.accentColor}-300`}>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Mail className={`h-5 w-5 mt-0.5 text-${styles.accentColor}-400`} />
                        <div>
                          <h4 className="text-sm font-medium">Email</h4>
                          <p className={`text-${styles.accentColor}-300 hover:text-${styles.accentColor}-200 transition-colors`}>
                            contact@{entry.name.toLowerCase().replace(/\s+/g, '')}.com
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Phone className={`h-5 w-5 mt-0.5 text-${styles.accentColor}-400`} />
                        <div>
                          <h4 className="text-sm font-medium">Phone</h4>
                          <p className="text-muted-foreground">
                            +1 (555) {100 + entry.id}-{1000 + entry.id * 10}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <MapPin className={`h-5 w-5 mt-0.5 text-${styles.accentColor}-400`} />
                        <div>
                          <h4 className="text-sm font-medium">Address</h4>
                          <p className="text-muted-foreground">
                            {entry.id * 100} Music Industry Blvd<br />
                            {entry.location}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Globe className={`h-5 w-5 mt-0.5 text-${styles.accentColor}-400`} />
                        <div>
                          <h4 className="text-sm font-medium">Website</h4>
                          <a 
                            href="#" 
                            className={`text-${styles.accentColor}-300 hover:text-${styles.accentColor}-200 transition-colors`}
                          >
                            www.{entry.name.toLowerCase().replace(/\s+/g, '')}.com
                          </a>
                        </div>
                      </div>
                      
                      <Separator className="bg-gray-800" />
                      
                      <div>
                        <h4 className="text-sm font-medium mb-3">Connect</h4>
                        <div className="flex space-x-3">
                          <a 
                            href="#" 
                            className={`text-gray-400 hover:text-${styles.accentColor}-300 transition-colors rounded-full bg-gray-800/50 p-2 hover:bg-${styles.accentColor}-500/10`}
                          >
                            <Facebook className="h-5 w-5" />
                          </a>
                          <a 
                            href="#" 
                            className={`text-gray-400 hover:text-${styles.accentColor}-300 transition-colors rounded-full bg-gray-800/50 p-2 hover:bg-${styles.accentColor}-500/10`}
                          >
                            <Twitter className="h-5 w-5" />
                          </a>
                          <a 
                            href="#" 
                            className={`text-gray-400 hover:text-${styles.accentColor}-300 transition-colors rounded-full bg-gray-800/50 p-2 hover:bg-${styles.accentColor}-500/10`}
                          >
                            <Instagram className="h-5 w-5" />
                          </a>
                          <a 
                            href="#" 
                            className={`text-gray-400 hover:text-${styles.accentColor}-300 transition-colors rounded-full bg-gray-800/50 p-2 hover:bg-${styles.accentColor}-500/10`}
                          >
                            <Youtube className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className={`backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border ${styles.border} shadow-lg ${styles.glow} lg:col-span-2`}>
                    <CardHeader>
                      <CardTitle className={`text-xl text-${styles.accentColor}-300`}>Send Inquiry</CardTitle>
                      <CardDescription>
                        Reach out to {entry.name} directly with your questions or proposals
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                            <Input 
                              id="name" 
                              placeholder="Enter your name" 
                              className={`bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-${styles.accentColor}-500 focus:border-${styles.accentColor}-500`}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="Enter your email" 
                              className={`bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-${styles.accentColor}-500 focus:border-${styles.accentColor}-500`}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                          <Input 
                            id="subject" 
                            placeholder="What's your inquiry about?" 
                            className={`bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-${styles.accentColor}-500 focus:border-${styles.accentColor}-500`}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">Message</label>
                          <textarea 
                            id="message" 
                            rows={5} 
                            placeholder="Enter your message here..." 
                            className={`w-full bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-${styles.accentColor}-500 focus:border-${styles.accentColor}-500 rounded-md p-3`}
                          />
                        </div>
                        
                        <Button className={`bg-gradient-to-r from-${styles.accentColor}-600 to-${styles.accentColor === 'indigo' ? 'purple' : styles.accentColor === 'purple' ? 'blue' : styles.accentColor === 'teal' ? 'cyan' : 'red'}-600 hover:from-${styles.accentColor}-700 hover:to-${styles.accentColor === 'indigo' ? 'purple' : styles.accentColor === 'purple' ? 'blue' : styles.accentColor === 'teal' ? 'cyan' : 'red'}-700 text-white shadow-lg shadow-${styles.accentColor}-500/20 w-full sm:w-auto`}>
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Related Entries */}
            <div className="mt-12">
              <h2 className={`text-2xl font-bold mb-6 text-${styles.accentColor}-300`}>
                Similar {entry.type === 'Artist' ? 'Artists' : 'Companies'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {entries
                  .filter(e => e.type === entry.type && e.id !== entry.id)
                  .slice(0, 3)
                  .map(relatedEntry => (
                    <Card 
                      key={relatedEntry.id} 
                      className={`group backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border ${styles.border} shadow-lg ${styles.glow} hover:shadow-${styles.accentColor}-500/20 hover:border-${styles.accentColor}-500/40 transition-all duration-300 overflow-hidden`}
                    >
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${styles.accentColor === 'indigo' ? 'blue' : styles.accentColor === 'purple' ? 'purple' : styles.accentColor === 'teal' ? 'cyan' : 'pink'}-500 to-${styles.accentColor}-500`}></div>
                      
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-4">
                          <div className={`h-12 w-12 rounded-md bg-${styles.accentColor}-600 flex items-center justify-center text-white text-lg font-bold shadow-lg`}>
                            {relatedEntry.initials}
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              {relatedEntry.name}
                            </CardTitle>
                            <CardDescription className="flex items-center mt-1">
                              <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
                              {relatedEntry.location}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pb-4">
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {relatedEntry.tags.slice(0, 3).map((tag, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className={`bg-${styles.accentColor}-500/10 border-${styles.accentColor}-500/30 text-${styles.accentColor}-300 text-xs`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Separator className="my-4 bg-gray-800" />
                        
                        <Link 
                          href={`/directory/${relatedEntry.id}`}
                          className={`inline-flex items-center group text-${styles.accentColor}-300 hover:text-${styles.accentColor}-200 transition-colors`}
                        >
                          View Profile 
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}