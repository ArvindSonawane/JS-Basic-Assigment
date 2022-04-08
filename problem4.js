var getDaysInMonth = function(month,year) {
 
 return new Date(year, month, 0).getDate();

};
console.log(getDaysInMonth(6, 2012));
