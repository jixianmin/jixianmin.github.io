let iconModal = document.querySelector(".icon-modal");
let modalWrap = document.querySelector(".modal-wrap");
let modalClose = document.querySelector(".modal-close");
//let body = document.querySelector("body");
//body.classList,toggle("active");는 왜 안되는걸까?

iconModal.addEventListener("click", function () {
  modalWrap.classList.toggle("active");
  document.body.classList.toggle("active");
  console.log("hi");
});

modalClose.addEventListener("click", function () {
  modalWrap.classList.toggle("active");
  document.body.classList.toggle("active");
});

let modalWindow = document.querySelector(".modal-window");

modalWrap.addEventListener("click", (e) => {
  console.log(e.target);
  if (!modalWindow.contains(e.target)) {
    modalWrap.classList.remove("active");
    document.body.classList.remove("active");
  }
});
//remove로 항상 꺼줘야겠죠?
//Node.contains()로 모달메인안에 있는 요소들 검색

//window.addEventListener("keydown", (e) => console.log(e));
//키보드 이벤트 타입
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  const keyCode = e.key;
  if (keyCode === "Escape") {
    modalWrap.classList.remove("active");
    document.body.classList.remove("active");
  }
});

const Return = document.querySelector(".instaLogo");
Return.addEventListener("click", function () {
  location.reload();
});
