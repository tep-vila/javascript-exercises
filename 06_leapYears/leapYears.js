const leapYears = function(year) {
    return !(year%400) ? true : (year%4)? false : (year%100)? true :false  ;
};
// 100 with remainder = leap year
// Do not edit below this line
module.exports = leapYears;
