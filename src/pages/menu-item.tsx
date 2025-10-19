import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Star, ArrowLeft, Home, ChevronRight, Clock, Users, ShoppingCart, Plus, Minus } from "lucide-react";
import { getMenuItemBySlug, getReviewsByMenuItemId, getAverageRating, Review } from "@/data/menu";
import { useUrlPreview, BottomUrlPreview } from "@/components/url-preview";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

function MenuItemPage() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const { previewUrl, showPreview, hidePreview } = useUrlPreview();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const menuItem = getMenuItemBySlug(slug || "");
  const reviews = menuItem ? getReviewsByMenuItemId(menuItem.id) : [];
  const averageRating = menuItem ? getAverageRating(menuItem.id) : 0;

  // Update page title and meta tags for SEO
  useEffect(() => {
    if (menuItem) {
      document.title = `${menuItem.name} - Donatello Pizza | ${menuItem.categoryName}`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', menuItem.seoDescription);
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = menuItem.seoDescription;
        document.head.appendChild(newMetaDescription);
      }

      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      const keywords = menuItem.keywords.join(', ');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const newMetaKeywords = document.createElement('meta');
        newMetaKeywords.name = 'keywords';
        newMetaKeywords.content = keywords;
        document.head.appendChild(newMetaKeywords);
      }

      // Open Graph meta tags
      const updateOrCreateOGTag = (property: string, content: string) => {
        let ogTag = document.querySelector(`meta[property="${property}"]`);
        if (ogTag) {
          ogTag.setAttribute('content', content);
        } else {
          ogTag = document.createElement('meta');
          ogTag.setAttribute('property', property);
          ogTag.setAttribute('content', content);
          document.head.appendChild(ogTag);
        }
      };

      updateOrCreateOGTag('og:title', `${menuItem.name} - Donatello Pizza`);
      updateOrCreateOGTag('og:description', menuItem.seoDescription);
      updateOrCreateOGTag('og:image', menuItem.image);
      updateOrCreateOGTag('og:type', 'product');
    }
  }, [menuItem]);

  if (!menuItem) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-gradient-to-b from-garlic-cream to-white">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-playfair font-bold text-warm-gray mb-4">
              Menu Item Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The menu item you're looking for doesn't exist.
            </p>
            <Button
              onClick={() => setLocation("/menu")}
              className="bg-tomato-red hover:bg-red-600 text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Menu
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log("New review:", newReview);
    setNewReview({ name: "", rating: 5, comment: "" });
    setShowReviewForm(false);
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    );
  };

  // Schema.org structured data
  const menuItemSchema: StructuredData = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    "name": menuItem.name,
    "description": menuItem.seoDescription,
    "image": menuItem.image,
    "offers": {
      "@type": "Offer",
      "price": menuItem.priceValue,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": menuItem.calories
    },
    "suitableForDiet": menuItem.allergens.includes("Pork") ? [] : ["https://schema.org/HalalDiet"],
    "menuAddOn": menuItem.ingredients.map(ingredient => ({
      "@type": "MenuAddOn",
      "name": ingredient
    }))
  };

  const reviewsSchema: StructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": menuItem.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "reviewCount": reviews.length
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.customerName
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating
      },
      "reviewBody": review.comment,
      "datePublished": review.date
    }))
  };

  return (
    <>
      <Header />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <main className="pt-20 min-h-screen bg-gradient-to-b from-garlic-cream to-white">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <button
              onClick={() => setLocation("/")}
              onMouseEnter={() => showPreview("/")}
              onMouseLeave={hidePreview}
              className="flex items-center hover:text-tomato-red transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <button
              onClick={() => setLocation("/menu")}
              onMouseEnter={() => showPreview("/menu")}
              onMouseLeave={hidePreview}
              className="hover:text-tomato-red transition-colors duration-200"
            >
              Menu
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-warm-gray font-medium">{menuItem.name}</span>
          </nav>

          {/* Back to Menu Button */}
          <Button
            variant="ghost"
            onClick={() => setLocation("/menu")}
            onMouseEnter={() => showPreview("/menu")}
            onMouseLeave={hidePreview}
            className="mb-6 text-warm-gray hover:text-tomato-red"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Menu
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Section */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                <div className="relative">
                  <img
                    src={menuItem.image}
                    alt={menuItem.altText}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-tomato-red text-white px-4 py-2 rounded-full font-bold text-xl">
                    {menuItem.price}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-cheese-gold text-warm-gray">
                      {menuItem.categoryName}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {renderStars(averageRating)}
                      <span className="text-sm text-gray-600 ml-2">
                        ({reviews.length} reviews)
                      </span>
                    </div>
                  </div>

                  <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-warm-gray mb-4">
                    {menuItem.name}
                  </h1>
                  
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    {menuItem.seoDescription}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-tomato-red" />
                      <div>
                        <div className="font-semibold text-warm-gray">Prep Time</div>
                        <div className="text-gray-600">{menuItem.prepTime}</div>
                      </div>
                    </div>
                    
                    {menuItem.calories && (
                      <div className="flex items-center gap-4 mb-6">
                        <Users className="w-5 h-5 text-tomato-red" />
                        <div>
                          <div className="font-semibold text-warm-gray">Calories</div>
                          <div className="text-gray-600">{menuItem.calories} per serving</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Ingredients */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-4">
                      Ingredients
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {menuItem.ingredients.map((ingredient, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Allergens */}
                  {menuItem.allergens.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-warm-gray mb-2">
                        Contains Allergens:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {menuItem.allergens.map((allergen, index) => (
                          <Badge key={index} variant="destructive" className="text-sm">
                            {allergen}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price and Add to Cart */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-tomato-red">
                      {menuItem.price}
                    </span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-12 text-center font-semibold">{quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-tomato-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg"
                    onClick={() => {
                      addToCart(menuItem, quantity);
                      toast({
                        title: "Added to Cart!",
                        description: `${quantity}x ${menuItem.name} added to your cart.`,
                      });
                    }}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Customer Reviews</span>
                    <div className="flex items-center gap-1">
                      {renderStars(averageRating)}
                      <span className="text-sm text-gray-600 ml-1">
                        {averageRating}/5
                      </span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Reviews List */}
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-sm">{review.customerName}</div>
                          <div className="flex items-center gap-1">
                            {renderStars(review.rating)}
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs ml-2">
                                Verified
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{review.comment}</p>
                        <div className="text-xs text-gray-400">
                          {new Date(review.date).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Review Button */}
                  {!showReviewForm ? (
                    <Button
                      onClick={() => setShowReviewForm(true)}
                      variant="outline"
                      className="w-full"
                    >
                      Leave a Review
                    </Button>
                  ) : (
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                      <Input
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        required
                      />
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Rating</label>
                        {renderStars(newReview.rating, true, (rating) => 
                          setNewReview({ ...newReview, rating })
                        )}
                      </div>
                      
                      <Textarea
                        placeholder="Write your review..."
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        required
                      />
                      
                      <div className="flex gap-2">
                        <Button type="submit" size="sm" className="flex-1">
                          Submit
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setShowReviewForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <BottomUrlPreview url={previewUrl} />
    </>
  );
};

export default MenuItemPage;
