var player1_name= localStorage.getItem("name1");
var player2_name= localStorage.getItem("name2");

var player1_score= 0;
var player2_score= 0;

document.getElementById("player1_name").innerHTML = player1_name+ " : ";
document.getElementById("player2_name").innerHTML = player2_name+ " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML= "Question turn - "+ player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn - "+ player2_name;

function send(){
    var number1= document.getElementById("number_1_input").value;
    var number2= document.getElementById("number_2_input").value;
    var actual_output= parseInt(number1)*parseInt(number2);


    question_number = number1 + " x " + number2 ; 
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question_number + input_box + check_button ;
     document.getElementById("output").innerHTML = row; 

}