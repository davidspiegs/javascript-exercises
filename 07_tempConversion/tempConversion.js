const convertToCelsius = function(input) {
  const newTempC = ((input - 32) / 1.8);
  const rounded = Number(newTempC.toFixed(1));
  return rounded;
};

const convertToFahrenheit = function(input) {
  const newTempF = ((input * 1.8) + 32);
  const rounded = Number(newTempF.toFixed(1));
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
