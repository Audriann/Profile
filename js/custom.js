// navigation  menu js
function openNav() {
    $("#myNav").addClass("menu_width");
    $(".menu_btn-style").fadeIn();
}

function closeNav() {
    $("#myNav").removeClass("menu_width");
    $(".menu_btn-style").fadeOut();
}


// get current year

function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
displayYear();



//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


// slider carousel control


$('.slider_btn_prev').on('click', function (e) {
    e.preventDefault()
    $('.slider_text_carousel').carousel('prev')
    $('.slider_image_carousel').carousel('prev')
})


$('.slider_btn_next').on('click', function (e) {
    e.preventDefault()
    $('.slider_text_carousel').carousel('next')
    $('.slider_image_carousel').carousel('next')
})


/** google_map js **/

function myMap() {
    // Properti peta dengan koordinat untuk Polban Kampus
    var mapProp = {
        center: new google.maps.LatLng(-6.872142502457211, 107.57377408614744
), // Koordinat Polban
        zoom: 18, // Zoom yang lebih dekat
        mapTypeId: google.maps.MapTypeId.ROADMAP // Jenis peta (pilihan: ROADMAP, SATELLITE, HYBRID, TERRAIN)
    };

    // Membuat objek peta dan menampilkannya pada elemen dengan ID "googleMap"
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    // Menambahkan marker di Polban Kampus
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-6.872142502457211, 107.57377408614744
),
        map: map,
        title: "Polban Kampus" // Teks yang muncul saat kursor di atas marker
    });
}
