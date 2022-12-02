const categoryDrop = () => {
  document.getElementById("firstdrop").classList.toggle("show-block");
};

const searchDrop = () => {
  let x = document.getElementById("search-toggle");
  x.classList.toggle("search-active");
  document.getElementsByTagName("main")[0].classList.toggle("darken");
  document.getElementsByTagName("footer")[0].classList.toggle("darken");
  document.getElementsByTagName("body")[0].classList.toggle("scroll");
  document.getElementById("top-correct").classList.toggle("hide");
};

const navDrop = () => {
  let x = document.getElementById("nav-toggle");
  x.classList.add("nav-active");
  document.getElementsByTagName("main")[0].classList.add("darken");
  document.getElementsByTagName("footer")[0].classList.add("darken");
  document.getElementsByTagName("body")[0].classList.add("scroll");
};

const storeDrop = () => {
  let x = document.getElementById("store-toggle");
  x.classList.toggle("store-active");
  document.getElementsByTagName("main")[0].classList.toggle("darken");
  document.getElementsByTagName("footer")[0].classList.toggle("darken");
  document.getElementsByTagName("body")[0].classList.toggle("scroll");
};

const dropGroup = (group) => {
  let child = document.getElementsByClassName("drop-group");
  let x = document.getElementById(group);
  if (x.classList.contains("show-flex")) {
    document.getElementsByTagName("main")[0].classList.remove("darken");
    document.getElementsByTagName("footer")[0].classList.remove("darken");
    document.getElementById("nav-toggle").classList.remove("nav-active");
    document.getElementsByTagName("body")[0].classList.remove("scroll");
  } else {
    for (i = 0; i < child.length; i++) {
      child[i].classList.remove("show-flex");
    }
    x.classList.toggle("show-flex");
  }
};

window.onclick = function (event) {
  if (event.target == document.getElementByTagName("header")[0]) {
    let dropdown = document.getElementById("nav-toggle");
    if (dropdown.classList.contains("nav-active")) {
      dropdown.classList.remove("nav-active");
      document.getElementsByTagName("main")[0].classList.remove("darken");
      document.getElementsByTagName("footer")[0].classList.remove("darken");
      document.getElementsByTagName("body")[0].classList.remove("scroll");
    }
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
