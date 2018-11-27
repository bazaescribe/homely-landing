$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
      $("#mobile").addClass("scrolled-mobile");
      document.getElementById("logo-mobile").src="images/logos/homely.svg";
      document.getElementById("menu-button").src="images/icons/plusAlt.svg";
      console.log("I'm helping");
    }else {
      $("#mobile").removeClass("scrolled-mobile");
      document.getElementById("logo-mobile").src="images/logos/homely-cream.svg";
      document.getElementById("menu-button").src="images/icons/plus.svg";
    }
});

function message(){
    alert("k onda k pez");
}

function openMenu(){
  document.getElementById("mobile").style.background = "var(--color-indigo)";
  console.log("quack")
}

function closeMenu(){
  document.getElementById("menu-screen").style.display = "none";
}