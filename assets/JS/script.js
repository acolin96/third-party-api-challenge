var dateDisplayEl = $("#currentDay");
var timeDisplayEl = $("#currentTime");
var nowEl = dayjs().format("MMM D, YYYY");


// dateDisplayEl.text(dayjs().format("dddd MMM D, YYYY h:m:s"))


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function() {
    function updateTime() {
        var now = dayjs();
        timeDisplayEl.text(now.format("dddd MMM D, YYYY h:mm:ss"));
    }

    updateTime();

    setInterval(updateTime, 1000);
});


//   $(function updateTime() {
//      var now = dayjs();

    
//     timeDisplayEl.text(now.format("dddd MMM D, YYYY h:mm:s"));

//     updateTime();

//     setInterval(updateTime, 1000);

// });
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
   
$(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var textValue = $(this).siblings("textarea").val();
  
    
    localStorage.setItem(timeBlockId, textValue);
  });
  
  
  
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    // Get the current hour using Day.js in 24-hour format
var currentHour = dayjs().format("H:mm:ss");

// Loop through each time block
$(".time-block").each(function() {
  var timeBlockId = $(this).attr("id");
  var timeBlockHour = timeBlockId.split("-")[1];

  // Compare the time block hour with the current hour and apply the appropriate class
  if (timeBlockHour < currentHour) {
    $(this).removeClass("present future").addClass("past");
  } else if (timeBlockHour == currentHour) {
    $(this).removeClass("past future").addClass("present");
  } else {
    $(this).removeClass("past present").addClass("future");
  }
});


    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.   