const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
let last;
let first;

function handleEvent(event) {
  let flag;
  let counterVariable = 0;
  let firstCheck;

  if (event.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        counterVariable += 1;
        first = checkbox;
      }
      if (first != undefined && counterVariable == 1) {
        firstCheck = first;
      }

      if (checkbox.checked) {
        last = checkbox;
      }
    });

    for (let element of checkboxes) {
      if (element == firstCheck) {
        flag = true;
      }
      if (element == last) {
        flag = false;
      }
      if (flag) {
        element.checked = true;
      }
    }
  }
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleEvent)
);
