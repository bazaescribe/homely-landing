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

function openMenu(){
  document.getElementById("menu-screen").style.display = "block";
}

function closeMenu(){
  document.getElementById("menu-screen").style.display = "none";
}