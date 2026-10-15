export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Specialties' },
  { id: 'sandwiches', label: '🏆 Focaccia Sandwiches' },
  { id: 'crepes', label: '🥞 Crepes & Bakery' },
  { id: 'coffee', label: '☕ Specialty Drinks' },
];

export const MENU_ITEMS = [
  // Award-Winning Sandwiches
  {
    id: 'schnitzel-sandwich',
    name: 'The Famous Schnitzel Sandwich',
    price: '$15.95',
    category: 'sandwiches',
    subtext: 'Served on our signature house-baked focaccia bread',
    description: 'Crispy chicken cutlet, melted gruyère cheese torched table-side, crunchy yuzu slaw, and signature house spicy mayo.',
    image: '/images/schnitzel-sandwich.jpg',
    tags: [
      { text: '🏆 The News & Observer Winner', type: 'award' },
      { text: '🔥 Torched Table-Side', type: 'fire' },
      { text: 'Scratch Focaccia', type: 'scratch' }
    ],
    highlight: true,
  },
  {
    id: 'caprese-twist',
    name: 'The Caprese Twist',
    price: '$13.50',
    category: 'sandwiches',
    subtext: 'Served on our signature house-baked focaccia bread',
    description: 'Fresh mozzarella, ripe tomatoes, nut-free basil pesto, and a rich balsamic reduction glaze on warm rosemary focaccia.',
    image: '/images/caprese-twist.jpg',
    tags: [
      { text: '🌱 Vegetarian', type: 'veg' },
      { text: 'Nut-Free Pesto', type: 'scratch' },
      { text: 'Signature Glaze', type: 'signature' }
    ],
    highlight: true,
  },
  {
    id: 'mortadella-focaccia',
    name: 'Mortadella & Pistachio Focaccia',
    price: '$14.95',
    category: 'sandwiches',
    subtext: 'Served on our signature house-baked focaccia bread',
    description: 'Silky Italian mortadella ribbons, creamy stracciatella cheese, crushed roasted pistachios, and hot honey on daily scratch focaccia.',
    image: '/images/mortadella-focaccia.jpg',
    tags: [
      { text: 'Italian Deli', type: 'signature' },
      { text: 'Scratch Focaccia', type: 'scratch' }
    ],
    highlight: false,
  },
  {
    id: 'salmon-focaccia',
    name: 'Smoked Salmon & Caper Focaccia',
    price: '$15.50',
    category: 'sandwiches',
    subtext: 'Served on our signature house-baked focaccia bread',
    description: 'Cold-smoked Atlantic salmon, herbed whipped cream cheese, pickled red onions, fresh dill, and baby capers on warm focaccia.',
    image: '/images/salmon-focaccia.jpg',
    tags: [
      { text: "Chef's Choice", type: 'signature' },
      { text: 'Scratch Focaccia', type: 'scratch' }
    ],
    highlight: false,
  },

  // Crepes & Bakery
  {
    id: 'sweet-crepes',
    name: 'Authentic Sweet Crepes',
    price: '$10.95',
    category: 'crepes',
    subtext: 'Drizzled with house-made sauces & fresh berries',
    description: 'Delicate French crepes drizzled with house-made sauces, fresh berries, and whipped cream. Options include Nutella, Belgian chocolate, or salted caramel.',
    image: '/images/authentic-crepes.jpg',
    tags: [
      { text: 'Sweet Crepe', type: 'signature' },
      { text: '🌱 Vegetarian', type: 'veg' }
    ],
    highlight: true,
  },
  {
    id: 'house-pastries',
    name: 'House Pastries',
    price: '$4.95 – $6.25',
    category: 'crepes',
    subtext: 'A daily rotating scratch-made selection',
    description: 'A daily rotating selection of scratch-made pastries, golden flaky butter croissants, pain au chocolat, and savory morning baked goods.',
    image: '/images/house-pastry.jpg',
    tags: [
      { text: 'Baked Daily', type: 'scratch' },
      { text: 'Fresh From Oven', type: 'signature' }
    ],
    highlight: true,
  },
  {
    id: 'truffle-crepe',
    name: 'Chicken, Melted Brie & Truffle Crepe',
    price: '$14.50',
    category: 'crepes',
    subtext: 'Savory European indulgence',
    description: 'Warm savory crepe filled with roasted tender chicken, melted French brie, sautéed cremini mushrooms, and a white truffle essence drizzle.',
    image: '/images/truffle-crepe.jpg',
    tags: [
      { text: 'Gourmet Savory', type: 'signature' }
    ],
    highlight: false,
  },
  {
    id: 'avocado-toast',
    name: 'Artisan Avocado Toast',
    price: '$11.95',
    category: 'crepes',
    subtext: 'Thick sourdough toast',
    description: 'Smashed Hass avocado, soft-boiled farm egg, Aleppo chili flakes, microgreens, and lemon-infused extra virgin olive oil.',
    image: '/images/avocado-toast.jpg',
    tags: [
      { text: '🌱 Vegetarian', type: 'veg' },
      { text: 'Breakfast Staple', type: 'signature' }
    ],
    highlight: false,
  },

  // Specialty Drinks
  {
    id: 'classic-espresso',
    name: 'Classic Espresso & Lattes',
    price: '$4.25 – $5.25',
    category: 'coffee',
    subtext: 'Colombian single-origin specialty roast',
    description: 'Perfect balance of bold Colombian character and silky microfoam. Enjoy as an espresso, cappuccino, silky flat white, or classic latte.',
    image: '/images/classic-espresso.jpg',
    tags: [
      { text: 'Single-Origin', type: 'signature' },
      { text: 'Whole / Oat / Almond Milk', type: 'scratch' }
    ],
    highlight: true,
  },
  {
    id: 'seasonal-lattes',
    name: 'Signature Seasonal Lattes',
    price: '$6.25',
    category: 'coffee',
    subtext: 'Handcrafted syrups made in-house',
    description: 'Handcrafted syrups made in-house to match the flavors of the season—including Horchata Brown Sugar, Gingerbread Maple, and Banana Dulce de Leche.',
    image: '/images/seasonal-latte.jpg',
    tags: [
      { text: 'House Syrups', type: 'award' },
      { text: 'Fan Favorite', type: 'signature' }
    ],
    highlight: true,
  },
  {
    id: 'european-cortado',
    name: 'European Cortado',
    price: '$4.75',
    category: 'coffee',
    subtext: 'Equal espresso-to-milk ratio',
    description: 'Equal parts bold Colombian double espresso cut with warm, silky textured steamed milk served in a traditional glass tumbler.',
    image: '/images/cortado.jpg',
    tags: [
      { text: 'Traditional', type: 'signature' }
    ],
    highlight: false,
  },
  {
    id: 'london-fog-tea',
    name: 'London Fog & Ceremonial Matcha',
    price: '$5.75 – $6.25',
    category: 'coffee',
    subtext: 'Specialty teas & artisan botanicals',
    description: 'Steeped Earl Grey tea infused with house-made vanilla bean syrup and microfoam; or ceremonial Japanese matcha whisked fresh with oat milk.',
    image: '/images/specialty-drink.jpg',
    tags: [
      { text: 'Artisan Tea', type: 'signature' },
      { text: 'Dairy-Free Options', type: 'veg' }
    ],
    highlight: false,
  },
];
