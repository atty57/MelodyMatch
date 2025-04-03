
import { DirectoryLayout } from "@/components/layouts/directory-layout";
import { useQuery } from "@tanstack/react-query";
import { DirectoryEntry } from "@shared/schema";
import { DirectoryCard } from "@/components/directory/directory-card";

export default function DistributorsDirectory() {
  const { data: entries, isLoading } = useQuery<DirectoryEntry[]>({
    queryKey: ['/api/directory'],
  });

  const distributors = entries?.filter(entry => entry.type === "Music Distributor") || [];

  return (
    <DirectoryLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Music Distributors Directory</h1>
            <p className="mt-4 text-lg text-gray-300">
              Discover global music distribution partners for your releases.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-48 bg-gray-800/50 rounded-lg animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {distributors.map((distributor) => (
                <DirectoryCard key={distributor.id} entry={distributor} />
              ))}
            </div>
          )}
        </div>
      </div>
    </DirectoryLayout>
  );
}
