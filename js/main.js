var riQuestions = [];
var questionAtual = 1;



var Question = function(){
$("#question-container").append('<h3>Questão 1</h3><p>Este é um texto<input id="ri-resposta" class="textbox" type="text" value="valor">.</input></p>');
$("#question-container").append('<button id="ri-send-button">Enviar</button>');
}





// Main Function
$(document).ready(function() {
var questao1 = new Question();	
console.log("Running!");
riProgresseBar('1');

$("#ri-send-button").click(function() {
var value = $( "#ri-resposta" ).val();
if(value=="teste"){
alert('você acertou');
}

else{
alert("você errou");
}
 
 riProgresseBar('2');
});


function riProgresseBar(next){
$('#ri-progress-bar').jQMeter({
  goal:'5',
  raised: next,
  width:'300px',
  barColor: '#00BD9B',
  bgColor: "#E8EDF2",
  height: '10px'
});
}



});













