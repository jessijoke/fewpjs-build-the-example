const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartGlyph = () => document.querySelectorAll('.like-glyph');
const modalMessage = () => document.querySelector('#modal-message');

heartGlyph().forEach(heart => heart.addEventListener('click', function(event) {
  mimicServerCall()
  .then(miniResponse => {
    console.log(miniResponse)
    event.target.innerText == EMPTY_HEART ? event.target.innerText = FULL_HEART : event.target.innerText = EMPTY_HEART;
  })
  .catch(thisIsAnError => {
    console.log(thisIsAnError) 
    modalMessage().innerText = thisIsAnError;
    console.log(modalMessage())
    document.querySelector("#modal").classList.remove('hidden');
    setTimeout(function(){ 
      document.querySelector("#modal").classList.add('hidden');
    }, 5000);
  })
}))

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
