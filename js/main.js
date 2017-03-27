//////////Ella's Modal//////////

var ellaModal = document.getElementById("ellaModal");
var ellabtn = document.getElementById("ellaLink");
var ellaSpan = document.getElementsByClassName("ellaClose")[0];

ellabtn.onclick = function () {
    ellaModal.style.display = "block";
}

ellaSpan.onclick = function() {
    ellaModal.style.display = "none";
}

//////////Diego's Modal//////////

var diegoModal = document.getElementById("diegoModal");
var diegobtn = document.getElementById("diegoLink");
var diegoSpan = document.getElementsByClassName("diegoClose")[0];

diegobtn.onclick = function () {
    diegoModal.style.display = "block";
}

diegoSpan.onclick = function() {
    diegoModal.style.display = "none";
}

//////////Lemon Drop's Modal//////////

var lemonModal = document.getElementById("lemonModal");
var lemonbtn = document.getElementById("lemonLink");
var lemonSpan = document.getElementsByClassName("lemonClose")[0];

lemonbtn.onclick = function () {
    lemonModal.style.display = "block";
}

lemonSpan.onclick = function() {
    lemonModal.style.display = "none";
}

//////////Click on window to close Modal/////////

window.onclick = function(event) {
    if (event.target == diegoModal) {
      diegoModal.style.display = "none";
    }

    if (event.target == ellaModal) {
      ellaModal.style.display = "none";
    }

    if (event.target == lemonModal) {
      lemonModal.style.display = "none";
    }
}

