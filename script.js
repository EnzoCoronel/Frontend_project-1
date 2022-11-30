const categoryDrop = () => {
  document.getElementById("firstdrop").classList.toggle("show");
};

const navDrop = () => {
  let x = document.getElementById("nav-drop");
    x.style.display = "block";
    document.getElementsByTagName("main")[0].style.filter = "brightness(40%)";
    document.getElementsByTagName("footer")[0].style.filter = "brightness(40%)";
}

const dropGroup = (group) => {
  let x = document.getElementById(group);
    x.style.display = "flex";
};

window.onclick = function (event) {
  if (!event.target.matches(".link")) {
    let dropdown = document.getElementById("nav-drop");
    let child = document.getElementsByClassName("drop-group");
    if (dropdown.style.display !== "none") {
      for (i = 0; i < child.length; i++) {
        child[i].style.display = "none";
      }
      dropdown.style.display = "none";
    }
  }
};
