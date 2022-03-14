{
  const btn = document.getElementById('button');
  const burgerMenu = document.querySelector('.sections');
  const btnBefore = document.getElementById('before');
  const btnAfter = document.getElementById('after');
  const image = document.getElementById('image');

  btn.addEventListener('click', function(evt){
    evt.preventDefault;
    btn.classList.toggle('close');
    burgerMenu.classList.toggle('show');
  });

  // btnBefore.addEventListener('click', function(event) {
  //   event.preventDefault;
  //   image.classList.add('cat-before');
  //   image.classList.add('none');
  // });
}
