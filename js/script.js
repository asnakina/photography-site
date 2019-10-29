
                              // Sidebar
// It's a name of the function. It's a function variable, points to the function.
// It takes all document and finds element
// with id "sidebar" and set style "0" for the property "left".
// Though before in css page "left" equaled "-160px".
const openBar = () => {
  document.getElementById('sidebar').style.left = '0';
}
// It's a name of the function. It's a function variable, points to the function.
// It takes all document and finds element
// with id "sidebar" and set style "-160" for the property "left".
// Though before in css page "left" equaled "0px".
const closeBar = () => {
  document.getElementById('sidebar').style.left = '-160px';
}

                          // Modal
// It's a name of the function. It's a function variable, points to the function.
// It takes all document and finds element
// with id "modal" and set style "visible" for the property "visibility".
// Though before in css page "visibility" equaled "hidden"".
const openForm = () => {
  document.getElementById('modal').style.visibility = 'visible';
}
// It's a name of the function. It's a function variable, points to the function.
// It takes all document and finds element
// with id "modal" and set style "hidden" for the property "visibility".
// Though before in css page "visibility" equaled "visible".
const closeForm = () => {
  document.getElementById('modal').style.visibility = 'hidden';
}
// ES5 - same, just in case
// function closeForm() {
//   document.getElementById('modal').style.visibility = 'hidden';
// }


// Slide-show
// It's a variable. initial index. Slideindex for start equals 1.
//
let slideIndex = 1;
// See the function index will change by clicking the buttons the function playdivs(slideIndex += n) executes.
// If we click Left button index becomes 1-1=0.
// 2nd after click.
const playdivs = (n) => {
// it's for interations through the below array x.
let i = 0;
// x-it's an array with all elements class 'slides'.
const x = document.getElementsByClassName("slides");
// n-it's a number. If n > length of x array, then slideIndex=1.
if (n > x.length) slideIndex = 1;
// If < 1, then slideIndex = length of the array.
if (n < 1) slideIndex = x.length;
// The length of the array =7. i =0 for the start, it's an index.
// It's a while loop all makes pictures invisible.
// The loop-our iteration takes each element and set it's display property to "none".
//  so all image become invisible.
while (i < x.length) {
x[i].style.display = "none";
i++;
}
//And the function playDivs takes slideIndex-1 and sets display to block,
// so only picture becames visible.
x[slideIndex - 1].style.display = "block";
}
// 1st after click.When we click the Left button n will =-1. and Right button will=+1.
// If we press right button, slideIndex becomes=2
// and with this arugument
// This function calls the function "playdivs"
const plusDivs = (n) => {
  playdivs(slideIndex += n);
}

// 0st before click. will be called on page load. Calles the function!
// It starts to read function body from line 26 till
playdivs(slideIndex);


// Objects
const initial = {
  "Activities": "Activities",
  "Sceneries": "Sceneries",
  "Parties": "Parties",
  "Weddings": "Weddings",
  "Styling": "Styling",
  "Family": "Family",
  "About": "About",
  "Contacts": "Contacts",
  "Main": "Main",
  "Photography site": "Photography site",
  "Fill your life with memories!": "Fill your life with memories!",
  "Send Request": "Send Request",
  "Sport activities": "Sport activities",
  "Family photos": "Family photos",
  "Parties pics": "Parties pics",
  "Styling photos": "Styling photos",
  "Weddings Pics": "Weddings Pics",
}
// const obj = {
//   'key': 'value'
// }
//
// obj['key'] = 'value'
//
// sp['Family'] = 'Familia'

const en = {
  "Ocupaciones": "Activities",
  "Paisajes": "Sceneries",
  "Fiestas": "Parties",
  "Bodas": "Weddings",
  "Estilo": "Styling",
  "Familia": "Family",
  "Acerca": "About",
  "Contactos": "Contacts",
  "Principal": "Main",
  "Sitio de fotografía": "Photography site",
  "Llena tu vida con recuerdos!": "Fill your life with memories!",
  "Enviar petición": "Send Request",
  "Actividades deportivas": "Sport activities",
  "Fotos de familia": "Family photos",
  "Fiestas fotos": "Parties pics",
  "Diseñar fotos": "Styling photos",
  "Fotos de bodas": "Weddings Pics",
}

const sp = {
  "Activities": "Ocupaciones",
  "Sceneries": "Paisajes",
  "Parties": "Fiestas",
  "Weddings": "Bodas",
  "Styling": "Estilo",
  "Family": "Familia",
  "About": "Acerca",
  "Contacts": "Contactos",
  "Main": "Principal",
  "Photography site": "Sitio de fotografía",
  "Fill your life with memories!": "Llena tu vida con recuerdos!",
  "Send Request": "Enviar petición",
  "Sport activities": "Actividades deportivas",
  "Family photos": "Fotos de familia",
  "Parties pics": "Fiestas fotos",
  "Styling photos": "Diseñar fotos",
  "Weddings Pics": "Fotos de bodas",
}
// It's a variable, reference on 3 objects: initial(en),english or spanish.
// For the start it's initial, after that it becames spanish, and english after.
let currentLanguage = initial;
// 3rd step. call updateAllTextElements which will change innerText of all elements with class 'text-element'
const updateAllTextElements = () => {
  // call updateLangButton function to change button to 'Espanol' or 'English'
  updateLangButton();
  //find all elements with class 'text-elements'
  const textElements = document.getElementsByClassName("text-element");
  for (i in textElements) {
    // textElements[0] = <a class="text-element" href="pages/activities.html">Activities</a>
    // textElements[0].innerText = 'Activities'
    // currentLanguage['Activities'] = 'Ocupaciones'
    textElements[i].innerText = currentLanguage[textElements[i].innerText];
  }
}
// It works parallel the previous one
const updateLangButton = () => {
  // englishBtn  - variable which corresponds-related buttons.
    const englishBtn = document.getElementById('lang-english');
    const spanishBtn = document.getElementById('lang-spanish');
  if (currentLanguage === en || currentLanguage === initial) {
    englishBtn.style.display = "none";
    spanishBtn.style.display = "block";
  } else {
    englishBtn.style.display = "block";
    spanishBtn.style.display = "none";
    // switching buttons
  }
}
// It's 2nd step. it calles after click on language button. Changes the value of "currentLanguage" to en or sp(from "es" or "sp")
// and call updateAllTextElements which will change innerText of all elements with class 'text-element'
const switchLanguage = (language) => {
  // language might be either 'en' or 'sp'
  currentLanguage = language === "en" ? en : sp;
  updateAllTextElements();
}
// 1st! on page load
// at this moment currentLanguage = initial - english. and this calles function.
// But it's already english. we do this initial object to further lang change.
// If we don't click buttons, nothing's happening.
updateAllTextElements();
