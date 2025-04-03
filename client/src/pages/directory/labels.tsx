
import { DirectoryLayout } from "@/components/layouts/directory-layout";
import { useQuery } from "@tanstack/react-query";
import { DirectoryEntry } from "@shared/schema";
import { DirectoryCard } from "@/components/directory/directory-card";

export default function LabelsDirectory() {
  const { data: entries, isLoading } = useQuery<DirectoryEntry[]>({
    queryKey: ['/api/directory'],
  });

  const labels = entries?.filter(entry => entry.type === "Record Label") || [];

  return (
    <DirectoryLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Record Labels Directory</h1>
            <p className="mt-4 text-lg text-gray-300">
              Connect with established and emerging record labels in the industry.
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
              {labels.map((label) => (
                <DirectoryCard key={label.id} entry={label} />
              ))}
            </div>
          )}
        </div>
      </div>
    </DirectoryLayout>
  );
}
