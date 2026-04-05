import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/hooks/use-cart";
import Preloader from "@/components/preloader";
import EmailBanner from "@/components/email-banner";
import Home from "@/pages/home";
import Menu from "@/pages/menu";
import MenuItemPage from "@/pages/menu-item";
import BarriosPage from "@/pages/barrios";
import BarrioPage from "@/pages/barrio";
import Checkout from "@/pages/checkout";
import OrderSuccess from "@/pages/order-success";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/menu/:slug" component={MenuItemPage} />
      <Route path="/barrios" component={BarriosPage} />
      <Route path="/barrios/:slug" component={BarrioPage} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/order-success" component={OrderSuccess} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(
    () => !sessionStorage.getItem("donatello_loaded")
  );
  const [bannerVisible, setBannerVisible] = useState(
    () => !sessionStorage.getItem("banner_dismissed")
  );

  useEffect(() => {
    const h = bannerVisible ? "44px" : "0px";
    document.documentElement.style.setProperty("--banner-h", h);
  }, [bannerVisible]);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("donatello_loaded", "1");
    setIsLoading(false);
  };

  const handleBannerDismiss = () => {
    sessionStorage.setItem("banner_dismissed", "1");
    setBannerVisible(false);
  };

  return (
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
        {!isLoading && bannerVisible && (
          <EmailBanner onDismiss={handleBannerDismiss} />
        )}
        <div className="scroll-smooth">
          <Router />
        </div>
      </TooltipProvider>
    </CartProvider>
  );
}

export default App;
