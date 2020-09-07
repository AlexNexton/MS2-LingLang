function initMap() { // Google maps function and theme

 let LingLang = { lat: 51.8662404, lng: -8.4420163 };

    let map = new google.maps.Map(document.getElementById("map"), {

        zoom: 13,

        center: LingLang 
    });

    /* Code for info window on map once marker is clicked on index.html page */
    let contentString =
        `
    <div id="content"> 
    <div id="siteNotice"> 
    </div> 
    <h1 id="firstHeading" style="color: #000080; font-family: 'Libre Baskerville', serif; font-size: 2rem;"  ><img src="assets/img/logos/LingLang.png" class="linglanglogo"  alt="LingLang Logo"/>LingLang</h1> 
    
    <div id="bodyContent"> 
    <p style="color: #000080; font-family: 'Libre Baskerville', serif; font-size: 1rem;">
       ⋆⋆⋆⋆⋆ <br> "I sent my children here to learn Spanish and now they order our food on holidays. " <br>  - An Taoiseach ;)
    </p> 
    <p style="color: #000080; font-family: 'Libre Baskerville', serif; font-size: 1rem;">Address: LingLang, DonnyBrook Hill, Douglas, <br> Cork, Ireland <br>
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
