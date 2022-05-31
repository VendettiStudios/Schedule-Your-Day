// Dom elements
// gets current day month and time in specific format
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
// gets current time
let hoursNow = moment().hour();


// gets saved information from local storage
// sets background color based off time of day, past present & future colors
function background(){
    TimeBlocks.each(function() 
    {
        let hour = parseInt($(this).attr("data-hour").split('-')[0]);
    
        console.log(hour)
    
        if(hour < hoursNow) {
            $(this).addClass("past");
        }
        else if(hour === hoursNow){
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
    
    });}
    