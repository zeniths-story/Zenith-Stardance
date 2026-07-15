
//time in topbar - works; don't move from top
setInterval(function () {
    document.querySelector("#timeOfEarth").innerHTML = new Date().toLocaleString();
}, 1000);


//defining screens
var welcomeScreen = document.getElementById("wlcmescrn");
var novaNotes = document.getElementById("novaNotes")

//dragging elements
//elements we can drag
dragElement(welcomeScreen);
dragElement(document.getElementById("novaNotes"))


//defining dragElement
function dragElement(element) {
  var currX = 0, currY = 0, initX = 0, initY = 0;
  if (document.getElementById(element + "header")) {
    document.getElementById(element + "header").onmousedown = startDrag;
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
var welcomeScreenClose = document.getElementById("wlcmeclose");
var welcomeScreenOpen = document.getElementById("wlcmeopen");
var nnopen = document.getElementById("nnopen");
var nnclose = document.getElementById("nnclose");

//close def.

function closeWindow(element) {
    element.style.display = "none";

};

//open def.

function openWindow(element){
    element.style.display = "flex";
    highIndex++;
    element.style.zIndex = highIndex;
    topBar.style.zIndex = highIndex + 1;
    
};

//open/close commands
welcomeScreenClose.addEventListener("click", function () {
    closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function () {
    openWindow(welcomeScreen);
});

nnopen.addEventListener("click", () => openWindow(novaNotes));
nnclose.addEventListener("click", () => closeWindow(novaNotes));

//function makeClose(element) {
  
//}


//app stuff
var selected = undefined;

function selectIcon(element) {
  element.classList.add("selected");
  selected = element;
};

function deselect (element){
  element.classList.remove("selected");
  selected = undefined;
};

function handIconTap(element){
  if (element.classList.contains("selected")) {
    deselect(element);
    openWindow(window);
  } else {
    selectIcon(element);
  };
};

var highIndex = 1;

function addWindTapHand(element) {
  element.addEventListener("click", function () {
    handWindTap(element)
  });
};

function handWindTap(element) {
  highIndex++;
  element.style.zIndex = highIndex;
  topBar.style.zIndex = highIndex + 1;
  deselect(selected);
};

var topBar = document.getElementById("top")

function initWind(elementName){
  var screen = document.getElementById(elementName);
  addWindTapHand(screen);
  dragElement(screen);
  makeClose(elementName);
};

//initilized windows
initWind(welcomeScreen)
initWind(novaNotes)