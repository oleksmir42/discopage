/*
const rainBow = ["green", "red", "blue", "yellow"];

rainBow.forEach((n, i) => {
  setTimeout(() => console.log(`'${rainBow[i]}'`), 2000 * (i + 1));
});

// Need to connect above block to changeBackground so colors changes according to time delay
let changeBackground = document.getElementById('mama')
changeBackground.style.backgroundColor = 'red'
*/

const bodElement = document.getElementById("mama");
 function changeToFunkyColor(domElement) {
   const r = Math.random() * 255;
   const g = Math.random() * 255;
   const b = Math.random() * 255;

   domElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
 }
 setInterval(() => {
   changeToFunkyColor(bodElement);
