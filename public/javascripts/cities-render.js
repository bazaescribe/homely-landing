function styledCities(){
  var city = "";
  var activeZones = "";
  var hypeZones = "";

  for(i=0; i < zones.length; i++){
    if(zones[i].status == "ON") {
      if(zones[i].city != city){
        activeZones += "<br><br><b>" + zones[i].city + "</b> <br> "
        activeZones += " · <span>" + zones[i].name + "</span>";
        city = zones[i].city;
      }else{
        activeZones += " · <span>" + zones[i].name + "</span>";
      }
    }
  }

  for(i=0; i < zones.length; i++){
    if(zones[i].status == "SOON") {
      if(zones[i].city != city){
        hypeZones += "<br><br><b>" + zones[i].city + "</b> <br> "
        hypeZones += " · <span>" + zones[i].name + "</span>";
        city = zones[i].city;
      }else{
        hypeZones += " · <span>" + zones[i].name + "</span>";
      }
    }
  }

  document.getElementById("activeZones").innerHTML = activeZones;
  document.getElementById("hypeZones").innerHTML = hypeZones;
}

function renderizeCities(){
  var city = "";
  var activeZones = "";
  var hypeZones = "";

  for(i=0; i < zones.length; i++){
    if(zones[i].status == "ON") {
      activeZones += "<div class='zone'>";
      activeZones += "<div class='zone-city'>" + zones[i].city + "</div>";
      activeZones += "<div class='zone-name'>" + zones[i].name + "</div>";
      activeZones += "</div>";
    }
  }

  for(i=0; i < zones.length; i++){
    if(zones[i].status == "SOON") {
      hypeZones += "<div class='zone'>";
      hypeZones += "<div class='zone-city'>" + zones[i].city + "</div>";
      hypeZones += "<div class='zone-name'>" + zones[i].name + "</div>";
      hypeZones += "</div>";
    }
  }

  document.getElementById("activeZones").innerHTML = activeZones;
  document.getElementById("hypeZones").innerHTML = hypeZones;
}