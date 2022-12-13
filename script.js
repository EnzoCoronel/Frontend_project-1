let oldG,
  slideIndex = 1,
  s = 0;

let heart = document.getElementById("filling"),
  modal = document.getElementsByClassName("modal-content")[0],
  carousel = document.getElementsByClassName("carousel-content")[0];

window.onload = function () {
  if (localStorage.getItem("favorite")) {
    heart.classList.add("show-block");
  }
};

const setFavorite = () => {
  if (heart.classList.contains("show-block")) {
    localStorage.setItem("favorite", 1);
  } else {
    localStorage.removeItem("favorite");
  }
};

const displayElement = (element) => {
  document.getElementById(element).classList.toggle("show-block");
  console.log("mudou");
};

const thisDrop = (thisId, thisClass) => {
  document.getElementById(thisId).classList.toggle(thisClass);
  document.getElementsByTagName("body")[0].classList.toggle("scroll");
  document.getElementById("cover").classList.toggle("show-block");
  if (thisId == "search-toggle") {
    document.getElementById("top-correct").classList.toggle("hide");
  }
};

const dropGroup = (group, navId, navClass) => {
  if (oldG == group) {
    thisDrop(navId, navClass);
  } else {
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
  document.getElementById("modal").classList.add("show-block");
  document.getElementsByTagName("header")[0].style.filter =
    "brightness(40%) blur(15px)";
  document.getElementsByTagName("main")[0].style.filter =
    "brightness(40%) blur(15px)";
  document.getElementsByTagName("footer")[0].style.filter =
    "brightness(40%) blur(15px)";
  document.getElementsByTagName("body")[0].classList.add("scroll");
};

function closeModal() {
  document.getElementById("modal").classList.remove("show-block");
  document.getElementsByTagName("header")[0].style.filter = "none";
  document.getElementsByTagName("main")[0].style.filter = "none";
  document.getElementsByTagName("footer")[0].style.filter = "none";
  document.getElementsByTagName("body")[0].classList.remove("scroll");
}

showSlides(slideIndex);

function plusSlides(n) {
  s += n;
  if (s == -1) {
    s = 6;
    modal.style.transform = `translatex(calc(-100% * ${6}))`;
    carousel.style.transform = `translatex(calc(-100% * ${6}))`;
  } else if (s == 7) {
    s = 0;
    modal.style.transform = `translatex(calc(-100% * ${0}))`;
    carousel.style.transform = `translatex(calc(-100% * ${0}))`;
  } else {
    modal.style.transform = `translatex(calc(-100% * ${s}))`;
    carousel.style.transform = `translatex(calc(-100% * ${s}))`;
  }
  // showSlides((slideIndex += n));
}

function currentSlide(n) {
  modal.style.transform = `translatex(calc(-100% * ${n - 1}))`;
  carousel.style.transform = `translatex(calc(-100% * ${n - 1}))`;
  // showSlides((slideIndex = n));
}

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
