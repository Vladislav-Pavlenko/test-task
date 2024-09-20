const previewPageEl = document.querySelector(".preview");
const userPageEl = document.querySelector(".user");
const warningPageEl = document.querySelector(".warning");
const previewBtnEl = document.querySelector(".preview-continue-btn");
const userBtnEl = document.querySelector(".user-next-btn");
const warningBtnEl = document.querySelector(".warning-btn");

previewBtnEl.addEventListener("click", () => {
  previewPageEl.classList.remove("visible");
  userPageEl.classList.add("visible");
});

userBtnEl.addEventListener("click", () => {
  userPageEl.classList.remove("visible");
  warningPageEl.classList.add("visible");
});

warningBtnEl.addEventListener("click", () => {
  warningPageEl.classList.remove("visible");
  previewPageEl.classList.add("visible");
});
