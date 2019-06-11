let date = document.getElementById('date');
let clock = document.getElementById('clock');
let currentTemp = document.getElementById('temp');
window.addEventListener('load', () => {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(long, lat);
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4da5d012ad5456829aaa191102f8a340`;
      console.log(api);
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const temp = data.main.temp;
          let kelvin = 273.15;
          let celsius = temp - kelvin;
          let fahrenheit = Math.round((temp - kelvin) * (9 / 5) + 32);
          currentTemp.innerHTML = fahrenheit;
        });
    });
  }
});

// Time and Date
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
let temp = '';
//
