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
  // Pizza Estilo Detroit
  {
    id: 1,
    name: "Detroit Clásica",
    slug: "classic-detroit-pizza",
    description: "Pizza cuadrada tradicional con bordes caramelizados, queso brick de Wisconsin y salsa por encima",
    seoDescription: "Auténtica pizza estilo Detroit con bordes caramelizados, queso brick premium de Wisconsin y nuestra salsa exclusiva por encima. Un clásico del Motor City en Santiago, RD.",
    price: "RD$18.99",
    priceValue: 18.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop&crop=center",
    altText: "Pizza cuadrada estilo Detroit con bordes caramelizados y queso derretido",
    category: "detroit",
    categoryName: "Pizza Estilo Detroit",
    ingredients: ["Queso brick de Wisconsin", "Salsa de tomate", "Masa estilo Detroit", "Aceite de oliva"],
    allergens: ["Gluten", "Lácteos"],
    calories: 320,
    prepTime: "25-30 minutos",
    keywords: ["pizza Detroit", "pizza cuadrada", "queso brick", "borde caramelizado", "pizza auténtica", "pizza en Santiago", "pizza Santiago RD", "pizza Detroit Santiago", "pizza Detroit Santiago de los Caballeros"]
  },
  {
    id: 2,
    name: "Pepperoni Supremo",
    slug: "pepperoni-supreme-detroit",
    description: "Estilo Detroit con pepperoni premium, queso extra y nuestra salsa exclusiva",
    seoDescription: "Pizza estilo Detroit con pepperoni premium, queso brick extra de Wisconsin y nuestra salsa exclusiva elaborada en casa. La favorita de Santiago, RD.",
    price: "RD$21.99",
    priceValue: 21.99,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&h=600&fit=crop&crop=center",
    altText: "Pizza Detroit de pepperoni supremo con queso extra y pepperoni premium",
    category: "detroit",
    categoryName: "Pizza Estilo Detroit",
    ingredients: ["Pepperoni premium", "Queso brick de Wisconsin", "Salsa de tomate", "Masa estilo Detroit"],
    allergens: ["Gluten", "Lácteos", "Cerdo"],
    calories: 380,
    prepTime: "25-30 minutos",
    keywords: ["pizza de pepperoni", "estilo Detroit", "pepperoni premium", "queso extra", "pizza suprema", "pizza pepperoni Santiago", "pizza en Santiago RD", "pizza pepperoni Santiago de los Caballeros"]
  },
  {
    id: 3,
    name: "Margherita Detroit",
    slug: "margherita-detroit-pizza",
    description: "Mozzarella fresca, albahaca, tomates y ajo sobre nuestra famosa masa cuadrada",
    seoDescription: "Pizza Margherita estilo Detroit con mozzarella cremosa, albahaca fresca del jardín, tomates maduros y ajo asado sobre nuestra masa cuadrada exclusiva.",
    price: "RD$19.99",
    priceValue: 19.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop&crop=center",
    altText: "Pizza Margherita estilo Detroit con mozzarella fresca, albahaca y tomates",
    category: "detroit",
    categoryName: "Pizza Estilo Detroit",
    ingredients: ["Mozzarella fresca", "Albahaca fresca", "Tomates Roma", "Ajo asado", "Masa estilo Detroit"],
    allergens: ["Gluten", "Lácteos"],
    calories: 290,
    prepTime: "25-30 minutos",
    keywords: ["pizza margherita", "estilo Detroit", "mozzarella fresca", "albahaca fresca", "pizza vegetariana", "pizza margherita Santiago", "pizza vegetariana Santiago RD", "pizza Margherita Santiago de los Caballeros"]
  },

  // Pizza Estilo Nueva York
  {
    id: 4,
    name: "Porción NY de Queso",
    slug: "ny-cheese-slice",
    description: "Porción delgada y plegable con mozzarella y salsa de tomate",
    seoDescription: "Clásica porción de pizza estilo Nueva York con masa delgada y plegable, mozzarella premium y salsa de tomate tradicional. La auténtica experiencia neoyorquina en Santiago.",
    price: "RD$4.50",
    priceValue: 4.50,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop&crop=center",
    altText: "Porción clásica estilo Nueva York con masa delgada y mozzarella derretida",
    category: "newYork",
    categoryName: "Pizza Estilo Nueva York",
    ingredients: ["Queso mozzarella", "Salsa de tomate", "Masa delgada estilo NY"],
    allergens: ["Gluten", "Lácteos"],
    calories: 285,
    prepTime: "15-20 minutos",
    keywords: ["pizza NY", "porción de queso", "masa delgada", "pizza plegable", "estilo Nueva York", "pizza Nueva York Santiago", "pizza en Santiago República Dominicana", "pizza Nueva York Santiago de los Caballeros"]
  },
  {
    id: 5,
    name: "Porción NY de Pepperoni",
    slug: "ny-pepperoni-slice",
    description: "Pepperoni crujiente sobre una clásica base neoyorquina",
    seoDescription: "Auténtica porción de pepperoni estilo Nueva York con pepperoni crujiente, mozzarella derretida y salsa de tomate sobre nuestra masa delgada exclusiva.",
    price: "RD$5.50",
    priceValue: 5.50,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&h=600&fit=crop&crop=center",
    altText: "Porción estilo Nueva York de pepperoni con masa crujiente y delgada",
    category: "newYork",
    categoryName: "Pizza Estilo Nueva York",
    ingredients: ["Pepperoni", "Queso mozzarella", "Salsa de tomate", "Masa delgada estilo NY"],
    allergens: ["Gluten", "Lácteos", "Cerdo"],
    calories: 320,
    prepTime: "15-20 minutos",
    keywords: ["pepperoni NY", "porción de pepperoni", "pepperoni crujiente", "masa delgada", "pizza Nueva York", "pizza pepperoni estilo Nueva York Santiago", "pizza en Santiago RD", "pizza pepperoni Nueva York Santiago de los Caballeros"]
  },
  {
    id: 6,
    name: "Pizza NY Combinada Entera",
    slug: "ny-combo-whole-pie",
    description: "Pizza entera con salchicha italiana, pimientos, cebollas y hongos",
    seoDescription: "Pizza combinada completa estilo Nueva York con salchicha italiana, pimientos morrones, cebollas caramelizadas y hongos frescos sobre nuestra masa delgada clásica.",
    price: "RD$21.99",
    priceValue: 21.99,
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&h=600&fit=crop&crop=center",
    altText: "Pizza combinada estilo Nueva York con salchicha, pimientos, cebollas y hongos",
    category: "newYork",
    categoryName: "Pizza Estilo Nueva York",
    ingredients: ["Salchicha italiana", "Pimientos morrones", "Cebollas", "Hongos", "Queso mozzarella", "Salsa de tomate"],
    allergens: ["Gluten", "Lácteos", "Cerdo"],
    calories: 340,
    prepTime: "20-25 minutos",
    keywords: ["pizza combinada NY", "pizza con salchicha", "pizza suprema", "pizza entera", "estilo Nueva York", "pizza combinada Santiago", "pizza entera Santiago RD", "pizza combinada Santiago de los Caballeros"]
  },

  // Pizza Siciliana
  {
    id: 7,
    name: "Pizza Siciliana Cuadrada",
    slug: "sicilian-square-pizza",
    description: "Masa gruesa y esponjosa con mozzarella y salsa marinara",
    seoDescription: "Tradicional pizza siciliana cuadrada con masa gruesa y esponjosa estilo focaccia, queso mozzarella premium y nuestra salsa marinara elaborada en casa.",
    price: "RD$22.99",
    priceValue: 22.99,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&h=600&fit=crop&crop=center",
    altText: "Pizza siciliana cuadrada tradicional con masa gruesa y queso derretido",
    category: "sicilian",
    categoryName: "Pizza Siciliana",
    ingredients: ["Queso mozzarella", "Salsa marinara", "Masa gruesa estilo siciliano", "Aceite de oliva"],
    allergens: ["Gluten", "Lácteos"],
    calories: 350,
    prepTime: "30-35 minutos",
    keywords: ["pizza siciliana", "masa gruesa", "pizza cuadrada", "masa focaccia", "siciliana tradicional", "pizza siciliana Santiago", "pizza artesanal Santiago RD", "pizza siciliana Santiago de los Caballeros"]
  },
  {
    id: 8,
    name: "Siciliana con Salchicha",
    slug: "sicilian-sausage-pizza",
    description: "Salchicha italiana dulce, pimientos, cebollas y mozzarella",
    seoDescription: "Robusta pizza siciliana con salchicha italiana dulce, pimientos morrones asados, cebollas caramelizadas y mozzarella derretida sobre nuestra masa gruesa exclusiva.",
    price: "RD$24.99",
    priceValue: 24.99,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&h=600&fit=crop&crop=center",
    altText: "Pizza siciliana con salchicha, pimientos, cebollas y masa gruesa",
    category: "sicilian",
    categoryName: "Pizza Siciliana",
    ingredients: ["Salchicha italiana dulce", "Pimientos morrones", "Cebollas", "Queso mozzarella", "Salsa marinara"],
    allergens: ["Gluten", "Lácteos", "Cerdo"],
    calories: 390,
    prepTime: "30-35 minutos",
    keywords: ["siciliana con salchicha", "salchicha italiana", "masa gruesa", "pimientos cebollas", "pizza contundente", "pizza con salchicha Santiago", "pizza italiana Santiago RD", "pizza siciliana con salchicha Santiago de los Caballeros"]
  },
  {
    id: 9,
    name: "Siciliana Blanca",
    slug: "sicilian-white-pizza",
    description: "Ricotta, mozzarella, ajo y aceite de oliva",
    seoDescription: "Auténtica pizza siciliana blanca con ricotta cremosa, mozzarella derretida, ajo asado y aceite de oliva premium sobre nuestra masa gruesa tradicional.",
    price: "RD$23.99",
    priceValue: 23.99,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop&crop=center",
    altText: "Pizza siciliana blanca con ricotta, mozzarella y ajo",
    category: "sicilian",
    categoryName: "Pizza Siciliana",
    ingredients: ["Queso ricotta", "Queso mozzarella", "Ajo asado", "Aceite de oliva extra virgen", "Hierbas frescas"],
    allergens: ["Gluten", "Lácteos"],
    calories: 330,
    prepTime: "30-35 minutos",
    keywords: ["pizza blanca", "queso ricotta", "pizza de ajo", "siciliana blanca", "pizza sin salsa", "pizza blanca Santiago", "pizza ricotta Santiago RD", "pizza blanca Santiago de los Caballeros"]
  }
];

// Reseñas de clientes
export const reviews: Review[] = [
  {
    id: 1,
    menuItemId: 1,
    customerName: "Miguel R.",
    rating: 5,
    comment: "¡La mejor pizza estilo Detroit de la ciudad! Los bordes caramelizados son perfectos.",
    date: "2024-08-25",
    verified: true
  },
  {
    id: 2,
    menuItemId: 1,
    customerName: "Sara L.",
    rating: 4,
    comment: "Auténtico estilo Detroit. ¡Me recuerda a las pizzas que comía de pequeña!",
    date: "2024-08-23",
    verified: true
  },
  {
    id: 3,
    menuItemId: 2,
    customerName: "Tony M.",
    rating: 5,
    comment: "El pepperoni queda perfecto y crujiente. ¡Sabor increíble!",
    date: "2024-08-24",
    verified: true
  },
  {
    id: 4,
    menuItemId: 4,
    customerName: "Lisa K.",
    rating: 5,
    comment: "Porción NY perfecta — delgada, crujiente y plegable, tal y como debe ser.",
    date: "2024-08-26",
    verified: true
  },
  {
    id: 5,
    menuItemId: 7,
    customerName: "Giuseppe F.",
    rating: 4,
    comment: "Me recuerda a la pizza de mi abuela en Sicilia. ¡Muy auténtica!",
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
