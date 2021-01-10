// Multiple properties to describe on thing
// Mix and Match different rent data types
// Specific order is critical
const coolDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type CoolDrink = [string, boolean, number];

const pepsi: CoolDrink = ['brown', true, 40];
const sprite: CoolDrink = ['clear', true, 40];
const tea: CoolDrink = ['brown', false, 0];

// Why tuples are not going to be used that often

// we don't understand the purpose of the number
const carSpecs: [number, number] = [400, 3354];

// object is obvious what is the purpose 
const carStats = {
  horsepower: 400,
  weight: 3354
};
