const todoManager = {
  elements: {
    toDoTitle: document.getElementById("toDoTitle"),
    toDoList: document.querySelector(".toDoList"),
    toDoSummit: document.getElementById("toDoAddBtn"),
  },

  setToDo() {
    let toDo = this.elements.toDoTitle;
    let title = toDo.value;
    this.createToDo(title);
    this.resetInput();
  },

  createToDo(title) {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    let checkBtn = this.createCheckBtn();
    let removeBtn = this.createRemoveBtn();
    newDiv.appendChild(checkBtn);
    newP.textContent = title;
    newDiv.appendChild(newP);
    newDiv.classList.add("toDo");
    newDiv.appendChild(removeBtn);
    this.elements.toDoList.appendChild(newDiv);
  },

  createRemoveBtn() {
    let removeBtn = document.createElement("button");
    let removeBtnImg = document.createElement("div");
    removeBtnImg.classList.add("removeBtnImg");
    removeBtn.appendChild(removeBtnImg);
    removeBtn.setAttribute("value", "삭제");
    removeBtn.classList.add("removeBtn");
    return removeBtn;
  },

  createCheckBtn() {
    let checkBtn = document.createElement("button");
    let checkBtnImg = document.createElement("div");
    checkBtnImg.classList.add("checkBtnImg");
    checkBtn.appendChild(checkBtnImg);
    checkBtn.setAttribute("value", "수행");
    checkBtn.classList.add("checkBtn");
    return checkBtn;
  },

  resetInput() {
    this.elements.toDoTitle.value = "";
  },

  handleToDoListClick(event) {
    if (event.target.value == "삭제") {
      this.elements.toDoList.removeChild(event.target.parentNode);
    } else if (event.target.value == "수행") {
      event.target.parentNode.classList.toggle("do");
    }
  },

  init() {
    this.elements.toDoSummit.addEventListener("click", this.setToDo.bind(this));

    this.elements.toDoList.addEventListener(
      "click",
      this.handleToDoListClick.bind(this)
    );
  },
};

todoManager.init();
