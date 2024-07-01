const leapYears = function(year) {
    if (year % 4 === 0) {
        // If divisible by 100, not a leap year, unless also divisible by 400.
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
