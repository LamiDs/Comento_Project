currentDate = document.getElementById("currentDate");
currentDay = document.getElementById("currentDay");

function getTime() {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  let day = time.getDay();

  const week = ["월", "화", "수", "목", "금", "토"];
  let weekday = week[day];

  currentDate.innerText = `${year}년 ${month}월 ${day}일`;

  currentDay.innerText = `${weekday}요일`;
}

getTime();
