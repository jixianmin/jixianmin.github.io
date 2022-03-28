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

//컴퓨터에서 선택 버튼을 누르면 input-file 클래스 작동
let computerChoice = document.querySelector(".modal-computer");
let inputFile = document.querySelector(".input-file");
computerChoice.addEventListener("click", function () {
  inputFile.click();
});

let modalMain = document.querySelector(".modal-main"); //사진 배경위치
let [modalHeader1, modalHeader2] = document.querySelectorAll(".modal-header"); //새 게시물 만들기 => "<=" "자르기" "다음(파랑색)"으로 변경
const previewImg = document.querySelector("#img-preview");

inputFile.addEventListener("change", function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    previewImg.src = reader.result;
    modalMain.classList.add("hide");
    modalHeader1.classList.add("hide");
    modalHeader2.classList.remove("hide");
  };
  reader.readAsDataURL(file);
});
