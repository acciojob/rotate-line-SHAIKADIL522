var angle = 0;

setInterval(function() {
  angle = angle + 2;
  var line = document.getElementById("line");
  line.style.transform = "rotate(" + angle + "deg)";
}, 20);