const button = document.getElementById('trigger');
const glitchElement = document.querySelectorAll('.glitch');
const iframe = document.querySelectorAll(".content");


button.addEventListener('click', () => {
  
  glitchElement.forEach(el => {
    if (!el.classList.contains("glitch-active")) {
        el.classList.add("glitch-active");
        setTimeout(() => {el.classList.remove("glitch-active");},1000);
    }
    }
    )
  

  
  // Add the class that triggers the animation
  //glitchElement.classList.add('glitch-active');

  
  // Remove it after 1 second
  //setTimeout(() => {
  //  glitchElement.classList.remove('glitch-active');
  //, 1000); // match your CSS animation duration
});

button.addEventListener("click", () => {
  if (!iframe.contentWindow) return;

  // Call the function INSIDE the iframe
  if (typeof iframe.contentWindow.triggerGlitch === "function") {
    iframe.contentWindow.triggerGlitch();
  }
});