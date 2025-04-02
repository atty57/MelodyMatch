import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { PageLoader, SectionLoader } from "@/components/ui/loader";
import { FolderCheck, FileCheck, Shield, Clock, Award, AlertTriangle } from "lucide-react";

// Define types for the checklist items
interface ChecklistItem {
  id: number;
  category: string;
  title: string;
  description: string;
  requiredFor: string[];
  isMandatory: boolean;
  resources: string[] | null;
}

interface ChecklistCategory {
  name: string;
  items: number[];
}

export default function Compliance() {
  const [selectedType, setSelectedType] = useState<string>("artist");
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  
  // Fetch compliance checklist items
  const { data: checklistItems, isLoading } = useQuery<ChecklistItem[]>({
    queryKey: ['/api/compliance-checklist'],
    enabled: true
  });
  
  // Filter items based on selected type
  const filteredItems = checklistItems?.filter((item: ChecklistItem) => 
    item.requiredFor.includes(selectedType)
  ) || [];
  
  // Group items by category
  const categoriesMap = filteredItems.reduce((acc: Record<string, ChecklistCategory>, item: ChecklistItem) => {
    if (!acc[item.category]) {
      acc[item.category] = { name: item.category, items: [] };
    }
    acc[item.category].items.push(item.id);
    return acc;
  }, {} as Record<string, ChecklistCategory>);
  
  const categories = Object.values(categoriesMap);
  
  // Calculate progress
  const totalItems = filteredItems.length;
  const completedCount = completedItems.length;
  const progress = totalItems ? Math.round((completedCount / totalItems) * 100) : 0;
  
  // Toggle item completion
  const toggleItem = (id: number) => {
    if (completedItems.includes(id)) {
      setCompletedItems(completedItems.filter(itemId => itemId !== id));
    } else {
      setCompletedItems([...completedItems, id]);
    }
  };
  
  // Get mandatory items that are not completed
  const mandatoryIncomplete = filteredItems
    .filter((item: ChecklistItem) => item.isMandatory && !completedItems.includes(item.id))
    .length;
  
  if (isLoading) {
    return <PageLoader show={true} />;
  }
  
  return (
    <div className="container py-10 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Music Industry Compliance Checklist
          </span>
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Stay compliant with industry regulations and best practices. Track your progress and ensure
          you're meeting all necessary legal and business requirements.
        </p>
      </div>
      
      <Tabs defaultValue="checklist" className="w-full pt-6">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="checklist">Checklist</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="checklist" className="pt-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card className="backdrop-blur-sm bg-card/80 border-2 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 z-0" 
                  style={{ 
                    clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)` 
                  }}
                />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Your Compliance Checklist</CardTitle>
                      <CardDescription>Track your compliance progress</CardDescription>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-3xl font-bold">{progress}%</p>
                      <p className="text-xs text-muted-foreground">
                        {completedCount}/{totalItems} Completed
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="outline" className="border-blue-500/50 text-blue-500">
                      {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
                    </Badge>
                    
                    {mandatoryIncomplete > 0 && (
                      <Badge variant="outline" className="border-amber-500/50 text-amber-500 animate-pulse">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        {mandatoryIncomplete} Mandatory Item{mandatoryIncomplete > 1 ? 's' : ''} Incomplete
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex space-x-2 mb-6">
                    <Button
                      variant={selectedType === "artist" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType("artist")}
                    >
                      Artist
                    </Button>
                    <Button
                      variant={selectedType === "label" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType("label")}
                    >
                      Label
                    </Button>
                    <Button
                      variant={selectedType === "publisher" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType("publisher")}
                    >
                      Publisher
                    </Button>
                    <Button
                      variant={selectedType === "distributor" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType("distributor")}
                    >
                      Distributor
                    </Button>
                  </div>
                  
                  <Accordion type="multiple" className="w-full">
                    {categories.map((category: ChecklistCategory) => (
                      <AccordionItem value={category.name} key={category.name} className="border-b border-border/50">
                        <AccordionTrigger className="py-3 hover:no-underline">
                          <div className="flex items-center space-x-2">
                            {getCategoryIcon(category.name)}
                            <span>{category.name}</span>
                            <Badge variant="outline" className="ml-2">
                              {completedItems.filter(id => category.items.includes(id)).length}/{category.items.length}
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-3">
                          <div className="space-y-3">
                            {filteredItems
                              .filter((item: ChecklistItem) => item.category === category.name)
                              .map((item: ChecklistItem) => (
                                <div 
                                  key={item.id}
                                  className={`p-3 rounded-lg transition-all ${
                                    completedItems.includes(item.id) 
                                      ? 'bg-primary/5 border border-primary/20' 
                                      : 'bg-card border border-border/50 hover:border-border'
                                  }`}
                                >
                                  <div className="flex items-start space-x-3">
                                    <Checkbox 
                                      checked={completedItems.includes(item.id)} 
                                      onCheckedChange={() => toggleItem(item.id)}
                                      className={`mt-1 ${completedItems.includes(item.id) ? 'animate-pulse' : ''}`}
                                    />
                                    <div className="space-y-1 flex-1">
                                      <div className="flex items-center justify-between">
                                        <h4 className={`font-medium ${completedItems.includes(item.id) ? 'text-primary line-through opacity-70' : ''}`}>
                                          {item.title}
                                        </h4>
                                        {item.isMandatory && (
                                          <Badge variant={completedItems.includes(item.id) ? "outline" : "secondary"} className="ml-2">
                                            Required
                                          </Badge>
                                        )}
                                      </div>
                                      <p className="text-sm text-muted-foreground">
                                        {item.description}
                                      </p>
                                      {item.resources && item.resources.length > 0 && (
                                        <div className="pt-2">
                                          <p className="text-xs text-muted-foreground">Resources:</p>
                                          <div className="flex flex-wrap gap-2 mt-1">
                                            {item.resources.map((resource: string, idx: number) => (
                                              <a 
                                                key={idx} 
                                                href={resource} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
                                              >
                                                Resource {idx + 1}
                                              </a>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
                
                <CardFooter className="relative z-10 flex justify-between pt-2">
                  <Button variant="ghost" size="sm">
                    Reset
                  </Button>
                  <Button>
                    Save Progress
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="backdrop-blur-sm bg-card/80 border-2">
                <CardHeader>
                  <CardTitle>Compliance Summary</CardTitle>
                  <CardDescription>Your compliance at a glance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm font-medium">{progress}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Statistics</h4>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                        <div className="text-2xl font-bold">{completedCount}</div>
                        <div className="text-xs text-muted-foreground">Completed</div>
                      </div>
                      <div className="p-3 bg-secondary/10 rounded-lg border border-border">
                        <div className="text-2xl font-bold">{totalItems - completedCount}</div>
                        <div className="text-xs text-muted-foreground">Remaining</div>
                      </div>
                      <div className="p-3 bg-amber-500/5 rounded-lg border border-amber-500/20">
                        <div className="text-2xl font-bold">
                          {filteredItems.filter((item: ChecklistItem) => item.isMandatory).length}
                        </div>
                        <div className="text-xs text-muted-foreground">Mandatory</div>
                      </div>
                      <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                        <div className="text-2xl font-bold">
                          {filteredItems.filter((item: ChecklistItem) => !item.isMandatory).length}
                        </div>
                        <div className="text-xs text-muted-foreground">Optional</div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Categories</h4>
                    
                    <div className="space-y-2">
                      {categories.map((category: ChecklistCategory) => {
                        const categoryCompletedCount = completedItems.filter(id => 
                          category.items.includes(id)
                        ).length;
                        const categoryProgress = Math.round((categoryCompletedCount / category.items.length) * 100);
                        
                        return (
                          <div key={category.name} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span>{category.name}</span>
                              <span>{categoryCompletedCount}/{category.items.length}</span>
                            </div>
                            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                                style={{ width: `${categoryProgress}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-sm bg-card/80 border border-border">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                  <CardDescription>Get assistance with compliance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Our team of music industry experts can help you navigate complex compliance requirements.
                  </p>
                  <Button className="w-full" variant="outline">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="requirements" className="pt-6">
          <Card className="backdrop-blur-sm bg-card/80 border-2">
            <CardHeader>
              <CardTitle>Industry Requirements</CardTitle>
              <CardDescription>Understanding music industry compliance requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p>
                  The music industry has various compliance requirements that differ based on your role. 
                  Below are key compliance areas that professionals should be aware of:
                </p>
                
                <h3>Copyright Registration</h3>
                <p>
                  Proper copyright registration is essential for protecting your creative works. In the United States, 
                  registering with the U.S. Copyright Office provides legal protection and enables you to pursue 
                  statutory damages in case of infringement.
                </p>
                
                <h3>Royalty Collection</h3>
                <p>
                  Joining performing rights organizations (PROs) like ASCAP, BMI, or SESAC ensures you collect 
                  performance royalties when your music is played publicly. Additionally, mechanical royalties for 
                  physical and digital reproductions are tracked and collected through organizations like the 
                  Mechanical Licensing Collective (MLC).
                </p>
                
                <h3>Licensing Agreements</h3>
                <p>
                  Proper licensing agreements are crucial for synchronization (sync) licensing, mechanical licensing, 
                  and distribution deals. These legal documents outline rights, royalty rates, term lengths, 
                  and territories covered.
                </p>
                
                <h3>Metadata Standards</h3>
                <p>
                  Accurate and standardized metadata is essential for proper attribution and royalty distribution. 
                  This includes ISRC codes (for recordings), ISWC codes (for compositions), and proper crediting 
                  of all contributors.
                </p>
                
                <h3>International Requirements</h3>
                <p>
                  Music distribution across borders requires compliance with various international regulations. 
                  This may include registering with collection societies in different territories and understanding 
                  tax implications of international royalty collection.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Helper function to get category icon
function getCategoryIcon(category: string) {
  switch (category) {
    case "Copyright":
      return <Shield className="h-4 w-4 text-blue-500" />;
    case "Royalties":
      return <Award className="h-4 w-4 text-green-500" />;
    case "Licensing":
      return <FileCheck className="h-4 w-4 text-violet-500" />;
    case "Contracts":
      return <FileCheck className="h-4 w-4 text-violet-500" />;
    case "Legal":
      return <Shield className="h-4 w-4 text-blue-500" />;
    case "Accounting":
      return <Clock className="h-4 w-4 text-amber-500" />;
    case "Metadata":
      return <FolderCheck className="h-4 w-4 text-indigo-500" />;
    case "Distribution":
      return <FolderCheck className="h-4 w-4 text-indigo-500" />;
    case "International":
      return <FolderCheck className="h-4 w-4 text-indigo-500" />;
    default:
      return <Shield className="h-4 w-4 text-gray-500" />;
  }
}