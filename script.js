let oldG,
  slideIndex = 1,
  s = 0;

let modal = document.getElementsByClassName("modal-content")[0],
  carousel = document.getElementsByClassName("carousel-content")[0];
hearts = document.getElementsByClassName("filling");

window.onload = function () {
  for (index = 0; index < hearts.length; index++) {
    if (localStorage.getItem(`favorite${index}`)) {
      hearts[index].classList.add("show-block");
    }
  }
};

const displayHeart = (n) => {
  document.getElementsByClassName("filling")[n].classList.toggle("show-block");
};

const setFavorite = (n) => {
  if (
    document
      .getElementsByClassName("filling")
      [n].classList.contains("show-block")
  ) {
    localStorage.setItem(`favorite${n}`, 1);
  } else {
    localStorage.removeItem(`favorite${n}`);
  }
};

const displayElement = (element) => {
  document.getElementById(element).classList.toggle("show-block");
};

const thisDrop = (thisId, thisClass) => {
  document.getElementById(thisId).classList.toggle(thisClass);
  document.getElementsByTagName("body")[0].classList.toggle("scroll");
  document.getElementById("cover").classList.toggle("show-block");
  if (thisId == "search-toggle") {
    document.getElementById("top-correct").classList.toggle("hide");
    document.getElementsByTagName("nav")[0].classList.toggle("hide");
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
    document.getElementById("search-toggle").classList.remove("search-active");
    document.getElementsByTagName("body")[0].classList.remove("scroll");
    document.getElementById("top-correct").classList.remove("hide");
    document.getElementsByTagName("nav")[0].classList.remove("hide");
  }
};

sidescroll = (element, n, side) => {
  let thisElement = document.getElementById(element);
  let last = thisElement.scrollLeft;
  if (side == 1) {
    thisElement.scrollLeft += 260;
    document.getElementsByClassName("slideback")[n].classList.add("show-flex");
    if (thisElement.scrollLeft - 260 < last) {
      document.getElementsByClassName("slide")[n].classList.add("hide");
    }
    console.log(thisElement.scrollLeft);
  } else {
    thisElement.scrollLeft -= 260;
    if (thisElement.scrollLeft + 260 > last) {
      document
        .getElementsByClassName("slideback")
        [n].classList.remove("show-flex");
    }
    document.getElementsByClassName("slide")[n].classList.remove("hide");
  }
};

//

const openModal = () => {
  document.getElementById("modal").classList.add("show-block");
  document.getElementsByTagName("body")[0].classList.add("scroll");
};

function closeModal() {
  document.getElementById("modal").classList.remove("show-block");
  document.getElementsByTagName("body")[0].classList.remove("scroll");
}

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
}

function currentSlide(n) {
  modal.style.transform = `translatex(calc(-100% * ${n - 1}))`;
  carousel.style.transform = `translatex(calc(-100% * ${n - 1}))`;
}
