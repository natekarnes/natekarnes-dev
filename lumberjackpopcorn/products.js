// Shop catalog. Edit this list to add, remove, or change products.
//
// SHOPIFY_STORE: your store's myshopify.com address, e.g. 'lumberjack-popcorn.myshopify.com'.
// Leave it empty and every product falls back to the order request form.
const SHOPIFY_STORE = '';

//   price:            number in dollars, or null to hide the price (Shopify's price is what's charged)
//   image:            path to a photo, or null to show an icon placeholder
//   icon:             emoji shown when there is no image
//   shopifyVariantId: the product's variant ID from Shopify. With this and SHOPIFY_STORE set,
//                     the button becomes "Add to cart" and checkout happens on Shopify.
//                     Without it, the button adds the item to the order request form.
//   comingSoon:       true shows the product but disables the button
const PRODUCTS = [
  {
    name: 'Original Kettle',
    category: 'Popcorn',
    description: 'The classic. Sweet, salty, and crunchy in every handful.',
    price: 12,
    image: 'images/closeup.jpg',
    shopifyVariantId: '',
  },
  {
    name: 'Salted Caramel',
    category: 'Popcorn',
    description: 'Buttery caramel with a sprinkle of salt to balance the sweet.',
    price: 12,
    image: 'images/mural-bag.jpg',
    shopifyVariantId: '',
  },
  {
    name: 'Caramel Corn',
    category: 'Popcorn',
    description: 'Rich, golden, old-fashioned caramel corn with serious crunch.',
    price: 12,
    image: 'images/shelves.jpg',
    shopifyVariantId: '',
  },
  {
    name: 'Butter',
    category: 'Popcorn',
    description: 'Simple, savory, and hard to stop eating.',
    price: 12,
    image: 'images/fair-125.jpg',
    shopifyVariantId: '',
  },
  {
    name: 'Popcorn Seasonings',
    category: 'Seasonings',
    description: 'Our house seasonings in a shaker jar. Make Lumberjack-style popcorn at home.',
    price: null,
    image: null,
    icon: '🧂',
    shopifyVariantId: '',
  },
  {
    name: 'Bigfoot Sticker',
    category: 'Stickers',
    description: 'Bigfoot with a bag of Lumberjack Popcorn. Made for water bottles, laptops, and bumpers.',
    price: 4,
    image: 'images/bigfoot.jpg',
    shopifyVariantId: '',
  },
  {
    name: 'Lumberjack Merch',
    category: 'Merch',
    description: 'Tees, hats, and more with the Lumberjack Popcorn logo.',
    price: null,
    image: null,
    icon: '👕',
    comingSoon: true,
    shopifyVariantId: '',
  },
];
