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


  // const imageMap = document.querySelector('.yandex-map');

  ymaps.ready(init);
  function init(){
    let myMap = new ymaps.Map('map', {
      center: [47.25834810, 39.69285439],
      zoom: 17,
      controls: ['zoomControl'],
      behaviors: ['drag'],
    });

    let placemark = new ymaps.Placemark([47.25834810, 39.69285439], {
      hintContent: (image),
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '../cat-energy/assets/img/map-mark.svg',
      iconImageSize: [106, 106],
      iconImageOffset: [-58, -106],
    });

    myMap.geoObjects.add(placemark);
  }
}
