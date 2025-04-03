
import { ComplianceLayout } from "@/components/layouts/compliance-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Database, Share2 } from "lucide-react";

export default function DistributionCompliance() {
  return (
    <ComplianceLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Distribution Standards</h1>
            <p className="mt-4 text-lg text-gray-300">
              Master global music distribution standards and best practices.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-blue-400" />
                  <CardTitle>Global Standards</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">Key distribution standards:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Digital service provider requirements</li>
                  <li>Territory-specific regulations</li>
                  <li>Quality control standards</li>
                  <li>Release scheduling guidelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-green-400" />
                  <CardTitle>Metadata Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">Essential metadata standards:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>ISRC codes</li>
                  <li>UPC/EAN codes</li>
                  <li>Credits and roles</li>
                  <li>Asset specifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Share2 className="h-6 w-6 text-purple-400" />
                  <CardTitle>Platform Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">Platform-specific requirements:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Content delivery specifications</li>
                  <li>Format requirements</li>
                  <li>Delivery schedules</li>
                  <li>Quality assurance processes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ComplianceLayout>
  );
}
