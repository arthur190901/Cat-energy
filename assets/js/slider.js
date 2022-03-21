{
  const toggle = document.querySelector('.example__taggle');
  const imageBefore = document.getElementById('image2');
  const imageAfter = document.getElementById('image1');
  const before = document.getElementById('before');
  const after = document.getElementById('after');

  toggle.addEventListener('input', function(){
    imageAfter.style.width = 100 - toggle.value + '%';
    imageBefore.style.width = toggle.value + '%';
  });

  before.addEventListener('click', function(){
    imageBefore.style.width = '100%'
    imageAfter.style.width = '0'
    toggle.value = '0';
  })

  after.addEventListener('click', function(){
    imageBefore.style.width = '0'
    imageAfter.style.width = '100%'
    toggle.value = '100';
  })
}

