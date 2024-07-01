const convertToCelsius = function(input) {
  let newTempC = ((input - 32) / 1.8);
  return newTempC;
};

const convertToFahrenheit = function(input) {
  let newTempF = ((input * 1.8) + 32);
  return newTempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
