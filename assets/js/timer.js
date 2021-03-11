var myVar = setInterval(myTimer ,1000);
function myTimer() {
  var d = new Date();
  document.getElementById("timer1").innerHTML = d.toLocaleTimeString();

  var f = new Date();
  document.getElementById("timer2").innerHTML = f.toLocaleTimeString();

  var g = new Date();
  document.getElementById("timer3").innerHTML = f.toLocaleTimeString();

  var h = new Date();
  document.getElementById("timer4").innerHTML = h.toLocaleTimeString();
  var j = new Date();
  document.getElementById("timer5").innerHTML = j.toLocaleTimeString();
}