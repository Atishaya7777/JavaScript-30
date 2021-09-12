const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(event) {
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => {
  panel.addEventListener("transitionend", toggleActive);
});

panels.forEach((panel) => panel.addEventListener("mouseenter", toggleOpen));
panels.forEach((panel) => panel.addEventListener("mouseleave", toggleOpen));
