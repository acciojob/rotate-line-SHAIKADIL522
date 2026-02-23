//your JS code here. If required.
var angle = 0;

setInterval(function() {
  angle += 2;
  var line = document.getElementById('line');
  line.style.transform = 'rotate(' + angle + 'deg)';
}, 20);
```

---

## How the JS Works
```
angle = 0  →  after 20ms  →  angle = 2  →  rotate(2deg)
            →  after 40ms  →  angle = 4  →  rotate(4deg)
            →  after 60ms  →  angle = 6  →  rotate(6deg)
            →  keeps going forever...