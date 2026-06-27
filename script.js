
//time in topbar - works; don't move from top
setInterval(function () {
    document.querySelector("#timeOfEarth").innerHTML = new Date().toLocaleString();
}, 1000);

//clicktest
document.getElementById("test").onclick = test();
  
function test() {
    document.getElementById("test").innerHTML = "test success";
};

//opening and closing - does not work currently
//original

var welcomeScreen = document.querySelector("#wlcmescrn");


//close
var welcomeScreenClose = document.querySelector("#wlcmeclose");

welcomeScreenClose.addEventListener("click", function () {
    closeWindow(welcomeScreen);
});
styles
function closeWindow(element) {
    element.style.display = "none";
}
//open
var welcomeScreenOpen = document.querySelector("#wlcmeopen");

welcomeScreenOpen.addEventListener("click", function () {
    openWindow(welcomeScreen);
});

function openWindow(element){
    element.style.display = "flex";
}

//other/messing around

//welcomeScreenClose.addEventListener("click", closeWindow(welcomeScreen));
//welcomeScreenOpen.addEventListener("click", openWindow(welcomeScreen));


//document.querySelector("#welcomeclose").addEventListener("click", function () {
    //closeWindow(document.querySelector("#welcome"));
//});

//document.querySelector("#welcomeopen").addEventListener("click", function () {
    //openWindow(document.querySelector("#welcome"));
//});





//dragging elements - buggy; needs fixed

//dragElement(document.getElementById("wlcmescrn"));

dragElement(welcomeScreen)

function dragElement(elmnt) {
  
  var currX = 0, currY = 0, initX = 0, initY = 0;

  if (document.getElementById(elmnt.id + "header")) {

    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

  } else {

    elmnt.onmousedown = dragMouseDown;

  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    initX = e.clientX;
    initY = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    currX = pos3 - e.clientX;
    currY = pos4 - e.clientY;
    initX = e.clientX;
    initY = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - currY) + "px";
    elmnt.style.left = (elmnt.offsetLeft - currX) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}