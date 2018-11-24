$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 280) {
      $("#info-banner").addClass("banner-hide");
    }else {
      $("#info-banner").removeClass("banner-hide");
    }
});

function message(){
    alert("k onda k pez");
}