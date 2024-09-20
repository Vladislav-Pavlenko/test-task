const muteBtnEl = document.querySelectorAll(".mute");
const unmuteBtnEl = document.querySelectorAll(".unmute");

muteBtnEl.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.remove("visible");
    unmuteBtnEl[index].classList.add("visible");
  });
});

unmuteBtnEl.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.remove("visible");
    muteBtnEl[index].classList.add("visible");
  });
});
