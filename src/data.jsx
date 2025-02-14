import {
  baconEggCheeseBiscuit,
  eggMcMuffin,
  sausageMcMuffin,
  sausageEggMcMuffin,
  bigBreakfast,
  bigBreakfastWithHotcakes,
  sausageBurrito,
  sausageBiscuit,
  sausageEggBiscuit,
} from "./imports/breakfast-imports";

import {
  bigMac,
  quaterPounderWithCheese,
  doubleQuarterPounderwithCheese,
  quarterPounderCheeseDeluxe,
  mcDouble,
  quarterPounderWithCheeseBacon,
  cheeseburger,
  doubleCheeseburger,
  hamburger,
} from "./imports/burger-imports";

import {
  deluxeMcCrispy,
  filetOFish,
  mcChicken,
  mcCrispy,
  spicyDeluxeMcCrispy,
  spicyMcCrispy,
} from "./imports/sandwich-imports";

import {
  oreoMcFlurry,
  MandMMcFlurry,
  chocolateShake,
  caramelSundae,
  vanillaShake,
  strawberryShake,
  hotFudgeSundae,
  bakedApplePie,
  chocolateChipCookie
} from "./imports/sweet-imports";

export default [
  {
    id: "1",
    name: "Bacon, Egg & Cheese Biscuit",
    category: "breakfast",
    img: baconEggCheeseBiscuit,
    cal: "460 Cal.",
    price: 3.79,
    description:
      "The Tavern's Bacon, Egg & Cheese Biscuit breakfast sandwich features a warm, buttermilk biscuit brushed with real butter, thick cut Applewood smoked bacon, a fluffy folded egg, and a slice of melty American cheese. There are 460 calories in a Bacon, Egg & Cheese Biscuit at Tavern's. ",
    ingredients: [
      "Biscuit",
      "Folded Egg",
      "Pasteurized Process American Cheese",
      "Thick Cut Applewood Smoked Bacon",
      "Salted Butter",
      "Clarified Butter",
    ],
  },
  {
    id: "2",
    name: "Egg McMuffin",
    category: "breakfast",
    img: eggMcMuffin,
    cal: "310 Cal.",
    price: 5.44,
    description:
      "Satisfy your Tavern's breakfast cravings with our Egg McMuffin breakfast sandwich—it's an excellent source of protein and oh so delicious. Tavern's Egg McMuffin recipe features a freshly cracked Grade A egg placed on a toasted English Muffin topped with real butter, lean Canadian bacon, and melty American cheese. There are 310 calories in an Egg McMuffin from Tavern's.",
    ingredients: [
      "English Muffin",
      "Egg",
      "Canadian Bacon",
      "Pasteurized Process American Cheese",
      "Salted Butter",
      "Clarified Butter",
    ],
  },
  {
    id: "3",
    name: "Sausage McMuffin",
    category: "breakfast",
    img: sausageMcMuffin,
    cal: "400 Cal.",
    price: 1.6,
    description:
      "Tavern's Sausage McMuffin recipe features a warm, freshly toasted English muffin, topped with a savory hot sausage patty and a slice of melty American cheese. There are 400 calories in a Sausage McMuffin at Tavern's. ",
    ingredients: [
      "Sausage Patty",
      "English Muffin",
      "Pasteurized Process American Cheese",
      "Salted Butter",
    ],
  },
  {
    id: "4",
    name: "Sausage McMuffin with Egg",
    category: "breakfast",
    img: sausageEggMcMuffin,
    cal: "480 Cal.",
    price: 2.99,
    description:
      "Start your day off with a Tavern's Sausage McMuffin with Egg breakfast sandwich. Our Sausage Egg McMuffin recipe features a savory hot sausage, a slice of melty American cheese and a delicious, freshly cracked egg all on a freshly toasted English muffin. There are 480 calories in Sausage McMuffin with Egg at Tavern's.",
    ingredients: [
      "English Muffin",
      "Egg",
      "Sausage Patty",
      "Pasteurized Process American Cheese",
      "Salted Butter",
      "Clarified Butter",
    ],
  },
  {
    id: "5",
    name: "Big Breakfast",
    category: "breakfast",
    img: bigBreakfast,
    cal: "760 Cal.",
    price: 6.31,
    description:
      "Our full, satisfying Big Breakfast is perfect for any morning. Ever wondered what's in a Tavern's Big Breakfast? Wake up to a breakfast meal with a warm biscuit, fluffy scrambled eggs, savory Tavern's sausage and crispy golden Hash Browns. There are 760 calories in Big Breakfast at Tavern's.",
    ingredients: [
      "Scrambled Eggs",
      "Biscuit",
      "Hash Browns",
      "Sausage Patty",
      "Salted Butter",
      "Clarified Butter",
    ],
  },
  {
    id: "6",
    name: "Big Breakfast With Hotcakes",
    category: "breakfast",
    img: bigBreakfastWithHotcakes,
    cal: "1340 Cal.",
    price: 7.6,
    description:
      "Tavern's Big Breakfast with Hotcakes satisfies with both sweet and savory breakfast favorites. Fill up with a warm Biscuit, savory hot Sausage, fluffy scrambled Eggs, crispy Hash Browns, and golden brown Hotcakes with a side of real butter and the sweet flavor of maple. There are 1,340 calories in Tavern's Big Breakfast with Hotcakes.",
    ingredients: [
      "Hotcakes",
      "Scrambled Eggs",
      "Biscuit",
      "Hotcake Syrup",
      "Hash Browns",
      "Sausage Patty",
      "Salted Whipped Butter",
      "Salted Butter",
      "Clarified Butter",
    ],
  },
  {
    id: "7",
    name: "Sausage Burrito",
    category: "breakfast",
    img: sausageBurrito,
    cal: "310 Cal.",
    price: 2.79,
    description:
      " Tavern's Breakfast Burrito recipe is loaded with fluffy scrambled egg, pork sausage, melty cheese, green chiles, and onion! It's wrapped in a soft tortilla, making it the perfect grab and go breakfast. There are 310 calories in a Tavern's Sausage breakfast burrito.",
    ingredients: [
      "Scrambled Egg Sausage And Vegetable Mix",
      "Flour Tortilla",
      "Pasteurized Process American Cheese",
    ],
  },
  {
    id: "8",
    name: "Sausage Biscuit",
    category: "breakfast",
    img: sausageBiscuit,
    cal: "460 Cal.",
    price: 2.5,
    description:
      "Tavern's Sausage Biscuit is the perfect sausage breakfast sandwich to start your day! Our Sausage Biscuit recipe is made with sizzling hot sausage on a warm buttermilk biscuit that's topped with real butter and baked to perfection.",
    ingredients: ["Biscuit", "Sausage Patty", "Salted Butter"],
  },
  {
    id: "9",
    name: "Sausage Biscuit with Egg",
    category: "breakfast",
    img: sausageEggBiscuit,
    cal: "530 Cal.",
    price: 3.5,
    description:
      "Tavern's Sausage and Egg Biscuit sandwich features a warm, flaky biscuit brushed with real butter, a sizzling hot pork sausage patty, and a classic Tavern's folded egg. It's the perfect savory biscuit breakfast sandwich when you're looking for a quick, easy breakfast.",
    ingredients: [
      "Biscuit",
      "Folded Egg",
      "Sausage Patty",
      "Salted Butter",
      "Clarified Butter",
    ],
  },
  {
    id: "10",
    name: "Big Mac",
    category: "burgers",
    img: bigMac,
    cal: "590 Cal.",
    price: 5.38,
    description:
      "Ever wondered what's on a Big Mac? The Tavern's Big Mac is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese. It contains no artificial flavors, preservatives, or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
    ingredients: [
      "Big Mac Bun",
      "100% Beef Patty",
      "Shredded Lettuce",
      "Big Mac Sauce",
      "Pasteurized Process American Cheese",
      "Pickle Slices",
      "Onions",
    ],
  },
  {
    id: "11",
    name: "Quarter Pounder with Cheese",
    category: "burgers",
    img: quaterPounderWithCheese,
    cal: "520 Cal.",
    price: 5.48,
    description:
      "Each Quarter Pounder with Cheese burger features a ¼ lb of 100% fresh beef that's hot, deliciously juicy and cooked when you order. What comes on a Quarter Pounder? Each fresh beef burger is seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun. Our QPC contains no artificial flavors, preservatives or added colors from artificial sources.^ Our pickle contains an artificial preservative, so skip it if you like. A Quarter Pounder with Cheese has 520 Calories.",
    ingredients: [
      "Quarter Pound 100% Beef Patty",
      "Quarter Pound Bun",
      "Pasteurized Process American Cheese",
      "Ketchup",
      "Pickle Slices",
      "Onions",
      "Mustard",
    ],
  },
  {
    id: "12",
    name: "Double Quarter Pounder with Cheese",
    category: "burgers",
    img: doubleQuarterPounderwithCheese,
    cal: "740 Cal.",
    price: 10.14,
    description:
      "Each Double Quarter Pounder with Cheese features two quarter pound 100% fresh beef burger patties that are hot, deliciously juicy and cooked when you order. Tavern's beef patties are seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty cheese on a sesame seed bun. It contains no artificial flavors, preservatives or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
    ingredients: [
      "Quarter Pound 100% Beef Patty",
      "Quarter Pound Bun",
      "Pasteurized Process American Cheese",
      "Ketchup",
      "Pickle Slices",
      "Onions",
      "Mustard",
    ],
  },
  {
    id: "13",
    name: "Quarter Pounder with Cheese Deluxe",
    category: "burgers",
    img: quarterPounderCheeseDeluxe,
    cal: "630 Cal.",
    price: 6.49,
    description:
      "Tavern's Quarter Pounder with Cheese Deluxe is a fresh take on a Quarter Pounder classic burger. Crisp shredded lettuce and three Roma tomato slices top a ¼ lb of 100% Tavern's fresh beef that's hot, deliciously juicy and cooked when you order. Seasoned with just a pinch of salt and pepper and sizzled on our flat iron grill. Layered with two slices of melty American cheese, creamy mayo, slivered onions and tangy pickles on a soft, fluffy sesame seed hamburger bun. There are 630 calories in a Quarter Pounder with Cheese Deluxe.",
    ingredients: [
      "Quarter Pound 100% Beef Patty",
      "Quarter Pound Bun",
      "Pasteurized Process American Cheese",
      "Roma Tomato",
      "Ketchup",
      "Shredded Lettuce",
      "Mayonnaise",
      "Pickle Slices",
      "Onions",
      "Mustard",
    ],
  },
  {
    id: "14",
    name: "McDouble",
    category: "burgers",
    img: mcDouble,
    cal: "400 Cal.",
    price: 1.39,
    description:
      "The classic McDouble burger stacks two 100% pure beef patties seasoned with just a pinch of salt and pepper. Wondering what the difference is between a McDouble and a Double Cheeseburger? A slice of cheese! What comes on a McDouble? Well, it's topped with tangy pickles, chopped onions, ketchup, mustard and a melty slice of American cheese. There are 400 calories in a McDouble. The McDouble contains no artificial flavors, preservatives or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
    ingredients: [
      "100% Beef Patty",
      "Regular Bun",
      "Pasteurized Process American Cheese",
      "Pickle Slices",
      "Ketchup",
      "Onions",
      "Mustard",
    ],
  },
  {
    id: "15",
    name: "Quarter Pounder with Cheese Bacon",
    category: "burgers",
    img: quarterPounderWithCheeseBacon,
    cal: "630 Cal.",
    price: 5.79,
    description:
      "Each Quarter Pounder with Cheese Bacon burger features thick-cut applewood smoked bacon atop a ¼ lb of 100% Tavern's fresh beef that's cooked when you order. It's a hot, deliciously juicy bacon cheeseburger, seasoned with just a pinch of salt and pepper and sizzled on our flat iron grill. Layered with two slices of melty American cheese, slivered onions and tangy pickles on a soft, fluffy sesame seed hamburger bun.",
    ingredients: [
      "Quarter Pound 100% Beef Patty",
      "Quarter Pound Bun",
      "Pasteurized Process American Cheese",
      "Thick Cut Applewood Smoked Bacon",
      "Ketchup",
      "Pickle Slices",
      "Onions",
      "Mustard",
    ],
  },
  {
    id: "16",
    name: "Cheeseburger",
    category: "burgers",
    img: cheeseburger,
    cal: "300 Cal.",
    price: 2.49,
    description:
      "Enjoy the cheesy deliciousness of a Tavern's Cheeseburger! Our simple, classic cheeseburger begins with a 100% pure beef burger patty seasoned with just a pinch of salt and pepper. The Tavern's Cheeseburger is topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese. It contains no artificial flavors, preservatives or added colors from artificial sources.* Our pickle contains an artificial preservative, so skip it if you like. ",
    ingredients: [
      "Regular Bun",
      "100% Beef Patty",
      "Pasteurized Process American Cheese",
      "Ketchup",
      "Pickle Slices",
      "Onions",
      "Mustard",
    ],
  },
  {
    id: "17",
    name: "Double Cheeseburger",
    category: "burgers",
    img: doubleCheeseburger,
    cal: "450 Cal.",
    price: 4.16,
    description:
      "The Tavern's Double Cheeseburger features two 100% pure all beef patties seasoned with just a pinch of salt and pepper. It's topped with tangy pickles, chopped onions, ketchup, mustard, and two melty American cheese slices. Wondering what is the difference between McDouble and Double Cheeseburger? It's the extra slice of American cheese in the Double Cheeseburger. There are 450 calories in a Tavern's Double Cheeseburger. It contains no artificial flavors, preservatives or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
    ingredients: [
      "100% Beef Patty",
      "Regular Bun",
      "Pasteurized Process American Cheese",
      "Pickle Slices",
      "Ketchup",
      "Onions",
      "Mustard",
    ],
  },
  {
    id: "18",
    name: "Hamburger: The Classic Tavern's Burger",
    category: "burgers",
    img: hamburger,
    cal: "250 Cal.",
    price: 2.54,
    description:
      "The Classic Tavern's Hamburger starts with a 100% pure beef patty seasoned with just a pinch of salt and pepper. Then, the Tavern's burger is topped with a tangy pickle, chopped onions, ketchup, and mustard. What's the difference between a Hamburger and a Cheeseburger, you ask? A slice of cheese in the latter! There are 250 calories in a Tavern's Hamburger. It contains no artificial flavors, preservatives, or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
    ingredients: [
      "Regular Bun",
      "100% Beef Patty",
      "Ketchup",
      "Pickle Slices",
      "Onions",
      "Mustard",
    ],
  },
  {
    id: "19",
    name: "McCrispy",
    category: "sandwiches",
    img: mcCrispy,
    cal: "470 Cal.",
    price: 5.49,
    description:
      "The Tavern's McCrispy is a southern-style fried chicken sandwich that's crispy, juicy and tender perfection. It's topped with crinkle-cut pickles and served on a toasted, buttered potato roll. The McCrispy™ has 470 calories.",
    ingredients: [
      "Crispy Chicken Fillet",
      "Potato Roll",
      "Crinkle Cut Pickle",
      "Salted Butter",
    ],
  },
  {
    id: "20",
    name: "Deluxe McCrispy",
    category: "sandwiches",
    img: deluxeMcCrispy,
    cal: "530 Cal.",
    price: 6.2,
    description:
      "Go deluxe with the Tavern's Deluxe McCrispy! Wondering what comes on the sandwich? Our Deluxe McCrispy features a crispy chicken fillet with shredded lettuce, Roma tomatoes and mayo to take crispy, juicy and tender to the next level.",
    ingredients: [
      "Crispy Chicken Fillet",
      "Potato Roll",
      "Roma Tomato",
      "Shredded Lettuce",
      "Mayonnaise",
    ],
  },
  {
    id: "21",
    name: "Spicy McCrispy",
    category: "sandwiches",
    img: spicyMcCrispy,
    cal: "530 Cal.",
    price: 5.49,
    description:
      "With our Spicy Pepper Sauce topping the southern style fried chicken fillet on a toasted potato roll, this sandwich was made for those who like it crispy, juicy, tender and hot.",
    ingredients: [
      "Crispy Chicken Fillet",
      "Potato Roll",
      "Spicy Pepper Sauce",
      "Crinkle Cut Pickle",
    ],
  },
  {
    id: "22",
    name: "Spicy Deluxe McCrispy",
    category: "sandwiches",
    img: spicyDeluxeMcCrispy,
    cal: "530 Cal.",
    price: 6.2,
    description:
      "The Spicy Deluxe McCrispy is big on everything, including heat. Our southern-style fried chicken fillet on a potato roll, topped with shredded lettuce, Roma tomatoes and Spicy Pepper Sauce kicks crispy, juicy and tender up to the highest level.",
    ingredients: [
      "Crispy Chicken Fillet",
      "Potato Roll",
      "Roma Tomato",
      "Spicy Pepper Sauce",
      "Shredded Lettuce",
    ],
  },
  {
    id: "23",
    name: "Filet-O-Fish",
    category: "sandwiches",
    img: filetOFish,
    cal: "390 Cal.",
    price: 3.79,
    description:
      "Dive into our wild-caught Filet-O-Fish, a classic Tavern's fish sandwich! Our fish sandwich recipe features a crispy fish filet patty made with wild-caught Alaskan Pollock on melty American cheese and is topped with creamy Tavern's tartar sauce, all served on a soft, steamed bun. This Filet-O-Fish sandwich has fish sourced from sustainably managed fisheries. ",
    ingredients: [
      "Fish Filet Patty",
      "Regular Bun",
      "Tartar Sauce",
      "Pasteurized Process American Cheese Half Slice",
    ],
  },
  {
    id: "24",
    name: "McChicken",
    category: "sandwiches",
    img: mcChicken,
    cal: "400 Cal.",
    price: 3.79,
    description:
      "It's a classic for a reason. Savor the satisfying crunch of our juicy chicken patty, topped with shredded lettuce and just the right amount of creamy mayonnaise, all served on a perfectly toasted bun. The McChicken has 400 calories.",
    ingredients: [
      "McChicken Patty",
      "Regular Bun",
      "Shredded Lettuce",
      "Mayonnaise",
    ],
  },
  {
    id: "25",
    name: "OREO Shamrock McFlurry",
    category: "sweets",
    img: oreoMcFlurry,
    cal: "550 Cal.",
    price: 2.36,
    description:
      "Tavern's OREO Shamrock McFlurry is made with creamy vanilla Soft Serve then blended with our legendary Shamrock Shake syrup and OREO cookie pieces mixed throughout.",
    ingredients: [
      "Vanilla Reduced Fat Ice Cream",
      "OREO Cookie Pieces",
      "McFlurry Shamrock Syrup",
    ],
  },
  {
    id: "26",
    name: "McFlurry with M&M'S Candies",
    category: "sweets",
    img: MandMMcFlurry,
    cal: "640 Cal.",
    price: 2.39,
    description:
      "Treat yourself to a delicious M&M'S McFlurry! The Tavern's McFlurry with M&M'S is a sweet combination of creamy vanilla soft serve with crunchy M&M'S chocolate candies swirled in. It's a perfectly sweet addition to any Tavern's meal.",
    ingredients: [
      "Vanilla Reduced Fat Ice Cream",
      "M&M Mini Milk Chocolate Candies",
    ],
  },
  {
    id: "27",
    name: "Chocolate Shake",
    category: "sweets",
    img: chocolateShake,
    cal: "520 Cal.",
    price: 2.89,
    description:
      "Try the Tavern's Chocolate Shake, the perfect sweet treat for any time of the day. Our chocolate shake recipe features delicious soft serve and chocolate syrup, finished with whipped light cream.",
    ingredients: [
      "Vanilla Reduced Fat Ice Cream",
      "Chocolate Shake Syrup",
      "Whipped Light Cream",
    ],
  },

  {
    id: "28",
    name: "Vanilla Shake",
    category: "sweets",
    img: vanillaShake,
    cal: "480 Cal.",
    price: 2.86,
    description:
      "Sip on a delicious Vanilla Shake from Tavern's, a smooth, rich and creamy treat for any time of the day! Tavern's Vanilla Shake recipe features creamy vanilla soft serve and vanilla syrup finished with whipped light cream for a cool, tasty treat.",
    ingredients: [
      "Vanilla Reduced Fat Ice Cream",
      "Vanilla Shake Syrup",
      "Whipped Light Cream",
    ],
  },
  {
    id: "29",
    name: "Strawberry Shake",
    category: "sweets",
    img: strawberryShake,
    cal: "470 Cal.",
    price: 2.86,
    description:
      "Get a delicious Tavern's Strawberry Shake, the perfect sweet treat for any day. Our Strawberry Shake recipe features creamy vanilla soft serve blended with strawberry syrup and finished with whipped light cream.",
    ingredients: [
      "Vanilla Reduced Fat Ice Cream",
      "Strawberry Shake Syrup",
      "Whipped Light Cream",
    ],
  },
  {
    id: "30",
    name: "Hot Caramel Sundae",
    category: "sweets",
    img: caramelSundae,
    cal: "330 Cal.",
    price: 1.49,
    description:
      "Treat yourself to a Hot Caramel Sundae at Tavern's! This Caramel Sundae combines creamy vanilla soft serve and warm, buttery caramel topping.",
    ingredients: ["Vanilla Reduced Fat Ice Cream", "Caramel Topping"],
  },
  {
    id: "31",
    name: "Hot Fudge Sundae",
    category: "sweets",
    img: hotFudgeSundae,
    cal: "330 Cal.",
    price: 1.49,
    description:
      "Treat yourself to a delicious Hot Fudge Sundae from Tavern's! Our classic Hot Fudge Sundae is made with creamy vanilla soft serve and smothered in chocolatey hot fudge topping. It's a perfectly sweet addition to any of your favorite Tavern's items.",
    ingredients: ["Vanilla Reduced Fat Ice Cream", "Hot Fudge Topping"],
  },
  {
    id: "32",
    name: "Baked Apple Pie",
    category: "sweets",
    img: bakedApplePie,
    cal: "230 Cal.",
    price: 1,
    description:
      "Tavern's Baked Apple Pie recipe features 100% American-grown apples, and a lattice crust baked to perfection and topped with sprinkled sugar.",
  },
  {
    id: "33",
    name: "Chocolate Chip Cookie",
    category: "sweets",
    img: chocolateChipCookie,
    cal: "170 Cal.",
    price: 0.99,
    description:
      "Enjoy a warm & tasty Chocolate Chip Cookie from Tavern's! An amazingly delicious, soft and chewy Chocolate Chip Cookie, our Chocolate Chip Cookie recipe features a perfectly warm, soft baked cookie loaded with gooey chocolate chips.",
  },
];
