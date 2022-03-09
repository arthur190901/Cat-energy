{
const btn = document.getElementById('button');
const burgerMenu = document.querySelector('.sections');
const closeMenu = document.getElementById('close');

btn.addEventListener('click', function(evt){
  evt.preventDefault;
  burgerMenu.classList.add('show');
});

// close.addEventListener('click', function(evt){
//   evt.preventDefault;
//   burgerMenu.remove('show');
// });
}
