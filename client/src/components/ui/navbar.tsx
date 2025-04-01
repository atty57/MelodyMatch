import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Navbar = () => {
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenus, setMobileSubmenus] = useState({
    compliance: false,
    directory: false
  });

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
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary font-bold text-2xl">Music<span className="text-accent">Pliance</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <nav className="flex space-x-8">
                <Link href="/" className={`${isActive('/') ? 'text-accent' : 'text-neutral-700 hover:text-accent'} px-3 py-2 text-sm font-medium`}>
                  Home
                </Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium px-3 py-2 text-neutral-700 hover:text-accent focus:outline-none">
                    Compliance <ChevronDown size={14} className="ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/compliance/royalty" className="w-full cursor-pointer">Royalty Compliance</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/compliance/licensing" className="w-full cursor-pointer">Licensing</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/compliance/copyright" className="w-full cursor-pointer">Copyright Protection</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/compliance/distribution" className="w-full cursor-pointer">Distribution Standards</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium px-3 py-2 text-neutral-700 hover:text-accent focus:outline-none">
                    Directory <ChevronDown size={14} className="ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/directory/labels" className="w-full cursor-pointer">Labels</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/directory/artists" className="w-full cursor-pointer">Artists</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/directory/distributors" className="w-full cursor-pointer">Distributors</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/directory/agencies" className="w-full cursor-pointer">Agencies</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Link href="/resources" className={`${isActive('/resources') ? 'text-accent' : 'text-neutral-700 hover:text-accent'} px-3 py-2 text-sm font-medium`}>
                  Resources
                </Link>
                
                <Link href="/about" className={`${isActive('/about') ? 'text-accent' : 'text-neutral-700 hover:text-accent'} px-3 py-2 text-sm font-medium`}>
                  About
                </Link>
                
                <Link href="/contact" className={`${isActive('/contact') ? 'text-accent' : 'text-neutral-700 hover:text-accent'} px-3 py-2 text-sm font-medium`}>
                  Contact
                </Link>
              </nav>

              <div className="flex items-center">
                <Button className="bg-accent hover:bg-accent/80">
                  Get Started
                </Button>
              </div>
            </>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              >
                <span className="sr-only">Open main menu</span>
                <Menu size={24} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-50">
              Home
            </Link>
            
            <button
              onClick={() => toggleMobileSubmenu('compliance')}
              className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Compliance <ChevronDown size={14} className="ml-1" />
            </button>
            
            {mobileSubmenus.compliance && (
              <div className="pl-4 space-y-1">
                <Link href="/compliance/royalty" className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50">
                  Royalty Compliance
                </Link>
                <Link href="/compliance/licensing" className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50">
                  Licensing
                </Link>
                <Link href="/compliance/copyright" className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50">
                  Copyright Protection
                </Link>
                <Link href="/compliance/distribution" className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50">
                  Distribution Standards
                </Link>
              </div>
            )}
            
            <button
              onClick={() => toggleMobileSubmenu('directory')}
              className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Directory <ChevronDown size={14} className="ml-1" />
            </button>
            
            {mobileSubmenus.directory && (
              <div className="pl-4 space-y-1">
                <Link href="/directory/labels" className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50">
                  Labels
                </Link>
                <Link href="/directory/artists" className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50">
                  Artists
                </Link>
                <Link href="/directory/distributors" className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50">
                  Distributors
                </Link>
                <Link href="/directory/agencies" className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50">
                  Agencies
                </Link>
              </div>
            )}
            
            <Link href="/resources" className="block px-3 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-50">
              Resources
            </Link>
            
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-50">
              About
            </Link>
            
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-50">
              Contact
            </Link>
          </div>
          
          <div className="pt-4 pb-3 border-t border-neutral-200">
            <div className="mt-3 px-2 space-y-1">
              <Button className="w-full bg-accent hover:bg-accent/80">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
