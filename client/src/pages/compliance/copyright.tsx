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
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Shield, 
  FileText, 
  AlertTriangle, 
  Globe, 
  Search, 
  Calendar, 
  CheckCircle, 
  AlertCircle, 
  Scale,
  Download,
  Link,
  Scan,
  FolderLock
} from 'lucide-react';
import { Link as RouterLink } from 'wouter';
import { PageLoader } from '@/components/ui/loader';

export default function CopyrightProtection() {
  const [activeTab, setActiveTab] = useState('basics');
  
  // Sample data for copyright basics
  const copyrightBasics = [
    {
      title: "What Copyright Protects",
      content: "Copyright protection extends to original works of authorship fixed in a tangible medium of expression. In music, this includes compositions (musical notes and lyrics) and sound recordings (the specific recorded performance of a composition).",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Rights Granted",
      content: "Copyright owners have exclusive rights to reproduce, distribute, display, perform, and create derivative works from their creations. In music, this includes rights to make copies, distribute recordings, perform publicly, and create adaptations or arrangements.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Duration of Protection",
      content: "For works created after January 1, 1978, copyright protection lasts for the life of the author plus 70 years. For works made for hire or anonymous works, protection lasts 95 years from publication or 120 years from creation, whichever is shorter.",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "International Protection",
      content: "Copyright protection extends across international borders through treaties like the Berne Convention and TRIPS Agreement. However, enforcement mechanisms and specific protections vary by country.",
      icon: <Globe className="h-6 w-6" />
    }
  ];
  
  // Sample data for registration process
  const registrationSteps = [
    {
      title: "Prepare Your Materials",
      content: "Gather all necessary materials including the complete work to be registered, information about the author(s) and owner(s), creation and publication dates, and any derivative work details.",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Complete Application",
      content: "File your application through the U.S. Copyright Office's electronic system (eCO) or by paper form. For musical works, use Form PA for compositions and Form SR for sound recordings.",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Pay Registration Fee",
      content: "Submit the required fee, which varies depending on the registration method and type of work. Electronic filings typically have lower fees than paper applications.",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Deposit Copies",
      content: "Provide deposit copies of your work. For music, this may include digital files, sheet music, or physical recordings depending on the nature of your registration.",
      icon: <FileText className="h-5 w-5" />
    }
  ];
  
  // Sample data for enforcement strategies
  const enforcementStrategies = [
    {
      title: "Proactive Monitoring",
      description: "Implement digital monitoring solutions to scan online platforms for unauthorized use of your copyrighted material.",
      benefits: ["Early detection of infringement", "Establishes pattern of protection", "Prevents widespread unauthorized distribution"],
      tools: ["Content ID systems", "Digital fingerprinting", "Web crawling services"]
    },
    {
      title: "DMCA Takedown Notices",
      description: "Utilize the Digital Millennium Copyright Act process to request removal of infringing content from online platforms.",
      benefits: ["Expedited removal process", "No immediate legal costs", "Established legal framework"],
      tools: ["Standardized notice templates", "DMCA compliance services", "Infringement tracking systems"]
    },
    {
      title: "Cease and Desist Letters",
      description: "Send formal requests demanding that infringers stop unauthorized use and potentially compensate for past infringement.",
      benefits: ["Often results in quick compliance", "Demonstrates serious intent", "Can be step before litigation"],
      tools: ["Legal templates", "Documentation of infringement", "Delivery confirmation"]
    },
    {
      title: "Licensing Alternatives",
      description: "Convert potential infringement into legitimate use through retroactive licensing agreements.",
      benefits: ["Transforms violation into revenue", "Builds business relationships", "Avoids costly litigation"],
      tools: ["Standard license agreements", "Negotiation frameworks", "Rights management systems"]
    }
  ];
  
  // Sample data for red flags that indicate potential infringement
  const infringementRedFlags = [
    {
      title: "Unauthorized Digital Distribution",
      description: "Music appearing on streaming platforms, download sites, or social media without permission",
      severity: "high",
      action: "Immediate DMCA takedown notice and platform notification"
    },
    {
      title: "Sampling Without Permission",
      description: "Portions of your music incorporated into other works without authorization",
      severity: "high",
      action: "Rights clearance outreach followed by legal action if unresolved"
    },
    {
      title: "Sync Without License",
      description: "Music used in videos, films, commercials, or games without proper synchronization licensing",
      severity: "high",
      action: "Cease and desist letter with retroactive licensing option"
    },
    {
      title: "Lyric Publication",
      description: "Lyrics published on websites, in print, or in merchandise without permission",
      severity: "medium",
      action: "Takedown notice to website owners or demand for licensing fees"
    },
    {
      title: "Cover Performances Without License",
      description: "Public performances or recordings of your composition without mechanical licenses",
      severity: "medium",
      action: "Notification to PROs and licensing platforms like Harry Fox Agency"
    },
    {
      title: "False Authorship Claims",
      description: "Others claiming credit for your work in registrations or metadata",
      severity: "severe",
      action: "Formal dispute with copyright office and platform content ID systems"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          <div className="absolute top-1/4 right-0 w-40 h-[800px] bg-gradient-to-b from-red-500/5 to-orange-500/5 skew-x-12 blur-2xl"></div>
          <div className="absolute top-20 left-0 w-40 h-[600px] bg-gradient-to-b from-amber-500/5 to-red-500/5 -skew-x-12 blur-2xl"></div>
          
          {/* Music notes abstraction */}
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-red-500/20 rounded-full opacity-30"></div>
          <div className="absolute bottom-40 right-40 w-20 h-20 border border-orange-500/20 rounded-full opacity-20"></div>
          <div className="absolute top-60 left-40 w-30 h-30 border border-amber-500/20 rounded-full opacity-20"></div>
        </div>
        
        {/* Back Navigation */}
        <div className="container mx-auto px-4 sm:px-6 py-6 relative z-10 max-w-7xl">
          <RouterLink href="/compliance">
            <Button variant="ghost" className="text-red-300 hover:text-red-200 hover:bg-red-500/10 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Compliance
            </Button>
          </RouterLink>
        </div>
        
        {/* Hero Section */}
        <section className="relative py-8 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 py-10 space-y-6 relative z-10 max-w-7xl">
            <div className="text-center space-y-4 relative mx-auto max-w-4xl mb-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600/20 via-orange-600/20 to-amber-600/20 blur-xl transform scale-110 animate-pulse-slow"></div>
              
              <div className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-red-500/20 rounded-2xl px-6 py-10 backdrop-blur-sm shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-amber-500">
                    Copyright Protection
                  </span>
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                  Safeguard your creative works with comprehensive copyright protection strategies, 
                  registration guidance, and enforcement tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Tabs defaultValue="basics" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 bg-gray-800/70 border border-red-500/20 p-1 rounded-xl">
                <TabsTrigger 
                  value="basics" 
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Basics
                </TabsTrigger>
                <TabsTrigger 
                  value="registration" 
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Registration
                </TabsTrigger>
                <TabsTrigger 
                  value="enforcement" 
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Enforcement
                </TabsTrigger>
                <TabsTrigger 
                  value="infringement" 
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Infringement
                </TabsTrigger>
              </TabsList>
              
              {/* Copyright Basics Tab */}
              <TabsContent value="basics" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-red-500/20 shadow-lg shadow-red-500/10 lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-xl text-red-300">Understanding Copyright Protection</CardTitle>
                      <CardDescription>
                        Essential knowledge about copyright law and how it applies to music
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {copyrightBasics.map((item, index) => (
                          <div key={index} className="p-4 bg-red-500/5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors h-full">
                            <div className="bg-red-600/30 rounded-lg p-2 inline-flex mb-3">
                              {item.icon}
                            </div>
                            <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.content}</p>
                          </div>
                        ))}
                      </div>
                      
                      <Separator className="bg-gray-800" />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Types of Music Copyright</h3>
                        <div className="space-y-4">
                          <div className="flex items-start p-4 bg-red-500/5 rounded-lg border border-red-500/20">
                            <div className="flex-shrink-0 bg-red-600/30 p-2 rounded-lg mr-4">
                              <FileText className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-medium">Musical Composition</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                The musical composition copyright protects the underlying music and lyrics of a song. 
                                This includes the melody, harmony, rhythm, and words. It belongs to the songwriter(s) 
                                or publisher and is often registered as a PA (Performing Arts) work with the U.S. Copyright Office.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start p-4 bg-red-500/5 rounded-lg border border-red-500/20">
                            <div className="flex-shrink-0 bg-red-600/30 p-2 rounded-lg mr-4">
                              <FileText className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-medium">Sound Recording</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                The sound recording copyright (sometimes called a "master" recording) protects the specific 
                                recorded version of a song. This includes the performer's interpretation, production, mixing, 
                                and mastering. It belongs to the recording artist or record label and is registered as an SR 
                                (Sound Recording) work with the U.S. Copyright Office.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium text-amber-300">Common Copyright Misconceptions</h3>
                            <ul className="mt-2 space-y-2 text-sm">
                              <li className="flex items-start">
                                <span className="h-5 w-5 text-center text-amber-300 font-bold mr-2">•</span>
                                <span className="text-muted-foreground"><span className="text-amber-300 font-medium">Poor Man's Copyright:</span> Simply mailing yourself a copy of your work does not provide legal protection. Formal registration is essential for optimal protection.</span>
                              </li>
                              <li className="flex items-start">
                                <span className="h-5 w-5 text-center text-amber-300 font-bold mr-2">•</span>
                                <span className="text-muted-foreground"><span className="text-amber-300 font-medium">Public Performance = Public Domain:</span> Just because a work is publicly available or performed doesn't mean it's free to use. Most music released in the last 95 years is still under copyright protection.</span>
                              </li>
                              <li className="flex items-start">
                                <span className="h-5 w-5 text-center text-amber-300 font-bold mr-2">•</span>
                                <span className="text-muted-foreground"><span className="text-amber-300 font-medium">The "X Seconds" Rule:</span> There is no legally established "safe" duration for using copyrighted material without permission. Even brief samples may require licensing.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-6">
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-red-500/20 shadow-lg shadow-red-500/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-red-300">Benefits of Copyright Registration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="bg-red-500/20 p-2 rounded-lg mr-4 mt-1">
                              <Shield className="h-4 w-4 text-red-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Legal Standing</h3>
                              <p className="text-xs text-muted-foreground">Public record of ownership and ability to file infringement lawsuits</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-red-500/20 p-2 rounded-lg mr-4 mt-1">
                              <AlertTriangle className="h-4 w-4 text-red-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Statutory Damages</h3>
                              <p className="text-xs text-muted-foreground">Eligibility for statutory damages up to $150,000 per work for willful infringement</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-red-500/20 p-2 rounded-lg mr-4 mt-1">
                              <Scale className="h-4 w-4 text-red-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Prima Facie Evidence</h3>
                              <p className="text-xs text-muted-foreground">Legal presumption of validity if registered within 5 years of publication</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-red-500/20 p-2 rounded-lg mr-4 mt-1">
                              <Globe className="h-4 w-4 text-red-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Global Protection</h3>
                              <p className="text-xs text-muted-foreground">Strengthened position for international enforcement through treaties</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-red-500/20 shadow-lg shadow-red-500/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-red-300">Copyright Timeline</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="relative">
                          <div className="absolute left-4 top-1 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 to-red-500/10"></div>
                          
                          <div className="ml-10 relative mb-6">
                            <div className="absolute left-0 -translate-x-[calc(100%+0.5rem)] top-1.5 h-3 w-3 rounded-full bg-red-500"></div>
                            <h3 className="font-medium">Creation</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              Copyright protection begins automatically when work is created and fixed in tangible form
                            </p>
                          </div>
                          
                          <div className="ml-10 relative mb-6">
                            <div className="absolute left-0 -translate-x-[calc(100%+0.5rem)] top-1.5 h-3 w-3 rounded-full bg-red-500"></div>
                            <h3 className="font-medium">Registration (Optional)</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              Formal registration with copyright office provides additional legal benefits
                            </p>
                          </div>
                          
                          <div className="ml-10 relative mb-6">
                            <div className="absolute left-0 -translate-x-[calc(100%+0.5rem)] top-1.5 h-3 w-3 rounded-full bg-red-500"></div>
                            <h3 className="font-medium">Publication</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              Public distribution or performance starts copyright term for some works
                            </p>
                          </div>
                          
                          <div className="ml-10 relative">
                            <div className="absolute left-0 -translate-x-[calc(100%+0.5rem)] top-1.5 h-3 w-3 rounded-full bg-red-500"></div>
                            <h3 className="font-medium">Term Expiration</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              Life + 70 years for individual works; 95 years from publication for corporate works
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-red-500/20 shadow-lg shadow-red-500/10">
                    <CardHeader>
                      <CardTitle className="text-xl text-red-300">Digital Rights Management in Music</CardTitle>
                      <CardDescription>Understanding technologies and strategies for protecting digital music</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <h3 className="font-medium flex items-center">
                            <FolderLock className="h-4 w-4 mr-2 text-red-400" />
                            Technical Protection Measures
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Technologies that restrict unauthorized access to and copying of protected works, including encryption, 
                            access controls, and copy prevention mechanisms.
                          </p>
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <h4 className="text-sm font-medium text-red-300 mb-1">Examples:</h4>
                            <p className="text-xs text-muted-foreground">
                              Encrypted audio files, streaming protection systems, watermarking, and fingerprinting technologies
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-medium flex items-center">
                            <Link className="h-4 w-4 mr-2 text-red-400" />
                            Rights Management Information
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Data embedded within digital files that identifies the content, its owner, and permitted uses, 
                            protected under copyright law from removal or alteration.
                          </p>
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <h4 className="text-sm font-medium text-red-300 mb-1">Examples:</h4>
                            <p className="text-xs text-muted-foreground">
                              Metadata in digital audio files, embedded copyright notices, digital watermarks with ownership data
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-medium flex items-center">
                            <Scan className="h-4 w-4 mr-2 text-red-400" />
                            Content Recognition Systems
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Automated systems that scan digital platforms to identify copyrighted content and enforce rights owner policies 
                            for monetization, blocking, or tracking usage.
                          </p>
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <h4 className="text-sm font-medium text-red-300 mb-1">Examples:</h4>
                            <p className="text-xs text-muted-foreground">
                              YouTube Content ID, Facebook Rights Manager, audio fingerprinting systems
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                        <h3 className="text-lg font-medium text-red-300 mb-3">Legal Protections for Digital Rights Management</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The Digital Millennium Copyright Act (DMCA) provides specific legal protections against the circumvention 
                          of technical measures used to protect copyrighted works. It includes prohibitions against:
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium">Circumvention of Technical Measures</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                Breaking encryption or bypassing access controls designed to protect copyrighted works
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium">Trafficking in Circumvention Tools</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                Manufacturing, distributing, or offering technologies designed to bypass copyright protection
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium">Removal of Rights Management Information</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                Altering or removing metadata or identifiers that convey copyright information
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium">False Copyright Management Information</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                Providing false copyright or ownership information with intent to mislead
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button 
                        variant="outline" 
                        className="border-red-500/30 text-red-300 hover:bg-red-500/10"
                        onClick={() => setActiveTab('registration')}
                      >
                        Explore Registration Process
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Registration Tab */}
              <TabsContent value="registration" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-red-500/20 shadow-lg shadow-red-500/10 lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-xl text-red-300">Copyright Registration Process</CardTitle>
                      <CardDescription>
                        Step-by-step guide to registering your musical works
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-8">
                        {registrationSteps.map((step, index) => (
                          <div key={index} className="relative">
                            {index < registrationSteps.length - 1 && (
                              <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 to-red-500/10"></div>
                            )}
                            
                            <div className="flex">
                              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-300 text-xl font-bold">
                                {index + 1}
                              </div>
                              <div className="ml-6">
                                <h3 className="text-lg font-medium text-red-300">{step.title}</h3>
                                <p className="mt-2 text-muted-foreground">{step.content}</p>
                                
                                {index === 0 && (
                                  <div className="mt-4 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                                    <h4 className="text-sm font-medium text-red-300 mb-2">Required Materials for Musical Works:</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                      <li>Complete audio recording (for sound recordings)</li>
                                      <li>Sheet music or lead sheets (for compositions)</li>
                                      <li>Lyrics document (for songs with lyrics)</li>
                                      <li>Creation date and first publication date (if published)</li>
                                      <li>Complete information about all authors and copyright claimants</li>
                                      <li>Work made for hire documentation (if applicable)</li>
                                    </ul>
                                  </div>
                                )}
                                
                                {index === 1 && (
                                  <div className="mt-4 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                                    <h4 className="text-sm font-medium text-red-300 mb-2">Selecting the Correct Form:</h4>
                                    <div className="space-y-3">
                                      <div>
                                        <span className="font-medium">Form PA:</span>
                                        <span className="text-sm text-muted-foreground ml-2">Use for musical compositions (the song itself, including music and lyrics)</span>
                                      </div>
                                      <div>
                                        <span className="font-medium">Form SR:</span>
                                        <span className="text-sm text-muted-foreground ml-2">Use for sound recordings (the specific recorded performance of a composition)</span>
                                      </div>
                                      <div>
                                        <span className="font-medium">Form PA & SR Combined:</span>
                                        <span className="text-sm text-muted-foreground ml-2">Use when registering both the composition and sound recording together (when the same person or entity owns both)</span>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                
                                {index === 2 && (
                                  <div className="mt-4 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                                    <h4 className="text-sm font-medium text-red-300 mb-2">Current Copyright Office Fees (as of 2023):</h4>
                                    <div className="space-y-3 text-sm text-muted-foreground">
                                      <div className="flex justify-between">
                                        <span>Electronic Filing (Single Work):</span>
                                        <span className="font-medium">$45</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Paper Filing (Single Work):</span>
                                        <span className="font-medium">$125</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Group Registration for Music Albums:</span>
                                        <span className="font-medium">$85</span>
                                      </div>
                                      <p className="text-xs mt-2">Note: Fees are subject to change. Check the U.S. Copyright Office website for current rates.</p>
                                    </div>
                                  </div>
                                )}
                                
                                {index === 3 && (
                                  <div className="mt-4 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                                    <h4 className="text-sm font-medium text-red-300 mb-2">Deposit Requirements for Musical Works:</h4>
                                    <div className="space-y-3 text-sm text-muted-foreground">
                                      <div>
                                        <span className="font-medium">For Compositions (Form PA):</span>
                                        <ul className="list-disc pl-5 mt-1">
                                          <li>Complete score or lead sheet (sheet music)</li>
                                          <li>Complete lyrics document (if applicable)</li>
                                        </ul>
                                      </div>
                                      <div className="mt-2">
                                        <span className="font-medium">For Sound Recordings (Form SR):</span>
                                        <ul className="list-disc pl-5 mt-1">
                                          <li>Digital audio file (MP3, WAV, etc.)</li>
                                          <li>Album artwork/packaging (if registering published work)</li>
                                        </ul>
                                      </div>
                                      <p className="text-xs mt-2">Tip: For electronic filings, you can upload digital files directly through the eCO system.</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-5 bg-red-500/5 border border-red-500/20 rounded-lg">
                        <h3 className="text-lg font-medium text-red-300 mb-3">After Registration</h3>
                        <div className="space-y-4 text-muted-foreground">
                          <p>
                            After submitting your registration, the Copyright Office will process your application, which may take 
                            several months. Once approved, you'll receive a copyright certificate containing your registration number 
                            and effective date.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 mr-2 text-red-400 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium">Store Your Certificate Safely</h4>
                                <p className="text-sm">Keep both digital and physical copies of your registration certificate in secure locations</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 mr-2 text-red-400 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium">Add Copyright Notice</h4>
                                <p className="text-sm">Mark your work with © symbol, year of first publication, and owner name</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 mr-2 text-red-400 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium">Update PRO Registration</h4>
                                <p className="text-sm">Provide your copyright registration information to your performing rights organization</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 mr-2 text-red-400 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium">Monitor for Infringement</h4>
                                <p className="text-sm">Implement a monitoring strategy to identify potential copyright violations</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-6">
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-red-500/20 shadow-lg shadow-red-500/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-red-300">Registration Resources</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <a 
                          href="https://www.copyright.gov/eco/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-red-500/5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all"
                        >
                          <div className="bg-red-600/30 p-2 rounded-lg mr-3">
                            <Globe className="h-5 w-5 text-red-300" />
                          </div>
                          <div>
                            <h3 className="font-medium">U.S. Copyright Office</h3>
                            <p className="text-xs text-muted-foreground">Official registration portal</p>
                          </div>
                        </a>
                        
                        <a 
                          href="#"
                          className="flex items-center p-3 bg-red-500/5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all"
                        >
                          <div className="bg-red-600/30 p-2 rounded-lg mr-3">
                            <FileText className="h-5 w-5 text-red-300" />
                          </div>
                          <div>
                            <h3 className="font-medium">Registration Guide</h3>
                            <p className="text-xs text-muted-foreground">Detailed step-by-step PDF</p>
                          </div>
                        </a>
                        
                        <a 
                          href="#"
                          className="flex items-center p-3 bg-red-500/5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all"
                        >
                          <div className="bg-red-600/30 p-2 rounded-lg mr-3">
                            <Search className="h-5 w-5 text-red-300" />
                          </div>
                          <div>
                            <h3 className="font-medium">Copyright Catalog</h3>
                            <p className="text-xs text-muted-foreground">Search existing registrations</p>
                          </div>
                        </a>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg shadow-red-500/20"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Registration Checklist
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-red-500/20 shadow-lg shadow-red-500/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-red-300">Group Registration Options</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          The Copyright Office offers cost-effective options for registering multiple works together under certain conditions:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="p-3 bg-red-500/5 rounded-lg border border-red-500/20">
                            <h3 className="font-medium">Group Registration for Music Albums (GRAM)</h3>
                            <div className="mt-2 text-sm space-y-2">
                              <div className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                                <p className="text-muted-foreground">Register up to 20 musical works from the same album</p>
                              </div>
                              <div className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                                <p className="text-muted-foreground">Works must be created by same author(s) or have same copyright claimant</p>
                              </div>
                              <div className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                                <p className="text-muted-foreground">Single application and filing fee ($85)</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-red-500/5 rounded-lg border border-red-500/20">
                            <h3 className="font-medium">Unpublished Collections</h3>
                            <div className="mt-2 text-sm space-y-2">
                              <div className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                                <p className="text-muted-foreground">Register multiple unpublished works with same author</p>
                              </div>
                              <div className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                                <p className="text-muted-foreground">Works must be assembled in orderly collection</p>
                              </div>
                              <div className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                                <p className="text-muted-foreground">Useful for protecting unreleased catalogs</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              {/* Enforcement Tab */}
              <TabsContent value="enforcement" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-red-500/20 shadow-lg shadow-red-500/10 lg:col-span-3">
                    <CardHeader>
                      <CardTitle className="text-xl text-red-300">Copyright Enforcement Strategies</CardTitle>
                      <CardDescription>
                        Proactive approaches to protect your music and address infringement
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {enforcementStrategies.map((strategy, index) => (
                          <div key={index} className="p-5 bg-red-500/5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
                            <h3 className="text-lg font-medium text-red-300 mb-3">{strategy.title}</h3>
                            <p className="text-muted-foreground">{strategy.description}</p>
                            
                            <div className="mt-4 space-y-3">
                              <div>
                                <h4 className="text-sm font-medium flex items-center">
                                  <CheckCircle className="h-4 w-4 mr-2 text-red-400" />
                                  Key Benefits
                                </h4>
                                <ul className="mt-1 pl-6 space-y-1">
                                  {strategy.benefits.map((benefit, i) => (
                                    <li key={i} className="text-sm text-muted-foreground list-disc">{benefit}</li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="text-sm font-medium flex items-center">
                                  <CheckCircle className="h-4 w-4 mr-2 text-red-400" />
                                  Recommended Tools
                                </h4>
                                <ul className="mt-1 pl-6 space-y-1">
                                  {strategy.tools.map((tool, i) => (
                                    <li key={i} className="text-sm text-muted-foreground list-disc">{tool}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-5 bg-red-500/5 border border-red-500/20 rounded-lg">
                        <h3 className="text-lg font-medium text-red-300 mb-4">Enforcement Escalation Framework</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="relative">
                            <div className="absolute hidden md:block h-0.5 w-full top-6 left-1/2 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
                            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center relative z-10">
                              <div className="h-12 w-12 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                                <span className="font-bold text-lg">1</span>
                              </div>
                              <h4 className="font-medium mt-2">Initial Notice</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                Informal notification requesting removal or licensing
                              </p>
                            </div>
                          </div>
                          
                          <div className="relative">
                            <div className="absolute hidden md:block h-0.5 w-full top-6 left-1/2 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
                            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center relative z-10">
                              <div className="h-12 w-12 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                                <span className="font-bold text-lg">2</span>
                              </div>
                              <h4 className="font-medium mt-2">Formal Takedown</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                DMCA notice to platform or host
                              </p>
                            </div>
                          </div>
                          
                          <div className="relative">
                            <div className="absolute hidden md:block h-0.5 w-full top-6 left-1/2 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
                            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center relative z-10">
                              <div className="h-12 w-12 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                                <span className="font-bold text-lg">3</span>
                              </div>
                              <h4 className="font-medium mt-2">Legal Demand</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                Cease and desist letter from attorney
                              </p>
                            </div>
                          </div>
                          
                          <div className="relative">
                            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center relative z-10">
                              <div className="h-12 w-12 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                                <span className="font-bold text-lg">4</span>
                              </div>
                              <h4 className="font-medium mt-2">Litigation</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                Copyright infringement lawsuit
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 text-sm text-muted-foreground">
                          <p>
                            This framework provides a balanced approach to enforcement, allowing for resolution at each stage without 
                            immediately resorting to costly litigation. Each step should be documented carefully, with reasonable 
                            timeframes for response before escalation.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 bg-red-500/5 rounded-lg border border-red-500/20">
                          <h3 className="text-lg font-medium text-red-300 mb-3">Monitoring Services</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Professional services that actively scan for unauthorized uses of your copyrighted music:
                          </p>
                          
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-sm">Content Identification Networks</h4>
                                <p className="text-xs text-muted-foreground">Systems that scan major platforms and websites for matching audio</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-sm">Web Crawling Services</h4>
                                <p className="text-xs text-muted-foreground">Automated scanning of the internet for unauthorized file hosting</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-sm">Lyrics & Metadata Monitoring</h4>
                                <p className="text-xs text-muted-foreground">Tracking services that identify unauthorized lyric publications</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-sm">Sync License Verification</h4>
                                <p className="text-xs text-muted-foreground">Services that monitor visual media for unauthorized music use</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-5 bg-red-500/5 rounded-lg border border-red-500/20">
                          <h3 className="text-lg font-medium text-red-300 mb-3">Documentation for Enforcement</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Maintain comprehensive records to support enforcement actions:
                          </p>
                          
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-sm">Infringement Evidence</h4>
                                <p className="text-xs text-muted-foreground">Screenshots, recordings, URLs, and access dates of unauthorized use</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-sm">Ownership Proof</h4>
                                <p className="text-xs text-muted-foreground">Copyright registration certificates, contracts, and creation documentation</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-sm">Communication Records</h4>
                                <p className="text-xs text-muted-foreground">Chronological log of all notices, responses, and actions taken</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-sm">Damage Assessment</h4>
                                <p className="text-xs text-muted-foreground">Documentation of financial impact and market harm from infringement</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button
                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg shadow-red-500/20"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Enforcement Guide
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Infringement Tab */}
              <TabsContent value="infringement" className="pt-8">
                <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-red-500/20 shadow-lg shadow-red-500/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-300">Identifying Copyright Infringement</CardTitle>
                    <CardDescription>
                      Red flags and signs that your music rights may be violated
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-5">
                      {infringementRedFlags.map((flag, index) => (
                        <div 
                          key={index} 
                          className="p-4 bg-red-500/5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-full ${
                              flag.severity === 'high' || flag.severity === 'severe' ? 'bg-red-500/20' : 'bg-amber-500/20'
                            } flex items-center justify-center`}>
                              <AlertTriangle className={`h-5 w-5 ${
                                flag.severity === 'high' || flag.severity === 'severe' ? 'text-red-400' : 'text-amber-400'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">{flag.title}</h3>
                                <Badge variant="outline" className={`
                                  ${flag.severity === 'severe' ? 'bg-red-500/20 text-red-300 border-red-500/30' : 
                                    flag.severity === 'high' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 
                                    'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'}
                                `}>
                                  {flag.severity.charAt(0).toUpperCase() + flag.severity.slice(1)} Risk
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{flag.description}</p>
                            </div>
                          </div>
                          
                          <div className="mt-3 pl-13">
                            <div className="text-sm bg-gray-800/50 rounded-lg p-3">
                              <h4 className="font-medium text-red-300 mb-1">Recommended Action:</h4>
                              <p className="text-xs text-muted-foreground">{flag.action}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-5 bg-red-500/5 border border-red-500/20 rounded-lg">
                      <h3 className="text-lg font-medium text-red-300 mb-4">Fair Use Considerations</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Not all uses of copyrighted work constitute infringement. Fair use is a legal doctrine that permits limited 
                        use of copyrighted material without permission for purposes such as criticism, comment, news reporting, 
                        teaching, scholarship, or research.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h4 className="font-medium text-sm">Fair Use Factors</h4>
                          <ul className="space-y-2 pl-2">
                            <li className="flex items-start">
                              <span className="h-5 w-5 text-center text-red-300 font-bold mr-2">1.</span>
                              <div>
                                <span className="text-sm"><span className="font-medium">Purpose and Character</span></span>
                                <p className="text-xs text-muted-foreground">
                                  Whether the use is transformative or commercial in nature
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 text-center text-red-300 font-bold mr-2">2.</span>
                              <div>
                                <span className="text-sm"><span className="font-medium">Nature of Work</span></span>
                                <p className="text-xs text-muted-foreground">
                                  Whether the original work is factual or creative
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 text-center text-red-300 font-bold mr-2">3.</span>
                              <div>
                                <span className="text-sm"><span className="font-medium">Amount Used</span></span>
                                <p className="text-xs text-muted-foreground">
                                  The quantity and substantiality of the portion used
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 text-center text-red-300 font-bold mr-2">4.</span>
                              <div>
                                <span className="text-sm"><span className="font-medium">Market Effect</span></span>
                                <p className="text-xs text-muted-foreground">
                                  Impact on potential market or value of the original work
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="font-medium text-sm">Examples in Music</h4>
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <CheckCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                              <div>
                                <span className="text-sm font-medium">Likely Fair Use:</span>
                                <p className="text-xs text-muted-foreground">
                                  Music criticism with short clips, academic analysis, parody that transforms the original
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <AlertCircle className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                              <div>
                                <span className="text-sm font-medium">Likely Not Fair Use:</span>
                                <p className="text-xs text-muted-foreground">
                                  Using substantial portions in commercial contexts, remixes without transformation, use that competes with original
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-2 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                            <p className="text-xs text-amber-300">
                              <span className="font-medium">Important Note:</span> Fair use is determined case-by-case and can be unpredictable. 
                              When in doubt, consult with a copyright attorney before taking enforcement action against potential fair uses.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <div className="space-x-4">
                      <Button 
                        variant="outline" 
                        className="border-red-500/30 text-red-300 hover:bg-red-500/10"
                        onClick={() => setActiveTab('enforcement')}
                      >
                        View Enforcement Strategies
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg shadow-red-500/20"
                      >
                        Contact Copyright Expert
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                
                <div className="mt-8">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-red-500/20 shadow-lg shadow-red-500/10 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
                    
                    <CardContent className="p-8 text-center relative">
                      <h3 className="text-2xl font-bold text-red-300 mb-4">Need Help With Copyright Protection?</h3>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Our team of copyright experts can help you register, monitor, and protect your musical works from infringement.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button 
                          variant="outline" 
                          className="border-red-500/30 text-red-300 hover:bg-red-500/10"
                          onClick={() => setActiveTab('basics')}
                        >
                          Return to Basics
                        </Button>
                        <Button 
                          className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg shadow-red-500/20"
                        >
                          Schedule Consultation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}