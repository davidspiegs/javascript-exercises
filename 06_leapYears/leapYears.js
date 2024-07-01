const leapYears = function(year) {
    if (year % 4 === 0) {
        // If divisible by 100, not a leap year, unless also divisible by 400.
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                // Divisible by 100, but not by 400 — not a leap year.
                return false;
            }
        }
        // Divisible by 4, but not by 100
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
