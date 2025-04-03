import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";

import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimatedInput } from "@/components/ui/animated-input";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Music, Building2, UserCircle, Lock, Mail, CheckCircle, User, InfoIcon } from "lucide-react";

// Form schemas
const registerSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters" })
    .regex(/^[a-z0-9_-]+$/i, { message: "Username can only contain letters, numbers, underscores, and dashes" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { 
    message: "Password must be at least 8 characters with a mix of letters, numbers, and symbols" 
  })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/, {
    message: "Password must include at least one uppercase letter, one lowercase letter, and one number"
  }),
  confirmPassword: z.string(),
  userType: z.enum(["artist", "label"]),
  genre: z.string().optional(),
  country: z.string().min(2, { message: "Please select your country" }),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

// Country options
const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "br", label: "Brazil" },
  { value: "se", label: "Sweden" },
  { value: "kr", label: "South Korea" }
];

// Genre options
const genres = [
  { value: "pop", label: "Pop" },
  { value: "rock", label: "Rock" },
  { value: "hiphop", label: "Hip Hop" },
  { value: "electronic", label: "Electronic" },
  { value: "jazz", label: "Jazz" },
  { value: "classical", label: "Classical" },
  { value: "rb", label: "R&B" },
  { value: "country", label: "Country" },
  { value: "folk", label: "Folk" },
  { value: "indie", label: "Indie" },
  { value: "metal", label: "Metal" },
  { value: "blues", label: "Blues" }
];

export default function Register() {
  const [accountType, setAccountType] = useState<"artist" | "label">("artist");
  const [, navigate] = useLocation();
  const { toast } = useToast();

  // Registration form
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "artist",
      genre: "",
      country: "",
      termsAccepted: false
    },
  });

  // Use auth hook
  const { registerMutation } = useAuth();
  
  // Handle successful registration
  useEffect(() => {
    if (registerMutation.isSuccess) {
      // Redirect to login page after successful registration
      navigate("/login");
    }
  }, [registerMutation.isSuccess, navigate]);

  // Handle form submission
  function onSubmit(values: RegisterFormValues) {
    values.userType = accountType;
    registerMutation.mutate(values);
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
          <div className="max-w-xl mx-auto">
            {/* Card with glassmorphism effect */}
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 blur-xl transform scale-105 animate-pulse-slow"></div>
              
              {/* Registration card */}
              <Card className="backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-purple-500/20 shadow-xl shadow-purple-500/10 relative">
                <CardHeader className="space-y-1 text-center">
                  <CardTitle className="text-2xl font-bold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500">
                      Create your account
                    </span>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Join MusicPliance to access industry tools and resources
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
                    
                    <Form {...registerForm}>
                      <form onSubmit={registerForm.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={registerForm.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Username</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <UserCircle className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                  <AnimatedInput 
                                    {...field} 
                                    placeholder="Choose a unique username"
                                    className={`bg-gray-800/50 pl-10 ${accountType === "artist" ? "border-purple-500/20 focus:border-purple-500/50" : "border-blue-500/20 focus:border-blue-500/50"}`}
                                    onFocusAnimation 
                                    errorState={!!registerForm.formState.errors.username}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 gap-4">
                          <FormField
                            control={registerForm.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel className="text-gray-300">{accountType === "artist" ? "Artist Name" : "Label Name"}</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <AnimatedInput 
                                      {...field} 
                                      placeholder={accountType === "artist" ? "Your artist name" : "Your label name"}
                                      className={`bg-gray-800/50 pl-10 ${accountType === "artist" ? "border-purple-500/20 focus:border-purple-500/50" : "border-blue-500/20 focus:border-blue-500/50"}`}
                                      onFocusAnimation 
                                      errorState={!!registerForm.formState.errors.name}
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={registerForm.control}
                            name="country"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel className="text-gray-300">Country</FormLabel>
                                <Select 
                                  onValueChange={field.onChange} 
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className={`bg-gray-800/50 ${accountType === "artist" ? "border-purple-500/20 focus:border-purple-500/50" : "border-blue-500/20 focus:border-blue-500/50"}`}>
                                      <SelectValue placeholder="Select country" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-gray-800 border-gray-700">
                                    {countries.map((country) => (
                                      <SelectItem key={country.value} value={country.value} className="text-gray-200 focus:bg-gray-700 focus:text-white">
                                        {country.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {accountType === "artist" && (
                          <FormField
                            control={registerForm.control}
                            name="genre"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300">Primary Genre</FormLabel>
                                <Select 
                                  onValueChange={field.onChange} 
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="bg-gray-800/50 border-purple-500/20 focus:border-purple-500/50">
                                      <SelectValue placeholder="Select your primary genre" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-gray-800 border-gray-700">
                                    {genres.map((genre) => (
                                      <SelectItem key={genre.value} value={genre.value} className="text-gray-200 focus:bg-gray-700 focus:text-white">
                                        {genre.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}
                        
                        <FormField
                          control={registerForm.control}
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
                                    className={`bg-gray-800/50 pl-10 ${accountType === "artist" ? "border-purple-500/20 focus:border-purple-500/50" : "border-blue-500/20 focus:border-blue-500/50"}`}
                                    onFocusAnimation 
                                    errorState={!!registerForm.formState.errors.email}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 gap-4">
                          <FormField
                            control={registerForm.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel className="text-gray-300">Password</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <AnimatedInput 
                                      {...field} 
                                      type="password" 
                                      placeholder="••••••••" 
                                      className={`bg-gray-800/50 pl-10 ${accountType === "artist" ? "border-purple-500/20 focus:border-purple-500/50" : "border-blue-500/20 focus:border-blue-500/50"}`}
                                      onFocusAnimation
                                      errorState={!!registerForm.formState.errors.password}
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={registerForm.control}
                            name="confirmPassword"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel className="text-gray-300">Confirm Password</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <AnimatedInput 
                                      {...field} 
                                      type="password" 
                                      placeholder="••••••••" 
                                      className={`bg-gray-800/50 pl-10 ${accountType === "artist" ? "border-purple-500/20 focus:border-purple-500/50" : "border-blue-500/20 focus:border-blue-500/50"}`}
                                      onFocusAnimation
                                      errorState={!!registerForm.formState.errors.confirmPassword}
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={registerForm.control}
                          name="termsAccepted"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-6">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className={accountType === "artist" ? "border-purple-500/50" : "border-blue-500/50"}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm text-gray-300 font-normal">
                                  I agree to the <a href="/terms" className={`${accountType === "artist" ? "text-purple-400" : "text-blue-400"} hover:underline`}>Terms of Service</a> and <a href="/privacy" className={`${accountType === "artist" ? "text-purple-400" : "text-blue-400"} hover:underline`}>Privacy Policy</a>
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                        
                        <div className="pt-2">
                          <AnimatedButton
                            type="submit"
                            className={`w-full text-white shadow-lg ${accountType === "artist" 
                              ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-purple-500/20" 
                              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/20"
                            }`}
                            isLoading={registerMutation.isPending}
                            loadingText="Creating account..."
                            success={registerMutation.isSuccess}
                            successText="Success!"
                          >
                            {accountType === "artist" ? "Register as Artist" : "Register as Label"}
                          </AnimatedButton>
                        </div>
                      </form>
                    </Form>
                  </Tabs>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <a href="/login" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
                        Sign in
                      </a>
                    </p>
                  </div>
                </CardContent>
                
                <CardFooter className="border-t border-gray-800 pt-6">
                  <div className="w-full p-3 bg-gray-800/50 rounded-lg border border-purple-500/10">
                    <div className="flex items-start gap-3">
                      <InfoIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          By creating an account, you'll get access to all MusicPliance tools, including:
                        </p>
                        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                          <li className="text-xs text-gray-300 flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            Compliance checklists
                          </li>
                          <li className="text-xs text-gray-300 flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            Licensing templates
                          </li>
                          <li className="text-xs text-gray-300 flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            Distribution tools
                          </li>
                          <li className="text-xs text-gray-300 flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            Industry directory
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}