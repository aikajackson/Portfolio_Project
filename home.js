let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

let appear = document.querySelector(".appear"); 
let cb = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("inview");
    }else{
      entry.target.classList.remove("inview");
    }
  });
}
let io = new IntersectionObserver(cb);
io.observe(appear)
let items = document.querySelectorAll(".appear2");
let active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add("inview2"); 
        }else{
            entry.target.classList.remove("inview2"); 
        }
    });
}
let io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }
 
 
 let appearThree = document.querySelector(".appear3"); 
 let cb2 = function(entries){
   entries.forEach(entry => {
     if(entry.isIntersecting){
       entry.target.classList.add("inview3");
     }else{
       entry.target.classList.remove("inview3");
     }
   });
 }
 let io3 = new IntersectionObserver(cb2);
 io3.observe(appearThree)
 let itemsTwo = document.querySelectorAll(".appear4");
 let activeTwo = function(entries){
     entries.forEach(entry => {
         if(entry.isIntersecting){
         entry.target.classList.add("inview4"); 
         }else{
             entry.target.classList.remove("inview4"); 
         }
     });
 }
 let io4 = new IntersectionObserver(activeTwo);
  for(let i=0; i < items.length; i++){
     io4.observe(items[i]);
  }