import { useState, useEffect } from "react";
import { Link } from "wouter";
import { AlertCircle, Home, ArrowLeft, MoveLeft, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLoader } from "@/components/ui/loader";

export default function NotFound() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Fade in the content after loading
      setIsVisible(true);
    }
  }, [isLoading]);

  // Generate an array of random "musical notes" for the background
  const generateNotes = () => {
    const notes = [];
    for (let i = 0; i < 12; i++) {
      notes.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.floor(Math.random() * 30) + 10,
        delay: Math.floor(Math.random() * 5),
      });
    }
    return notes;
  };

  const notes = generateNotes();

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl z-0"></div>
      
      {/* Floating musical notes */}
      {notes.map(note => (
        <div 
          key={note.id}
          className="absolute text-primary/40 z-0 animate-float-slow"
          style={{ 
            top: note.top, 
            left: note.left, 
            animationDelay: `${note.delay}s`,
            animationDuration: `${6 + note.delay}s`
          }}
        >
          <Music size={note.size} />
        </div>
      ))}
      
      <div className="relative z-10 w-full max-w-xl mx-4">
        {isLoading ? (
          <SectionLoader />
        ) : (
          <div 
            className={`
              glass-card-dark p-10 rounded-2xl transition-all duration-1000 transform
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
            `}
          >
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-red-900/30 flex items-center justify-center mb-4 animate-pulse-glow">
                <AlertCircle className="h-10 w-10 text-red-400" />
              </div>
              <h1 className="text-4xl font-bold text-gradient-alt mb-2">404</h1>
              <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"></div>
              <p className="text-gray-300 max-w-md">
                We couldn't find the page you're looking for. 
                It might have been removed, renamed, or didn't exist in the first place.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-white transition-all duration-300"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Return Home
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-primary text-white hover:bg-primary/20 transition-all duration-300"
              >
                <a href="javascript:history.back()">
                  <MoveLeft className="mr-2 h-4 w-4" />
                  Go Back
                </a>
              </Button>
            </div>
            
            {/* Shimmer effect */}
            <div className="h-px w-full mt-8 animate-shimmer"></div>
          </div>
        )}
      </div>
    </div>
  );
}
