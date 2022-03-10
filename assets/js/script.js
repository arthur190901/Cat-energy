{
const btn = document.getElementById('button');
const burgerMenu = document.querySelector('.sections');
const close = document.querySelector('.close');

btn.addEventListener('click', function(evt){
  evt.preventDefault;
  burgerMenu.classList.toggle('show');
});

// close.addEventListener('click', function(evt){
//   evt.preventDefault;
//   burgerMenu.remove('show');
// });
}
