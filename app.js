// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}//
let day1 = [];
let day2 = [];
let day3 = [];
let day4 = [];
let day5 = [];

async function getData(x) {
   document.getElementById("titletext").innerHTML = x;
   console.log(x);
   const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + x + "&units=imperial&appid=89ea9cecd445a2a8ddd0bb82cab588d3");
   const todayResponse = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + x + "&units=imperial&appid=89ea9cecd445a2a8ddd0bb82cab588d3");
   const todayData = await todayResponse.json();
   const data = await response.json();

   day1 = [];
   day2 = [];
   day3 = [];
   day4 = [];
   day5 = [];

   for (let i = 0; i <= 7; i++) {
      day1.push(data.list[i].main.temp);
   }
   for (let i = 8; i <= 15; i++) {
      day2.push(data.list[i].main.temp);
   }
   for (let i = 16; i <= 23; i++) {
      day3.push(data.list[i].main.temp);
   }
   for (let i = 24; i <= 31; i++) {
      day4.push(data.list[i].main.temp);
   }
   for (let i = 32; i <= 39; i++) {
      day5.push(data.list[i].main.temp);
   }

   // SETS LOCAL DAYS //
   const weekday = new Array(7);
   weekday[0] = "Sunday";
   weekday[1] = "Monday";
   weekday[2] = "Tuesday";
   weekday[3] = "Wednesday";
   weekday[4] = "Thursday";
   weekday[5] = "Friday";
   weekday[6] = "Saturday";
   const date = new Date();
   const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
   const twoDays = new Date(date.getTime() + 2 * 24 * 60 * 60 * 1000);
   const threeDays = new Date(date.getTime() + 3 * 24 * 60 * 60 * 1000);
   const fourDays = new Date(date.getTime() + 4 * 24 * 60 * 60 * 1000);
   const fiveDays = new Date(date.getTime() + 5 * 24 * 60 * 60 * 1000);

   document.getElementById("daytoday").innerHTML = weekday[date.getDay()];
   document.getElementById("day1").innerHTML = weekday[tomorrow.getDay()];
   document.getElementById("day2").innerHTML = weekday[twoDays.getDay()];
   document.getElementById("day3").innerHTML = weekday[threeDays.getDay()];
   document.getElementById("day4").innerHTML = weekday[fourDays.getDay()];
   document.getElementById("day5").innerHTML = weekday[fiveDays.getDay()];

   document.getElementById("hightoday").innerHTML = "High of " + Math.round(todayData.main.temp_max);
   document.getElementById("high1").innerHTML = "High of " + Math.round(Math.max(...day1));
   document.getElementById("high2").innerHTML = "High of " + Math.round(Math.max(...day2));
   document.getElementById("high3").innerHTML = "High of " + Math.round(Math.max(...day3));
   document.getElementById("high4").innerHTML = "High of " + Math.round(Math.max(...day4));
   document.getElementById("high5").innerHTML = "High of " + Math.round(Math.max(...day5));

   document.getElementById("lowtoday").innerHTML = "Low of " + Math.round(todayData.main.temp_min);
   document.getElementById("low1").innerHTML = "Low of " + Math.round(Math.min(...day1));
   document.getElementById("low2").innerHTML = "Low of " + Math.round(Math.min(...day2));
   document.getElementById("low3").innerHTML = "Low of " + Math.round(Math.min(...day3));
   document.getElementById("low4").innerHTML = "Low of " + Math.round(Math.min(...day4));
   document.getElementById("low5").innerHTML = "Low of " + Math.round(Math.min(...day5));

   document.getElementById("conditiontoday").innerHTML = todayData.weather[0].main;
   document.getElementById("condition1").innerHTML = data.list[3].weather[0].main;
   document.getElementById("condition2").innerHTML = data.list[11].weather[0].main;
   document.getElementById("condition3").innerHTML = data.list[19].weather[0].main;
   document.getElementById("condition4").innerHTML = data.list[27].weather[0].main;
   document.getElementById("condition5").innerHTML = data.list[35].weather[0].main;

   document.getElementById("feelsliketoday").innerHTML = "Feels Like " + Math.round(todayData.main.feels_like);
   document.getElementById("feelslike1").innerHTML = "Feels Like " + Math.round(data.list[3].main.feels_like);
   document.getElementById("feelslike2").innerHTML = "Feels Like " + Math.round(data.list[11].main.feels_like);
   document.getElementById("feelslike3").innerHTML = "Feels Like " + Math.round(data.list[19].main.feels_like);
   document.getElementById("feelslike4").innerHTML = "Feels Like " + Math.round(data.list[27].main.feels_like);
   document.getElementById("feelslike5").innerHTML = "Feels Like " + Math.round(data.list[35].main.feels_like);
}
