import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users, LineChart, FileCheck, Download, ChevronRight, LucideIcon, Briefcase, Wallet, BarChart4 } from "lucide-react";

export default function LabelDashboard() {
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
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-[10%] w-8 h-8 border border-blue-500/30 rounded-full animate-float opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 left-[15%] w-12 h-12 border border-indigo-500/30 rounded-full animate-float opacity-30" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 right-[20%] w-10 h-10 border border-purple-500/30 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* User welcome + logout */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Label Dashboard
              </h1>
              <p className="text-gray-300 mb-4">
                Welcome back, {user?.name || "Label Manager"}!
              </p>
            </div>
            <Button 
              onClick={handleLogout} 
              variant="outline" 
              className="border-blue-500/20 text-blue-400 hover:bg-blue-500/10"
            >
              Sign Out
            </Button>
          </div>
          
          {/* Dashboard tabs */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 bg-gray-800/70 border border-blue-500/20 p-1 rounded-xl mb-6">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="artists" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
              >
                Artists
              </TabsTrigger>
              <TabsTrigger 
                value="compliance" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
              >
                Compliance
              </TabsTrigger>
              <TabsTrigger 
                value="financials" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg"
              >
                Financials
              </TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Quick stats */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Roster Stats */}
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-500/20 shadow-xl shadow-blue-500/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium flex items-center">
                        <Users className="h-5 w-5 mr-2 text-blue-400" />
                        Artist Roster
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-white mb-1">12</div>
                      <p className="text-xs text-muted-foreground">
                        3 new artists signed this quarter
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        variant="link" 
                        className="text-blue-400 p-0 h-auto font-normal text-sm flex items-center"
                      >
                        Manage roster
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Compliance Status */}
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-500/20 shadow-xl shadow-blue-500/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium flex items-center">
                        <FileCheck className="h-5 w-5 mr-2 text-green-400" />
                        Label Compliance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end gap-2 mb-1">
                        <div className="text-4xl font-bold text-white">92%</div>
                        <div className="text-sm text-green-400 font-medium mb-1">+12%</div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        1 legal requirement needs attention
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        variant="link" 
                        className="text-blue-400 p-0 h-auto font-normal text-sm flex items-center"
                      >
                        Review requirements
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Revenue Overview */}
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-500/20 shadow-xl shadow-blue-500/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium flex items-center">
                        <Wallet className="h-5 w-5 mr-2 text-indigo-400" />
                        Revenue Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end gap-2 mb-1">
                        <div className="text-4xl font-bold text-white">$182K</div>
                        <div className="text-sm text-green-400 font-medium mb-1">+8%</div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Q2 2023 (April - June)
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        variant="link" 
                        className="text-blue-400 p-0 h-auto font-normal text-sm flex items-center"
                      >
                        Financial details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Catalog Performance */}
                  <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-500/20 shadow-xl shadow-blue-500/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium flex items-center">
                        <BarChart4 className="h-5 w-5 mr-2 text-purple-400" />
                        Catalog Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end gap-2 mb-1">
                        <div className="text-4xl font-bold text-white">5.2M</div>
                        <div className="text-sm text-green-400 font-medium mb-1">+15%</div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Streams across all platforms (last 30 days)
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        variant="link" 
                        className="text-blue-400 p-0 h-auto font-normal text-sm flex items-center"
                      >
                        Analytics details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                
                {/* Recent Activity */}
                <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-500/20 shadow-xl shadow-blue-500/10">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
                    <CardDescription>
                      Latest updates from your label
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="p-3 rounded-lg bg-gray-800/50 border border-blue-500/10 flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="h-4 w-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">New artist signed</p>
                          <p className="text-xs text-muted-foreground">Mia Reynolds joined your roster · 2 days ago</p>
                        </div>
                      </li>
                      <li className="p-3 rounded-lg bg-gray-800/50 border border-blue-500/10 flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-indigo-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Wallet className="h-4 w-4 text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Royalty payment sent</p>
                          <p className="text-xs text-muted-foreground">Q1 artist payments processed · 3 days ago</p>
                        </div>
                      </li>
                      <li className="p-3 rounded-lg bg-gray-800/50 border border-blue-500/10 flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FileCheck className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">License renewed</p>
                          <p className="text-xs text-muted-foreground">Distribution license for European territories · 1 week ago</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="artists">
              <div className="p-8 text-center">
                <div className="inline-flex h-20 w-20 rounded-full bg-blue-600/20 items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Artist Management</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  This section will help you manage your artist roster, contracts, and catalog.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Add New Artist
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="compliance">
              <div className="p-8 text-center">
                <div className="inline-flex h-20 w-20 rounded-full bg-green-600/20 items-center justify-center mb-4">
                  <FileCheck className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Label Compliance</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  This section will help you manage legal requirements, contracts, and licensing.
                </p>
                <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                  View Compliance Dashboard
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="financials">
              <div className="p-8 text-center">
                <div className="inline-flex h-20 w-20 rounded-full bg-indigo-600/20 items-center justify-center mb-4">
                  <Wallet className="h-10 w-10 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Financial Management</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  This section will help you track revenue, expenses, and royalty payments.
                </p>
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  View Financial Dashboard
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}