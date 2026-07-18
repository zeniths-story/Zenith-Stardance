
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
dragElement(zenApp);


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

function closeWindow(element) {
    element.style.display = "none";
    deselect(element);

};

//open def.

function openWindow(element){
    element.style.display = "flex";
    highIndex++;
    element.style.zIndex = highIndex;
    topBar.style.zIndex = highIndex + 1;
    selectIcon(element);
};

function makeClose(element) {
 var close = document.getElementById(element.id + "close");
 close.addEventListener("click", () => closeWindow(element));
 
};
makeClose(novaNotes);
makeClose(zenApp);
makeClose(welcomeScreen);


function makeOpen(element) {
var open = document.getElementById(element.id + "open");
open.addEventListener("click", () => openWindow(element));
};
makeOpen(novaNotes);
makeOpen(zenApp);
makeOpen(welcomeScreen);


//app stuff
var selected = undefined;

function selectIcon(element) {
  var icon = document.getElementById(element.id + "open")
  icon.classList.add("selected");
  selected = element;
};

function deselect (element){
  var icon = document.getElementById(element.id + "open")
  icon.classList.remove("selected");
  selected = undefined;
};

var highIndex = 1;
var topBar = document.getElementById("top")

function handWindTap(element) {
  highIndex++;
  element.style.zIndex = highIndex;
  topBar.style.zIndex = highIndex + 1;
};

function addWindTapHand(element) {
  element.addEventListener("mousedown", function() {
   handWindTap(element);
  });
};

addWindTapHand(welcomeScreen);
addWindTapHand(novaNotes);
addWindTapHand(zenApp);

function initWind(elementName){
  var screen = document.querySelector("#elementName");
  console.log(screen);
  addWindTapHand(screen);
  //dragElement(screen);
  makeClose(elementName);
  makeOpen(elementName);
};

//initilized windows
//initWind(welcomeScreen);
//initWind(novaNotes);
//initWind(zenApp);


//Nova Notes
var notecontent = [
   {
    date: "About NN",
    content: `
    <p> This app houses a lot of me complaining about javascript as well as OS Updates/Changes</p>`,
  },
  {
    date: "Plans 4 NovaOS",
    content: `
    <p contenteditable="true">
    -Zenith app<br/>
    -"making of" app<br/>
    -PHM app? <br/>
    - settings?<br/>
    -better handles <br/>
    -<s>app location</s> <br/>
    </p>`
  },
  {
    date: "7/15/26",
    content: `
    <p> javascript doesn't like me very much. 
    <br> What am I doing wrong??? 
    <br/>Why no able read addEventListener??</p>`,
  },
  {
    date: "7/16/26",
    content: `
    <p>
    See yesterday + 
    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    </p>`
  },
   {
    date: "7/18/26",
    content: `
    <p>
    - Fixed notes!<br/>
    - Deleted titles from notes bc cloging sidebar; more like Date/title now<br/>
    - changed notes color scheme<br/>
    - changed scrollbar color :D<br/>
    - added slight transparency to WelcWind<br/>
    - changed header<br/>
    - why is notes always the one breaking??? <br/>
    - windows can now come to top when clicked! <br/>
    - selecting/deselecting works<br/>
    - optimized open/closing<br/>
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
   //{
    //zentitle: "Headmates",
    //zencontent: `
    //<p>total HM count : 30<br/> HM Shown Here: 11
    //<ul> 
      //<li>Danger</li>
      //<li>Ethan</li>
      //<li>Evy/Opal</li>
      //<li>Evi</li>
      //<li>Hades</li>
      //<li>Lumi</li>
      //<li>Null</li>
      //<li>Reid</li>
      //<li>Rowan</li>
      //<li>Rylen</li>
      //<li>Tommy</li>
   // </ul>
   // <a href="https://zeniths-story.carrd.co/#fullabt" target="blank" > See More </a> </p>`,
  //},
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