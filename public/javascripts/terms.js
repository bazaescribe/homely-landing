function showSection(div){

  document.getElementById("terms").style.display = "none";
  document.getElementById("privacy").style.display = "none";
  document.getElementById("rules").style.display = "none";
  document.getElementById("account").style.display = "none";

  document.getElementById(div).style.display = "inline-block";
}

function getURL(){
  var raw = window.location.href;
  var url = new URL(raw);
  var selected = url.searchParams.get("info");
  
  if(selected != null){
    showSection(selected);
  }
  
}