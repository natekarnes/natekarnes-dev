// Shop catalog. Edit this list to add, remove, or change products.
//
// SQUARE_STORE_URL: your Square Online store address, e.g. 'https://lumberjack-popcorn.square.site'.
// When set, a "Cart" button in the shop header links to it. Leave it empty until the store is live.
const SQUARE_STORE_URL = '';

//   price:       number in dollars, or null to hide the price (Square's price is what's charged)
//   image:       path to a photo, or null to show an icon placeholder
//   illustration: true for drawings on a transparent background (shown whole, not cropped)
//   icon:        emoji shown when there is no image
//   squareUrl:   the product's page in your Square Online store. With this set, the button
//                becomes "Buy" and opens that page, where customers add to cart and check out.
//                Without it, the button adds the item to the order request form.
//   comingSoon:  true shows the product but disables the button
const PRODUCTS = [
  {
    name: 'Original Kettle',
    category: 'Popcorn',
    description: 'The classic. Sweet, salty, and crunchy in every handful.',
    price: 12,
    image: 'images/bag-kettle.webp',
    illustration: true,
    squareUrl: '',
  },
  {
    name: 'Salted Caramel',
    category: 'Popcorn',
    description: 'Buttery caramel with a sprinkle of salt to balance the sweet.',
    price: 12,
    image: 'images/bag-caramel.webp',
    illustration: true,
    squareUrl: '',
  },
  {
    name: 'Butter',
    category: 'Popcorn',
    description: 'Simple, savory, and hard to stop eating.',
    price: 12,
    image: 'images/bag-kettle.webp',
    illustration: true,
    squareUrl: '',
  },
  {
    name: 'Jalapeño Cheddar',
    category: 'Popcorn',
    description: 'Cheddar cheese with a jalapeño kick.',
    price: 12,
    image: 'images/bag-kettle.webp',
    illustration: true,
    squareUrl: '',
  },
  {
    name: 'Signature Seasoning',
    category: 'Seasonings',
    description: 'Our house popcorn seasoning in an 8 oz shaker. Make Lumberjack-style popcorn at home.',
    price: 8,
    image: 'images/seasoning.webp',
    illustration: true,
    squareUrl: '',
  },
  {
    name: 'Lumberjack Logo Sticker',
    category: 'Stickers',
    description: 'The full-color Lumberjack Popcorn Company logo. Also comes in green and holographic versions at the trailer.',
    price: 4,
    image: 'images/sticker-logo.jpg',
    squareUrl: '',
  },
  {
    name: 'Bigfoot Bag Hug Sticker',
    category: 'Stickers',
    description: 'Bigfoot hugging an armful of Lumberjack Popcorn bags. We get it.',
    price: 4,
    image: 'images/sticker-bigfoot-hug.webp',
    illustration: true,
    squareUrl: '',
  },
  {
    name: 'Bigfoot Cheers Sticker',
    category: 'Stickers',
    description: 'A very happy Bigfoot raising a bag of popcorn. Made for water bottles, laptops, and bumpers.',
    price: 4,
    image: 'images/sticker-bigfoot-cheers.webp',
    illustration: true,
    squareUrl: '',
  },
  {
    name: 'Lumberjack Hat',
    category: 'Merch',
    description: 'A Lumberjack Popcorn Company hat for fair days, camp days, and every day in between.',
    price: 30,
    image: null,
    icon: '🧢',
    squareUrl: '',
  },
  {
    name: 'Enamel Camp Mug',
    category: 'Merch',
    description: 'A black enamel camp mug with the full-color Lumberjack. Made for coffee, cocoa, or a cup of kettle corn.',
    price: 12,
    image: null,
    icon: '☕',
    squareUrl: '',
  },
  {
    name: 'Popcorn Earrings',
    category: 'Merch',
    description: 'Tiny popcorn-box earrings made from genuine LEGO® bricks, in red and white stripes. A fun gift for any popcorn lover.',
    price: 10,
    image: 'images/earrings.jpg',
    squareUrl: '',
  },
  {
    name: 'T-Shirts & Hoodies',
    category: 'Merch',
    description: 'Lumberjack Popcorn tees and hoodies are on the way. Check back soon.',
    price: null,
    image: null,
    icon: '👕',
    comingSoon: true,
    squareUrl: '',
  },
];
