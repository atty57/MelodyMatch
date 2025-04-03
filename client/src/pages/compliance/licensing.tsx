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
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  FileText, 
  Music, 
  Radio, 
  Film, 
  ShoppingBag, 
  Calendar, 
  CheckCircle, 
  AlertCircle, 
  HelpCircle, 
  File, 
  Download,
  Play,
  PieChart,
  Globe,
  Headphones
} from 'lucide-react';
import { Link } from 'wouter';
import { PageLoader } from '@/components/ui/loader';

export default function LicensingCompliance() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample data for license types
  const licenseTypes = [
    {
      name: 'Mechanical License',
      icon: <Music className="h-5 w-5" />,
      description: 'Permits reproduction of music in physical and digital formats',
      uses: 'CDs, vinyl, downloads, and streaming',
      key_terms: ['Royalty rate per unit', 'Accounting periods', 'Distribution territories'],
      complexity: 70
    },
    {
      name: 'Synchronization License',
      icon: <Film className="h-5 w-5" />,
      description: 'Allows music to be synced with visual media',
      uses: 'Movies, TV shows, commercials, video games',
      key_terms: ['One-time fee', 'Term length', 'Territory scope', 'Media type'],
      complexity: 85
    },
    {
      name: 'Public Performance License',
      icon: <Radio className="h-5 w-5" />,
      description: 'Permits public broadcasting or performance of music',
      uses: 'Radio, TV broadcasts, live venues, businesses',
      key_terms: ['Blanket vs. per-program', 'Venue size/type', 'Audience reach'],
      complexity: 75
    },
    {
      name: 'Print License',
      icon: <FileText className="h-5 w-5" />,
      description: 'Allows reproduction of sheet music and lyrics',
      uses: 'Sheet music, songbooks, online lyric sites',
      key_terms: ['Per-page fees', 'Minimum guarantees', 'Format restrictions'],
      complexity: 60
    },
    {
      name: 'Commercial License',
      icon: <ShoppingBag className="h-5 w-5" />,
      description: 'Permits use of music in commercial products',
      uses: 'Toys, greeting cards, hold music',
      key_terms: ['Term length', 'Unit-based royalties', 'Product-specific restrictions'],
      complexity: 80
    }
  ];
  
  // Sample data for compliance checklist
  const complianceChecklist = [
    {
      title: 'Documentation and Record-Keeping',
      items: [
        { id: 1, text: 'Maintain a master catalog of all owned and administered rights', completed: false, isMandatory: true },
        { id: 2, text: 'Document all licensing agreements with clear terms and payment schedules', completed: false, isMandatory: true },
        { id: 3, text: 'Track license expiration dates and renewal options', completed: false, isMandatory: true },
        { id: 4, text: 'Maintain accurate contact information for all licensing partners', completed: false, isMandatory: false }
      ]
    },
    {
      title: 'License Compliance',
      items: [
        { id: 5, text: 'Verify that uses match the scope of granted licenses', completed: false, isMandatory: true },
        { id: 6, text: 'Monitor territorial restrictions for international usage', completed: false, isMandatory: true },
        { id: 7, text: 'Confirm proper attribution and credits where required', completed: false, isMandatory: false },
        { id: 8, text: 'Track and enforce exclusivity clauses in licensing agreements', completed: false, isMandatory: true }
      ]
    },
    {
      title: 'Financial Compliance',
      items: [
        { id: 9, text: 'Regularly audit license fee payments against contract terms', completed: false, isMandatory: true },
        { id: 10, text: 'Verify correct application of minimum guarantees and advances', completed: false, isMandatory: true },
        { id: 11, text: 'Track and collect all due royalties from licensees', completed: false, isMandatory: true },
        { id: 12, text: 'Ensure accurate distribution of licensing revenue to rights holders', completed: false, isMandatory: true }
      ]
    }
  ];
  
  // Toggle checklist item completion
  const toggleItem = (id: number) => {
    setComplianceChecklist(sections => 
      sections.map(section => ({
        ...section,
        items: section.items.map(item =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      }))
    );
  };
  
  // State for checklist
  const [complianceItems, setComplianceChecklist] = useState(complianceChecklist);
  
  // Calculate completion percentages
  const totalItems = complianceItems.reduce((acc, section) => acc + section.items.length, 0);
  const completedItems = complianceItems.reduce((acc, section) => acc + section.items.filter(item => item.completed).length, 0);
  const completionPercentage = Math.round((completedItems / totalItems) * 100);
  
  // Sample data for licensing templates
  const licenseTemplates = [
    { name: 'Mechanical License Agreement', type: 'Word Document', size: '24 KB' },
    { name: 'Sync License Template', type: 'PDF Document', size: '36 KB' },
    { name: 'Master Use License', type: 'Word Document', size: '22 KB' },
    { name: 'Performance License Agreement', type: 'PDF Document', size: '29 KB' },
    { name: 'Digital Distribution Agreement', type: 'Word Document', size: '31 KB' },
  ];
  
  // Sample data for common licensing pitfalls
  const commonPitfalls = [
    {
      title: 'Overlooking Territorial Limitations',
      description: 'Failing to clearly define or enforce the geographic scope of licenses can lead to unauthorized international use.',
      solution: 'Explicitly define territories in all agreements and implement monitoring systems for detecting usage outside licensed areas.'
    },
    {
      title: 'Inadequate Term Definitions',
      description: 'Vague or imprecise descriptions of how, where, and for how long music can be used creates compliance risks.',
      solution: 'Use specific, measurable parameters and clear language to define all usage rights and limitations.'
    },
    {
      title: 'Missing Sub-licensing Controls',
      description: 'Without proper controls, licensees may grant permissions to third parties outside the scope of the original agreement.',
      solution: 'Include explicit sub-licensing restrictions and require approval for any rights transfers to third parties.'
    },
    {
      title: 'Failing to Secure All Necessary Rights',
      description: 'Different uses require different rights; securing one type of license does not necessarily cover all intended uses.',
      solution: 'Conduct comprehensive rights assessments for each project and secure all relevant licenses (mechanical, sync, performance, etc.).'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          <div className="absolute top-1/4 right-0 w-40 h-[800px] bg-gradient-to-b from-blue-500/5 to-indigo-500/5 skew-x-12 blur-2xl"></div>
          <div className="absolute top-20 left-0 w-40 h-[600px] bg-gradient-to-b from-violet-500/5 to-blue-500/5 -skew-x-12 blur-2xl"></div>
          
          {/* Music notes abstraction */}
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-blue-500/20 rounded-full opacity-30"></div>
          <div className="absolute bottom-40 right-40 w-20 h-20 border border-indigo-500/20 rounded-full opacity-20"></div>
          <div className="absolute top-60 left-40 w-30 h-30 border border-violet-500/20 rounded-full opacity-20"></div>
        </div>
        
        {/* Back Navigation */}
        <div className="container mx-auto px-4 sm:px-6 py-6 relative z-10 max-w-7xl">
          <Link href="/compliance">
            <Button variant="ghost" className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/10 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Compliance
            </Button>
          </Link>
        </div>
        
        {/* Hero Section */}
        <section className="relative py-8 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 py-10 space-y-6 relative z-10 max-w-7xl">
            <div className="text-center space-y-4 relative mx-auto max-w-4xl mb-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-violet-600/20 blur-xl transform scale-110 animate-pulse-slow"></div>
              
              <div className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-blue-500/20 rounded-2xl px-6 py-10 backdrop-blur-sm shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500">
                    Licensing Compliance
                  </span>
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                  Navigate the complex world of music licensing with our comprehensive guidelines, templates, 
                  and best practices to stay compliant while maximizing revenue opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 bg-gray-800/70 border border-blue-500/20 p-1 rounded-xl">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="checklist" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Checklist
                </TabsTrigger>
                <TabsTrigger 
                  value="templates" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Templates
                </TabsTrigger>
                <TabsTrigger 
                  value="guidance" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
                >
                  Guidance
                </TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/20 shadow-lg shadow-blue-500/10 lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-300">Understanding Music Licensing</CardTitle>
                      <CardDescription>
                        Key concepts and types of music licenses in the industry
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3">What is Music Licensing?</h3>
                        <p className="text-muted-foreground">
                          Music licensing is the authorized use of copyrighted music by individuals or businesses other than the 
                          copyright holders. It provides legal permission to use music in various contexts while ensuring 
                          rights holders are properly compensated. Proper licensing protects all parties from legal disputes and 
                          establishes clear terms for how, where, when, and for how long music can be used.
                        </p>
                        <p className="text-muted-foreground mt-3">
                          For music industry professionals, maintaining licensing compliance means understanding the different 
                          types of licenses, properly documenting agreements, monitoring usage, and ensuring accurate collection 
                          and distribution of licensing revenue.
                        </p>
                      </div>
                      
                      <Separator className="bg-gray-800" />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Types of Music Licenses</h3>
                        <div className="space-y-4">
                          {licenseTypes.map((license, index) => (
                            <div key={index} className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center">
                                  <div className="bg-blue-600/30 rounded-lg p-2 mr-3">
                                    {license.icon}
                                  </div>
                                  <h4 className="font-medium text-lg">{license.name}</h4>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs text-muted-foreground">Complexity</span>
                                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                                      style={{ width: `${license.complexity}%` }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-2">{license.description}</p>
                              <div className="mt-3 space-y-2">
                                <div className="flex items-start">
                                  <span className="text-sm font-medium mr-2 text-blue-300">Common Uses:</span>
                                  <span className="text-sm text-muted-foreground">{license.uses}</span>
                                </div>
                                <div className="flex items-start">
                                  <span className="text-sm font-medium mr-2 text-blue-300">Key Terms:</span>
                                  <div className="flex flex-wrap gap-1">
                                    {license.key_terms.map((term, i) => (
                                      <Badge key={i} variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-300 text-xs">
                                        {term}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-6">
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/20 shadow-lg shadow-blue-500/10">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg text-blue-300">Licensing Compliance Status</CardTitle>
                          {completionPercentage === 100 ? (
                            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Compliant</Badge>
                          ) : (
                            <Badge variant="outline" className="bg-amber-500/20 text-amber-300 border-amber-500/30">Action Needed</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Overall Compliance</span>
                              <span className="text-sm font-medium">{completionPercentage}%</span>
                            </div>
                            <Progress value={completionPercentage} className="h-2 bg-gray-700">
                              <div 
                                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                                style={{ width: `${completionPercentage}%` }}
                              />
                            </Progress>
                          </div>
                          
                          <div className="pt-2 grid grid-cols-2 gap-3">
                            <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                              <div className="text-2xl font-bold">{completedItems}</div>
                              <div className="text-xs text-muted-foreground">Requirements Met</div>
                            </div>
                            <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                              <div className="text-2xl font-bold">{totalItems - completedItems}</div>
                              <div className="text-xs text-muted-foreground">Requirements Pending</div>
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20"
                            onClick={() => setActiveTab('checklist')}
                          >
                            View Compliance Checklist
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/20 shadow-lg shadow-blue-500/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-blue-300">Key License Components</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/20 p-2 rounded-lg mr-4 mt-1">
                              <Calendar className="h-4 w-4 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Term & Duration</h3>
                              <p className="text-xs text-muted-foreground">Clear start and end dates with renewal options</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-blue-500/20 p-2 rounded-lg mr-4 mt-1">
                              <Globe className="h-4 w-4 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Territory</h3>
                              <p className="text-xs text-muted-foreground">Geographic scope where usage is permitted</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-blue-500/20 p-2 rounded-lg mr-4 mt-1">
                              <Headphones className="h-4 w-4 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Media & Usage Rights</h3>
                              <p className="text-xs text-muted-foreground">Specific formats and contexts allowed</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-blue-500/20 p-2 rounded-lg mr-4 mt-1">
                              <PieChart className="h-4 w-4 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Compensation</h3>
                              <p className="text-xs text-muted-foreground">Fee structure, royalties, and payment terms</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/20 shadow-lg shadow-blue-500/10">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-300">Common Licensing Pitfalls</CardTitle>
                      <CardDescription>Key issues to avoid and how to address them</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {commonPitfalls.map((pitfall, index) => (
                          <div key={index} className="space-y-2">
                            <h3 className="font-medium flex items-center">
                              <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                              {pitfall.title}
                            </h3>
                            <p className="text-sm text-muted-foreground pl-6">
                              {pitfall.description}
                            </p>
                            <div className="bg-gray-800/50 rounded-lg p-3 pl-6">
                              <h4 className="text-sm font-medium text-blue-300 mb-1">Solution:</h4>
                              <p className="text-xs text-muted-foreground">
                                {pitfall.solution}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button 
                        variant="outline" 
                        className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                        onClick={() => setActiveTab('templates')}
                      >
                        View License Templates
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Checklist Tab */}
              <TabsContent value="checklist" className="pt-8">
                <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/20 shadow-lg shadow-blue-500/10 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
                  
                  <CardHeader className="relative">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-blue-300">Licensing Compliance Checklist</CardTitle>
                        <CardDescription>
                          Track your progress on essential licensing compliance requirements
                        </CardDescription>
                      </div>
                      
                      <div className="mt-4 md:mt-0 flex items-center space-x-4">
                        <div className="flex flex-col items-end">
                          <div className="text-3xl font-bold">{completionPercentage}%</div>
                          <div className="text-xs text-muted-foreground">
                            {completedItems}/{totalItems} Complete
                          </div>
                        </div>
                        <div className="h-16 w-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center relative">
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
                                <stop offset="0%" stopColor="#60A5FA" />
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
                      {complianceItems.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="p-4 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-blue-500/10">
                          <h3 className="text-lg font-medium text-blue-300 mb-4">{section.title}</h3>
                          
                          <div className="space-y-3">
                            {section.items.map((item) => (
                              <div 
                                key={item.id} 
                                className={`p-3 rounded-lg transition-all ${
                                  item.completed 
                                    ? 'bg-blue-500/10 border border-blue-500/30' 
                                    : 'bg-gray-800/60 border border-gray-700/50 hover:border-gray-600'
                                }`}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="flex-shrink-0 pt-0.5">
                                    <input 
                                      type="checkbox" 
                                      checked={item.completed} 
                                      onChange={() => toggleItem(item.id)}
                                      className="h-5 w-5 rounded border-gray-500 text-blue-600 focus:ring-blue-500"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <h4 className={`font-medium ${item.completed ? 'text-blue-300 line-through opacity-70' : ''}`}>
                                        {item.text}
                                      </h4>
                                      {item.isMandatory && (
                                        <Badge variant={item.completed ? "outline" : "secondary"} className="ml-2">
                                          Required
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                      <h3 className="text-lg font-medium text-blue-300 mb-3">Why Licensing Compliance Matters</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                              <CheckCircle className="h-4 w-4 text-blue-400" />
                            </div>
                            <span className="font-medium">Legal Protection</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-11">
                            Shields against copyright infringement claims and potential lawsuits
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                              <CheckCircle className="h-4 w-4 text-blue-400" />
                            </div>
                            <span className="font-medium">Revenue Protection</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-11">
                            Ensures all entitled license fees and royalties are accurately collected
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                              <CheckCircle className="h-4 w-4 text-blue-400" />
                            </div>
                            <span className="font-medium">Industry Reputation</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-11">
                            Builds trust with partners, clients, and rights holders
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-center">
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20"
                    >
                      Export Compliance Report
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Templates Tab */}
              <TabsContent value="templates" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/20 shadow-lg shadow-blue-500/10 lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-300">License Agreement Templates</CardTitle>
                      <CardDescription>
                        Customizable templates for different licensing scenarios
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {licenseTemplates.map((template, index) => (
                          <div 
                            key={index} 
                            className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors flex items-center justify-between"
                          >
                            <div className="flex items-center">
                              <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                                <File className="h-5 w-5 text-blue-400" />
                              </div>
                              <div>
                                <h3 className="font-medium">{template.name}</h3>
                                <p className="text-xs text-muted-foreground">{template.type} • {template.size}</p>
                              </div>
                            </div>
                            
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                        <h3 className="text-lg font-medium text-blue-300 mb-3">Template Customization Guide</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 mt-0.5 mr-3">1</div>
                            <div>
                              <h4 className="font-medium">Identify Required License Type</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                Determine which license template best suits your specific use case based on how the 
                                music will be used (e.g., sync, mechanical, performance).
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 mt-0.5 mr-3">2</div>
                            <div>
                              <h4 className="font-medium">Define Key Parameters</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                Fill in all bracketed sections with specific details including term length, territory, 
                                compensation terms, and usage limitations.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 mt-0.5 mr-3">3</div>
                            <div>
                              <h4 className="font-medium">Review and Revise</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                Carefully review all terms to ensure they accurately reflect the agreement and remove 
                                any clauses that don't apply to your situation.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 mt-0.5 mr-3">4</div>
                            <div>
                              <h4 className="font-medium">Seek Legal Review</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                While our templates are designed by legal experts, we recommend having your final agreement 
                                reviewed by an attorney specialized in music licensing.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-6">
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/20 shadow-lg shadow-blue-500/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-blue-300">Template Wizard</CardTitle>
                        <CardDescription>
                          Generate a customized license agreement
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">License Type</label>
                            <select className="w-full bg-white/10 border-gray-700/50 text-white rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                              <option>Mechanical License</option>
                              <option>Synchronization License</option>
                              <option>Performance License</option>
                              <option>Print License</option>
                              <option>Digital Distribution</option>
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Territory</label>
                            <select className="w-full bg-white/10 border-gray-700/50 text-white rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                              <option>Worldwide</option>
                              <option>United States Only</option>
                              <option>North America</option>
                              <option>Europe</option>
                              <option>Custom Territory</option>
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Term Length</label>
                            <select className="w-full bg-white/10 border-gray-700/50 text-white rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                              <option>1 Year</option>
                              <option>2 Years</option>
                              <option>3 Years</option>
                              <option>5 Years</option>
                              <option>Perpetual</option>
                              <option>Custom Term</option>
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Payment Structure</label>
                            <select className="w-full bg-white/10 border-gray-700/50 text-white rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                              <option>One-time Fee</option>
                              <option>Royalty-based</option>
                              <option>Advance + Royalties</option>
                              <option>Revenue Share</option>
                              <option>Custom Structure</option>
                            </select>
                          </div>
                          
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20">
                            Generate Custom Template
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/20 shadow-lg shadow-blue-500/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-blue-300">Need Expert Assistance?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Our licensing experts can help draft, review, or negotiate licensing agreements tailored to your specific needs.
                        </p>
                        
                        <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                          <h3 className="font-medium text-blue-300 mb-2">Expert Services Include:</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                              <span className="text-muted-foreground">Custom license drafting</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                              <span className="text-muted-foreground">Template contract review</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                              <span className="text-muted-foreground">Negotiation support</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                              <span className="text-muted-foreground">Rights clearance assistance</span>
                            </li>
                          </ul>
                        </div>
                        
                        <Button variant="outline" className="w-full mt-4 border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                          Contact Licensing Expert
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              {/* Guidance Tab */}
              <TabsContent value="guidance" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/20 shadow-lg shadow-blue-500/10 lg:col-span-3">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-300">Licensing Strategy Guidance</CardTitle>
                      <CardDescription>
                        Best practices for maximizing value while maintaining compliance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-colors">
                            <div className="bg-blue-600/30 h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                              <FileText className="h-6 w-6 text-blue-300" />
                            </div>
                            <h3 className="text-lg font-medium text-blue-300 mb-2">Documentation Strategy</h3>
                            <p className="text-muted-foreground">
                              Implement a centralized system to track all licenses, including key terms, expiration dates, 
                              and renewal options. Use digital tools to maintain an accurate audit trail and document chain of title.
                            </p>
                            
                            <div className="mt-4 space-y-2">
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                                <span className="text-sm">Use standardized templates</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                                <span className="text-sm">Maintain digital record system</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                                <span className="text-sm">Implement automated alerts</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-colors">
                            <div className="bg-blue-600/30 h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                              <Globe className="h-6 w-6 text-blue-300" />
                            </div>
                            <h3 className="text-lg font-medium text-blue-300 mb-2">Territorial Considerations</h3>
                            <p className="text-muted-foreground">
                              Navigate the complexities of international licensing with careful consideration of regional laws, 
                              regulations, and collection societies. Develop clear strategies for global rights management.
                            </p>
                            
                            <div className="mt-4 space-y-2">
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                                <span className="text-sm">Research local regulations</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                                <span className="text-sm">Partner with local PROs</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                                <span className="text-sm">Monitor international usage</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-colors">
                            <div className="bg-blue-600/30 h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                              <Play className="h-6 w-6 text-blue-300" />
                            </div>
                            <h3 className="text-lg font-medium text-blue-300 mb-2">Usage Monitoring</h3>
                            <p className="text-muted-foreground">
                              Implement systems to track and verify how your music is being used across different platforms 
                              and media. Regular monitoring ensures compliance with license terms and identifies unauthorized uses.
                            </p>
                            
                            <div className="mt-4 space-y-2">
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                                <span className="text-sm">Use digital fingerprinting</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                                <span className="text-sm">Conduct regular audits</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                                <span className="text-sm">Subscribe to monitoring services</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Separator className="bg-gray-800" />
                        
                        <div>
                          <h3 className="text-xl font-medium text-blue-300 mb-4">License Negotiation Best Practices</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 mt-0.5 mr-3">1</div>
                                <div>
                                  <h4 className="font-medium">Know Your Value Proposition</h4>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    Before entering negotiations, clearly understand the value your music brings to the licensee's project. 
                                    Consider factors like your catalog's commercial track record, uniqueness, and the specific usage context.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 mt-0.5 mr-3">2</div>
                                <div>
                                  <h4 className="font-medium">Research Comparable Deals</h4>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    Gather information on licensing fees and terms for similar uses in the industry. This benchmark 
                                    data provides a solid foundation for establishing fair terms.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 mt-0.5 mr-3">3</div>
                                <div>
                                  <h4 className="font-medium">Define Clear Limitations</h4>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    Be explicit about usage limitations including media types, platforms, territories, and duration. 
                                    Precise boundaries prevent scope creep and preserve future licensing opportunities.
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 mt-0.5 mr-3">4</div>
                                <div>
                                  <h4 className="font-medium">Consider Tiered Compensation Models</h4>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    Structures that combine upfront fees with performance-based royalties can align interests and 
                                    maximize revenue potential. Consider alternative compensation models like revenue sharing.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 mt-0.5 mr-3">5</div>
                                <div>
                                  <h4 className="font-medium">Include Audit Rights</h4>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    Reserve the right to verify usage reports and financial statements. Specific audit provisions 
                                    with reasonable notice periods and cost allocations protect your interests.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 mt-0.5 mr-3">6</div>
                                <div>
                                  <h4 className="font-medium">Plan for Contingencies</h4>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    Include provisions for breach remedies, termination conditions, and dispute resolution processes. 
                                    Clear exit paths protect all parties if the relationship doesn't work as expected.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Separator className="bg-gray-800" />
                        
                        <div>
                          <h3 className="text-xl font-medium text-blue-300 mb-4">Digital Licensing Trends & Innovations</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-colors">
                              <h4 className="font-medium text-blue-300 mb-3">Blockchain & Smart Contracts</h4>
                              <p className="text-sm text-muted-foreground">
                                Blockchain technology is transforming music licensing through automated rights management and 
                                payment distribution via smart contracts. These self-executing agreements enforce license terms 
                                and automatically distribute payments when specified conditions are met.
                              </p>
                              <p className="text-sm text-muted-foreground mt-2">
                                Benefits include increased transparency, reduced payment delays, and immutable documentation 
                                of rights ownership and licensing transactions.
                              </p>
                            </div>
                            
                            <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-colors">
                              <h4 className="font-medium text-blue-300 mb-3">Metadata Standards & APIs</h4>
                              <p className="text-sm text-muted-foreground">
                                The industry is moving toward standardized metadata formats and open APIs to streamline licensing 
                                processes and improve the accuracy of rights information.
                              </p>
                              <p className="text-sm text-muted-foreground mt-2">
                                Initiatives like DDEX (Digital Data Exchange) and the Open Music Initiative are creating frameworks 
                                for more efficient data exchange between music services, rights holders, and royalty collection entities.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20"
                      >
                        Request Expert Consultation
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                
                <div className="mt-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-0 mb-4">
                      <div className="backdrop-blur-sm bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/20 shadow-lg shadow-blue-500/10 rounded-lg overflow-hidden">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center">
                            <HelpCircle className="h-5 w-5 mr-2 text-blue-400" />
                            <h3 className="text-lg font-medium">Licensing Q&A: Expert Answers</h3>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
                              <h4 className="font-medium text-blue-300 mb-1">How do I approach licensing music for multiple territories?</h4>
                              <p className="text-sm text-muted-foreground">
                                When licensing for multiple territories, consider working with an international rights administrator 
                                who has established relationships with collection societies worldwide. Alternatively, you may need 
                                to secure separate agreements with regional PROs and mechanical rights agencies. Be aware that each 
                                territory may have different rate structures, reporting requirements, and copyright term durations.
                              </p>
                            </div>
                            
                            <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
                              <h4 className="font-medium text-blue-300 mb-1">What's the difference between exclusive and non-exclusive licenses?</h4>
                              <p className="text-sm text-muted-foreground">
                                An exclusive license grants rights to a single licensee, preventing the licensor from issuing similar 
                                rights to others during the term. Non-exclusive licenses allow multiple licensees to use the same work 
                                simultaneously. Exclusive licenses typically command higher fees but restrict your ability to generate 
                                additional revenue from the same rights. Consider the strategic value of exclusivity versus broader 
                                distribution when negotiating terms.
                              </p>
                            </div>
                            
                            <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
                              <h4 className="font-medium text-blue-300 mb-1">How should I handle derivative works in licensing agreements?</h4>
                              <p className="text-sm text-muted-foreground">
                                Clearly define whether the licensee has the right to create derivative works (remixes, edits, etc.) 
                                and specify ownership of those derivatives. Consider including approval rights for significant alterations 
                                and ensure the agreement addresses how royalties from derivative works will be shared. Some licensors maintain 
                                ownership of all derivatives while granting usage rights; others may allow licensees to own derivatives 
                                while retaining rights to the original work.
                              </p>
                            </div>
                          </div>
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  </Accordion>
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