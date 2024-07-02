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