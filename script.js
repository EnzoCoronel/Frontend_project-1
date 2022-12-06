let oldG;

const categoryDrop = () => {
  document.getElementById("firstdrop").classList.toggle("show-block");
};

const thisDrop = (thisId, thisClass) => {
  document.getElementById(thisId).classList.toggle(thisClass);
  document.getElementsByTagName("body")[0].classList.toggle("scroll");
  document.getElementById("cover").classList.toggle("show-block");
  if (thisId == "search-toggle"){
    document.getElementById("top-correct").classList.toggle("hide");
  }
}

const dropGroup = (group, navId, navClass) => {
  if (oldG == group) {
    console.log("same button");
    thisDrop(navId, navClass);
  }
  else{
    document.getElementById("nav-toggle").classList.add("nav-active");
    document.getElementsByTagName("body")[0].classList.add("scroll");
  document.getElementById("cover").classList.add("show-block");
  }
  oldG = group;
  let child = document.getElementsByClassName("drop-group");
  for (i = 0; i < child.length; i++) {
    child[i].classList.remove("show-flex");
  }
  document.getElementById(group).classList.toggle("show-flex");
};

window.onclick = function (event) {
  if (event.target == document.getElementById("cover")) {
    document.getElementById("cover").classList.remove("show-block");
    document.getElementById("nav-toggle").classList.remove("nav-active");
    document.getElementById("store-toggle").classList.remove("store-active");
    document.getElementsByTagName("body")[0].classList.remove("scroll");
  }
};

//

const openModal = () => {
  document.getElementById("modal").style.display = "block";
  document.getElementsByTagName("header")[0].style.filter =
    "brightness(40%) blur(15px)";
  document.getElementsByTagName("main")[0].style.filter =
    "brightness(40%) blur(15px)";
  document.getElementsByTagName("footer")[0].style.filter =
    "brightness(40%) blur(15px)";
};

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementsByTagName("header")[0].style.filter = "none";
  document.getElementsByTagName("main")[0].style.filter = "none";
  document.getElementsByTagName("footer")[0].style.filter = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
