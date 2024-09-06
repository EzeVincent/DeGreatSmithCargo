/*MENU OPEN AND CLOSE*/ 
function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
};




/*WORD CHANGE*/
window.onload = function() {
  var changingWord = document.getElementById("changingWord");
  var words = ["Air Freight", "Ocean Freight", "Customs Clearance", "Haulage", "Air Ticketing"]; // Add your words here
  var index = 0;

  function changeWord() {
      changingWord.textContent = words[index];
      index = (index + 1) % words.length;
  }

  setInterval(changeWord, 5000); // Change word every 2 seconds
};

/*LOADER*/

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("disapear");
  loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
  })
});

/* CONTACT FORM POPUP*/
function openForm(){
  const popup = document.querySelector('popupForm');
  popupForm.style.display = 'flex';
}
function closeForm(){
  const popup = document.querySelector('popupForm');
  popupForm.style.display = 'none';
};


 /*MOUSE MOVE TRAIL*/
const squareTrail = document.querySelector('.square-trail');
const squareTemplate = document.createElement('div');
squareTemplate.className = 'square';

document.addEventListener('mousemove', (event) => {
const square = squareTemplate.cloneNode();
square.style.top = `${event.clientY}px`;
square.style.left = `${event.clientX}px`;
square.style.background = getRandomColor();
squareTrail.appendChild(square);
body.appendChild(square);
});

function getRandomColor() {
return `#${Math.floor(Math.random() * 16777215).toString(36)}`;
};






/*SCROLL BOX ANIMATION*/

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll' ,checkBoxes);
checkBoxes();

function checkBoxes() {
const triggerBottom = window.innerHeight / 4 * 3;

boxes.forEach(box => {
  const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    }
    else {
      box.classList.remove('show');
    }
  
})
};


/*SWIPER */
/*
const swiper = new Swiper('.swiper', {
direction: 'horizontal',
loop: true,
pagination: {
  el: '.swiper-pagination',
},
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
scrollbar: {
  el: '.swiper-scrollbar',
},
});

*/


