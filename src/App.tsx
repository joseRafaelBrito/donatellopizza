import { useState } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Preloader from "@/components/preloader";
import Home from "@/pages/home";
import Menu from "@/pages/menu";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <TooltipProvider>
      <Toaster />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className="scroll-smooth">
        <Router />
      </div>
    </TooltipProvider>
  );
}

export default App;
