

//opening and closing
var welcomeScreen = document.querySelector("#welcome");
function closeWindow(element) {
    element.style.display = "none";
}
function openWindow(element){
    element.style.display = "flex";
}
var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");

welcomeScreenClose.addEventListener("click", function(){
    closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function(){
    closeWindow(welcomeScreen);
});

//time in topbar - works; don't touch
setInterval(function (){
    document.querySelector("#timeOfEarth").innerHTML = new Date().toLocaleString();
}, 1000)

//dragging elements - buggy; needs fixed

//dragElement(document.getElementById("welcome"));

//function dragElement(element) {
   // var initX = 0;
//var initY = 0;
   // var currX = 0;
    //var currY = 0;
    //if (document.getElementById(element.id + "header")){
        //document.getElementById(element.id + "header").onmousedown = startDragging;
    //}else{
     //   element.onmousedown = startDragging;
    }

 // function startDragging(e) {
    //  e = e || window.event;
    //  e.preventDefault();
    //  initX = e.clientX;
     // initY = e.clientY;
     // document.onmouseup = stopDragging;
     // document.onmousemove = dragElement;
  }

 // function dragElement(e){
    //  e = e || window.event;
     // e.preventDefault();
     // currX = initX - e.clientX;
     // currY = initY - e.clientY;
     // initX = e.clientX;
     // initY = e.clientY;
     // element.style.top = (element.offsetTop - currY) + "px";
     // element.style.left = (element.offsetLeft - currX) + "px";
  }

 // function stopDragging () {
      //document.onmouseup = null;
      //document.onmousemove = null;
  }
}

dragElement(document.getElementById("welcome"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}