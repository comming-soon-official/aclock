const CurrentTime = () => {
  const Myhours = document.getElementById("hour");
  const Myminutes = document.getElementById("minute");
  const Myseconds = document.getElementById("second");
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  if (hours >= 0 && hours <= 9) hours = "0" + hours;
  if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
  if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;
  Myhours.innerHTML = hours;
  Myminutes.innerHTML = minutes;
  Myseconds.innerHTML = seconds;

  const Mydate = document.getElementById("date");
  let dates = d.getDate();
  let months = d.getMonth();
  let years = d.getFullYear();
  Mydate.innerHTML = `${dates}/${months}/${years}`;

  const Myday = document.getElementById("day");
  let numberdays = d.getDay();
  let days = "";
  switch (numberdays) {
    case 0:
      days = "Sunday";
      break;
    case 1:
      days = "Monday";
      break;
    case 2:
      days = "Tuesday";
      break;
    case 3:
      days = "Wednesday";
      break;
    case 4:
      days = "Thursday";
      break;
    case 5:
      days = "Friday";
      break;
    case 6:
      days = "Saturday";
      break;
  }
  Myday.innerHTML = days;
};

window.onload = () => {
  setInterval(CurrentTime, 1000);
};
