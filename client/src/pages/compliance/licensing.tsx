
import { ComplianceLayout } from "@/components/layouts/compliance-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, BarChart, Globe } from "lucide-react";

export default function LicensingCompliance() {
  return (
    <ComplianceLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Licensing Management</h1>
            <p className="mt-4 text-lg text-gray-300">
              Navigate the complexities of music licensing with our comprehensive guidelines.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileCheck className="h-6 w-6 text-blue-400" />
                  <CardTitle>Types of Licenses</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">Key license types in the music industry:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Mechanical Licenses</li>
                  <li>Synchronization Licenses</li>
                  <li>Public Performance Licenses</li>
                  <li>Digital Performance Rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BarChart className="h-6 w-6 text-green-400" />
                  <CardTitle>Royalty Tracking</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">Essential royalty tracking practices:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Usage monitoring systems</li>
                  <li>Revenue collection processes</li>
                  <li>Distribution tracking</li>
                  <li>Audit procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-purple-400" />
                  <CardTitle>International Licensing</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">Managing international licensing:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Territory-specific requirements</li>
                  <li>Cross-border agreements</li>
                  <li>International collection societies</li>
                  <li>Currency considerations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ComplianceLayout>
  );
}
