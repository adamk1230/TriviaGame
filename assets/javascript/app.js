
numberRight = 0;

var questions = [ {
	question: "Who killed Eddard Stark?",
	chocies: ["The Mountain", "Ser Ilyn Payne", "The Hound", "Little Finger"],
	correctAnswer: "Ser Ilyn Payne"
}, {
	question: "What was the name of Rob Stark's direwolf?",
	choices: ["Summer", "Ghost", "Grey Wind", "Shaggydog"],
	correctAnswer: "Grey Wind"
}, {
	question: "Who killed Walder Frey?",
	choices: ["Arya Stark", "Jaime Lannister", "Brienne Tarth", "The Blackfish"],
	correctAnswer: "Arya Stark"
}, {
	question: "Who killed Oberyn Martell?",
	choices: ["The Hound", "The Mountain", "Jaime Lannister", "Daario Naharis"],
	correctAnswer: "The Mountain"
}, {
	question: "Which of the following is NOT one of Daenerys Targaryen's Dragons.",
	choices: ["Drogon", "Rhaegal", "Viserion", "Balerion"],
	correctAnswer: "Balerion"
}];


function grader(){
if (document.getElementById("opt1").checked === true) {
	numberRight ++;
	$("#right").html(numberRight);
}
}

//Countdown Timer
var n = 5;
setTimeout(countDown,1000);

function countDown(){
   n--;
   if(n > 0){
      setTimeout(countDown,1000);
   }
   // debugger
   $("#countdown").html(n);

   if (n === 0){
   grader();	
   }
   

}

