// ====================
// Variables
// ====================
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let steps: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Employee {};
let employee: Employee = new Employee();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// type inference is only going to work 
// if the assignment is in the same line
// as the definition

// use type inference whenever we can

// use type annotations in following case:
// 1) Function that returns the any type
const json = '{"x": 10, "y": 20 }';
const coordinates: { x: number, y: number } = JSON.parse(json);

// 2) Declare variable in one line and initialize in a later
let  words = ['red', 'green', 'blue'];
let foundWord : boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}


// ====================
// Functions
// ====================
// always use type annotation in arguments
// always use type annotations in expected type
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

// Never reach the end of function, exit
const throwError = (message: string): never => {
  throw new Error(message);
}

const maybeThrowError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
  console.log(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// Destructuring with annotation
const logWeatherES2015 = ({ date, weather }: {date: Date, weather: string}) => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);


// ====================
// Objects
// ====================
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// const age = profile.age;
const { age }: { age: number} = profile;
const { coords: { lat, lng } }: { 
  coords: { 
    lat: number; 
    lng: number 
  }
}= profile;