// DON'T remove the below import
// import "./style.css";

const showFeed = document.querySelector(".show-feed");
const feedback = document.querySelector(".feedback");
const thanks = document.querySelector(".thanks");
const backdoor = document.querySelector(".backdoor");
const submit = document.querySelector("#submit");
const ratings = document.querySelector("#ratings");
let score = document.querySelectorAll(".score button");
let result = "";

score.forEach((items, index) => {
  items.addEventListener("click", (item) => {
    ratings.textContent = `Your give rate is ${items.value}`;
    result = items.value;
  });
});

// Submit feedback
submit.addEventListener("click", () => {
  if (result === "") {
    alert("You forgot to give feedback ");
  } else {
    showLayout(thanks, feedback);
  }
});

// show feedback
document.querySelector("#showFeed").addEventListener("click", () => {
  showLayout(feedback, showFeed, backdoor);
});

// close feedback with click background
backdoor.addEventListener("click", () => {
  showLayout(showFeed, feedback);
});

// close feed with click cancel or close (X)
document.querySelector(".close").addEventListener("click", () => {
  showLayout(showFeed, feedback);
});
document.querySelector(".cancel").addEventListener("click", () => {
  showLayout(showFeed, feedback);
});

// back to home
document.querySelector("#home").addEventListener("click", () => {
  showLayout(showFeed, thanks);
});

function showLayout(show, hide, backdor) {
  show.classList.add("active");
  hide.classList.remove("active");
  backdor
    ? backdoor.classList.add("active")
    : backdoor.classList.remove("active");
}
