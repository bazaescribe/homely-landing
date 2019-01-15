$( document ).ready(function() {
  var location = getURL();
  if(location != null){
    $('#message-title')[0].innerHTML = "Gana dinero trabajando en " + location;
  } else {
    console.log("Página regular");
  }
});

function getURL(){
  var raw = window.location.href;
  var url = new URL(raw);
  var selected = url.searchParams.get("location");

  return selected;
}