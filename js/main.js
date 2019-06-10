let date = document.getElementById('date');
let clock = document.getElementById('clock');
function timeAndDate() {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let year = now.getFullYear();
  let time = '';
  // time and date format(time= hh:mm and date = mm/dd/yyyy )
  if (min < 10) {
    min = `0${min}`;
  }
  if (hour > 12) {
    time = `${hour - 12}:${min} PM`;
  } else if (hour === 0) {
    hour = 12;
    time = `${hour}:${min} AM`;
  } else {
    time = `${hour}:${min} AM`;
  }

  let date = `${month}/${day}/${year}`;
  // assigning time and date to website
  clock.innerHTML = time;
  document.getElementById('date').innerHTML = date;
}
let update = setInterval(timeAndDate, 1000);
//
