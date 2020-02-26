const moment = require("moment");

// I HAVE NO IDEA IF THIS IS WORKING 

moment.relativeTimeThreshold('s', 60);
moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 24);
moment.relativeTimeThreshold('d', 31);
moment.relativeTimeThreshold('M', 12);
moment.relativeTimeThreshold('y', 365);

// PRODUCT DURATION IN MONTHS AND DAYS

 var humanizedProductLifetime = moment.duration(184, "days").humanize(true);
 

// -> "Lifetime: in 6  months(24 Aug)"
// (true) add the "in" . does not display 6 months and 4 days as expected !

// var humanizedProductLifetime = moment.duration(184, "days").asMonths();
// -> "Lifetime: in 6.045298671430625 (24 Aug)"

// var humanizedProductLifetime = moment.duration(184, "days").months();
// -> "Lifetime: in 6 (24 Aug)"

// HOW TO FIND THE END OF USE (DATE) OF THE ORDER

var nextPurchaseDate_UglyFormat = moment().add(180, 'days').calendar();
var nextPurchaseDate_NiceFormat = moment(new Date(nextPurchaseDate_UglyFormat)).format('DD MMM');


console.log( "Lifetime:" + " " + humanizedProductLifetime + " " + "(" +  nextPurchaseDate_NiceFormat + ")");

// console.log("End of Use: " + " " + nextPurchaseDateNiceFormat);