// Alarm Manager는 알람 시계 애플리케이션을 관리합니다.

const alarmManager = {
  // DRY 원칙을 지키기 위해 elements는 하나의 객체 안에 정리합니다.

  elements: {
    setHour: document.getElementById("setHour"),

    setMinute: document.getElementById("setMinute"),

    AM: document.getElementById("setAM"),

    PM: document.getElementById("setPM"),

    selectDay: document.querySelector(".selectDay"),

    addAlarmBtn: document.getElementById("commitAlarm"),

    alarmList: document.querySelector(".alarmList"),
  },

  AMPM: null,

  count: 0,

  // 이 메소드는 날짜 변경을 처리합니다.

  // Single Responsibility 원칙을 따릅니다.

  handleDayClick(event) {
    let targetText = event.target.value;

    if (targetText === "PM" || targetText === "AM") {
      this.AMPM = targetText;

      this.toggleDayButton(targetText);
    }
  },

  // 이 메소드는 날짜 버튼을 전환합니다.

  // Single Responsibility 원칙을 따릅니다.

  toggleDayButton(targetText) {
    this.elements[targetText].classList.toggle("checked");

    this.elements[targetText === "PM" ? "AM" : "PM"].classList.remove(
      "checked"
    );
  },

  // 이 메소드는 시간 변경을 처리합니다.

  // Single Responsibility 원칙을 따릅니다.

  handleHourChange(event) {
    let hour = event.target.value;

    if (hour >= 0 && hour < 24) {
      this.updateHour(hour, event);
    } else {
      this.invalidTimeAlert(event);
    }
  },

  // 이 메소드는 시간을 업데이트합니다.

  // Single Responsibility 원칙을 따릅니다.

  updateHour(hour, event) {
    this.AMPM = hour >= 12 ? "PM" : "AM";

    event.target.value = hour % 12;

    this.toggleDayButton(this.AMPM);
  },

  // 이 메소드는 분 변경을 처리합니다.

  // Single Responsibility 원칙을 따릅니다.

  handleMinuteChange(event) {
    let minute = event.target.value;

    if (minute < 0 || minute > 60) {
      this.invalidTimeAlert(event);
    }
  },

  // 이 메소드는 잘못된 시간 경고를 표시합니다.

  // Single Responsibility 원칙을 따릅니다.

  invalidTimeAlert(event) {
    alert("잘못된 시간 입니다.");

    event.target.value = "";
  },

  // 이 메소드는 알람을 설정합니다.

  // Single Responsibility 원칙을 따릅니다.

  setAlarm() {
    let { setHour, setMinute } = this.elements;

    let hours = setHour.value;

    let minutes = setMinute.value;

    if (this.isAlarmInputValid(hours, minutes)) {
      this.createAlarm(hours, minutes);

      this.resetAlarm();
    }
  },

  // 이 메소드는 알람 입력의 유효성을 검사합니다.

  // Single Responsibility 원칙을 따릅니다.

  isAlarmInputValid(hours, minutes) {
    if (this.AMPM == null || hours == "" || minutes == "") {
      alert("시간을 설정해주세요.");

      this.elements.setHour.focus();

      return false;
    }

    if (this.count >= 3) {
      alert("알람은 3개까지만 등록할 수 있습니다.");

      return false;
    }

    return true;
  },

  // 이 메소드는 새 알람을 만듭니다.

  // Single Responsibility 원칙을 따릅니다.

  createAlarm(hours, minutes) {
    let newDiv = document.createElement("div");

    let deleteBtn = this.createDeleteButton();

    newDiv.textContent = this.formatTime(hours, minutes);

    newDiv.classList.add("newAlarm");

    newDiv.appendChild(deleteBtn);

    this.elements.alarmList.appendChild(newDiv);

    this.count++;
  },

  // 이 메소드는 삭제 버튼을 만듭니다.

  // Single Responsibility 원칙을 따릅니다.

  createDeleteButton() {
    let deleteBtn = document.createElement("input");

    deleteBtn.setAttribute("type", "button");

    deleteBtn.setAttribute("value", "삭제");

    deleteBtn.classList.add("deleteBtn");

    return deleteBtn;
  },

  // 이 메소드는 시간을 포맷팅합니다.

  // Single Responsibility 원칙을 따릅니다.

  formatTime(hours, minutes) {
    return `${hours < 10 ? `0${hours}` : `${hours}`}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    } ${this.AMPM}`;
  },

  // 이 메소드는 알람을 재설정합니다.

  // Single Responsibility 원칙을 따릅니다.

  resetAlarm() {
    this.elements.setHour.value = "";

    this.elements.setMinute.value = "";

    this.elements.AM.classList.remove("checked");

    this.elements.PM.classList.remove("checked");
  },

  // 이 메소드는 알람 리스트 클릭을 처리합니다.

  // Single Responsibility 원칙을 따릅니다.

  handleAlarmListClick(event) {
    if (event.target.value == "삭제") {
      this.elements.alarmList.removeChild(event.target.parentNode);

      this.count--;
    }
  },

  // 이 메소드는 알람 매니저를 초기화합니다.

  // Single Responsibility 원칙을 따릅니다.

  init() {
    this.elements.selectDay.addEventListener(
      "click",
      this.handleDayClick.bind(this)
    );

    this.elements.setHour.addEventListener(
      "change",
      this.handleHourChange.bind(this)
    );

    this.elements.setMinute.addEventListener(
      "change",
      this.handleMinuteChange.bind(this)
    );

    this.elements.addAlarmBtn.addEventListener(
      "click",
      this.setAlarm.bind(this)
    );

    this.elements.alarmList.addEventListener(
      "click",
      this.handleAlarmListClick.bind(this)
    );
  },
};

alarmManager.init();
