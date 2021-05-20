let now = false;
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

function start() {
  now = true;
  stopwatch();
}
function stop() {
  now = false;
}
function stopwatch() {
  if (now == true) {
    count =count+ 1;
    document.getElementById("count").innerHTML = count;
    if (count == 100) {
      sec =sec + 1;
      
      document.getElementById("sec").innerHTML = sec;
      count = 0;
      document.getElementById("count").innerHTML = count;
    }
    if (sec == 60) {
      min =min + 1;
      sec = 0;
      count=0;
      document.getElementById("sec").innerHTML = sec;
      document.getElementById("count").innerHTML = count;
      document.getElementById("min").innerHTML = min;
    }
    if (min == 60) {
      hr =hr + 1;
      // now=false;
      min = 0;
      sec = 0;
      count=0;
      document.getElementById("hr").innerHTML = hr;
      document.getElementById("sec").innerHTML = sec;
      document.getElementById("count").innerHTML = count;
      document.getElementById("min").innerHTML = min;
    }
    
    setInterval("stopwatch()", 10);
  }
}
function reset() {
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("count").innerHTML = count;
  document.getElementById("hr").innerHTML = hr;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
  now = false;
}
