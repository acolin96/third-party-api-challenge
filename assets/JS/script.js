var dateDisplayEl = $("#currentDay");
var timeDisplayEl = $("#currentTime");
var userInput = $(".description");
var now = dayjs().format("dddd MMM D, YYYY");
var currentHour = dayjs().format("H:mm:ss")

var workHours = [
  (hour9El = $("#hour-9")),
  (hour10El = $("#hour-10")),
  (hour11El = $("#hour-11")),
  (hour12El = $("#hour-12")),
  (hour13El = $("#hour-13")),
  (hour14El = $("#hour-14")),
  (hour15El = $("#hour-15")),
  (hour16El = $("#hour-16")),
  (hour17El = $("#hour-17")),
];


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.


$(function() {
  function updateTime() {
      var now = dayjs();
      timeDisplayEl.text(now.format("dddd MMM D, YYYY h:mm:ss"));
  }
  updateTime();
  setInterval(updateTime, 1000);
});




// TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

$(".saveBtn").on("click", function() {
  var timeBlockId = $(this).parent().attr("id");
  var textValue = $(this).siblings("textarea").val();

  
  localStorage.setItem(timeBlockId, textValue);
  
  
});

// Get the current hour using Day.js in 24-hour format
  var currentHour = dayjs().format("H");
  
  // Loop through each time block
  $(".time-block").each(function() {
      var timeBlockId = $(this).attr("id");
      var timeBlockHour = timeBlockId.split("-")[1];
      
      if (timeBlockHour < currentHour) {
          $(this).removeClass("present future").addClass("past");
      } else if (timeBlockHour === currentHour) {
          $(this).removeClass("past future").addClass("present");
      } else {
          $(this).removeClass("past present").addClass("future");
      }
  });
    



    //     var currentHour = dayjs().format("H");

// // Loop through each time block
// $(".time-block").each(function() {
//   var timeBlockId = $(this).attr("id");
//   var timeBlockHour = parseInt(timeBlockId.split("-")[1]);

//   if (timeBlockHour < currentHour) {
//     $(this).removeClass("present future").addClass("past");
//   } else if (timeBlockHour === currentHour) {
//     $(this).removeClass("past future").addClass("present");
//   } else {
//     $(this).removeClass("past present").addClass("future");
//   }
// });
 




    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.   