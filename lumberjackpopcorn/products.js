// Shop catalog. Edit this list to add, remove, or change products.
//
// ONLINE_CHECKOUT: true once SQUARE_ACCESS_TOKEN, SQUARE_LOCATION_ID, and SHIPPING_FEE_CENTS are
// added in Netlify. Then products with a squareVariationId get "Add to cart" and check out on Square's
// secure payment page. While false, every product uses the order request form instead.
const ONLINE_CHECKOUT = true;

//   price:             number in dollars, shown on the site (Square's price is what's charged)
//   image:             path to a photo, or null to show an icon placeholder
//   illustration:      true for drawings on a transparent background (shown whole, not cropped)
//   icon:              emoji shown when there is no image
//   squareVariationId: the item variation ID in Square. Also add it to the SELLABLE list in
//                      netlify/functions/checkout.mjs, or checkout will reject it.
//   comingSoon:        true shows the product but disables the button
const PRODUCTS = [
  {
    name: 'Original Kettle',
    category: 'Popcorn',
    description: 'The classic. Sweet, salty, and crunchy in every handful.',
    price: 12,
    image: 'images/bag-kettle.webp',
    illustration: true,
    squareVariationId: 'HFUBU2BIG6XBI67C2CSY4NER',
  },
  {
    name: 'Salted Caramel',
    category: 'Popcorn',
    description: 'Buttery caramel with a sprinkle of salt to balance the sweet.',
    price: 12,
    image: 'images/bag-caramel.webp',
    illustration: true,
    squareVariationId: 'JNMLFY7D7YG5DYABV5NJS4P4',
  },
  {
    name: 'Butter',
    category: 'Popcorn',
    description: 'Simple, savory, and hard to stop eating.',
    price: 12,
    image: 'images/bag-kettle.webp',
    illustration: true,
    squareVariationId: 'KZ3BU6NBZB2AKGRX7KAL7QKP',
  },
  {
    name: 'Jalapeño Cheddar',
    category: 'Popcorn',
    description: 'Cheddar cheese with a jalapeño kick.',
    price: 12,
    image: 'images/bag-kettle.webp',
    illustration: true,
    squareVariationId: 'KH54HPWGNDE6DG7MYYWDKSH3',
  },
  {
    name: 'Signature Seasoning',
    category: 'Seasonings',
    description: 'Our house popcorn seasoning in an 8 oz shaker. Make Lumberjack-style popcorn at home.',
    price: 8,
    image: 'images/seasoning.webp',
    illustration: true,
    squareVariationId: 'ZYNSXG2CCQIGI3VIQ2F7LATQ',
  },
  {
    name: 'Lumberjack Logo Sticker',
    category: 'Stickers',
    description: 'The full-color Lumberjack Popcorn Company logo. Also comes in green and holographic versions at the trailer.',
    price: 4,
    image: 'images/sticker-logo.webp',
    illustration: true,
    squareVariationId: 'UIIV2ED67RW5PSMXJGLHSOQD',
  },
  {
    name: 'Bigfoot Bag Hug Sticker',
    category: 'Stickers',
    description: 'Bigfoot hugging an armful of Lumberjack Popcorn bags. We get it.',
    price: 4,
    image: 'images/sticker-bigfoot-hug.webp',
    illustration: true,
    squareVariationId: 'TLJ3NH23AHCYBIUDWT24JCIS',
  },
  {
    name: 'Bigfoot Cheers Sticker',
    category: 'Stickers',
    description: 'A very happy Bigfoot raising a bag of popcorn. Made for water bottles, laptops, and bumpers.',
    price: 4,
    image: 'images/sticker-bigfoot-cheers.webp',
    illustration: true,
    squareVariationId: '3HUYZFF7EPQNJTJLRF3THC2O',
  },
  {
    name: 'Lumberjack Hat',
    category: 'Merch',
    description: 'A Lumberjack Popcorn Company hat for fair days, camp days, and every day in between.',
    price: 30,
    image: null,
    icon: '🧢',
    comingSoon: true,
    squareVariationId: 'OCIQUHILXEGFZIWGTK3SRXRI',
  },
  {
    name: 'Enamel Camp Mug',
    category: 'Merch',
    description: 'A black enamel camp mug with the full-color Lumberjack. Made for coffee, cocoa, or a cup of kettle corn.',
    price: 12,
    image: 'images/mug.webp',
    illustration: true,
    squareVariationId: 'ECROV4HQOVVIROF4LLR4LWS7',
  },
  {
    name: 'Popcorn Earrings',
    category: 'Merch',
    description: 'Tiny popcorn-box earrings made from genuine LEGO® bricks, in red and white stripes. A fun gift for any popcorn lover.',
    price: 10,
    image: 'images/earrings.webp',
    illustration: true,
    squareVariationId: 'JME7UDDYPCYYUCALP2GXLDAO',
  },
  {
    name: 'T-Shirts & Hoodies',
    category: 'Merch',
    description: 'Lumberjack Popcorn tees and hoodies are on the way. Check back soon.',
    price: null,
    image: null,
    icon: '👕',
    comingSoon: true,
  },
];
