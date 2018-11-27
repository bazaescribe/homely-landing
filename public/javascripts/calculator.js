function calculate(){
  var days  = document.getElementById("days").value;
  var hours = document.getElementById("hours").value;
  var income = 0;

  income = (days * hours) * 74 * 4;

  income =  income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  document.getElementById("income").innerHTML = income;
}