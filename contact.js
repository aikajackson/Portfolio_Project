const scriptURL = "https://script.google.com/macros/s/AKfycbwI5GnBqtk6KB3jBVmWNtzGGMH5lUf9W6a2SfgEL5DXCLTGuL3r0nGf48fKS7pAB5RK/exec"
const form = document.forms['submit-to-google-sheet']
  form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, {method: 'POST', body: new FormData(form)})
          .then(message => alert('Message sent successfully.'))
          .catch(error => console.error('Error.', error.message))
          document.getElementById("submit-to-google-sheet").reset();
    })
let hereWord = document.querySelector(".here-word");
let wireframeOne = document.querySelector(".wireframe-1");
let wireframeTwo = document.querySelector(".wireframe-2");
let wireframeThree = document.querySelector(".wireframe-3");
let aboutChallenge = document.querySelector(".about-challenge");
let toggleButtonOne = document.getElementById("toggleButtonOne");
let toggleButtonTwo = document.getElementById("toggleButtonTwo");
let toggleButtonThree = document.getElementById("toggleButtonThree");

toggleButtonOne.addEventListener("click", function(){
    hereWord.classList.toggle("active");
});
toggleButtonTwo.addEventListener("click", function(){
    wireframeOne.classList.toggle("active");
    wireframeTwo.classList.toggle("active");
    wireframeThree.classList.toggle("active");
});
toggleButtonThree.addEventListener("click", function(){
    aboutChallenge.classList.toggle("active");
})

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