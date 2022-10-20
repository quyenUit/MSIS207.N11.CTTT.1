const today = new Date();
const day = today.getDay();
const daylist = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
// console.log(`Today is : ${daylist[day]}.`);
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

let prepand = hour >= 12 ? " PM" : " AM";

hour = hour >= 12 ? hour - 12 : hour;

if (hour === "0" && prepand === " PM") {
  if (minute === "0" && second === "0") {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}
if (hour === 0 && prepand === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}

// console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);
document.body.innerHTML =
  "Today is : " +
  daylist[day] +
  " " +
  "Current time is : " +
  today.getHours() +
  ":" +
  today.getMinutes() +
  ":" +
  today.getSeconds();
