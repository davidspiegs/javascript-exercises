const sumAll = (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
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

console.log(sumAll(3,5));
// Do not edit below this line
module.exports = sumAll;
