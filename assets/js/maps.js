function initMap() { // Google maps function and theme

 let LingLang = { lat: 51.8662404, lng: -8.4420163 };

    let map = new google.maps.Map(document.getElementById("map"), {

        zoom: 13,

        center: LingLang,

        styles: [
            { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]

    });

    /* Code for info window on map on index.html page */
    let contentString =
        `
    <div id="content"> 
    <div id="siteNotice"> 
    </div> 
    <h1 id="firstHeading" style="color: #af9483; font-family: Caveat, cursive; font-size: 2rem;"  ><img src="assets/img/logos/LingLang.png" class="linglanglogo"  alt="LingLang Logo"/>LingLang</h1> 
    
    <div id="bodyContent"> 
    <p style="color: #615550; font-family: Caveat, cursive; font-size: 1rem;">
       ⋆⋆⋆⋆⋆ <br> "I sent my children here to Spanish and now they order our food on holidays. " <br>  - An Taoiseach ;)
    </p> 
    <p style="color: #615550; font-family: Caveat, cursive; font-size: 1rem;">Address: LingLang, DonnyBrook Hill, Douglas, <br> Cork, Ireland <br>
    Phone:  +351 135 71113 <br>
    Email: LingLang@gmail.com</p>

    </div> 
    </div>`;
    
    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: LingLang,
        map: map,
        title: "LingLang"
    });
    marker.addListener("click", function () {
        infowindow.open(map, marker);
    });

}
