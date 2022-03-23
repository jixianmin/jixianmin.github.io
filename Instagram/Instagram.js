let i = 1;
let imgAll = document.querySelectorAll(".image-box img");
function test() {
  //   if (i < 4) {
  //     for (let n = 0; n < 4; n++) {
  //       imgAll[n].style.transform = `translateY(${-541 * i}px)`;
  //     }
  //   } else {
  //     i = 0;
  //     for (let n = 0; n < 4; n++) {
  //       imgAll[n].style.transform = `translateY(${-541 * i}px)`;
  //     }
  //   }
  //   console.log("Hello!");

  for (let n = 0; n < 4; n++) {
    imgAll[n].classList.remove("active");
  } //remove 지정한 클래스값을 제거 add 지정한 클래스값 추가
  imgAll[i].classList.add("active");
  i = i === 3 ? 0 : i + 1;
}
setInterval(test, 5000);

// let btnRight = document.querySelector(".fa-arrow-right");
//       let btnLeft = document.querySelector(".fa-arrow-left");
//       let imgAll = document.querySelectorAll(".image-box img");
//       let j = 0;
//       btnRight.addEventListener("click", function () {
//         j += 1
//         if(j < 5){
//           for (i = 0; i < 5; i++) {
//             imgAll[i].style.transform = `translateX(${-463.17 * (j)}px)`;
//           }
//         }else {
//           j = 0;
//           for (i = 0; i < 5; i++) {
//           imgAll[i].style.transform = `translateX(${-463.17 * (j)}px)`
//           };
//         }
//       });
//       btnLeft.addEventListener("click", function () {
//         j -= 1
//         if(j > -1){
//           for (i = 0; i < 5; i++) {
//             imgAll[i].style.transform = `translateX(${-463.17 * (j)}px)`;
//           }
//         }else {
//           j = 4;
//           for (i = 0; i < 5; i++) {
//           imgAll[i].style.transform = `translateX(${-463.17 * (j)}px)`
//           };
//         }
//       });
//       let dotList = document.querySelectorAll(".dot-item");
//       for(let K = 0; K < 5; K++){
//         dotList[K].addEventListener("click", function () {
//         for (i = 0; i < 5; i++) {
//           j=K
//             imgAll[i].style.transform = `translateX(${-463.17* (j)}px)`;
//           }
//       });}
