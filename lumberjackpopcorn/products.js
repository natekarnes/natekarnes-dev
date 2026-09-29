// Shop catalog. Edit this list to add, remove, or change products.
//
//   price:      number in dollars, or null to hide the price
//   image:      path to a photo, or null to show an icon placeholder
//   icon:       emoji shown when there is no image
//   buyUrl:     a checkout link (Square, Stripe Payment Link, Shopify Buy Button...).
//               Leave empty and the button adds the item to the order request form instead.
//   comingSoon: true shows the product but disables the button
const PRODUCTS = [
  {
    name: 'Original Kettle',
    category: 'Popcorn',
    description: 'The classic. Sweet, salty, and crunchy in every handful.',
    price: 12,
    image: 'images/closeup.jpg',
    buyUrl: '',
  },
  {
    name: 'Salted Caramel',
    category: 'Popcorn',
    description: 'Buttery caramel with a sprinkle of salt to balance the sweet.',
    price: 12,
    image: 'images/mural-bag.jpg',
    buyUrl: '',
  },
  {
    name: 'Caramel Corn',
    category: 'Popcorn',
    description: 'Rich, golden, old-fashioned caramel corn with serious crunch.',
    price: 12,
    image: 'images/shelves.jpg',
    buyUrl: '',
  },
  {
    name: 'Butter',
    category: 'Popcorn',
    description: 'Simple, savory, and hard to stop eating.',
    price: 12,
    image: 'images/fair-125.jpg',
    buyUrl: '',
  },
  {
    name: 'Popcorn Seasonings',
    category: 'Seasonings',
    description: 'Our house seasonings in a shaker jar. Make Lumberjack-style popcorn at home.',
    price: null,
    image: null,
    icon: '🧂',
    buyUrl: '',
  },
  {
    name: 'Bigfoot Sticker',
    category: 'Stickers',
    description: 'Bigfoot with a bag of Lumberjack Popcorn. Made for water bottles, laptops, and bumpers.',
    price: 4,
    image: 'images/bigfoot.jpg',
    buyUrl: '',
  },
  {
    name: 'Lumberjack Merch',
    category: 'Merch',
    description: 'Tees, hats, and more with the Lumberjack Popcorn logo.',
    price: null,
    image: null,
    icon: '👕',
    comingSoon: true,
    buyUrl: '',
  },
];
