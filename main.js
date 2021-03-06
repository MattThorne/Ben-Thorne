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
    document.documentElement.dataset.scroll = Math.max(window.scrollY,0); 
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