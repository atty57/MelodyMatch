
import { ComplianceLayout } from "@/components/layouts/compliance-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PieChart, Settings } from "lucide-react";

export default function RoyaltyCompliance() {
  return (
    <ComplianceLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Royalty Compliance</h1>
            <p className="mt-4 text-lg text-gray-300">
              Ensure accurate tracking and distribution of music royalties.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-green-400" />
                  <CardTitle>Revenue Streams</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">Major royalty revenue streams:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Performance royalties</li>
                  <li>Mechanical royalties</li>
                  <li>Sync licensing fees</li>
                  <li>Digital streaming payments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <PieChart className="h-6 w-6 text-blue-400" />
                  <CardTitle>Distribution Models</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">Understanding royalty distribution:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Pro-rata calculations</li>
                  <li>User-centric models</li>
                  <li>Split sheets</li>
                  <li>Payment schedules</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-purple-400" />
                  <CardTitle>Compliance Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">Essential compliance tools:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Royalty accounting software</li>
                  <li>Usage tracking systems</li>
                  <li>Reporting templates</li>
                  <li>Audit preparation tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ComplianceLayout>
  );
}
