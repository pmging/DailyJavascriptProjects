let dayRef = document.getElementById("day"); 
let DaysOfWeek = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let dateToday = new Date();
let dayToday = dateToday.getDay();
dayRef.innerHTML = `Today is <span>${DaysOfWeek[dayToday]}</span>`;
