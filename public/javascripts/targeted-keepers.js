$( document ).ready(function() {
  //console.log( "ready!" );
  //$('#card-message')[0].style.background = "red";
  var location = getURL();

  if(location != null){
    $('#message-title')[0].innerHTML = "Gana dinero trabajando en " + location;
  } else {
    console.log("Página regular");
  }

  //console.log(location);
});

function getURL(){
  var raw = window.location.href;
  var url = new URL(raw);
  var selected = url.searchParams.get("location");

  //console.log(selected);
  
  // if(selected == "true"){
  //   document.getElementById("popup").style.display = "flex";
  // } else {
  //   console.log("k onda k pez");
  // } 

  return selected;
}