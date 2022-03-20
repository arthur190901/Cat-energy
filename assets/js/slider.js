{
  const toggle = document.querySelector('.example__taggle');
  const image = document.getElementById('image');
  const before = document.getElementById('before');
  const after = document.getElementById('after');

  toggle.addEventListener('change', function(evt){
    console.log(evt, toggle.value)
    image.width = toggle.value
    console.log(image)
  })

  before.addEventListener('click', function(event){
    alert('fh')
  })

  after.addEventListener('click', function(event){
    alert('gh')
  })
  
}

