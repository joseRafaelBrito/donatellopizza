import { useState } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/hooks/use-cart";
import Preloader from "@/components/preloader";
import Home from "@/pages/home";
import Menu from "@/pages/menu";
import MenuItemPage from "@/pages/menu-item";
import Checkout from "@/pages/checkout";
import OrderSuccess from "@/pages/order-success";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/menu/:slug" component={MenuItemPage} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/order-success" component={OrderSuccess} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        <div className="scroll-smooth">
          <Router />
        </div>
      </TooltipProvider>
    </CartProvider>
  );
}

export default App;
