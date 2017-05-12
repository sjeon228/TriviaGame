var questions = {
	QA: [{
		question: "first question",
		choiceA: "first choiceA",
		choiceB: "first choiceB",
		choiceC: "first choiceC",
		choiceD: "first choiceD"
		}, {
		question: "second question",
		choiceA: "second choiceA",
		choiceB: "second choiceB",
		choiceC: "second choiceC",
		choiceD: "second choiceD"
		}, {
		question: "third question",
		choiceA: "third choiceA",
		choiceB: "third choiceB",
		choiceC: "third choiceC",
		choiceD: "third choiceD"
		}, {
		question: "fourth question",
		choiceA: "fourth choiceA",
		choiceB: "fourth choiceB",
		choiceC: "fourth choiceC",
		choiceD: "fourth choiceD"
		}, {
		question: "fifth question",
		choiceA: "fifth choiceA",
		choiceB: "fifth choiceB",
		choiceC: "fifth choiceC",
		choiceD: "fifth choiceD"
		
		}]
};


var pageCount = 0;
var timer = 30;
var intervalId;


var page = document.body.innerHTML;


var bootup = function() {$(document).ready(function() {

	//questionPage structure
	$(".time").html("Time Remaining: " + timer + " Seconds");
	$(".question").html(questions.QA[pageCount].question);
	$(".answers").append(questions.QA[pageCount].choiceA + "<br>");
	$(".answers").append(questions.QA[pageCount].choiceB + "<br>");
	$(".answers").append(questions.QA[pageCount].choiceC + "<br>");
	$(".answers").append(questions.QA[pageCount].choiceD);



	$(".btnStart").on("click",function(){
		$("#start").css({"display": "none"});
		$("#questionPage").css({"display": "initial"});

		pageCount++;

		if (pageCount > 0){

		function run() {
			intervalId = setInterval(decrement, 1000);
		}

		function decrement(){
			timer--;
			$(".time").html("Time Remaining: " + timer + " Seconds");
		}
		run();

		}

		})




















});};

bootup();