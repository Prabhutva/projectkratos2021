var mini = true;
var bigscreen = true;
window.onresize = resizenavbar;

function resizenavbar(){
if($(window).width() > 450)
{bigscreen = true;}
else
{bigscreen = false;}
}


function toggleSidebar() {
  if (mini&&bigscreen) {
    console.log("opening sidebar");
    document.getElementById("sidenavbar").style.width = "350px";
    //document.getElementById("main").style.marginLeft = "300px";
    this.mini = false;
  } else if(bigscreen) {
    console.log("closing sidebar");
    document.getElementById("sidenavbar").style.width = "89px";
    //document.getElementById("main").style.marginLeft = "89px";
    this.mini = true;
  }
}

function openNav() {
  document.getElementById("sidenavbar").style.visibility = "visible";
  document.getElementById("close").style.visibility = "visible";
  document.getElementById("sidenavbar").style.width = "100%";
  //document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sidenavbar").style.width = "0";
  //document.getElementById("main").style.marginLeft = "0";
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 100;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};