$(document).ready(function() {
    
$("#startClock").on("click", function() {
var timeleft = 30;
var downloadTimer = setInterval(function countDown(){
timeleft--;
document.getElementById("timer").textContent = timeleft;
if(timeleft <= 0)
    clearInterval(downloadTimer);  
},1000);
});

$("#submitQuiz").on("click", function getAnswers() {         
var amountCorrect = 0; 
var amountIncorrect = 0;         
for(var i = 1; i <= 45; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value === "correct" && radio.checked) {
      amountCorrect++;
      }
  }
 }                   
    alert("Correct Responses: " + amountCorrect);
  });



});


