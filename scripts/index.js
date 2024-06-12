// loader toggler

window.addEventListener("load", function () {
  var loader = document.getElementById("loader");
  var body = document.getElementById("body");

  // Check if preloader and content elements exist
  if (loader && body) {
    setTimeout(function () {
      loader.style.display = "none";
      body.style.display = "block";
    }, 1500);
  } else {
    console.error("Preloader or content element not found.");
  }
});