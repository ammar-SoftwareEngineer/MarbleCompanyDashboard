// start date in Attendance page
let date = new Date();
let DateH = document.querySelectorAll("td.date");

DateH.forEach((dateHtml) => {
    dateHtml.innerHTML = date.toLocaleDateString();
});
// end date in Attendance page
// ################################################
// start date in shift page
let dateOne = new Date();
let DateShift = document.querySelector(".date-shift");
DateShift.innerHTML = dateOne.toDateString();

// end date in shift page
// ################################################