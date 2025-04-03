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
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, 
  DollarSign, 
  LineChart, 
  PieChart, 
  FileText, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  AlertCircle, 
  HelpCircle, 
  Settings, 
  Download
} from 'lucide-react';
import { Link } from 'wouter';
import { PageLoader } from '@/components/ui/loader';

export default function RoyaltyCompliance() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample data
  const royaltyTypes = [
    { name: 'Mechanical Royalties', description: 'Paid when music is reproduced in physical formats or digital downloads' },
    { name: 'Performance Royalties', description: 'Paid when music is played publicly, including radio, TV, and live venues' },
    { name: 'Sync Licensing Royalties', description: 'Paid when music is used in TV, film, commercials, or games' },
    { name: 'Digital Performance Royalties', description: 'Paid for streaming and online radio play' },
    { name: 'Print Royalties', description: 'Paid for sheet music and lyric reprints' },
    { name: 'Foreign Royalties', description: 'Collected from international sources' }
  ];
  
  const complianceSteps = [
    {
      title: 'Registration and Documentation',
      steps: [
        'Register works with relevant PROs (Performance Rights Organizations)',
        'Maintain accurate metadata for all compositions and recordings',
        'File proper copyright registrations for all works',
        'Document all licensing agreements and terms'
      ]
    },
    {
      title: 'Accounting and Tracking',
      steps: [
        'Implement a robust royalty tracking system',
        'Reconcile all royalty statements against contracts',
        'Regularly audit digital service provider (DSP) reports',
        'Monitor international collection agencies'
      ]
    },
    {
      title: 'Distribution and Payments',
      steps: [
        'Ensure timely and accurate payments to rights holders',
        'Maintain transparent payment documentation',
        'Implement systems for handling unclaimed royalties',
        'Comply with tax withholding and reporting requirements'
      ]
    }
  ];
  
  const faqItems = [
    {
      question: 'How often should royalty statements be audited?',
      answer: 'Industry best practice recommends auditing royalty statements at least quarterly, with comprehensive annual audits to catch any discrepancies. For high-volume catalogs, monthly reconciliation may be necessary.'
    },
    {
      question: 'What software tools are recommended for royalty tracking?',
      answer: 'Several specialized solutions exist including Vistex, Synchtank, and Royalty Exchange for larger operations. For smaller catalogs, custom Excel templates or services like Songtrust can be adequate.'
    },
    {
      question: 'How long should royalty records be maintained?',
      answer: 'Royalty records should be maintained for at least the duration of copyright (life of the author plus 70 years in most countries). For practical purposes, permanent digital archiving is recommended.'
    },
    {
      question: 'Are there international standards for royalty reporting?',
      answer: 'While there is no universal standard, formats like DDEX (Digital Data Exchange) are increasingly adopted worldwide. Regional collection societies may have their own required formats.'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          <div className="absolute top-1/4 right-0 w-40 h-[800px] bg-gradient-to-b from-emerald-500/5 to-green-500/5 skew-x-12 blur-2xl"></div>
          <div className="absolute top-20 left-0 w-40 h-[600px] bg-gradient-to-b from-teal-500/5 to-emerald-500/5 -skew-x-12 blur-2xl"></div>
          
          {/* Music notes abstraction */}
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-emerald-500/20 rounded-full opacity-30"></div>
          <div className="absolute bottom-40 right-40 w-20 h-20 border border-green-500/20 rounded-full opacity-20"></div>
          <div className="absolute top-60 left-40 w-30 h-30 border border-teal-500/20 rounded-full opacity-20"></div>
        </div>
        
        {/* Back Navigation */}
        <div className="container mx-auto px-4 sm:px-6 py-6 relative z-10 max-w-7xl">
          <Link href="/compliance">
            <Button variant="ghost" className="text-emerald-300 hover:text-emerald-200 hover:bg-emerald-500/10 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Compliance
            </Button>
          </Link>
        </div>
        
        {/* Hero Section */}
        <section className="relative py-8 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 py-10 space-y-6 relative z-10 max-w-7xl">
            <div className="text-center space-y-4 relative mx-auto max-w-4xl mb-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-600/20 via-green-600/20 to-teal-600/20 blur-xl transform scale-110 animate-pulse-slow"></div>
              
              <div className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-emerald-500/20 rounded-2xl px-6 py-10 backdrop-blur-sm shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-teal-500">
                    Royalty Compliance
                  </span>
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                  Ensure accurate tracking, collection, and distribution of music royalties with our comprehensive 
                  compliance framework and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 bg-gray-800/70 border border-emerald-500/20 p-1 rounded-xl">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="guidelines" 
                  className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Guidelines
                </TabsTrigger>
                <TabsTrigger 
                  value="tools" 
                  className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Tools
                </TabsTrigger>
                <TabsTrigger 
                  value="faq" 
                  className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  FAQ
                </TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/10 lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-xl text-emerald-300">Understanding Royalty Compliance</CardTitle>
                      <CardDescription>
                        Essential knowledge for managing music royalties in compliance with industry standards and legal requirements
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3">What is Royalty Compliance?</h3>
                        <p className="text-muted-foreground">
                          Royalty compliance encompasses the systems, processes, and practices that ensure music 
                          creators and rights holders receive accurate and timely compensation for the use of their work. 
                          It involves meticulous tracking, accounting, and distribution of payments across multiple 
                          revenue streams and territories.
                        </p>
                        <p className="text-muted-foreground mt-3">
                          A robust royalty compliance framework helps avoid legal disputes, builds trust with creators and partners, 
                          and maximizes revenue collection. It requires staying current with evolving digital platforms, international 
                          regulations, and industry best practices.
                        </p>
                      </div>
                      
                      <Separator className="bg-gray-800" />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Types of Music Royalties</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {royaltyTypes.map((type, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                              <div className="h-6 w-6 mt-0.5 flex-shrink-0 bg-emerald-600/80 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {index + 1}
                              </div>
                              <div>
                                <h4 className="font-medium">{type.name}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{type.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-6">
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-emerald-300">Key Compliance Areas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
                              <FileText className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
                              <h3 className="font-medium">Documentation</h3>
                              <p className="text-sm text-muted-foreground">Proper contracts, registrations, and metadata</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
                              <LineChart className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
                              <h3 className="font-medium">Tracking</h3>
                              <p className="text-sm text-muted-foreground">Usage monitoring and accurate reporting</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
                              <DollarSign className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
                              <h3 className="font-medium">Accounting</h3>
                              <p className="text-sm text-muted-foreground">Royalty calculations and statement reconciliation</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
                              <Users className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
                              <h3 className="font-medium">Distribution</h3>
                              <p className="text-sm text-muted-foreground">Timely payments to all rights holders</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-emerald-300">Compliance Benefits</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                          <span className="text-sm">Reduced Legal Risk</span>
                          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">High Impact</Badge>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                          <span className="text-sm">Maximized Revenue</span>
                          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">High Impact</Badge>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                          <span className="text-sm">Creator Trust</span>
                          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">High Impact</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Industry Reputation</span>
                          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">Medium Impact</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                    <CardHeader>
                      <CardTitle className="text-xl text-emerald-300">Royalty Compliance Challenges</CardTitle>
                      <CardDescription>Common obstacles and how to address them</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h3 className="font-medium flex items-center">
                            <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                            Incomplete Metadata
                          </h3>
                          <p className="text-sm text-muted-foreground pl-6">
                            Missing or inaccurate information about rights holders, splits, and territories 
                            can lead to misdirected or unclaimed royalties.
                          </p>
                          <div className="bg-gray-800/50 rounded-lg p-3 pl-6">
                            <h4 className="text-sm font-medium text-emerald-300 mb-1">Solution:</h4>
                            <p className="text-xs text-muted-foreground">
                              Implement standardized metadata protocols and validation systems. Regularly audit 
                              and clean your catalog data.
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-medium flex items-center">
                            <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                            International Complexity
                          </h3>
                          <p className="text-sm text-muted-foreground pl-6">
                            Different countries have varying royalty regulations, collection societies, and reporting 
                            requirements that can be difficult to navigate.
                          </p>
                          <div className="bg-gray-800/50 rounded-lg p-3 pl-6">
                            <h4 className="text-sm font-medium text-emerald-300 mb-1">Solution:</h4>
                            <p className="text-xs text-muted-foreground">
                              Partner with established international rights administrators or invest in specialized 
                              knowledge for key territories.
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-medium flex items-center">
                            <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                            Reporting Inconsistencies
                          </h3>
                          <p className="text-sm text-muted-foreground pl-6">
                            Different platforms and services report usage and revenue in inconsistent formats, 
                            making reconciliation time-consuming and error-prone.
                          </p>
                          <div className="bg-gray-800/50 rounded-lg p-3 pl-6">
                            <h4 className="text-sm font-medium text-emerald-300 mb-1">Solution:</h4>
                            <p className="text-xs text-muted-foreground">
                              Utilize specialized royalty processing software that can normalize data from 
                              different sources into a consistent format.
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-medium flex items-center">
                            <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                            Revenue Leakage
                          </h3>
                          <p className="text-sm text-muted-foreground pl-6">
                            Unclaimed works, missed uses, and processing errors can result in substantial 
                            lost revenue over time.
                          </p>
                          <div className="bg-gray-800/50 rounded-lg p-3 pl-6">
                            <h4 className="text-sm font-medium text-emerald-300 mb-1">Solution:</h4>
                            <p className="text-xs text-muted-foreground">
                              Conduct regular royalty audits, compare reports against known usage, and implement 
                              automated checks to flag potential missed revenue.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button 
                        variant="outline" 
                        className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10"
                        onClick={() => setActiveTab('guidelines')}
                      >
                        View Compliance Guidelines
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Guidelines Tab */}
              <TabsContent value="guidelines" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/10 lg:col-span-3 overflow-hidden">
                    <CardHeader className="relative">
                      <div className="absolute top-0 right-0 mt-8 mr-8">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Guidelines
                        </Button>
                      </div>
                      <CardTitle className="text-xl text-emerald-300">Royalty Compliance Guidelines</CardTitle>
                      <CardDescription>
                        Step-by-step framework for implementing and maintaining royalty compliance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {complianceSteps.map((section, index) => (
                          <div key={index} className="relative">
                            {/* Vertical timeline line */}
                            {index < complianceSteps.length - 1 && (
                              <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 to-emerald-500/10"></div>
                            )}
                            
                            <div className="flex">
                              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 text-xl font-bold">
                                {index + 1}
                              </div>
                              <div className="ml-6">
                                <h3 className="text-xl font-medium text-emerald-300">{section.title}</h3>
                                <div className="mt-4 space-y-4">
                                  {section.steps.map((step, stepIndex) => (
                                    <div key={stepIndex} className="flex items-start">
                                      <CheckCircle className="h-5 w-5 mr-3 text-emerald-500" />
                                      <div>
                                        <p className="text-base">{step}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Step-specific guidance */}
                                <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                                  <h4 className="text-sm font-medium text-emerald-300 mb-2">Best Practices:</h4>
                                  <ul className="list-disc pl-5 space-y-1">
                                    {index === 0 && (
                                      <>
                                        <li className="text-sm text-muted-foreground">Maintain standardized metadata across all platforms</li>
                                        <li className="text-sm text-muted-foreground">Register works immediately upon release</li>
                                        <li className="text-sm text-muted-foreground">Create clear chain-of-title documentation</li>
                                        <li className="text-sm text-muted-foreground">Implement digital record-keeping systems</li>
                                      </>
                                    )}
                                    
                                    {index === 1 && (
                                      <>
                                        <li className="text-sm text-muted-foreground">Utilize specialized royalty accounting software</li>
                                        <li className="text-sm text-muted-foreground">Conduct quarterly reconciliations of statements</li>
                                        <li className="text-sm text-muted-foreground">Implement error detection algorithms</li>
                                        <li className="text-sm text-muted-foreground">Create comprehensive audit trails</li>
                                      </>
                                    )}
                                    
                                    {index === 2 && (
                                      <>
                                        <li className="text-sm text-muted-foreground">Automate payment processes where possible</li>
                                        <li className="text-sm text-muted-foreground">Provide detailed statements to rights holders</li>
                                        <li className="text-sm text-muted-foreground">Establish clear payment schedules</li>
                                        <li className="text-sm text-muted-foreground">Create contingency processes for disputes</li>
                                      </>
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                    <CardHeader>
                      <CardTitle className="text-xl text-emerald-300">Compliance Audit Checklist</CardTitle>
                      <CardDescription>
                        Regular self-assessment to ensure ongoing royalty compliance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-emerald-300 flex items-center">
                            <Calendar className="h-5 w-5 mr-2" />
                            Quarterly Audit
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Reconcile all royalty statements</label>
                            </div>
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Verify platform-reported stream counts</label>
                            </div>
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Check for payment discrepancies</label>
                            </div>
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Update rights holder information</label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-emerald-300 flex items-center">
                            <Clock className="h-5 w-5 mr-2" />
                            Annual Audit
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Comprehensive catalog audit</label>
                            </div>
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Verify all works are properly registered</label>
                            </div>
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Review all licensing agreements</label>
                            </div>
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Assess international collection efficiency</label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-emerald-300 flex items-center">
                            <Settings className="h-5 w-5 mr-2" />
                            System Review
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Evaluate royalty tracking software</label>
                            </div>
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Update calculation formulas</label>
                            </div>
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Review data security protocols</label>
                            </div>
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-500 text-emerald-600 focus:ring-emerald-500" />
                              <label className="ml-3 text-sm">Test backup and recovery procedures</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button 
                        className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg shadow-emerald-500/20"
                      >
                        Generate Custom Checklist
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Tools Tab */}
              <TabsContent value="tools" className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                    <CardHeader>
                      <CardTitle className="text-xl text-emerald-300">Royalty Rate Calculator</CardTitle>
                      <CardDescription>
                        Determine accurate royalty payments based on usage and contract terms
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Royalty Type</label>
                          <select className="w-full bg-white/10 border-gray-700/50 text-white rounded-md p-2 focus:ring-emerald-500 focus:border-emerald-500">
                            <option>Mechanical Royalty</option>
                            <option>Performance Royalty</option>
                            <option>Streaming Royalty</option>
                            <option>Sync License</option>
                            <option>Print License</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Units/Streams</label>
                          <Input 
                            type="number" 
                            placeholder="e.g. 1000000" 
                            className="bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Contract Rate</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-400">%</span>
                            </div>
                            <Input 
                              type="number" 
                              placeholder="e.g. 15" 
                              className="pl-7 bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg shadow-emerald-500/20">
                            Calculate Royalty
                          </Button>
                        </div>
                        
                        <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg text-center">
                          <p className="text-sm text-muted-foreground">Estimated Royalty Payment</p>
                          <p className="text-2xl font-bold text-emerald-300 mt-1">$0.00</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                    <CardHeader>
                      <CardTitle className="text-xl text-emerald-300">Split Sheet Generator</CardTitle>
                      <CardDescription>
                        Create clear documentation of royalty splits among contributors
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Work Title</label>
                          <Input 
                            placeholder="Enter song or composition title" 
                            className="bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>
                        
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Contributors</label>
                          
                          <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Songwriter 1</span>
                              <div className="flex items-center">
                                <span className="text-xs text-muted-foreground mr-2">Share:</span>
                                <Input 
                                  type="number" 
                                  defaultValue="50"
                                  className="w-16 h-7 text-sm p-1 text-center bg-white/10 border-gray-700/50 text-white focus:ring-emerald-500 focus:border-emerald-500"
                                />
                                <span className="text-xs text-muted-foreground ml-1">%</span>
                              </div>
                            </div>
                            <Input 
                              placeholder="Full name" 
                              className="mb-2 h-8 text-sm bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                            />
                            <Input 
                              placeholder="PRO affiliation (e.g., ASCAP, BMI)" 
                              className="h-8 text-sm bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                            />
                          </div>
                          
                          <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Songwriter 2</span>
                              <div className="flex items-center">
                                <span className="text-xs text-muted-foreground mr-2">Share:</span>
                                <Input 
                                  type="number" 
                                  defaultValue="50"
                                  className="w-16 h-7 text-sm p-1 text-center bg-white/10 border-gray-700/50 text-white focus:ring-emerald-500 focus:border-emerald-500"
                                />
                                <span className="text-xs text-muted-foreground ml-1">%</span>
                              </div>
                            </div>
                            <Input 
                              placeholder="Full name" 
                              className="mb-2 h-8 text-sm bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                            />
                            <Input 
                              placeholder="PRO affiliation (e.g., ASCAP, BMI)" 
                              className="h-8 text-sm bg-white/10 border-gray-700/50 text-white placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                            />
                          </div>
                          
                          <Button 
                            variant="outline" 
                            className="w-full border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10"
                          >
                            + Add Contributor
                          </Button>
                        </div>
                        
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg shadow-emerald-500/20">
                            Generate Split Sheet
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                    <CardHeader>
                      <CardTitle className="text-xl text-emerald-300">Recommended Royalty Management Software</CardTitle>
                      <CardDescription>
                        Tools to help streamline your royalty compliance processes
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-colors">
                          <h3 className="font-medium mb-2">For Large Publishers & Labels</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>Vistex</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>Counterpoint Suite</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>Music Maestro</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>Synchtank</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-colors">
                          <h3 className="font-medium mb-2">For Independent Labels</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>Songspace</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>Curve Royalty Systems</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>Quicken Royalty Tracker</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>IRIS</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-colors">
                          <h3 className="font-medium mb-2">For Artists & Songwriters</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>Songtrust</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>TuneRegistry</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>Loudr</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                              <span>Stem</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-8 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                        <h3 className="text-emerald-300 font-medium mb-3">Key Features to Look for in Royalty Management Software</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 flex-shrink-0" />
                              <span className="text-sm">Automated royalty calculations</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 flex-shrink-0" />
                              <span className="text-sm">Support for multiple revenue streams</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 flex-shrink-0" />
                              <span className="text-sm">Detailed reporting capabilities</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 flex-shrink-0" />
                              <span className="text-sm">Split management and tracking</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 flex-shrink-0" />
                              <span className="text-sm">Integrated payment processing</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 flex-shrink-0" />
                              <span className="text-sm">Metadata management</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 flex-shrink-0" />
                              <span className="text-sm">Contract management</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 flex-shrink-0" />
                              <span className="text-sm">Data import/export capabilities</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button 
                        className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg shadow-emerald-500/20"
                      >
                        Request Software Consultation
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              {/* FAQ Tab */}
              <TabsContent value="faq" className="pt-8">
                <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-emerald-300">Frequently Asked Questions</CardTitle>
                    <CardDescription>
                      Common questions about royalty compliance in the music industry
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700 last:border-0">
                          <AccordionTrigger className="text-left hover:no-underline py-4 font-medium">
                            <div className="flex items-start">
                              <HelpCircle className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{item.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pl-7 text-muted-foreground">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                      
                      <AccordionItem value="item-4" className="border-b border-gray-700 last:border-0">
                        <AccordionTrigger className="text-left hover:no-underline py-4 font-medium">
                          <div className="flex items-start">
                            <HelpCircle className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>What are the common pitfalls in royalty calculations?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-7 text-muted-foreground">
                          Common pitfalls include using incorrect rate tiers, failing to account for territory-specific rates, 
                          misapplying contractual terms, overlooking minimum guarantees, and failing to distinguish between 
                          different types of use (e.g., promotional vs. commercial). Regular audits by specialized accounting 
                          firms can help identify and rectify these issues.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-5" className="border-b border-gray-700 last:border-0">
                        <AccordionTrigger className="text-left hover:no-underline py-4 font-medium">
                          <div className="flex items-start">
                            <HelpCircle className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>How does blockchain technology affect royalty compliance?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-7 text-muted-foreground">
                          Blockchain technology is creating new possibilities for transparent and automated royalty 
                          distribution. Smart contracts can enforce payment terms and splits automatically, while the 
                          immutable ledger ensures a permanent, tamper-proof record of rights ownership and usage. 
                          Several platforms like Mediachain, Blokur, and Open Music Initiative are developing blockchain 
                          solutions for music rights management.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <div className="mb-4 text-center max-w-xl">
                      <p className="text-muted-foreground text-sm">
                        Don't see your question answered? Our royalty compliance experts are ready to help.
                      </p>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg shadow-emerald-500/20"
                    >
                      Ask Our Experts
                    </Button>
                  </CardFooter>
                </Card>
                
                <div className="mt-8">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/10 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-500/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
                    
                    <CardContent className="p-8 text-center relative">
                      <h3 className="text-2xl font-bold text-emerald-300 mb-4">Need Personalized Royalty Compliance Support?</h3>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Our team of royalty compliance experts can help you implement, audit, and optimize your royalty management systems.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button 
                          variant="outline" 
                          className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10"
                          onClick={() => setActiveTab('overview')}
                        >
                          Return to Overview
                        </Button>
                        <Button 
                          className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg shadow-emerald-500/20"
                        >
                          Get Expert Consultation
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