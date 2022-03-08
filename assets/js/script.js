const btn = document.getElementById('button');
const burgerMenu = document.getElementById('myDropdown');
const closeMenu = document.getElementById('close');

btn.addEventListener('click', function(evt){
  evt.preventDefault;
  myDropdown.classList('show');
});

// close.addEventListener('click', function(evt){
//   evt.preventDefault;
//   myDropdown.remove('show');
// });

