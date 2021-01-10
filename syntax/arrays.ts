const carMakers = ['fords', 'toyota', 'chevy'];

const emptyArray: string[] = [];
emptyArray.push('2');
emptyArray.push(4);

const dates = [new Date(), new Date()];

let carsByMake: string[][] = [];
carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro'],
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();
carMakers.push(100);

carMakers.map((car) => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100);