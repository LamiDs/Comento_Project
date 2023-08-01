const setHour = document.getElementById("setHour");
const setMinute = document.getElementById("setMinute");
const submit = document.getElementById("commitAlarm");
const AM = document.getElementById("setAM");
const PM = document.getElementById("setPM");
const selectDay = document.querySelector(".selectDay");
const addAlarmBtn = document.getElementById("commitAlarm");
const alarmList = document.querySelector(".alarmList");

let AMPM = null;
let count = 0;
selectDay.addEventListener("click", (event) => {
  let targetText = event.target.value;
  if (targetText === "PM") {
    AMPM = "PM";
    PM.classList.toggle("checked");
    AM.classList.remove("checked");
  } else if (targetText === "AM") {
    AMPM = "AM";
    AM.classList.toggle("checked");
    PM.classList.remove("checked");
  }
});

setHour.addEventListener("change", (event) => {
  if (event.target.value > 12 && event.target.value < 24) {
    event.target.value %= 12;
    AMPM = "PM";
    PM.classList.add("checked");
    AM.classList.remove("checked");
  } else if (event.target.value < 12 && event.target.value >= 0) {
    AMPM = "AM";
    AM.classList.add("checked");
    PM.classList.remove("checked");
  } else if (event.target.value >= 24 || event.target.value < 0) {
    alert("잘못된 시간 입니다.");
    event.target.value = "";
  } else if ((event.target.value = 12)) {
    AMPM = "PM";
    PM.classList.add("checked");
    AM.classList.remove("checked");
  }
});

function setAlarm() {
  let hours = setHour.value;
  let minutes = setMinute.value;
  if (AMPM == null || hours == "" || minutes == "") {
    alert("시간을 설정해주세요.");
    setHour.focus();
  } else if (count >= 3) {
    alert("알람은 3개까지만 등록할 수 있습니다.");
  } else {
    let newDiv = document.createElement("div");
    let deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "삭제");
    deleteBtn.classList.add("deleteBtn");
    newDiv.textContent = `${hours < 10 ? `0${hours}` : `${hours}`}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    } ${AMPM}`;
    newDiv.classList.add("newAlarm");
    newDiv.appendChild(deleteBtn);
    alarmList.appendChild(newDiv);
    count++;
  }
  AM.classList.remove("checked");
  PM.classList.remove("checked");
  setHour.value = "";
  setMinute.value = "";
}

addAlarmBtn.addEventListener("click", setAlarm);
alarmList.addEventListener("click", (event) => {
  if (event.target.value == "삭제") {
    alarmList.removeChild(event.target.parentNode);
    count--;
  }
});
