const joinManager = {
  elements: {
    idInput: document.getElementById("username"),
    pwInput: document.getElementById("password"),
    pwRepeatInput: document.getElementById("password-repeat"),
    submitBtn: document.getElementById("submitBtn"),
    meter: document.getElementById("meter"),
    InputGroup: document.querySelectorAll(".inputGroup"),
    error: document.querySelectorAll(".error"),
  },

  idArray: ["abc123", "aaa111"],

  overlapIdCheck(ID) {
    const IDs = this.idArray;
    for (let i = 0; i < IDs.length; i++) {
      if (ID == IDs[i]) {
        this.error(0);
        break;
      } else {
        this.noError(0);
      }
    }
  },

  handleIdInput() {
    const ID = this.elements.idInput.value;
    this.overlapIdCheck(ID);
  },

  submitId() {
    const ID = this.elements.idInput;
    const IdErrorCheck = this.elements.error[0].getAttribute("style");
    console.log(IdErrorCheck);
    if (String(IdErrorCheck) == "display:none") {
      this.idArray.push(ID.value);
    } else {
      alert("회원가입 불가");
    }
  },

  //비밀번호 검사 로직

  handlePWInput() {
    const pw = this.elements.pwInput.value;
    const strength = this.strengthIndicator(pw);
    if (strength < 3) {
      this.error(1);
    } else {
      this.noError(1);
    }
    this.elements.meter.setAttribute("value", "0");
    this.elements.meter.value = strength;
  },

  strengthIndicator(pw) {
    let strengths = 0;
    if (pw.length > 7) {
      strengths += 1;
    }
    if (this.hasPW(pw)) {
      strengths += 1;
    }
    if (this.hasSpecialPW(pw)) {
      strengths += 1;
    }
    return strengths;
  },

  hasPW(pw) {
    return /[0-9]/.test(pw) && /[a-z]/.test(pw);
  },

  hasSpecialPW(pw) {
    return /[!#@$%^&*)(+=._-]/.test(pw);
  },

  error(num) {
    this.elements.error[num].removeAttribute("style", "display:none");
    this.elements.error[num].setAttribute("style", "display:block");
  },

  noError(num) {
    this.elements.error[num].removeAttribute("style", "display:block");
    this.elements.error[num].setAttribute("style", "display:none");
  },

  //비밀번호 확인

  handlePWRepeatInput() {
    const pwRepeat = this.elements.pwRepeatInput.value;
    const pw = this.elements.pwInput.value;
    if (pw !== pwRepeat) {
      this.error(2);
    } else {
      this.noError(2);
    }
  },

  init() {
    this.elements.pwInput.addEventListener(
      "change",
      this.handlePWInput.bind(this)
    );
    this.elements.pwRepeatInput.addEventListener(
      "change",
      this.handlePWRepeatInput.bind(this)
    );
    this.elements.idInput.addEventListener(
      "change",
      this.handleIdInput.bind(this)
    );
    this.elements.submitBtn.addEventListener("click", this.submitId.bind(this));
  },
};

joinManager.init();
