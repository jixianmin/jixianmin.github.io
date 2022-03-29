console.log(
  "[김재훈] [오전 9:37] https://ko.wix.com/website/templates/html/portfolio-cv/portfolios"
);
console.log("https://www.iconfinder.com/search?q=menu&price=free");
let bottomArrow = document.querySelector(".bottom-arrow");
let mainone = document.querySelector(".mainone");
let maintwo = document.querySelector(".maintwo");
bottomArrow.addEventListener("click", function () {
  mainone.classList.toggle("hide");
  maintwo.classList.toggle("hide");
});

let topArrow = document.querySelector(".top-arrow");
topArrow.addEventListener("click", function () {
  mainone.classList.toggle("hide");
  maintwo.classList.toggle("hide");
});
