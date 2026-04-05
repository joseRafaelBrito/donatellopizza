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

const BANNER_H = 60;

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
  // Permanently dismissed (clicked X or submitted email)
  const [dismissed, setDismissed] = useState(
    () => !!sessionStorage.getItem("banner_dismissed")
  );
  // Hidden because user scrolled past the hero
  const [scrolledPast, setScrolledPast] = useState(false);

  const bannerVisible = !dismissed && !scrolledPast;

  // Update CSS variable whenever banner visibility changes
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--banner-h",
      bannerVisible ? `${BANNER_H}px` : "0px"
    );
  }, [bannerVisible]);

  // Hide banner when scrolling past ~80% of the viewport height (end of hero)
  useEffect(() => {
    if (dismissed) return;
    const threshold = window.innerHeight * 0.8;

    const handleScroll = () => {
      setScrolledPast(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("donatello_loaded", "1");
    setIsLoading(false);
  };

  const handleBannerDismiss = () => {
    sessionStorage.setItem("banner_dismissed", "1");
    setDismissed(true);
  };

  return (
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
        {!isLoading && !dismissed && (
          <EmailBanner onDismiss={handleBannerDismiss} hidden={scrolledPast} />
        )}
        <div className="scroll-smooth">
          <Router />
        </div>
      </TooltipProvider>
    </CartProvider>
  );
}

export default App;
