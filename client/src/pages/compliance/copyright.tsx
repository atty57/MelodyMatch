
import { ComplianceLayout } from "@/components/layouts/compliance-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileCheck, AlertTriangle } from "lucide-react";

export default function CopyrightCompliance() {
  return (
    <ComplianceLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Copyright Protection</h1>
            <p className="mt-4 text-lg text-gray-300">
              Ensure your music is properly protected with comprehensive copyright compliance guidelines.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-400" />
                  <CardTitle>Registration Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Copyright protection begins the moment you create your work, but registration provides important benefits:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Legal evidence of ownership</li>
                  <li>Ability to file infringement lawsuits</li>
                  <li>Statutory damages and attorney fees in litigation</li>
                  <li>Public record of your copyright claim</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileCheck className="h-6 w-6 text-green-400" />
                  <CardTitle>Documentation Guidelines</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Maintain comprehensive documentation of your creative process:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Original recordings and drafts</li>
                  <li>Collaboration agreements</li>
                  <li>Publishing contracts</li>
                  <li>Registration certificates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-400" />
                  <CardTitle>Common Pitfalls</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Avoid these common copyright protection mistakes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Failing to register works promptly</li>
                  <li>Unclear ownership agreements</li>
                  <li>Inadequate sample clearance</li>
                  <li>Poor documentation practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ComplianceLayout>
  );
}
