import { Route, Switch } from "wouter";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Resources from "@/pages/resources";
import Directory from "@/pages/directory";
import Compliance from "@/pages/compliance";
import About from "@/pages/about";
import Contact from "@/pages/contact";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/compliance" component={Compliance} />
      <Route path="/directory" component={Directory} />
      <Route path="/resources" component={Resources} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
