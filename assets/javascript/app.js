var questions = {
	QA: [{
		question: "first question",
		choiceA: "first choiceA",
		choiceB: "first choiceB",
		choiceC: "first choiceC",
		choiceD: "first choiceD",
		correct: "first choiceB"
		}, {
		question: "second question",
		choiceA: "second choiceA",
		choiceB: "second choiceB",
		choiceC: "second choiceC",
		choiceD: "second choiceD",
		correct: "second choiceA"
		}, {
		question: "third question",
		choiceA: "third choiceA",
		choiceB: "third choiceB",
		choiceC: "third choiceC",
		choiceD: "third choiceD",
		correct: "third choiceD"
		}, {
		question: "fourth question",
		choiceA: "fourth choiceA",
		choiceB: "fourth choiceB",
		choiceC: "fourth choiceC",
		choiceD: "fourth choiceD",
		correct: "fourth choiceB"
		}, {
		question: "fifth question",
		choiceA: "fifth choiceA",
		choiceB: "fifth choiceB",
		choiceC: "fifth choiceC",
		choiceD: "fifth choiceD",
		correct: "fifth choiceC"
		
		}]
};




var pageCount = -1;
var timer = 30;
var intervalId;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;




$(document).ready(function() {

function stop() {
			clearInterval(intervalId);
		}

	$(".btnStart").on("click",function loadQuestion(){
		timer = 3;
		pageCount++;
		if (pageCount < 5){
		$(".time").html("Time Remaining: " + timer + " Seconds");
		$(".question").html(questions.QA[pageCount].question);
		$("#choiceA").text(questions.QA[pageCount].choiceA).data("value", questions.QA[pageCount].choiceA);
		$("#choiceB").text(questions.QA[pageCount].choiceB).data("value", questions.QA[pageCount].choiceB);
		$("#choiceC").text(questions.QA[pageCount].choiceC).data("value", questions.QA[pageCount].choiceC);
		$("#choiceD").text(questions.QA[pageCount].choiceD).data("value", questions.QA[pageCount].choiceD);

		$("#start").css({"display": "none"});
		$("#questionPage").css({"display": "initial"});

		

		

		function run() {
			intervalId = setInterval(decrement, 1000);
		}

		function decrement(){
			timer--;
			$(".time").html("Time Remaining: " + timer + " Seconds");

			if (timer === 0){
				stop();
				$(".answer").html("You are out of time!");
				$("#questionPage").css({"display": "none"});
				$("#answerPage").css({"display": "initial"});
				unansweredCount++;
				setTimeout(loadQuestion, 3000);


			}
			
		}
		
		
		run();

		}

		else{
				
				$(".time").html("Time Remaining: " + timer + " Seconds");	
				$(".resultComment").html("All done, here's how you did!");
				$(".result").append("Correct Answers: " + correctCount +"<br>");
				$(".result").append("Incorrect Answers: " + wrongCount +"<br>");
				$(".result").append("Unanswered: " + unansweredCount);
				$("#answerPage").css({"display": "none"});
				$("#resultPage").css({"display": "initial"});

				$(".resetBtn").on("click", function(){
					pageCount = -1;
					correctCount = 0;
					wrongCount = 0;
					unansweredCount = 0;
					$(".result").html("");
					$("#resultPage").css({"display": "none"});
					loadQuestion();
				})
			}

		})
	$(".choiceBtn").on("click", function (){

		if(pageCount == -1){

		}

		if($(this).data("value") === questions.QA[pageCount].correct){
			$(".answer").html("You are Correct!");
			correctCount ++;
		}
		else {
			$(".answer").html("Wrong Answer!");
			$(".answerComment").html("The Correct Answer was: " + questions.QA[pageCount].correct);
			wrongCount++;
		}
		$("#questionPage").css({"display": "none"});
		$("#answerPage").css({"display": "initial"});
		stop();
		pageCount++;

		setTimeout(function clickQuestion(){
			
			if (pageCount < 5) {
				timer = 3;
				$(".time").html("Time Remaining: " + timer + " Seconds");
				$(".question").html(questions.QA[pageCount].question);
				$("#choiceA").text(questions.QA[pageCount].choiceA).data("value", questions.QA[pageCount].choiceA);
				$("#choiceB").text(questions.QA[pageCount].choiceB).data("value", questions.QA[pageCount].choiceB);
				$("#choiceC").text(questions.QA[pageCount].choiceC).data("value", questions.QA[pageCount].choiceC);
				$("#choiceD").text(questions.QA[pageCount].choiceD).data("value", questions.QA[pageCount].choiceD);
				$("#answerPage").css({"display": "none"});
				$("#questionPage").css({"display": "initial"});

				if (pageCount >=0){

					function run() {
						intervalId = setInterval(decrement, 1000);
					}

					function decrement(){
						timer--;
						$(".time").html("Time Remaining: " + timer + " Seconds");

						if (timer === 0){
							stop();
							$(".answer").html("You are out of time!");
							$("#questionPage").css({"display": "none"});
							$("#answerPage").css({"display": "initial"});
							unansweredCount++;
							pageCount++;
							setTimeout(clickQuestion, 3000);
						}
			
					}
					run();
				}
			}
			else{
				
				$(".time").html("Time Remaining: " + timer + " Seconds");	
				$(".resultComment").html("All done, here's how you did!");
				$(".result").append("Correct Answers: " + correctCount +"<br>");
				$(".result").append("Incorrect Answers: " + wrongCount +"<br>");
				$(".result").append("Unanswered: " + unansweredCount);
				$("#answerPage").css({"display": "none"});
				$("#resultPage").css({"display": "initial"});

				$(".resetBtn").on("click", function(){
					pageCount = 0;
					correctCount = 0;
					wrongCount = 0;
					unansweredCount = 0;
					$(".result").html("");
					$("#resultPage").css({"display": "none"});
					clickQuestion();
				})
			}
			
		},3000);


	})




















});