const sumAll = (num1, num2) => {
    // Need to make sure both values are numbers
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";

    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";

    } else {
        
        let smallerValue = Math.min(num1, num2);
        let largerValue = Math.max(num1, num2);
        let sum = 0;

        for (let i = smallerValue; i <= largerValue; i++) {
            sum += i;
    }
    return sum;
    }
};
// Do not edit below this line
module.exports = sumAll;
