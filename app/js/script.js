/*const btnHamburger = document.querySelector('#btnHarmburger');
const header = document.querySelector('.header');



btnHamburger.addEventListener('click', function(){
console.log( 'click hamburger');
if(header.classList.contains('open')){
    header.classList.remove('open');
}
else {
    header.classList.add('open');
}
});
 */
// const btnHamburger = document.querySelector("#btnHamburger");
// const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  // console.log("open hamburger");

  if (header.classList.contains("open")) {
    //close hamburger menu
    // body.classList.remove('noscroll');
    header.classList.remove('open');
    fadElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // hamburger menu
    // body.classList.add('noscroll');
    header.classList.add('open');
    fadElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});