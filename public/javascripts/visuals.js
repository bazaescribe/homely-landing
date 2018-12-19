$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var logoYellow    = document.getElementById("logo-yellow");
    var logoBlue      = document.getElementById("logo-blue");
    var burgerYellow  = document.getElementById("menu-yellow");
    var burgerBlue    = document.getElementById("menu-blue");

    if (scroll >= 80) { //bajando
      $("#mobile").addClass("scrolled-mobile");
      logoYellow.style.display = "none";
      burgerYellow.style.display = "none";
      logoBlue.style.display = "inline-block";
      burgerBlue.style.display = "inline-block";
    }else { //subiendo
      $("#mobile").removeClass("scrolled-mobile");
      logoYellow.style.display = "inline-block";
      burgerYellow.style.display = "inline-block";
      logoBlue.style.display = "none";
      burgerBlue.style.display = "none";
    }
});


function openMenu(){
  var open  = document.getElementById('menu-button');
  var close = document.getElementById('menu-button-close');
  close.style.transform = "rotate(225deg)";
  open.style.transform = "rotate(180deg)";
  $("#menu-box").addClass("menu-open");
  console.log("no she")
}

function closeMenu(){
  var open  = document.getElementById('menu-button');
  var close = document.getElementById('menu-button-close');
  close.style.transform = "rotate(-45deg)";
  open.style.transform = "rotate(-90deg)";
  $("#menu-box").removeClass("menu-open");
}