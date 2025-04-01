import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu, Music, X, Headphones } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Navbar = () => {
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenus, setMobileSubmenus] = useState({
    compliance: false,
    directory: false
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileSubmenu = (menu: 'compliance' | 'directory') => {
    setMobileSubmenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-md border-b border-gray-800/50' 
          : 'bg-gray-900 border-b border-gray-800/30'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mr-2 shadow-sm group-hover:shadow-glow-accent transition-all duration-300">
                <Music size={20} />
              </div>
              <span className="text-white font-bold text-2xl">
                Music
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Pliance</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <nav className="flex space-x-1">
                <Link 
                  href="/" 
                  className={`
                    px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                    ${isActive('/') 
                      ? 'text-white bg-primary shadow-sm' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }
                  `}
                >
                  Home
                </Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger 
                    className={`
                      flex items-center text-sm font-medium px-4 py-2 rounded-full transition-all duration-300
                      ${location.startsWith('/compliance') 
                        ? 'text-white bg-primary shadow-sm' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }
                    `}
                  >
                    Compliance <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 p-2 mt-1 border border-gray-700/50 rounded-xl shadow-lg bg-gray-800/90 backdrop-blur-md">
                    <DropdownMenuItem asChild className="rounded-lg transition-all duration-200 hover:bg-gray-700/50 py-2 my-1 text-gray-300 hover:text-white">
                      <Link href="/compliance/royalty" className="w-full cursor-pointer">
                        Royalty Compliance
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-lg transition-all duration-200 hover:bg-gray-700/50 py-2 my-1 text-gray-300 hover:text-white">
                      <Link href="/compliance/licensing" className="w-full cursor-pointer">
                        Licensing
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-lg transition-all duration-200 hover:bg-gray-700/50 py-2 my-1 text-gray-300 hover:text-white">
                      <Link href="/compliance/copyright" className="w-full cursor-pointer">
                        Copyright Protection
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-lg transition-all duration-200 hover:bg-gray-700/50 py-2 my-1 text-gray-300 hover:text-white">
                      <Link href="/compliance/distribution" className="w-full cursor-pointer">
                        Distribution Standards
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger 
                    className={`
                      flex items-center text-sm font-medium px-4 py-2 rounded-full transition-all duration-300
                      ${location.startsWith('/directory') 
                        ? 'text-white bg-primary shadow-sm' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }
                    `}
                  >
                    Directory <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 p-2 mt-1 border border-gray-700/50 rounded-xl shadow-lg bg-gray-800/90 backdrop-blur-md">
                    <DropdownMenuItem asChild className="rounded-lg transition-all duration-200 hover:bg-gray-700/50 py-2 my-1 text-gray-300 hover:text-white">
                      <Link href="/directory/labels" className="w-full cursor-pointer">
                        Labels
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-lg transition-all duration-200 hover:bg-gray-700/50 py-2 my-1 text-gray-300 hover:text-white">
                      <Link href="/directory/artists" className="w-full cursor-pointer">
                        Artists
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-lg transition-all duration-200 hover:bg-gray-700/50 py-2 my-1 text-gray-300 hover:text-white">
                      <Link href="/directory/distributors" className="w-full cursor-pointer">
                        Distributors
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-lg transition-all duration-200 hover:bg-gray-700/50 py-2 my-1 text-gray-300 hover:text-white">
                      <Link href="/directory/agencies" className="w-full cursor-pointer">
                        Agencies
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Link 
                  href="/resources" 
                  className={`
                    px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                    ${isActive('/resources') 
                      ? 'text-white bg-primary shadow-sm' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }
                  `}
                >
                  Resources
                </Link>
                
                <Link 
                  href="/about" 
                  className={`
                    px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                    ${isActive('/about') 
                      ? 'text-white bg-primary shadow-sm' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }
                  `}
                >
                  About
                </Link>
                
                <Link 
                  href="/contact" 
                  className={`
                    px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                    ${isActive('/contact') 
                      ? 'text-white bg-primary shadow-sm' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }
                  `}
                >
                  Contact
                </Link>
              </nav>

              <div className="flex items-center space-x-3">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow-accent text-white transition-all duration-300 font-medium"
                >
                  <Link href="/contact">
                    <Headphones className="mr-2 h-4 w-4" />
                    Get Started
                  </Link>
                </Button>
              </div>
            </>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <div className="flex items-center">
              <Link href="/" className="mr-auto flex items-center group">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-sm">
                  <Music size={20} />
                </div>
                <span className="text-white font-bold text-2xl ml-2">
                  Music
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Pliance</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div 
          className={`
            fixed inset-0 z-40 bg-gray-900 text-white transition-transform duration-300 ease-in-out transform ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }
          `}
          style={{ top: '64px' }}
        >
          <div className="px-4 pt-4 pb-6 space-y-2 h-full overflow-y-auto">
            <Link 
              href="/" 
              className={`
                block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200
                ${isActive('/') 
                  ? 'text-white bg-primary' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <button
              onClick={() => toggleMobileSubmenu('compliance')}
              className={`
                w-full text-left flex items-center justify-between px-4 py-3 
                text-base font-medium rounded-lg transition-all duration-200
                ${location.startsWith('/compliance') 
                  ? 'text-white bg-primary' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }
              `}
            >
              Compliance <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${mobileSubmenus.compliance ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileSubmenus.compliance && (
              <div className="pl-4 space-y-1 mt-1 mb-2">
                <Link 
                  href="/compliance/royalty" 
                  className="block px-4 py-2 text-base font-medium text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/70 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Royalty Compliance
                </Link>
                <Link 
                  href="/compliance/licensing" 
                  className="block px-4 py-2 text-base font-medium text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/70 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Licensing
                </Link>
                <Link 
                  href="/compliance/copyright" 
                  className="block px-4 py-2 text-base font-medium text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/70 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Copyright Protection
                </Link>
                <Link 
                  href="/compliance/distribution" 
                  className="block px-4 py-2 text-base font-medium text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/70 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Distribution Standards
                </Link>
              </div>
            )}
            
            <button
              onClick={() => toggleMobileSubmenu('directory')}
              className={`
                w-full text-left flex items-center justify-between px-4 py-3 
                text-base font-medium rounded-lg transition-all duration-200
                ${location.startsWith('/directory') 
                  ? 'text-white bg-primary' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }
              `}
            >
              Directory <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${mobileSubmenus.directory ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileSubmenus.directory && (
              <div className="pl-4 space-y-1 mt-1 mb-2">
                <Link 
                  href="/directory/labels" 
                  className="block px-4 py-2 text-base font-medium text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/70 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Labels
                </Link>
                <Link 
                  href="/directory/artists" 
                  className="block px-4 py-2 text-base font-medium text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/70 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Artists
                </Link>
                <Link 
                  href="/directory/distributors" 
                  className="block px-4 py-2 text-base font-medium text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/70 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Distributors
                </Link>
                <Link 
                  href="/directory/agencies" 
                  className="block px-4 py-2 text-base font-medium text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/70 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agencies
                </Link>
              </div>
            )}
            
            <Link 
              href="/resources" 
              className={`
                block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200
                ${isActive('/resources') 
                  ? 'text-white bg-primary' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            
            <Link 
              href="/about" 
              className={`
                block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200
                ${isActive('/about') 
                  ? 'text-white bg-primary' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              href="/contact" 
              className={`
                block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200
                ${isActive('/contact') 
                  ? 'text-white bg-primary' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-6 mt-6 border-t border-gray-700/50">
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow-accent text-white transition-all duration-300 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/contact">
                  <Headphones className="mr-2 h-4 w-4" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
