export interface MenuItem {
  id: number;
  name: string;
  slug: string;
  description: string;
  seoDescription: string;
  price: string;
  priceValue: number;
  image: string;
  altText: string;
  category: 'detroit' | 'newYork' | 'sicilian';
  categoryName: string;
  ingredients: string[];
  allergens: string[];
  calories?: number;
  prepTime: string;
  keywords: string[];
}

export interface Review {
  id: number;
  menuItemId: number;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export const menuItems: MenuItem[] = [
  // Detroit-Style Pizza
  {
    id: 1,
    name: "Classic Detroit",
    slug: "classic-detroit-pizza",
    description: "Traditional square pizza with caramelized crust edges, Wisconsin brick cheese, and sauce on top",
    seoDescription: "Authentic Detroit-style square pizza featuring caramelized crust edges, premium Wisconsin brick cheese, and our signature sauce on top. A true Motor City classic.",
    price: "$18.99",
    priceValue: 18.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop&crop=center",
    altText: "Classic Detroit-style square pizza with caramelized edges and cheese",
    category: "detroit",
    categoryName: "Detroit-Style Pizza",
    ingredients: ["Wisconsin brick cheese", "Tomato sauce", "Detroit-style dough", "Olive oil"],
    allergens: ["Gluten", "Dairy"],
    calories: 320,
    prepTime: "25-30 minutes",
    keywords: ["detroit pizza", "square pizza", "brick cheese", "caramelized crust", "authentic detroit"]
  },
  {
    id: 2,
    name: "Pepperoni Supreme",
    slug: "pepperoni-supreme-detroit",
    description: "Detroit-style with premium pepperoni, extra cheese, and our signature sauce",
    seoDescription: "Premium Detroit-style pepperoni pizza with extra Wisconsin brick cheese, artisanal pepperoni, and our house-made signature sauce on top.",
    price: "$21.99",
    priceValue: 21.99,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&h=600&fit=crop&crop=center",
    altText: "Detroit-style pepperoni supreme pizza with extra cheese and premium pepperoni",
    category: "detroit",
    categoryName: "Detroit-Style Pizza",
    ingredients: ["Premium pepperoni", "Wisconsin brick cheese", "Tomato sauce", "Detroit-style dough"],
    allergens: ["Gluten", "Dairy", "Pork"],
    calories: 380,
    prepTime: "25-30 minutes",
    keywords: ["pepperoni pizza", "detroit style", "premium pepperoni", "extra cheese", "supreme pizza"]
  },
  {
    id: 3,
    name: "Margherita Detroit",
    slug: "margherita-detroit-pizza",
    description: "Fresh mozzarella, basil, tomatoes, and garlic on our famous Detroit crust",
    seoDescription: "Fresh Detroit-style Margherita pizza with creamy mozzarella, garden-fresh basil, ripe tomatoes, and roasted garlic on our signature square crust.",
    price: "$19.99",
    priceValue: 19.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop&crop=center",
    altText: "Detroit-style Margherita pizza with fresh mozzarella, basil, and tomatoes",
    category: "detroit",
    categoryName: "Detroit-Style Pizza",
    ingredients: ["Fresh mozzarella", "Fresh basil", "Roma tomatoes", "Roasted garlic", "Detroit-style dough"],
    allergens: ["Gluten", "Dairy"],
    calories: 290,
    prepTime: "25-30 minutes",
    keywords: ["margherita pizza", "detroit style", "fresh mozzarella", "fresh basil", "vegetarian pizza"]
  },
  
  // New York-Style Pizza
  {
    id: 4,
    name: "NY Cheese Slice",
    slug: "ny-cheese-slice",
    description: "Thin, foldable slice with mozzarella and tomato sauce",
    seoDescription: "Classic New York-style cheese slice with thin, foldable crust, premium mozzarella cheese, and traditional tomato sauce. The quintessential NYC pizza experience.",
    price: "$4.50",
    priceValue: 4.50,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop&crop=center",
    altText: "Classic New York-style cheese slice with thin crust and melted mozzarella",
    category: "newYork",
    categoryName: "New York-Style Pizza",
    ingredients: ["Mozzarella cheese", "Tomato sauce", "NY-style thin crust"],
    allergens: ["Gluten", "Dairy"],
    calories: 285,
    prepTime: "15-20 minutes",
    keywords: ["ny pizza", "cheese slice", "thin crust", "foldable pizza", "new york style"]
  },
  {
    id: 5,
    name: "NY Pepperoni Slice",
    slug: "ny-pepperoni-slice",
    description: "Crispy pepperoni on a classic NY base",
    seoDescription: "Authentic New York-style pepperoni slice featuring crispy pepperoni cups, melted mozzarella, and tangy tomato sauce on our signature thin crust.",
    price: "$5.50",
    priceValue: 5.50,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&h=600&fit=crop&crop=center",
    altText: "New York-style pepperoni slice with crispy pepperoni and thin crust",
    category: "newYork",
    categoryName: "New York-Style Pizza",
    ingredients: ["Pepperoni", "Mozzarella cheese", "Tomato sauce", "NY-style thin crust"],
    allergens: ["Gluten", "Dairy", "Pork"],
    calories: 320,
    prepTime: "15-20 minutes",
    keywords: ["ny pepperoni", "pepperoni slice", "crispy pepperoni", "thin crust", "new york pizza"]
  },
  {
    id: 6,
    name: "NY Combo Pie",
    slug: "ny-combo-whole-pie",
    description: "Whole pie with sausage, peppers, onions, and mushrooms",
    seoDescription: "Complete New York-style combo pizza with Italian sausage, bell peppers, caramelized onions, and fresh mushrooms on our classic thin crust.",
    price: "$21.99",
    priceValue: 21.99,
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&h=600&fit=crop&crop=center",
    altText: "New York-style combo pizza with sausage, peppers, onions, and mushrooms",
    category: "newYork",
    categoryName: "New York-Style Pizza",
    ingredients: ["Italian sausage", "Bell peppers", "Onions", "Mushrooms", "Mozzarella cheese", "Tomato sauce"],
    allergens: ["Gluten", "Dairy", "Pork"],
    calories: 340,
    prepTime: "20-25 minutes",
    keywords: ["ny combo", "sausage pizza", "supreme pizza", "whole pie", "new york style"]
  },
  
  // Sicilian Pizza
  {
    id: 7,
    name: "Sicilian Square",
    slug: "sicilian-square-pizza",
    description: "Thick, airy crust with mozzarella and sauce",
    seoDescription: "Traditional Sicilian square pizza with thick, airy focaccia-style crust, premium mozzarella cheese, and our house-made marinara sauce.",
    price: "$22.99",
    priceValue: 22.99,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&h=600&fit=crop&crop=center",
    altText: "Traditional Sicilian square pizza with thick crust and melted cheese",
    category: "sicilian",
    categoryName: "Sicilian Pizza",
    ingredients: ["Mozzarella cheese", "Marinara sauce", "Sicilian-style thick crust", "Olive oil"],
    allergens: ["Gluten", "Dairy"],
    calories: 350,
    prepTime: "30-35 minutes",
    keywords: ["sicilian pizza", "thick crust", "square pizza", "focaccia crust", "traditional sicilian"]
  },
  {
    id: 8,
    name: "Sicilian Sausage",
    slug: "sicilian-sausage-pizza",
    description: "Sweet Italian sausage, peppers, onions, and mozzarella",
    seoDescription: "Hearty Sicilian pizza topped with sweet Italian sausage, roasted bell peppers, caramelized onions, and melted mozzarella on our signature thick crust.",
    price: "$24.99",
    priceValue: 24.99,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&h=600&fit=crop&crop=center",
    altText: "Sicilian sausage pizza with peppers, onions, and thick crust",
    category: "sicilian",
    categoryName: "Sicilian Pizza",
    ingredients: ["Sweet Italian sausage", "Bell peppers", "Onions", "Mozzarella cheese", "Marinara sauce"],
    allergens: ["Gluten", "Dairy", "Pork"],
    calories: 390,
    prepTime: "30-35 minutes",
    keywords: ["sicilian sausage", "italian sausage", "thick crust", "peppers onions", "hearty pizza"]
  },
  {
    id: 9,
    name: "Sicilian White",
    slug: "sicilian-white-pizza",
    description: "Ricotta, mozzarella, garlic, and olive oil",
    seoDescription: "Authentic Sicilian white pizza featuring creamy ricotta, melted mozzarella, roasted garlic, and premium olive oil on our traditional thick crust.",
    price: "$23.99",
    priceValue: 23.99,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop&crop=center",
    altText: "Sicilian white pizza with ricotta, mozzarella, and garlic",
    category: "sicilian",
    categoryName: "Sicilian Pizza",
    ingredients: ["Ricotta cheese", "Mozzarella cheese", "Roasted garlic", "Extra virgin olive oil", "Fresh herbs"],
    allergens: ["Gluten", "Dairy"],
    calories: 330,
    prepTime: "30-35 minutes",
    keywords: ["white pizza", "ricotta cheese", "garlic pizza", "sicilian white", "no sauce pizza"]
  }
];

// Sample reviews data
export const reviews: Review[] = [
  {
    id: 1,
    menuItemId: 1,
    customerName: "Mike R.",
    rating: 5,
    comment: "Best Detroit-style pizza in the city! The caramelized edges are perfection.",
    date: "2024-08-25",
    verified: true
  },
  {
    id: 2,
    menuItemId: 1,
    customerName: "Sarah L.",
    rating: 4,
    comment: "Authentic Detroit style. Reminds me of home!",
    date: "2024-08-23",
    verified: true
  },
  {
    id: 3,
    menuItemId: 2,
    customerName: "Tony M.",
    rating: 5,
    comment: "The pepperoni cups up beautifully. Amazing flavor!",
    date: "2024-08-24",
    verified: true
  },
  {
    id: 4,
    menuItemId: 4,
    customerName: "Lisa K.",
    rating: 5,
    comment: "Perfect NY slice - thin, crispy, and foldable just like it should be.",
    date: "2024-08-26",
    verified: true
  },
  {
    id: 5,
    menuItemId: 7,
    customerName: "Giuseppe F.",
    rating: 4,
    comment: "Reminds me of my nonna's pizza in Sicily. Very authentic!",
    date: "2024-08-22",
    verified: true
  }
];

export const getMenuItemBySlug = (slug: string): MenuItem | undefined => {
  return menuItems.find(item => item.slug === slug);
};

export const getMenuItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};

export const getReviewsByMenuItemId = (menuItemId: number): Review[] => {
  return reviews.filter(review => review.menuItemId === menuItemId);
};

export const getAverageRating = (menuItemId: number): number => {
  const itemReviews = getReviewsByMenuItemId(menuItemId);
  if (itemReviews.length === 0) return 0;
  const sum = itemReviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / itemReviews.length) * 10) / 10;
};
