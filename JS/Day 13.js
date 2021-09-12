function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slideImages = document.querySelectorAll(".slide-in");

function checkSlide(event) {
  slideImages.forEach((slideImage) => {
    // halfway through the image
    const slideInAt =
      window.scrollY + window.innerHeight - slideImage.height / 2;
    // bottom of the image
    const imageBottom = slideImage.offsetTop + slideImage.height;

    const isHalfShown = slideInAt > sliderImage.offsetTop;
  });
}

window.addEventListener("scroll", debounce(checkSlide));
