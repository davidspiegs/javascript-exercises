const removeFromArray = function(array, ...valueToRemove) {
    return array.filter(value => !valuesToRemove.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
