{
  const toggle = document.querySelector('.example__taggle');
  const imageBefore = document.getElementById('image1');
  const imageAfter = document.getElementById('image2');
  const before = document.getElementById('before');
  const after = document.getElementById('after');

  toggle.addEventListener('change', function(evt){
    console.log(evt, toggle.value);
    imageAfter.style.width = toggle.value+'%';
    imageBefore.style.width = toggle.value-'%';
    console.log(imageBefore);
  });

  before.addEventListener('click', function(event){
    event.preventDefault;
    toggle.value = '0'
  })

  after.addEventListener('click', function(event){
    event.preventDefault;
    toggle.value = '100'
  })
}

