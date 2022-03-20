{
  ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map("map", {
            center: [47.25834810, 39.69285439],
            zoom: 17,
            controls: ['zoomControl'],
            behaviors: ['drag'],
        }, {
            searchControlProvider: 'yandex#search'
        }),
        HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='test'>" +
            "{{ properties.object }}" +
            "{{ properties.address }}" +
            "</div>", {
                getShape: function () {
                        var el = this.getElement(),
                        result = null;
                    if (el) {
                        var firstChild = el.firstChild;
                        result = new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ])
                        );
                    }
                    return result;
                }
            }
        );
        let placemark = new ymaps.Placemark([47.25834810, 39.69285439], {
            hintLayout: HintLayout,
            hintContent: 'Its me'
            },
            {
            iconLayout: 'default#image',
            iconImageHref: 'assets/img/map-mark.svg',
            iconImageSize: [106, 106],
            iconImageOffset: [-58, -106],
            });
            myMap.geoObjects.add(placemark);
        myMap.geoObjects.add(myPlacemark);
    }
}
