
//time in topbar - works; don't move from top
setInterval(function () {
    document.querySelector("#timeOfEarth").innerHTML = new Date().toLocaleString();
}, 1000);


//defining screens
var welcomeScreen = document.getElementById("wlcmescrn");
var novaNotes = document.getElementById("novaNotes");
var zenApp = document.getElementById("zenApp");

//dragging elements
//elements we can drag
dragElement(welcomeScreen);
dragElement(novaNotes);
dragElement(zenApp)


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
var welcomeScreenClose = document.getElementById("wlcmeclose");
var welcomeScreenOpen = document.getElementById("wlcmeopen");
var novaNotesopen = document.getElementById("novaNotesopen");
var novaNotesclose = document.getElementById("novaNotesclose");
var zenAppopen = document.getElementById("zenAppopen");
var zenAppclose = document.getElementById("zenAppclose");


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

novaNotesopen.addEventListener("click", () => openWindow(novaNotes));
novaNotesclose.addEventListener("click", () => closeWindow(novaNotes));

zenAppopen.addEventListener("click", () => openWindow(zenApp));
zenAppclose.addEventListener("click", () => closeWindow(zenApp));

//function makeClose(element) {
 //var close = element + "close";
 //close.addEventListener("click", () => closeWindow(element));
//};
//makeClose(novaNotes)

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

//function addWindTapHand(element) {
 // element.addEventListener("mouseDown", function () {
  // handWindTap(element)
  //});
//};

function handWindTap(element) {
  highIndex++;
  element.style.zIndex = highIndex;
  topBar.style.zIndex = highIndex + 1;
  deselect(selected);
};

var topBar = document.getElementById("top")

function initWind(elementName){
  var screen = document.getElementById("elementName");
  //addWindTapHand(screen);
  dragElement(screen);
  makeClose(elementName);
};

//initilized windows
//initWind(welcomeScreen);
//initWind(novaNotes);


//Nova Notes
var notecontent = [
  {
    date: "7/15/26",
    content: `
    <p contenteditable="true"> javascript doesn't like me very much. 
    <br> What am I doing wrong??? 
    <br/>Why no able read addEventListener??</p>
   <br />`,
  },
  {
    date: "7/16/26",
    content: `
    <p>
    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    </p>`
  },
  {
    date: "Plans for NovaOS",
    content: `
    <p contenteditable="true">
    -Zenith app<br>
    -"making of" app<br>
    -PHM app <br>
    -better handles <br>
    -<s>app location</s> <br>
    </p>`
  },
   {
    date: "7/18/26",
    content: `
    <p>
    Fixed notes!<br/>
    Deleted titles from notes bc cloging sidebar; more like Date/title now
    changed notes color scheme
    </p>`
  },
];

function setNoteContent(index) {
  var notetext = document.getElementById("noteText");
  notetext.innerHTML = notecontent[index].content;
};

setNoteContent(0)

function addToNoteBar(index) {
  var notebar = document.getElementById("notebar");
  var note = notecontent[index];
  var newDiv = document.createElement("div");
  newDiv.innerHTML = `
  <p>
  ${note.date}
  </p>`;

  newDiv.addEventListener("click", function(){
    setNoteContent(index);
  });
  notebar.appendChild(newDiv);
};

for (let i=0; i< notecontent.length; i++) {
    addToNoteBar(i);
};


//zenApp
var zencontent = [
  {
    zentitle: "Basic About",
    zencontent: `
    <p> 
    Hi, I'm Zenith!<br>
   I'm 16 and this is my first year doing HackClub!
    This OS was my first time working with HTML & CSS and a deeper dive into JavaScript.<br>
    Hope you like it!
    </p>`,
  },
  {
    zentitle: "Fandoms",
    zencontent: `
    <p> 
    PHM, MHA, ASoUE, E:TM, TADC, Owl House, KotLC, Ranboo
    <br/>
    <a href="https://zeniths-story.carrd.co/#handi" target="blank" > See More </a> </p>`,
  },
  {
    zentitle: "Full About",
    zencontent: `
    <p> 
    Name: Zenith <br/>
    Pronouns: They/Them <br/>
    Gender: Fluid <br/>
    Age: 16 <br/>
    <br/>
    Has: Anxiety, (depression?), (AuDHD?), braces, a will to live, (osdd1-b?), three cats 
    <br/> <br/>
    Is: Creative, plural, tired of JS not working, alterhuman
    <br/><br/>
    Should: probably go outside once in a while, buy more art supplies, have breakfast, 
    actually focus on school once that starts up, get more exercise, go to therapy 
    <br/>

    <br/>
    <a href="https://zeniths-story.carrd.co" target="blank" > Learn More </a> </p>`,
  },
];

function setZenContent(index) {
  var zentext = document.getElementById("zentxt");
  zentext.innerHTML = zencontent[index].zencontent;
};

setZenContent(0)

function addToZenBar(index) {
  var zenbar = document.getElementById("zenbar");
  var zenabt = zencontent[index];
  var znewDiv = document.createElement("div");
  znewDiv.innerHTML = `
  <p>
  ${zenabt.zentitle}
  </p>`;

  znewDiv.addEventListener("click", function(){
    setZenContent(index);
  });
  zenbar.appendChild(znewDiv);
};

for (let l=0; l< zencontent.length; l++) {
    addToZenBar(l);
};