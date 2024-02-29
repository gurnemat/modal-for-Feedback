// write your JavaScript here
// DON'T remove the below import
import "./styles.css";

const showBtn = document.querySelector(".open-btn");
const section = document.querySelector("section");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-card span");
const cancelBtn = document.querySelector(".btns button:first-child");
showBtn.addEventListener("click", () => {
  section.classList.add("active");
});
overlay.addEventListener("click", () => section.classList.remove("active"));

closeBtn.addEventListener("click", () => {
  section.classList.remove("active");
});

cancelBtn.addEventListener("click", () => {
  section.classList.remove("active");
});
