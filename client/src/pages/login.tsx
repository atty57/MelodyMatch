import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedInput } from "@/components/ui/animated-input";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Music, Building2, UserCircle, Lock, Mail, CheckCircle } from "lucide-react";

// Form schemas
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  userType: z.enum(["artist", "label"]),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [accountType, setAccountType] = useState<"artist" | "label">("artist");
  const [, navigate] = useLocation();
  const { toast } = useToast();

  // Login form
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      userType: "artist",
    },
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (values: LoginFormValues) => {
      return apiRequest("POST", "/api/auth/login", values);
    },
    onSuccess: () => {
      toast({
        title: "Login successful",
        description: "Welcome back to MusicPliance.",
        variant: "default",
      });
      
      // Redirect based on user type
      if (accountType === "artist") {
        navigate("/artist-dashboard");
      } else {
        navigate("/label-dashboard");
      }
    },
    onError: (error: any) => {
      toast({
        title: "Login failed",
        description: error.message || "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Handle login form submission
  function onLoginSubmit(values: LoginFormValues) {
    values.userType = accountType;
    loginMutation.mutate(values);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-[10%] w-8 h-8 border border-purple-500/30 rounded-full animate-float opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 left-[15%] w-12 h-12 border border-blue-500/30 rounded-full animate-float opacity-30" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 right-[20%] w-10 h-10 border border-indigo-500/30 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
          
          <div className="absolute top-1/4 right-0 w-40 h-[800px] bg-gradient-to-b from-purple-500/5 to-blue-500/5 skew-x-12 blur-2xl"></div>
          <div className="absolute top-20 left-0 w-40 h-[600px] bg-gradient-to-b from-indigo-500/5 to-blue-500/5 -skew-x-12 blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10 max-w-7xl">
          <div className="max-w-lg mx-auto">
            {/* Card with glassmorphism effect */}
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 blur-xl transform scale-105 animate-pulse-slow"></div>
              
              {/* Login card */}
              <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-purple-500/20 shadow-xl shadow-purple-500/10 relative">
                <CardHeader className="space-y-1 text-center">
                  <CardTitle className="text-2xl font-bold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500">
                      Sign in to your account
                    </span>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Access your MusicPliance dashboard
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Tabs defaultValue="artist" value={accountType} onValueChange={(value) => setAccountType(value as "artist" | "label")} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-800/70 border border-purple-500/20 p-1 rounded-xl mb-6">
                      <TabsTrigger 
                        value="artist" 
                        className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg flex items-center gap-2"
                      >
                        <Music className="h-4 w-4" />
                        Artist
                      </TabsTrigger>
                      <TabsTrigger 
                        value="label" 
                        className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white rounded-lg flex items-center gap-2"
                      >
                        <Building2 className="h-4 w-4" />
                        Label
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="artist">
                      <div className="flex items-center justify-center mb-6">
                        <div className="h-24 w-24 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                          <UserCircle className="h-12 w-12 text-purple-400" />
                        </div>
                      </div>
                      
                      <Form {...loginForm}>
                        <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                          <FormField
                            control={loginForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300">Email</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <AnimatedInput 
                                      {...field} 
                                      type="email" 
                                      placeholder="your.email@example.com" 
                                      className="bg-gray-800/50 border-purple-500/20 focus:border-purple-500/50 pl-10"
                                      onFocusAnimation 
                                      errorState={!!loginForm.formState.errors.email}
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={loginForm.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300">Password</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <AnimatedInput 
                                      {...field} 
                                      type="password" 
                                      placeholder="••••••••" 
                                      className="bg-gray-800/50 border-purple-500/20 focus:border-purple-500/50 pl-10"
                                      onFocusAnimation
                                      errorState={!!loginForm.formState.errors.password}
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="pt-2">
                            <AnimatedButton
                              type="submit"
                              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/20"
                              isLoading={loginMutation.isPending}
                              loadingText="Signing in..."
                              success={loginMutation.isSuccess}
                              successText="Success!"
                            >
                              Sign in as Artist
                            </AnimatedButton>
                          </div>
                        </form>
                      </Form>
                    </TabsContent>
                    
                    <TabsContent value="label">
                      <div className="flex items-center justify-center mb-6">
                        <div className="h-24 w-24 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                          <Building2 className="h-12 w-12 text-blue-400" />
                        </div>
                      </div>
                      
                      <Form {...loginForm}>
                        <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                          <FormField
                            control={loginForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300">Email</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <AnimatedInput 
                                      {...field} 
                                      type="email" 
                                      placeholder="label@example.com" 
                                      className="bg-gray-800/50 border-blue-500/20 focus:border-blue-500/50 pl-10"
                                      onFocusAnimation 
                                      errorState={!!loginForm.formState.errors.email}
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={loginForm.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300">Password</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <AnimatedInput 
                                      {...field} 
                                      type="password" 
                                      placeholder="••••••••" 
                                      className="bg-gray-800/50 border-blue-500/20 focus:border-blue-500/50 pl-10"
                                      onFocusAnimation
                                      errorState={!!loginForm.formState.errors.password}
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="pt-2">
                            <AnimatedButton
                              type="submit"
                              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20"
                              isLoading={loginMutation.isPending}
                              loadingText="Signing in..."
                              success={loginMutation.isSuccess}
                              successText="Success!"
                            >
                              Sign in as Label
                            </AnimatedButton>
                          </div>
                        </form>
                      </Form>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <a href="/register" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
                        Sign up
                      </a>
                    </p>
                  </div>
                </CardContent>
                
                <CardFooter className="border-t border-gray-800 pt-6 flex justify-center">
                  <div className="p-3 bg-gray-800/50 rounded-lg border border-purple-500/10 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-muted-foreground">Secure, encrypted connection</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
            
            {/* Login benefits */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-900/70 backdrop-blur-sm border border-purple-500/20 rounded-lg flex flex-col items-center text-center hover:border-purple-500/40 transition-colors shadow">
                <div className="h-10 w-10 rounded-full bg-purple-600/20 flex items-center justify-center mb-3">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-sm font-medium mb-1">Track Compliance</h3>
                <p className="text-xs text-muted-foreground">Monitor licensing and copyright status</p>
              </div>
              
              <div className="p-4 bg-gray-900/70 backdrop-blur-sm border border-purple-500/20 rounded-lg flex flex-col items-center text-center hover:border-purple-500/40 transition-colors shadow">
                <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center mb-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-sm font-medium mb-1">Manage Releases</h3>
                <p className="text-xs text-muted-foreground">Access distribution and catalog tools</p>
              </div>
              
              <div className="p-4 bg-gray-900/70 backdrop-blur-sm border border-purple-500/20 rounded-lg flex flex-col items-center text-center hover:border-purple-500/40 transition-colors shadow">
                <div className="h-10 w-10 rounded-full bg-indigo-600/20 flex items-center justify-center mb-3">
                  <CheckCircle className="h-5 w-5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-medium mb-1">View Analytics</h3>
                <p className="text-xs text-muted-foreground">Access detailed reporting and insights</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}