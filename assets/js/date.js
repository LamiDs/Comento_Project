const today = document.getElementById("currentDate");
const currentTime = document.getElementById("currentTime");
const apm = document.getElementById("apm");

function getTime() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = "AM";

  if (hours > 12) {
    ampm = "PM";
    hours %= 12;
  }

  today.innerText = `${year}년 ${month}월 ${day}일`;
  currentTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  apm.innerText = `${ampm}`;
}

getTime();
setInterval(getTime, 1000);
