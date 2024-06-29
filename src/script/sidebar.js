
var aside = document.getElementById("sidebar");

var span = document.getElementById("sidebar_close");
span.addEventListener("click", function() {
  aside.style.display = "none";
});

var img = document.getElementById("sidebar_on");
img.addEventListener("click", function() {
  aside.style.display = "block";
});

var img = document.getElementById("sidebar_off");
img.addEventListener("click", function() {
  aside.style.display = "none";
});
