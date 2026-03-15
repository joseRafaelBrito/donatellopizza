import React, { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { menuItems, getMenuItemsByCategory, getAverageRating } from "@/data/menu";
import { useUrlPreview, BottomUrlPreview } from "@/components/url-preview";

export default function Menu() {
  const [, setLocation] = useLocation();
  const { previewUrl, showPreview, hidePreview } = useUrlPreview();

  useEffect(() => {
    document.title = "Our Pizza Menu | Donatello - Detroit, NY & Sicilian Pizzas in Santiago";

    const updateOrCreate = (selector: string, attr: string, value: string, attrName = "content") => {
      let tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute(attrName, value);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute(attr, selector.match(/\[.*?="(.*?)"\]/)?.[1] ?? "");
        tag.setAttribute(attrName, value);
        document.head.appendChild(tag);
      }
    };

    updateOrCreate('meta[name="description"]', "name", "Explore Donatello's full menu featuring authentic Detroit, New York, and Sicilian-style pizzas in Santiago, DR. Order online today.");
    updateOrCreate('meta[name="keywords"]', "name", "pizza menu Santiago, pizza en Santiago DR, Detroit pizza, New York pizza, Sicilian pizza, pizza artesanal, Donatello pizza");

    const updateOrCreateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute("content", content);
      } else {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", property);
        ogTag.setAttribute("content", content);
        document.head.appendChild(ogTag);
      }
    };

    updateOrCreateOGTag("og:title", "Our Pizza Menu | Donatello - Detroit, NY & Sicilian Pizzas");
    updateOrCreateOGTag("og:description", "Explore Donatello's full menu featuring authentic Detroit, New York, and Sicilian-style pizzas in Santiago, DR.");
    updateOrCreateOGTag("og:type", "website");
    updateOrCreateOGTag("og:url", `${window.location.origin}/menu`);
    updateOrCreateOGTag("og:site_name", "Donatello Pizza");

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute("href", `${window.location.origin}/menu`);
    } else {
      const newCanonical = document.createElement("link");
      newCanonical.setAttribute("rel", "canonical");
      newCanonical.setAttribute("href", `${window.location.origin}/menu`);
      document.head.appendChild(newCanonical);
    }
  }, []);

  const menuListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Donatello Pizza Menu",
    "description": "Full menu of Detroit, New York, and Sicilian-style pizzas at Donatello Pizza in Santiago, DR",
    "numberOfItems": menuItems.length,
    "itemListElement": menuItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "url": `${window.location.origin}/menu/${item.slug}`
    }))
  };

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Donatello Pizza",
    "description": "Authentic artisan pizza restaurant featuring Detroit, New York, and Sicilian-style pizzas in Santiago, Dominican Republic.",
    "servesCuisine": ["Pizza", "Italian", "American"],
    "url": window.location.origin,
    "hasMenu": `${window.location.origin}/menu`,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santiago",
      "addressRegion": "Santiago",
      "addressCountry": "DO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.4517",
      "longitude": "-70.6970"
    }
  };

  const detroitItems = getMenuItemsByCategory("detroit");
  const newYorkItems = getMenuItemsByCategory("newYork");
  const sicilianItems = getMenuItemsByCategory("sicilian");

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const handleItemClick = (slug: string) => {
    setLocation(`/menu/${slug}`);
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuListSchema) }}
      />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-garlic-cream to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-warm-gray mb-4">
              Our Pizza Menu
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Authentic pizzas from Detroit, New York, and Sicily crafted with love and baked to perfection
            </p>
          </div>

          {/* Detroit-Style Pizza Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-warm-gray mb-2">
                Detroit-Style Pizza
              </h2>
              <p className="text-lg text-gray-600">
                Square pizzas with caramelized crust edges and sauce on top
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {detroitItems.map((pizza) => {
                const averageRating = getAverageRating(pizza.id);
                return (
                  <div
                    key={pizza.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer group"
                    onClick={() => handleItemClick(pizza.slug)}
                    onMouseEnter={() => showPreview(`/menu/${pizza.slug}`)}
                    onMouseLeave={hidePreview}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={pizza.image}
                        alt={pizza.altText}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-tomato-red text-white px-3 py-1 rounded-full font-semibold">
                        {pizza.price}
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <h3 className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                          {pizza.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-cheese-gold text-warm-gray">
                          {pizza.categoryName}
                        </Badge>
                        {averageRating > 0 && (
                          <div className="flex items-center gap-1">
                            {renderStars(averageRating)}
                            <span className="text-sm text-gray-600 ml-1">
                              {averageRating}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-warm-gray mb-3 group-hover:text-tomato-red transition-colors duration-300">
                        {pizza.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {pizza.description}
                      </p>
                      
                      <Button
                        className="w-full font-semibold py-3 rounded-lg transition-all duration-300 bg-tomato-red hover:bg-red-600 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(pizza.slug);
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* New York-Style Pizza Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-warm-gray mb-2">
                New York-Style Pizza
              </h2>
              <p className="text-lg text-gray-600">
                Thin, foldable slices and classic whole pies
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {newYorkItems.map((pizza) => {
                const averageRating = getAverageRating(pizza.id);
                return (
                  <div
                    key={pizza.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer group"
                    onClick={() => handleItemClick(pizza.slug)}
                    onMouseEnter={() => showPreview(`/menu/${pizza.slug}`)}
                    onMouseLeave={hidePreview}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={pizza.image}
                        alt={pizza.altText}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-tomato-red text-white px-3 py-1 rounded-full font-semibold">
                        {pizza.price}
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <h3 className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                          {pizza.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-cheese-gold text-warm-gray">
                          {pizza.categoryName}
                        </Badge>
                        {averageRating > 0 && (
                          <div className="flex items-center gap-1">
                            {renderStars(averageRating)}
                            <span className="text-sm text-gray-600 ml-1">
                              {averageRating}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-warm-gray mb-3 group-hover:text-tomato-red transition-colors duration-300">
                        {pizza.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {pizza.description}
                      </p>
                      
                      <Button
                        className="w-full font-semibold py-3 rounded-lg transition-all duration-300 bg-tomato-red hover:bg-red-600 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(pizza.slug);
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sicilian Pizza Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-warm-gray mb-2">
                Sicilian Pizza
              </h2>
              <p className="text-lg text-gray-600">
                Thick, airy crust squares with traditional and modern toppings
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {sicilianItems.map((pizza) => {
                const averageRating = getAverageRating(pizza.id);
                return (
                  <div
                    key={pizza.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer group"
                    onClick={() => handleItemClick(pizza.slug)}
                    onMouseEnter={() => showPreview(`/menu/${pizza.slug}`)}
                    onMouseLeave={hidePreview}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={pizza.image}
                        alt={pizza.altText}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-tomato-red text-white px-3 py-1 rounded-full font-semibold">
                        {pizza.price}
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <h3 className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                          {pizza.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-cheese-gold text-warm-gray">
                          {pizza.categoryName}
                        </Badge>
                        {averageRating > 0 && (
                          <div className="flex items-center gap-1">
                            {renderStars(averageRating)}
                            <span className="text-sm text-gray-600 ml-1">
                              {averageRating}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-warm-gray mb-3 group-hover:text-tomato-red transition-colors duration-300">
                        {pizza.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {pizza.description}
                      </p>
                      
                      <Button
                        className="w-full font-semibold py-3 rounded-lg transition-all duration-300 bg-tomato-red hover:bg-red-600 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(pizza.slug);
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              className="bg-cheese-gold hover:bg-yellow-500 text-warm-gray font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-phone mr-2"></i>
              Call to Order: (555) 123-4567
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <BottomUrlPreview url={previewUrl} />
    </>
  );
}