let date = document.getElementById('date');
let dateTwo = document.getElementById('dateTwo');
let clock = document.getElementById('clock');
let clockTwo = document.getElementById('clockTwo');
let currentTemp = document.getElementById('temp');
let box1 = document.getElementById('box1');
let timeDateShow = document.getElementById('timeDateShow');
let clockSet = document.getElementById('check');
/////TOGGLES////
// Date and Clock
box1.addEventListener('click', function() {
  console.log('clicked');
  timeDateShow.classList.toggle('timeDateShow');
});

// Temp
// window.addEventListener('load', () => {
//   let long;
//   let lat;
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//       long = position.coords.longitude;
//       lat = position.coords.latitude;
//       const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4da5d012ad5456829aaa191102f8a340`;
//       fetch(api)
//         .then(response => {
//           return response.json();
//         })
//         .then(data => {
//           const temp = data.main.temp;
//           let kelvin = 273.15;
//           let celsius = temp - kelvin;
//           let fahrenheit = Math.round((temp - kelvin) * (9 / 5) + 32);
//           currentTemp.innerHTML = fahrenheit;
//         });
//     });
//   }
// });

// Time and Date
function timeAndDate() {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let days = now.getDay();
  let year = now.getFullYear();
  let seconds = now.getSeconds();
  let time = '';
  let timeTwo = '';
  let set = '';
  // time and date format(time= hh:mm and date = mm/dd/yyyy )
  if (min < 10) {
    min = `0${min}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (hour > 12) {
    set = 'PM';
    time = `${hour - 12}:${min} PM`;
    timeTwo = `${hour - 12}:${min}:${seconds} PM`;
  } else if (hour === 0) {
    set = 'AM';
    hour = 12;
    time = `${hour}:${min} AM`;
    timeTwo = `${hour}:${min}:${seconds} AM`;
  } else {
    set = 'AM';
    time = `${hour}:${min} AM`;
    timeTwo = `${hour}:${min}:${seconds} AM`;
  }
  let d_names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  let m_names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December'
  ];

  let d = `${month}/${day}/${year}`;
  let dTwo = `${d_names[days]}, ${m_names[month - 1]} ${day}, ${year}`;

  // assigning time and date to website
  clock.innerHTML = time;
  clockTwo.innerHTML = timeTwo;
  date.innerHTML = d;
  clockSet.innerHTML = set;
  dateTwo.innerHTML = dTwo;
}
let update = setInterval(timeAndDate, 1000);
let temp = '';

// Fullscreen

let fullscreen = document.getElementById('fullscreen');
fullscreen.addEventListener('click', function() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
});
