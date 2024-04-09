let img = document.querySelector(".image");
let imgWrap = document.querySelector(".img-wrap");
let orgImg = document.querySelector("#org-img");
let line = document.querySelector(".line");
orgImg.style.width = img.offsetWidth + "px";
var leftSpace = img.offsetLeft;

img.onmousemove = function (e) {
  var boxWidth = (e.pageX-leftSpace) + "px";
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
  //   console.log(img.offsetLeft + "px");
  //   console.log(img.offsetWidth + "px");
  //   console.log(img.offsetTop + "px");
  // console.log(boxWidth);
};

