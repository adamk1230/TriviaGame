
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
},  {
	question: "Who is commonly referred to as the Onion Night?",
	choices: ["Ser Davos Seaworth", "Ser Bronn of the Blackwater", "Gendry", "Salladhor Saan"],
	correctAnswer: "Ser Davos Seaworth"
},  {
	question: "Who gave Daenerys Targaryen her dragon eggs?",
	choices: ["Ser Jorah Mormont", "Daario Naharis", "Lord Varys", "Illyrio Mopatis"],
	correctAnswer: "Illyrio Mopatis"
},	{
	question: "Who was the King Beyond the Wall?",
	choices: ["Benjen Stark", "Mance Rayder", "Tormund Giantsbane", "Jeor Mormont"],
	correctAnswer: "Mance Rayder"
},	{
	question: "Which of the following is NOT located in the North.",
	choices: ["Winterfell", "Dreadfort", "Riverrun", "Karhold"],
	correctAnswer: "Riverrun"
},	{
	question: "How did King Joffery Baratheon die?",
	choices: ["Poisoned", "Stabbed in the back", "In the Battle of the Blackwater", "Wound from wild boar"],
	correctAnswer: "Poisoned"
}
];
// console.log (questions[1].question);


//Prints questions to HTML
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

//Countdown Timer
var n = 60;
setTimeout(countDown,1000);

function countDown(){
   n--;
   if(n > 0){
      setTimeout(countDown,1000);
   }
   // debugger
   $("#countdown").html(n);

   // if (n === 0){
   // // grader();	
   // }
   if (n === 0){
   	grader();
   }


} //end countdown


function grader(){


	//Finds questions.
    var selected = $('.question');
    $.each(selected, function(){
    	var checkBox = $(this).find("input[type=radio]:checked");
    	// console.log("checkBox: ");
    	// console.log(checkBox.val());
    	// console.log("checkBox.value: ");
    	// console.log(checkBox.value);
    	// console.log("this: ");
    	// console.log(this);
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

	//grades the questions
	for (var i = 0; i < questions.length; i++) {
		if (userAnswers[i]=="unanswered") {
			numberUnanswered++;
		}
		else {

			if (questions[i].correctAnswer==userAnswers[i]) {
				numberRight++;
			}
			if (questions[i].correctAnswer!=userAnswers[i]){
				numberWrong++;
			}
		}
		$("#correct").html(numberRight);
		$("#wrong").html(numberWrong);
		$("#unanswered").html(numberUnanswered);
		console.log(numberUnanswered);
		console.log(numberRight);
		console.log(numberWrong);
	}//end for

} // end grader function


  // run code everytime the key "a" is pressed
document.onkeyup = function(e){
	if (e.key == 'a') {

	grader();

	} //end of if key =a
} //end of on key up

