// Scuber Functions
const distanceFromHqInBlocks = (location) => {
  const hq = 42;
  return Math.abs(location - hq);
};

const distanceFromHqInFeet = (location) => distanceFromHqInBlocks(location) * 264;

const distanceTravelledInFeet = (start, destination) => Math.abs(start - destination) * 264;

const calculatesFarePrice = (start, destination) => {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
};

// Previous Lab Functions
const saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`;

const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`;

const wrapAdjective = (flair = "*") => (adjective = "special") => `You are ${flair}${adjective}${flair}!`;

const divide = function() {
  return 2000 / 100;
};

const square = (num) => num * num;

const add = (a, b) => a + b;

// New Functions for First-Class Functions Lab
const receivesAFunction = (callback) => callback();

function namedFunction() {
  return "I am a named function!";
}

const returnsANamedFunction = () => namedFunction;

const returnsAnAnonymousFunction = () => () => "I am an anonymous function!";

// Export for test suite
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
  saturdayFun,
  mondayWork,
  wrapAdjective,
  divide,
  square,
  add,
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};