const modal = `
<div class="modalLayout">
<div class="modalCard">
<div class="modalClose">
<button>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
</button>
</div>
<div class="modalMain">
  <div class="modalImg">
    <img src="profile.png" />
  </div>
  <div class="modalProfile">
    <div class="modalProfileMyName">
      <span>Byun KyungHwan</span>
    </div>
    <div class="modalProfileContents">
      <span>제주 더큰내일센터 소속 </span><br />
      <span> 프론트 엔드 개발 공부를 하고 있습니다.</span>
    </div>
  </div>
  <div class="modalBtnNav">
    <div class="modalBtn">
      <a href="https://github.com/LamiDs" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <g clip-path="url(#clip0_2_10)">
            <path
              d="M20 28V23.3333C20 22 20.1333 21.4667 19.3333 20.6667C23.0667 20.2667 26.6667 18.8 26.6667 12.6667C26.665 11.0733 26.0434 9.54307 24.9333 8.4C25.454 7.01595 25.406 5.48217 24.8 4.13333C24.8 4.13333 23.3333 3.73333 20.1333 5.86666C17.423 5.16078 14.577 5.16078 11.8667 5.86666C8.66667 3.73333 7.2 4.13333 7.2 4.13333C6.59398 5.48217 6.54604 7.01595 7.06667 8.4C5.9566 9.54307 5.33496 11.0733 5.33333 12.6667C5.33333 18.8 8.93333 20.2667 12.6667 20.6667C11.8667 21.4667 11.8667 22.2667 12 23.3333V28M12 25.3333C6.26667 27.2 6.26667 22 4 21.3333L12 25.3333Z"
              stroke="#13143C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_10">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
    <div class="modalBtn">
      <a href="https://www.instagram.com/qusrudghks_/" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          />
        </svg>
      </a>
    </div>
  </div>
</div>
</div>
</div>
`;

const viewModalBtn = document.getElementById("viewModal");

function viewModal() {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = modal;
  document.querySelector("body").prepend(newDiv);

  document
    .querySelector(".modalClose > button")
    .addEventListener("click", function () {
      document.querySelector("body").removeChild(newDiv);
    });
}

viewModalBtn.addEventListener("click", viewModal);
