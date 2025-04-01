import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Resource } from '@shared/schema';

export const ResourcesSection = () => {
  const { data: resources, isLoading, error } = useQuery<Resource[]>({
    queryKey: ['/api/resources'],
  });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Resource Library</h2>
          <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
            Access our comprehensive collection of guides, templates, and tools
          </p>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 w-full bg-neutral-200 animate-pulse"></div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-6 w-16 bg-neutral-200 rounded-full animate-pulse"></div>
                    <div className="ml-2 h-4 w-24 bg-neutral-200 rounded animate-pulse"></div>
                  </div>
                  <div className="h-6 w-full bg-neutral-200 rounded animate-pulse mb-3"></div>
                  <div className="h-4 w-full bg-neutral-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse mb-4"></div>
                  <div className="h-4 w-32 bg-neutral-200 rounded animate-pulse"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-600">Failed to load resources. Please try again later.</p>
          </div>
        )}

        {resources && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] duration-300">
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={resource.imageUrl}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-purple-600/80 border border-purple-500 rounded-full">
                      {resource.category}
                    </span>
                    <span className="ml-2 text-sm text-neutral-500">{resource.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{resource.title}</h3>
                  <p className="text-neutral-600 mb-4">
                    {resource.description}
                  </p>
                  {resource.downloadLink && (
                    <a href={resource.downloadLink} className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                      Download PDF <Download className="ml-2 h-4 w-4" />
                    </a>
                  )}
                  {resource.accessLink && (
                    <a href={resource.accessLink} className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                      Access Tool <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/resources">
              View All Resources <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
