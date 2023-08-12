const PWManager = {
  elements: {
    PWInput: document.getElementById("password"),
    meter: document.getElementById("meter"),
    InputGroup: document.querySelectorAll(".inputGroup"),
    TextBox: document.querySelector(".textbox"),
  },

  handlePWInput() {
    const pw = this.elements.PWInput.value;
    const strength = this.strengthIndicator(pw);
  },

  strengthIndicator(pw) {
    let strengths = 0;
    if (pw.length > 7) {
      strengths += 1;
    }
    if (this.hasPW(pw)) {
      strengths += 1;
    }
    if (this.hasSpecial(pw)) {
      strengths += 1;
    }
    return strengths;
  },

  hasPW(pw) {
    return /[0-9]/.test(pw) && /[a-z]/.test(pw) && /[A-Z]/.test(pw);
  },

  hasSpecialPW(pw) {
    return /[!#@$%^&*)(+=._-]/.test(pw);
  },

  strengthColor(strength) {
    if (strength < 2) {
      return { label: "나쁨", color: "red" };
    } else if (strength < 3) {
      return { label: "중간", color: "orange" };
    } else if (strength < 4) {
      return { label: "좋음", color: "green" };
    } else {
      return { label: "나쁨", color: "red" };
    }
  },

  errorPW(strength) {
    if (strength < 4) {
      const newSpan = document.createElement("span");
      newSpan.textContent = `비밀번호는 최소 8자리 이상, 영어 대소문자, 숫자, 특수문자 중
      3종류 조합해야합니다.`;
      this.elements.InputGroup[1].appendChild(newSpan);
    }
  },

  setColor(strength) {
    const color = this.strengthColor(strength);
    this.elements.TextBox.setAttribute(
      "style",
      `color: ${color.color}; background-color: ${color.color}`
    );
  },
};
