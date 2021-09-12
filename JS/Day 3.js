const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // we do or nothing because the color attribute does not contain any suffix like px
  console.log(this.value);
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
