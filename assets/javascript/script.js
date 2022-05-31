let day = moment().format('dddd, MMMM Do YYYY');
let nineAM = $("#9am");
let tenAM = $("#10am");
let elevenAM = $("#11am");
let twelveAM = $("#12pm");
let onePM = $("#1pm");
let twoPM = $("#2pm");
let threePM = $("#3pm")
let fourPM = $("#4pm")
let fivePM = $("#5pm")
let userInput;
$('#currentDay').html(day);

let hoursNow = moment().hour();