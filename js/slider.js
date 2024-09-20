const prevBtnEl = document.querySelector(".js-prev-btn");
const nextBtnEl = document.querySelector(".js-next-btn");
const items = document.querySelectorAll(".user-list-item");
let currentIndex = 1;
nextBtnEl.addEventListener("click", () => {
  items[currentIndex].classList.remove("visible");
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add("visible");
});
prevBtnEl.addEventListener("click", () => {
  items[currentIndex].classList.remove("visible");
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  items[currentIndex].classList.add("visible");
});
