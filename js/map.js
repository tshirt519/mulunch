'use strict';


  function initMap() {

    const muramusubi = { lat: 35.703179498177654, lng: 139.73676885895713 };

    const map = new google.maps.Map(document.getElementById("js-map"), {
      zoom: 18,
      center: muramusubi,
    });

    const marker = new google.maps.Marker({
      position: muramusubi,
      map: map,
    });
  }
