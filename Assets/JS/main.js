let head = document.querySelector("header");
let link = document.querySelectorAll("header ul li a");

// let ele = document.getElementById('ele');
// ele.onclick = ()=>{
//   document.querySelector('.links ul li ul').classList.toggle('showed')
// }
//Menu Bar
let menu = document.querySelector(".toggle");
menu.onclick = () => {
  document.querySelectorAll(".toggle span").forEach((e) => {
    e.classList.toggle("tog");
  });
  document.querySelector(".links").classList.toggle("height");
  document.querySelector(".links ul").style.opacity = "1";
};

// Scroll Btn //

let btnScroll = document.getElementById("scroll");

btnScroll.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

///ScrollSpy///

var sections = document.querySelectorAll("section");
var navbarLinks = document.querySelectorAll("header ul  li ");
window.onscroll = function () {
  sections.forEach(function (section, index) {
    var sectionTop = section.offsetTop - -160;
    var sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      navbarLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      navbarLinks[index].classList.add("active");
    }
  });
  ///End ScrollSpy///

  //Header
  if (window.pageYOffset >= 20) {
    document.querySelector("header img").src = "Assets/Images/bakery-color.png";
    document.querySelector(".contentHead").style.cssText =
      "margin-top:0;padding-top:110px;transition:.3s;";
    document.querySelector("header").style.cssText =
      "background-color:white; position:sticky; top:0;";
    document.querySelectorAll("header ul li a").forEach((e) => {
      e.style.color = "black";
    });
  } else {
    document.querySelector(".contentHead").style.cssText =
      "margin-top:110px;transition:.3s;";
    document.querySelector("header img").src =
      "Assets/Images/bakery-light-1.png";
    document.querySelector("header").style.cssText =
      "background-color:transparent; position:static";
    document.querySelectorAll("header ul li a").forEach((e) => {
      e.style.color = "white";
    });
  }
  if (this.pageYOffset >= 550) {
    btnScroll.style.display = "block";
    document.querySelector("header").style.cssText =
      "background-color:white; position:fixed; top:0;";
  } else {
    btnScroll.style.display = "none";
  }
};
//logo
// if ((head.style.backgroundColor = "#FFFFFF")) {
//   document.querySelector("header img").src = "Assets/Images/bakery-color.png";

//   document.querySelectorAll("header ul li a").forEach((e) => {
//     e.style.color = "black";
//   });
// } else {
//   document.querySelector("header img").src = "Assets/Images/bakery-light-1.png";
//   document.querySelectorAll("header ul li a").forEach((e) => {
//     e.style.color = "white";
//   });
// }

//Right Bar
let settingBox = document.querySelector(".setting-box i");
settingBox.onclick = () => {
  document.querySelector(".setting-box").classList.toggle("open");
};
//custsome color
let colors = document.querySelectorAll(".setting-box .lists ul li");
colors.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});
