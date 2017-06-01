
numberRight = 0;
numberWrong = 0;
numberUnanswered = 0;
var userAnswers = [];


var questions = [ {
	question: "Who killed Eddard Stark?",
	choices: ["The Mountain", "Ser Ilyn Payne", "The Hound", "Little Finger"],
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

console.log (questions[1].question);

for (var i = 0; i < questions.length; i++) {
	var pTag = $("<p>");
	var form = $("<form class='question'>");

	//set our question
	pTag.html(questions[i].question);
	
	// console.log(questions[i].choices)
	// debugger
	for(var j = 0; j < questions[i].choices.length; j++){
		var label = $("<label class='radio-inline'>");
		// label.addClass("radio-inline");

		var choice = $("<input type='radio' name='optradio'>");

		//set attributes for the choice
		// choice.attr("type","radio");
		// choice.attr("name","optradio");
		choice.attr("value", questions[i].choices[j]);
		label.append(choice);
		label.append(questions[i].choices[j]);
		form.append(label);
		pTag.append(form);
	}

	$('#questionDiv').append(pTag);


} // end for


  // run code everytime the key "a" is pressed
document.onkeyup = function(e){
	if (e.key == 'a') {

		//original
		// var selected = $('input[type=radio]:checked'); // THIS IS THE MONEY
		// $.each(selected, function(){
		// 	console.log(this)
		// 	console.log(this.value)
		// 	userAnswers.push(this.value);
		// 	console.log(userAnswers);
		// }) //end of each selected function

		//WITH FIND
    var selected = $('.question');
    $.each(selected, function(){
    	var checkBox = $(this).find("input[type=radio]:checked");
    	console.log("checkBox: ");
    	console.log(checkBox.val());
    	// console.log("checkBox.value: ");
    	// console.log(checkBox.value);
    	console.log("this: ");
    	console.log(this);
    	// console.log("this.value :");
    	// console.log(this.value);
    	if (!checkBox.val()){
    		console.log("unanswered");
    		userAnswers.push("unanswered");
    	}
    	if (checkBox.val()) {
    		console.log(checkBox.val());
    		userAnswers.push(checkBox.val());
    	}
    	console.log(userAnswers);
    }) //end of each selected function

//grader
for (var i = 0; i < questions.length; i++) {
	if (userAnswers[i]=="unanswered") {
		numberUnanswered++;
	}
	if (questions[i].correctAnswer==userAnswers[i]) {
		numberRight++;
	}
	if (questions[i].correctAnswer!=userAnswers[i]){
		numberWrong++;
	}

	console.log(numberUnanswered);
	console.log(numberRight);
	console.log(numberWrong);

}//end for

	} //end of if key =a
} //end of on key up


//var checkBox = $(this).find("input")






// //Grades
// function grader(){
// if (document.getElementById("opt1").checked === true) {
// 	numberRight ++;
// 	$("#right").html(numberRight);
// }
// }


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
   // grader();	
   }
}

