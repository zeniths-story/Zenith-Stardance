
//time in topbar - works; don't move from top
setInterval(function () {
    document.querySelector("#timeOfEarth").innerHTML = new Date().toLocaleString();
}, 1000);


//defining screens
var welcomeScreen = document.getElementById("wlcmescrn");

//dragging elements
//elements we can drag
dragElement(welcomeScreen);


//defining dragElement
function dragElement(element) {
  var currX = 0, currY = 0, initX = 0, initY = 0;
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDrag;
  } else {
    element.onmousedown = startDrag;
  };
  function startDrag(e) {
    e = e || window.event;
    e.preventDefault();
    initX = e.clientX;
    initY = e.clientY;
    document.onmouseup = stopDrag;
    document.onmousemove = dragElement;
  };
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currX = initX - e.clientX;
    currY = initY - e.clientY;
    initX = e.clientX;
    initY = e.clientY;
    element.style.top = (element.offsetTop - currY) + "px";
    element.style.left = (element.offsetLeft - currX) + "px";
  };
  function stopDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  };
};

//opening and closing

//close def.
var welcomeScreenClose = document.getElementById("wlcmeclose");

function closeWindow(element) {
    element.style.display = "none";

};

//open def.
var welcomeScreenOpen = document.getElementById("wlcmeopen");

function openWindow(element){
    element.style.display = "flex";
    
};

//open/close commands
welcomeScreenClose.addEventListener("click", function () {
    closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function () {
    openWindow(welcomeScreen);
});

//app stuff
var selected = undefined

function selectIcon(element) {
  element.classList.add("selected")
  selected = element
}

function deselect (element){
  element.classList.remove("selected")
  selected = undefined
}

function handIconTap(element){
  if (element.classList.contains("selected")) {
    deselect(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}