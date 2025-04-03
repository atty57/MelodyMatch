
import { Card, CardContent } from "@/components/ui/card";
import { DirectoryEntry } from "@shared/schema";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface DirectoryCardProps {
  entry: DirectoryEntry;
}

export function DirectoryCard({ entry }: DirectoryCardProps) {
  return (
    <Card className="border border-gray-700/50 glass-dark hover:shadow-glow hover:shadow-primary/10 transition-all duration-300 rounded-xl overflow-hidden backdrop-blur-lg">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-14 w-14 rounded-md overflow-hidden mr-4">
            <div className={`bg-${entry.bgColor === 'primary' ? 'primary' : entry.bgColor === 'secondary' ? 'purple-700' : 'indigo-600'} h-full w-full flex items-center justify-center text-white text-xl font-bold shadow-inner`}>
              {entry.initials}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{entry.name}</h3>
            <p className="text-sm text-gray-400">{entry.type} • {entry.location}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {entry.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs font-medium text-white bg-purple-600/80 border border-purple-500 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700/40">
          <Link 
            href={`/directory/${entry.id}`}
            className="text-purple-300 hover:text-purple-200 font-medium inline-flex items-center group transition-all duration-300"
          >
            View Profile <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
