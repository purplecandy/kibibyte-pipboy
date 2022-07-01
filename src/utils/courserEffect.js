var r = document.querySelector(":root");
var colors = document.getElementsByName("colors");
function getColor() {
  for (i = 0; i < colors.length; i++) {
    if (colors[i].checked) r.className = colors[i].value;
  }
}
