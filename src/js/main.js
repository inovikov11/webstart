var button = document.querySelector('#button');
var closeButton = document.querySelector('#close-button');
var modal = document.querySelector('.modal');

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
});

var autoCloseFunction = function () {
  modal.classList.remove('modal_active');
}

var autoClose = setInterval(autoCloseFunction, 5000);

closeButton.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});