/*let userDropdownMenu = document.querySelector(".user-dropdown-menu");
let userDropdown = document.querySelector(".user-dropdown");
userDropdown.addEventListener("click", function () {
  if (userDropdownMenu.style.display === "none") {
    userDropdownMenu.style.display = "block";
    userDropdown.style.padding = "1px";
    userDropdown.style.border = "1px solid black";
    userDropdown.style.borderRadius = "50%";
  } else {
    userDropdownMenu.style.display = "none";
    userDropdown.style.padding = "1px";
    userDropdown.style.border = "1px solid transparent";
  }
});*/
/* 선생이 짜준 toggle 메소드
userDropdown.addEventListener("click", function () {
  userDropdownMenu.classList.toggle("active");
});
*/
let userDropdownMenu = document.querySelector(".user-dropdown-menu"); // 상자
let userDropdown = document.querySelector(".user-dropdown"); // 이미지
userDropdown.addEventListener("click", function () {
  userDropdownMenu.classList.toggle("active");
  userDropdown.classList.toggle("active");
});

// 팔로워 드롭다운
/*let userHeartDropdown = document.querySelector(".user-heart-dropdown");
let userDropdownFollower = document.querySelector(".user-dropdown-follower");
userHeartDropdown.addEventListener("click", function () {
  if (userDropdownFollower.style.display === "none") {
    userHeartDropdown.src = "/Instagram/InstagramImg/blackheart.webp";
    userDropdownFollower.style.display = "block";
  } else {
    userDropdownFollower.style.display = "none";
    userHeartDropdown.src = "/Instagram/InstagramImg/heart.png";
  }
});*/
let userHeartDropdown = document.querySelector(".user-heart-dropdown");
let userDropdownFollower = document.querySelector(".user-dropdown-follower");
userHeartDropdown.addEventListener("click", function () {
  if (userDropdownFollower.classList.contains("active")) {
    userDropdownFollower.classList.remove("active");
  } else {
    userDropdownFollower.classList.add("active");
  }
  //userDropdownFollower.classList.add("active");
});
