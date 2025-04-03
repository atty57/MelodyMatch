import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, BookOpen, Lightbulb, ChevronRight, FileCheck, Download, LineChart, BarChart4 } from "lucide-react";

export default function ArtistDashboard() {
  const { user, logoutMutation } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden pt-24">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-[10%] w-8 h-8 border border-purple-500/30 rounded-full animate-float opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 left-[15%] w-12 h-12 border border-blue-500/30 rounded-full animate-float opacity-30" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 right-[20%] w-10 h-10 border border-indigo-500/30 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* User welcome + logout */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500">
                Artist Dashboard
              </h1>
              <p className="text-gray-300 mb-4">
                Welcome back, {user?.name || "Artist"}!
              </p>
            </div>
            <Button 
              onClick={handleLogout} 
              variant="outline" 
              className="border-purple-500/20 text-purple-400 hover:bg-purple-500/10"
            >
              Sign Out
            </Button>
          </div>
          
          {/* Dashboard tabs */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 bg-gray-800/70 border border-purple-500/20 p-1 rounded-xl mb-6">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="releases" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
              >
                Releases
              </TabsTrigger>
              <TabsTrigger 
                value="compliance" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
              >
                Compliance
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
              >
                Analytics
              </TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Quick stats */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Active Releases */}
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-purple-500/20 shadow-xl shadow-purple-500/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium flex items-center">
                        <Music className="h-5 w-5 mr-2 text-purple-400" />
                        Active Releases
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-white mb-1">8</div>
                      <p className="text-xs text-muted-foreground">
                        2 releases pending distribution
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        variant="link" 
                        className="text-purple-400 p-0 h-auto font-normal text-sm flex items-center"
                      >
                        View all releases
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Compliance Status */}
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-purple-500/20 shadow-xl shadow-purple-500/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium flex items-center">
                        <FileCheck className="h-5 w-5 mr-2 text-green-400" />
                        Compliance Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end gap-2 mb-1">
                        <div className="text-4xl font-bold text-white">75%</div>
                        <div className="text-sm text-green-400 font-medium mb-1">+5%</div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        3 checklist items need attention
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        variant="link" 
                        className="text-purple-400 p-0 h-auto font-normal text-sm flex items-center"
                      >
                        Complete checklist
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Recent Activity */}
                  <Card className="sm:col-span-2 backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-purple-500/20 shadow-xl shadow-purple-500/10">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 pb-3 border-b border-gray-800">
                          <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Music className="h-4 w-4 text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">New release submitted</p>
                            <p className="text-xs text-muted-foreground">Album: "Midnight Sessions" · 2 days ago</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 pb-3 border-b border-gray-800">
                          <div className="h-8 w-8 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FileCheck className="h-4 w-4 text-green-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Copyright registration completed</p>
                            <p className="text-xs text-muted-foreground">Track: "Echoes of Tomorrow" · 3 days ago</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-8 w-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <BarChart4 className="h-4 w-4 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Streaming milestone reached</p>
                            <p className="text-xs text-muted-foreground">100,000 streams for "Midnight Sessions" · 1 week ago</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Resources and Tips */}
                <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-purple-500/20 shadow-xl shadow-purple-500/10">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">Artist Resources</CardTitle>
                    <CardDescription>
                      Tools and guides to help your career
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="p-3 rounded-lg bg-gray-800/50 border border-purple-500/10 hover:border-purple-500/30 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                            <BookOpen className="h-4 w-4 text-purple-400" />
                          </div>
                          <p className="text-sm font-medium">Royalty Guide</p>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">Learn how to maximize your royalty collection across platforms</p>
                        <Button 
                          variant="link" 
                          className="text-purple-400 p-0 h-auto font-normal text-xs flex items-center"
                        >
                          Read guide
                          <Download className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      </li>
                      <li className="p-3 rounded-lg bg-gray-800/50 border border-purple-500/10 hover:border-purple-500/30 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-8 w-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                            <Lightbulb className="h-4 w-4 text-blue-400" />
                          </div>
                          <p className="text-sm font-medium">Release Strategy</p>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">Tips on planning your release calendar for maximum impact</p>
                        <Button 
                          variant="link" 
                          className="text-purple-400 p-0 h-auto font-normal text-xs flex items-center"
                        >
                          Read article
                          <ChevronRight className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="releases">
              <div className="p-8 text-center">
                <div className="inline-flex h-20 w-20 rounded-full bg-purple-600/20 items-center justify-center mb-4">
                  <Music className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Release Management</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  This section will display your releases and allow you to manage distribution, metadata, and assets.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Create New Release
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="compliance">
              <div className="p-8 text-center">
                <div className="inline-flex h-20 w-20 rounded-full bg-green-600/20 items-center justify-center mb-4">
                  <FileCheck className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compliance Checklists</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  This section will help you manage your copyright, licensing, and distribution requirements.
                </p>
                <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                  View Compliance Status
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics">
              <div className="p-8 text-center">
                <div className="inline-flex h-20 w-20 rounded-full bg-blue-600/20 items-center justify-center mb-4">
                  <LineChart className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  This section will display streaming, revenue, and audience analytics for your music.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  View Analytics Dashboard
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}