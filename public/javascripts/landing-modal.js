function getURL(){
  var raw = window.location.href;
  var url = new URL(raw);
  var selected = url.searchParams.get("jelpmi");

  console.log(selected);
  
  if(selected == "true"){
    document.getElementById("popup").style.display = "flex";
  } else {
    console.log("k onda k pez");
  } 
}

function closeModal(){
  document.getElementById("popup").style.display = "none";
}