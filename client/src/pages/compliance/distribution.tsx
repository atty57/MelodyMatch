import React, { useState } from 'react';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Globe, 
  Music, 
  FileText, 
  PieChart,
  BarChart, 
  CheckCircle, 
  AlertCircle, 
  HelpCircle, 
  Download,
  Headphones,
  Share2,
  AlertTriangle,
  Clock,
  LucideIcon,
  ListChecks,
  Settings,
  Waves,
  Volume2
} from 'lucide-react';
import { Link } from 'wouter';
import { PageLoader } from '@/components/ui/loader';

export default function DistributionStandards() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample data for delivery requirements
  const deliveryRequirements = [
    {
      category: "Audio Quality",
      requirements: [
        { name: "WAV Format", info: "Uncompressed WAV file format" },
        { name: "Sample Rate", info: "44.1kHz or 48kHz" },
        { name: "Bit Depth", info: "16-bit or 24-bit" },
        { name: "Stereo", info: "Stereo files with proper channel balance" }
      ]
    },
    {
      category: "Metadata",
      requirements: [
        { name: "Track Title", info: "Properly formatted title without special characters" },
        { name: "Artist Name", info: "Primary performing artist(s)" },
        { name: "Feature Credits", info: "All featured artists properly credited" },
        { name: "Composer Credits", info: "All songwriters with split percentages" },
        { name: "Producer Credits", info: "Production credits with correct spelling" },
        { name: "Release Date", info: "Planned commercial release date" },
        { name: "ISRC Code", info: "Unique International Standard Recording Code" }
      ]
    },
    {
      category: "Artwork",
      requirements: [
        { name: "Format", info: "JPEG or PNG file format" },
        { name: "Resolution", info: "Minimum 3000x3000 pixels" },
        { name: "Color Space", info: "RGB color space (not CMYK)" },
        { name: "Aspect Ratio", info: "Perfect 1:1 square aspect ratio" },
        { name: "File Size", info: "Less than 20MB file size" }
      ]
    },
    {
      category: "Rights Documentation",
      requirements: [
        { name: "Master Rights", info: "Documentation of master recording ownership" },
        { name: "Publishing Rights", info: "Details of publishing rights and splits" },
        { name: "Sample Clearance", info: "Documentation for all cleared samples" },
        { name: "Feature Agreements", info: "Signed agreements for all featured artists" }
      ]
    }
  ];
  
  // Sample data for technical standards
  const technicalStandards = {
    audio: [
      { name: "Peak Level", standard: "No higher than -1.0dBFS", recommended: "-1.0dBFS to -2.0dBFS", critical: true },
      { name: "Integrated Loudness", standard: "-14 LUFS (Spotify), -13 LUFS (Apple)", recommended: "-14 LUFS (streaming standard)", critical: true },
      { name: "True Peak Maximum", standard: "Less than -1.0dBTP", recommended: "-1.0dBTP or lower", critical: true },
      { name: "Dynamic Range", standard: "Minimum DR6", recommended: "DR8 or higher for most genres", critical: false },
      { name: "Frequency Balance", standard: "No excessive peaks or notches", recommended: "Balanced spectrum using standard reference tracks", critical: false },
    ],
    metadata: [
      { name: "ISRC Format", standard: "Valid 12-character alphanumeric code", recommended: "Unique code per recording", critical: true },
      { name: "Artist Names", standard: "Consistent capitalization and spelling across platforms", recommended: "Follow artist's official stylization", critical: true },
      { name: "Genre Classification", standard: "Primary genre plus sub-genres", recommended: "Use standardized genre lists from major platforms", critical: false },
      { name: "Parental Advisory", standard: "Clearly marked for explicit content", recommended: "Mark individual tracks and album level appropriately", critical: true },
    ],
    timing: [
      { name: "Delivery Window", standard: "Minimum 10 business days before release", recommended: "3-4 weeks before release date", critical: true },
      { name: "Pre-Save Setup", standard: "Available 2 weeks before release", recommended: "4 weeks before release for marketing", critical: false },
      { name: "Metadata Lock", standard: "48 hours before distribution", recommended: "1 week before distribution", critical: true },
    ]
  };
  
  // Sample data for platform-specific requirements
  const platformRequirements = [
    {
      platform: "Spotify",
      logo: "spotify",
      requirements: [
        "-14 LUFS integrated loudness",
        "2-4 seconds of silence at start/end",
        "ISRC and correct metadata",
        "3000x3000 pixel artwork",
        "Optional Spotify Canvas (video loop)",
        "Properly formatted credits for songwriter/producer"
      ]
    },
    {
      platform: "Apple Music",
      logo: "apple",
      requirements: [
        "-13 to -16 LUFS integrated loudness",
        "High-resolution artwork (3000x3000+)",
        "ISRC and ISWC codes",
        "Lossless audio option (ALAC)",
        "Dolby Atmos if available",
        "Lyrics (time-synced if possible)"
      ]
    },
    {
      platform: "Amazon Music",
      logo: "amazon",
      requirements: [
        "-14 LUFS integrated loudness",
        "HD audio option (up to 24-bit/192kHz)",
        "3000x3000 pixel artwork",
        "Complete metadata including composer",
        "X-Ray lyrics when available",
        "Accurately labeled explicit content"
      ]
    },
    {
      platform: "YouTube Music",
      logo: "youtube",
      requirements: [
        "Standard loudness requirements",
        "High-quality artwork",
        "Content ID registration",
        "Complete ownership metadata",
        "Optional static or animated art track",
        "Properly tagged collaborators"
      ]
    },
    {
      platform: "TikTok",
      logo: "tiktok",
      requirements: [
        "Clean 15-30 second hook section identified",
        "Standard audio quality requirements",
        "Proper rights clearance for global usage",
        "Accurate artist and title metadata",
        "Commercial usage rights documentation",
        "Optional promotional clip suggestions"
      ]
    }
  ];
  
  // Sample data for quality control checklist
  const qualityChecklist = [
    {
      section: "Audio Quality",
      items: [
        { id: 1, label: "Audio file is correct format (WAV, 16/24-bit)", description: "Ensure files are uncompressed WAV format with appropriate bit depth" },
        { id: 2, label: "Volume levels meet platform standards", description: "Check integrated loudness (LUFS) and peak levels using metering tools" },
        { id: 3, label: "No clipping or distortion is present", description: "Listen for and repair any digital clipping or unwanted distortion" },
        { id: 4, label: "No unwanted noise, clicks or pops", description: "Clean recordings of any background noise, digital artifacts, clicks or pops" },
        { id: 5, label: "Proper song intro and outro with silence", description: "Verify 1-2 seconds of silence at beginning and end of tracks" }
      ]
    },
    {
      section: "Metadata Accuracy",
      items: [
        { id: 6, label: "Artist name matches across all platforms", description: "Ensure consistent spelling and formatting of artist names" },
        { id: 7, label: "Track titles correctly formatted", description: "Check for proper capitalization and spelling in track titles" },
        { id: 8, label: "All featured artists properly credited", description: "Confirm all collaborating artists are listed with correct spelling" },
        { id: 9, label: "Songwriter and producer credits included", description: "Verify all creative contributors are properly acknowledged" },
        { id: 10, label: "ISRC codes assigned and embedded", description: "Confirm unique ISRC codes are assigned to each track" }
      ]
    },
    {
      section: "Artwork Verification",
      items: [
        { id: 11, label: "Artwork meets resolution requirements", description: "Confirm artwork is minimum 3000x3000 pixels" },
        { id: 12, label: "Image has correct aspect ratio (1:1)", description: "Verify artwork is perfectly square with 1:1 aspect ratio" },
        { id: 13, label: "No unauthorized logos or trademarks", description: "Remove any unauthorized logos, brands, or trademarks" },
        { id: 14, label: "Text is legible when displayed at small sizes", description: "Ensure any text remains readable when artwork is displayed as thumbnail" },
        { id: 15, label: "Colors display correctly across devices", description: "Check that artwork colors render properly on multiple screens" }
      ]
    },
    {
      section: "Rights and Compliance",
      items: [
        { id: 16, label: "All samples and interpolations cleared", description: "Verify proper clearance documentation for any samples used" },
        { id: 17, label: "Release cleared for all territories", description: "Confirm rights are secured for all planned distribution territories" },
        { id: 18, label: "Explicit content properly labeled", description: "Mark explicit content consistently across all platforms" },
        { id: 19, label: "No copyright violations in artwork", description: "Ensure artwork doesn't infringe on existing copyrights" },
        { id: 20, label: "All featured artist approvals secured", description: "Confirm written approval from all featured performers" }
      ]
    }
  ];
  
  // State for quality checklist
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  
  // Toggle checklist item
  const toggleChecklistItem = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter(itemId => itemId !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };
  
  // Calculate checklist completion
  const totalChecklistItems = qualityChecklist.reduce((acc, section) => acc + section.items.length, 0);
  const completionPercentage = Math.round((checkedItems.length / totalChecklistItems) * 100);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          <div className="absolute top-1/4 right-0 w-40 h-[800px] bg-gradient-to-b from-purple-500/5 to-indigo-500/5 skew-x-12 blur-2xl"></div>
          <div className="absolute top-20 left-0 w-40 h-[600px] bg-gradient-to-b from-violet-500/5 to-purple-500/5 -skew-x-12 blur-2xl"></div>
          
          {/* Music notes abstraction */}
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-purple-500/20 rounded-full opacity-30"></div>
          <div className="absolute bottom-40 right-40 w-20 h-20 border border-indigo-500/20 rounded-full opacity-20"></div>
          <div className="absolute top-60 left-40 w-30 h-30 border border-violet-500/20 rounded-full opacity-20"></div>
        </div>
        
        {/* Back Navigation */}
        <div className="container mx-auto px-4 sm:px-6 py-6 relative z-10 max-w-7xl">
          <Link href="/compliance">
            <Button variant="ghost" className="text-purple-300 hover:text-purple-200 hover:bg-purple-500/10 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Compliance
            </Button>
          </Link>
        </div>
        
        {/* Hero Section */}
        <section className="relative py-8 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 py-10 space-y-6 relative z-10 max-w-7xl">
            <div className="text-center space-y-4 relative mx-auto max-w-4xl mb-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-violet-600/20 blur-xl transform scale-110 animate-pulse-slow"></div>
              
              <div className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-purple-500/20 rounded-2xl px-6 py-10 backdrop-blur-sm shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-500">
                    Distribution Standards
                  </span>
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                  Meet industry requirements for digital music distribution with comprehensive 
                  guidelines and quality control standards.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 bg-gray-800/70 border border-purple-500/20 p-1 rounded-xl">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="platforms" 
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Platforms
                </TabsTrigger>
                <TabsTrigger 
                  value="technical" 
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Technical
                </TabsTrigger>
                <TabsTrigger 
                  value="checklist" 
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Checklist
                </TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/20 shadow-lg shadow-purple-500/10 lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-xl text-purple-300">Digital Distribution Requirements</CardTitle>
                      <CardDescription>
                        Standard delivery specifications for music distribution platforms
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {deliveryRequirements.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="text-lg font-medium text-purple-300 mb-4">{category.category}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.requirements.map((req, reqIdx) => (
                              <div 
                                key={reqIdx} 
                                className="p-4 bg-purple-500/5 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                              >
                                <h4 className="font-medium">{req.name}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{req.info}</p>
                              </div>
                            ))}
                          </div>
                          {idx < deliveryRequirements.length - 1 && <Separator className="my-6 bg-gray-800" />}
                        </div>
                      ))}
                      
                      <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium text-amber-300">Important Delivery Timeline</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                              To ensure timely distribution and maximize promotional opportunities, plan your release 
                              according to the following timeline:
                            </p>
                            <div className="mt-3 space-y-2">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-amber-300" />
                                <span className="text-muted-foreground text-sm"><span className="text-amber-300 font-medium">4-6 weeks before release:</span> Complete final masters and artwork</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-amber-300" />
                                <span className="text-muted-foreground text-sm"><span className="text-amber-300 font-medium">3-4 weeks before release:</span> Submit to distributor with all metadata</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-amber-300" />
                                <span className="text-muted-foreground text-sm"><span className="text-amber-300 font-medium">2 weeks before release:</span> Set up pre-save campaigns</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-amber-300" />
                                <span className="text-muted-foreground text-sm"><span className="text-amber-300 font-medium">1 week before release:</span> Verify all platforms show correct pre-release</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-6">
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/20 shadow-lg shadow-purple-500/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-purple-300">Quality Check Progress</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Overall Readiness</span>
                              <span className="text-sm font-medium">{completionPercentage}%</span>
                            </div>
                            <Progress value={completionPercentage} className="h-2 bg-gray-700">
                              <div 
                                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                                style={{ width: `${completionPercentage}%` }}
                              />
                            </Progress>
                          </div>
                          
                          <div className="pt-2 grid grid-cols-2 gap-3">
                            <div className="p-3 bg-purple-500/5 rounded-lg border border-purple-500/20">
                              <div className="text-2xl font-bold">{checkedItems.length}</div>
                              <div className="text-xs text-muted-foreground">Requirements Met</div>
                            </div>
                            <div className="p-3 bg-purple-500/5 rounded-lg border border-purple-500/20">
                              <div className="text-2xl font-bold">{totalChecklistItems - checkedItems.length}</div>
                              <div className="text-xs text-muted-foreground">Requirements Pending</div>
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/20"
                            onClick={() => setActiveTab('checklist')}
                          >
                            Go to Quality Checklist
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/20 shadow-lg shadow-purple-500/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-purple-300">Distribution Benefits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="bg-purple-500/20 p-2 rounded-lg mr-4 mt-1">
                              <Globe className="h-4 w-4 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Global Reach</h3>
                              <p className="text-xs text-muted-foreground">Access to worldwide audience across major platforms</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-purple-500/20 p-2 rounded-lg mr-4 mt-1">
                              <PieChart className="h-4 w-4 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Analytics</h3>
                              <p className="text-xs text-muted-foreground">Detailed performance data and listener demographics</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-purple-500/20 p-2 rounded-lg mr-4 mt-1">
                              <Headphones className="h-4 w-4 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Monetization</h3>
                              <p className="text-xs text-muted-foreground">Revenue from streams, downloads, and content usage</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-purple-500/20 p-2 rounded-lg mr-4 mt-1">
                              <Share2 className="h-4 w-4 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Discoverability</h3>
                              <p className="text-xs text-muted-foreground">Playlist placement and algorithm recommendations</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/20 shadow-lg shadow-purple-500/10">
                    <CardHeader>
                      <CardTitle className="text-xl text-purple-300">Distribution Workflow</CardTitle>
                      <CardDescription>Standard process for preparing and releasing music across platforms</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div className="relative">
                          <div className="absolute hidden md:block h-0.5 w-full top-6 left-1/2 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                          <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center relative z-10">
                            <div className="h-12 w-12 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
                              <span className="font-bold text-lg">1</span>
                            </div>
                            <h4 className="font-medium mt-2">Preparation</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Finalize masters, artwork and metadata
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute hidden md:block h-0.5 w-full top-6 left-1/2 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                          <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center relative z-10">
                            <div className="h-12 w-12 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
                              <span className="font-bold text-lg">2</span>
                            </div>
                            <h4 className="font-medium mt-2">Quality Control</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Verify all technical requirements
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute hidden md:block h-0.5 w-full top-6 left-1/2 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                          <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center relative z-10">
                            <div className="h-12 w-12 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
                              <span className="font-bold text-lg">3</span>
                            </div>
                            <h4 className="font-medium mt-2">Submission</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Deliver to distributor or platforms
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute hidden md:block h-0.5 w-full top-6 left-1/2 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                          <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center relative z-10">
                            <div className="h-12 w-12 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
                              <span className="font-bold text-lg">4</span>
                            </div>
                            <h4 className="font-medium mt-2">Verification</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Check pre-release listing accuracy
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center relative z-10">
                            <div className="h-12 w-12 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
                              <span className="font-bold text-lg">5</span>
                            </div>
                            <h4 className="font-medium mt-2">Release</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Monitor launch across platforms
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                        <h3 className="text-lg font-medium text-purple-300 mb-3">Common Distribution Pitfalls</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 mr-2 text-purple-400 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium">Inconsistent Metadata</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                Variations in artist name, track titles, or credits across platforms creating fragmented streaming statistics and listener confusion
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 mr-2 text-purple-400 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium">Audio Quality Issues</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                Loudness problems, clipping, or compression artifacts that negatively impact listener experience and platform algorithmic performance
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 mr-2 text-purple-400 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium">Insufficient Lead Time</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                Last-minute submissions that miss promotional opportunities, playlist consideration windows, and pre-save campaigns
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 mr-2 text-purple-400 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium">Rights Documentation Gaps</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                Missing or incomplete clearances for samples, features, or collaborators leading to takedowns or revenue disputes
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button 
                        variant="outline" 
                        className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 mr-4"
                        onClick={() => setActiveTab('platforms')}
                      >
                        View Platform Guidelines
                      </Button>
                      <Button 
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/20"
                        onClick={() => setActiveTab('technical')}
                      >
                        Explore Technical Standards
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Platforms Tab */}
              <TabsContent value="platforms" className="pt-8">
                <div className="grid grid-cols-1 gap-6">
                  {platformRequirements.map((platform, idx) => (
                    <Card 
                      key={idx} 
                      className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/20 shadow-lg shadow-purple-500/10 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"></div>
                      
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex items-center">
                            <div className="bg-purple-500/20 p-2 rounded-full mr-3 h-10 w-10 flex items-center justify-center">
                              <Music className="h-5 w-5 text-purple-300" />
                            </div>
                            <CardTitle className="text-xl text-purple-300">{platform.platform}</CardTitle>
                          </div>
                          <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-300 sm:self-start">
                            Platform Guidelines
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-lg font-medium mb-4">Distribution Requirements</h3>
                            <div className="space-y-2">
                              {platform.requirements.map((req, reqIdx) => (
                                <div key={reqIdx} className="flex items-center">
                                  <CheckCircle className="h-4 w-4 mr-2 text-purple-400" />
                                  <span className="text-sm text-muted-foreground">{req}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="p-4 bg-purple-500/5 rounded-lg border border-purple-500/20">
                            <h3 className="text-lg font-medium mb-3">Optimization Tips</h3>
                            
                            {platform.platform === "Spotify" && (
                              <div className="space-y-3">
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <Waves className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Canvas Videos</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Create 3-8 second looping visual clips for each track to increase engagement
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <ListChecks className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Playlist Pitching</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Submit for editorial playlist consideration at least 4 weeks before release
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <Settings className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Artist Profile</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Verify and complete your Spotify for Artists profile with bio, photos, and social links
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {platform.platform === "Apple Music" && (
                              <div className="space-y-3">
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <Volume2 className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Dolby Atmos</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Submit spatial audio mixes for enhanced placement and premium listening experience
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <FileText className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Lyrics</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Provide time-synced lyrics for enhanced user engagement and Apple Music sing feature
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <Music className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Release Exclusive</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Consider early or exclusive content for enhanced platform support and visibility
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {platform.platform === "Amazon Music" && (
                              <div className="space-y-3">
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <Headphones className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">HD Audio</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Submit high-resolution audio files (24-bit, 96kHz+) for HD and Ultra HD tiers
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <FileText className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">X-Ray Lyrics</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Provide detailed lyrics and song information for Amazon's X-Ray feature
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <Share2 className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Alexa Integration</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Ensure accurate metadata for voice search and Alexa discovery
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {platform.platform === "YouTube Music" && (
                              <div className="space-y-3">
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <Globe className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Content ID</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Register your music with Content ID for monetization across all YouTube videos
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <FileText className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Art Track</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Create custom animated or static art tracks to maximize visual appeal
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <Headphones className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Channel Integration</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Link your artist channel with YouTube Music for unified branding and analytics
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {platform.platform === "TikTok" && (
                              <div className="space-y-3">
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <Music className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Hook Sections</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Identify and highlight catchy 15-second segments ideal for TikTok usage
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <FileText className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Verified Status</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Apply for verified artist status to access additional promotion tools
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="bg-purple-500/20 p-1 rounded-md mr-2 mt-0.5">
                                    <Share2 className="h-3.5 w-3.5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Creator Outreach</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Prepare promotional clips and challenge ideas for creator partnerships
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/20 shadow-lg shadow-purple-500/10 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
                    
                    <CardContent className="p-8 text-center relative">
                      <h3 className="text-2xl font-bold text-purple-300 mb-4">Prepare Your Release</h3>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Ready to distribute your music? Use our technical guidelines and quality checklist to ensure 
                        your release meets all platform requirements.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button 
                          variant="outline" 
                          className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                          onClick={() => setActiveTab('technical')}
                        >
                          View Technical Standards
                        </Button>
                        <Button 
                          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/20"
                          onClick={() => setActiveTab('checklist')}
                        >
                          Go to Quality Checklist
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Technical Standards Tab */}
              <TabsContent value="technical" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/20 shadow-lg shadow-purple-500/10 lg:col-span-3">
                    <CardHeader>
                      <CardTitle className="text-xl text-purple-300">Technical Specifications</CardTitle>
                      <CardDescription>
                        Industry standard technical requirements for digital music distribution
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-lg font-medium text-purple-300 flex items-center mb-4">
                            <Waves className="h-5 w-5 mr-2" />
                            Audio Technical Standards
                          </h3>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="bg-purple-500/10 border-b border-purple-500/20">
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Parameter</th>
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Industry Standard</th>
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Recommended Value</th>
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Importance</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-800">
                                {technicalStandards.audio.map((standard, idx) => (
                                  <tr key={idx} className="hover:bg-purple-500/5">
                                    <td className="py-3 px-4 text-sm font-medium">{standard.name}</td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">{standard.standard}</td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">{standard.recommended}</td>
                                    <td className="py-3 px-4">
                                      <Badge variant="outline" className={standard.critical ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' : 'bg-gray-500/10 text-gray-300 border-gray-500/30'}>
                                        {standard.critical ? 'Critical' : 'Recommended'}
                                      </Badge>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          
                          <div className="mt-6 p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                            <h4 className="text-sm font-medium text-purple-300 mb-2">Audio Measurement Tools</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-purple-400 mt-0.5" />
                                <div>
                                  <h5 className="text-sm font-medium">Loudness Meters</h5>
                                  <p className="text-xs text-muted-foreground">
                                    Use LUFS-compliant meters to measure integrated loudness and true peak values
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-purple-400 mt-0.5" />
                                <div>
                                  <h5 className="text-sm font-medium">Spectrum Analyzers</h5>
                                  <p className="text-xs text-muted-foreground">
                                    Verify frequency balance and identify problematic frequency ranges
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-purple-400 mt-0.5" />
                                <div>
                                  <h5 className="text-sm font-medium">Correlation Meters</h5>
                                  <p className="text-xs text-muted-foreground">
                                    Check phase correlation to ensure mono compatibility
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Separator className="bg-gray-800" />
                        
                        <div>
                          <h3 className="text-lg font-medium text-purple-300 flex items-center mb-4">
                            <FileText className="h-5 w-5 mr-2" />
                            Metadata Standards
                          </h3>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="bg-purple-500/10 border-b border-purple-500/20">
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Parameter</th>
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Industry Standard</th>
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Recommended Value</th>
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Importance</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-800">
                                {technicalStandards.metadata.map((standard, idx) => (
                                  <tr key={idx} className="hover:bg-purple-500/5">
                                    <td className="py-3 px-4 text-sm font-medium">{standard.name}</td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">{standard.standard}</td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">{standard.recommended}</td>
                                    <td className="py-3 px-4">
                                      <Badge variant="outline" className={standard.critical ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' : 'bg-gray-500/10 text-gray-300 border-gray-500/30'}>
                                        {standard.critical ? 'Critical' : 'Recommended'}
                                      </Badge>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                        <Separator className="bg-gray-800" />
                        
                        <div>
                          <h3 className="text-lg font-medium text-purple-300 flex items-center mb-4">
                            <Clock className="h-5 w-5 mr-2" />
                            Timing and Delivery Standards
                          </h3>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="bg-purple-500/10 border-b border-purple-500/20">
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Parameter</th>
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Industry Standard</th>
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Recommended Value</th>
                                  <th className="py-3 px-4 text-left text-sm font-medium text-purple-300">Importance</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-800">
                                {technicalStandards.timing.map((standard, idx) => (
                                  <tr key={idx} className="hover:bg-purple-500/5">
                                    <td className="py-3 px-4 text-sm font-medium">{standard.name}</td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">{standard.standard}</td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">{standard.recommended}</td>
                                    <td className="py-3 px-4">
                                      <Badge variant="outline" className={standard.critical ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' : 'bg-gray-500/10 text-gray-300 border-gray-500/30'}>
                                        {standard.critical ? 'Critical' : 'Recommended'}
                                      </Badge>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                          <div className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                              <h3 className="font-medium text-amber-300">Important LUFS Note</h3>
                              <p className="mt-2 text-sm text-muted-foreground">
                                While different platforms have their own loudness standards, most major streaming services 
                                now apply loudness normalization. This means tracks will be adjusted to the platform's target 
                                loudness during playback. However, proper mastering to industry standards ensures:
                              </p>
                              <div className="mt-3 space-y-2">
                                <div className="flex items-start">
                                  <CheckCircle className="h-4 w-4 mr-2 text-amber-400 mt-0.5" />
                                  <span className="text-muted-foreground text-sm">Consistent listening experience across platforms</span>
                                </div>
                                <div className="flex items-start">
                                  <CheckCircle className="h-4 w-4 mr-2 text-amber-400 mt-0.5" />
                                  <span className="text-muted-foreground text-sm">Minimal dynamic processing during normalization</span>
                                </div>
                                <div className="flex items-start">
                                  <CheckCircle className="h-4 w-4 mr-2 text-amber-400 mt-0.5" />
                                  <span className="text-muted-foreground text-sm">Optimal sound quality for both streaming and non-streaming contexts</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/20"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Technical Guide PDF
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Checklist Tab */}
              <TabsContent value="checklist" className="pt-8">
                <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/20 shadow-lg shadow-purple-500/10 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
                  
                  <CardHeader className="relative">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-purple-300">Distribution Quality Checklist</CardTitle>
                        <CardDescription>
                          Comprehensive verification list for release-ready music
                        </CardDescription>
                      </div>
                      
                      <div className="mt-4 md:mt-0 flex items-center space-x-4">
                        <div className="flex flex-col items-end">
                          <div className="text-3xl font-bold">{completionPercentage}%</div>
                          <div className="text-xs text-muted-foreground">
                            {checkedItems.length}/{totalChecklistItems} Complete
                          </div>
                        </div>
                        <div className="h-16 w-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center relative">
                          <svg className="w-14 h-14" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#334155"
                              strokeWidth="3"
                              strokeDasharray="100, 100"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="url(#gradient)"
                              strokeWidth="3"
                              strokeDasharray={`${completionPercentage}, 100`}
                              className="rotate-90 origin-center"
                              style={{ transformOrigin: 'center' }}
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#A855F7" />
                                <stop offset="100%" stopColor="#818CF8" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      {qualityChecklist.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="p-4 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-purple-500/10">
                          <h3 className="text-lg font-medium text-purple-300 mb-4">{section.section}</h3>
                          
                          <div className="space-y-3">
                            {section.items.map((item) => (
                              <div 
                                key={item.id} 
                                className={`p-3 rounded-lg transition-all ${
                                  checkedItems.includes(item.id) 
                                    ? 'bg-purple-500/10 border border-purple-500/30' 
                                    : 'bg-gray-800/60 border border-gray-700/50 hover:border-gray-600'
                                }`}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="flex-shrink-0 pt-0.5">
                                    <input 
                                      type="checkbox" 
                                      checked={checkedItems.includes(item.id)} 
                                      onChange={() => toggleChecklistItem(item.id)}
                                      className="h-5 w-5 rounded border-gray-500 text-purple-600 focus:ring-purple-500"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                      <h4 className={`font-medium ${checkedItems.includes(item.id) ? 'text-purple-300 line-through opacity-70' : ''}`}>
                                        {item.label}
                                      </h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                      <h3 className="text-lg font-medium text-purple-300 mb-3">Final Verification Steps</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                              <CheckCircle className="h-4 w-4 text-purple-400" />
                            </div>
                            <span className="font-medium">Cross-Platform Testing</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-11">
                            Listen to your audio on multiple devices and headphones to ensure consistent quality across playback systems
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                              <CheckCircle className="h-4 w-4 text-purple-400" />
                            </div>
                            <span className="font-medium">Reference Comparison</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-11">
                            Compare your release against successful commercial tracks in the same genre to benchmark quality
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                              <CheckCircle className="h-4 w-4 text-purple-400" />
                            </div>
                            <span className="font-medium">Peer Review</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-11">
                            Have a trusted colleague review your release package for any overlooked issues
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                              <CheckCircle className="h-4 w-4 text-purple-400" />
                            </div>
                            <span className="font-medium">Legal Verification</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-11">
                            Confirm all rights are properly secured and documented before final submission
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-center">
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/20"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export Quality Report
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}