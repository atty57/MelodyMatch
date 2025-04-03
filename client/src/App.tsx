import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Resources from "@/pages/resources";
import Directory from "@/pages/directory";
import DirectoryDetail from "@/pages/directory/[id]";
import LabelsDirectory from "@/pages/directory/labels";
import PublishersDirectory from "@/pages/directory/publishers";
import DistributorsDirectory from "@/pages/directory/distributors";
import ArtistsDirectory from "@/pages/directory/artists";
import Compliance from "@/pages/compliance";
import RoyaltyCompliance from "@/pages/compliance/royalty";
import LicensingCompliance from "@/pages/compliance/licensing";
import CopyrightProtection from "@/pages/compliance/copyright";
import DistributionStandards from "@/pages/compliance/distribution";
import Login from "@/pages/login";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import { PageLoader } from "@/components/ui/loader";
import { Toaster } from "@/components/ui/toaster";

function App() {
  // State for loader
  const [loading, setLoading] = useState(true);
  const [location] = useLocation();

  // Show loader on initial load and route changes
  useEffect(() => {
    // Initial page load
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500); // Show loader for 2.5 seconds on initial load
      return () => clearTimeout(timer);
    }
  }, []);

  // Show shorter loader on route changes
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800); // Show loader for 800ms on route changes
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      {/* Page loader */}
      <PageLoader show={loading} />
      
      {/* Main content - will be visible when loader is not shown */}
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/compliance" component={Compliance} />
          <Route path="/compliance/royalty" component={RoyaltyCompliance} />
          <Route path="/compliance/licensing" component={LicensingCompliance} />
          <Route path="/compliance/copyright" component={CopyrightProtection} />
          <Route path="/compliance/distribution" component={DistributionStandards} />
          <Route path="/directory" component={Directory} />
          <Route path="/directory/labels" component={LabelsDirectory} />
          <Route path="/directory/publishers" component={PublishersDirectory} />
          <Route path="/directory/distributors" component={DistributorsDirectory} />
          <Route path="/directory/artists" component={ArtistsDirectory} />
          <Route path="/directory/:id" component={DirectoryDetail} />
          <Route path="/resources" component={Resources} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
      
      {/* Toast notifications */}
      <Toaster />
    </>
  );
}

export default App;
