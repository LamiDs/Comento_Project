const battery = document.getElementById("currentBattery");
const time = document.querySelector(".time");
battery.textContent = Number(100);
const currentBattery = setInterval(loseBattery, 1000);
function loseBattery() {
  battery.textContent--;
  if (battery.textContent == 0) {
    time.classList.add("timeover");
    clearInterval(currentBattery);
  }
}
