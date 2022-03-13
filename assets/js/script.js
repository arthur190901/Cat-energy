{
  const btn = document.getElementById('button');
  const burgerMenu = document.querySelector('.sections');
  const closeMenu = document.querySelector('.close');

  btn.addEventListener('click', function(evt){
    evt.preventDefault;
    btn.classList.toggle('close');
    burgerMenu.classList.toggle('show');
  });

  
  // if (burgerMenu.classList.toggle('show')) {

  // }

  // close.addEventListener('click', function(evt){
  //   evt.preventDefault;
  //   burgerMenu.remove('show');
  // });
}
