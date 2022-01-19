// The debounce function receives our function as a parameter
const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });

  }
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = Math.max(window.scrollY, 0);
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();

function check() {
  var checkbox = document.getElementById('active');
  checkbox.checked = !checkbox.checked
}

window.addEventListener("hashchange", function () {
  console.log(this.location.hash)
  if (this.location.hash == "#services") {
    window.scrollTo(window.scrollX, window.scrollY - 50);
  }

});

var elements = document.getElementsByClassName("service");
var translation = 0
var scrollQuestions = function () {
  if (document.getElementsByClassName("questionsContainer")[0].offsetWidth > 414) {
    if (translation < 72) {
      translation += 36
    }
  } else {
    if (translation < 70) {
      translation += 35
    }
  }
  document.getElementById("questions").style.transform = "translateY(-" + translation + "%)";
};

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', scrollQuestions, false);
}

var retakeQuestions = function () {
  translation = 0
  document.getElementById("questions").style.transform = "translateY(0)";
};


document.getElementsByClassName("retake")[0].addEventListener('click', retakeQuestions, false);