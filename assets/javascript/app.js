var questions = {
	QA: [{
		question: "\"Young man, there's no need to feel down." + "<br>" + "I said, young man, pick yourself off the ground." + "<br>" + "I said, young man, cause you're in a new town ...\"",
		choiceA: "Please don't let yourself feel guilty",
		choiceB: "Your heart no longer feels empty",
		choiceC: "There's no need to be unhappy",
		choiceD: "You can stay and have a party",
		correct: "There's no need to be unhappy",
		song: "Song: YMCA by The Village People",
		gif: "https://media.giphy.com/media/VoR3VmjmpN8IM/giphy.gif"
		}, {
		question: "\"First I was afraid I was petrified" + "<br>" +  "Kept thinking I could never live without you by my side ...\"",
		choiceA: "But then I spent so many nights",
		choiceB: "You said goodbye so many times",
		choiceC: "I sent letters through your door",
		choiceD: "There is heartache on its way",
		correct: "But then I spent so many nights",
		song: "Song: I Will Survive by Gloria Gaynor",
		gif: "https://media.giphy.com/media/qDIeQmPWXbo3e/giphy.gif"
		}, {
		question: "\"Mama, just killed a man" + "<br>" + "Put a gun against his head" + "<br>" + "Pulled my trigger, now he's dead...\"",
		choiceA: "Mama, ooh, I don't want to die",
		choiceB: "Too late, my time has come",
		choiceC: "Goodbye, everybody, I've got to go",
		choiceD: "Mama, life had just begun",
		correct: "Mama, life had just begun",
		song: "Song: Bohemian Rhapsody by Queen",
		gif: "https://media.giphy.com/media/fWkZ5xqOjrEKA/giphy.gif"
		}, {
		question: "\"I'm starting with the man in the mirror" + "<br>" + "I’m asking him to change his ways" + "<br>" + "And no message could have been any clearer...\"",
		choiceA: "Mama, ooh, I don't want to die",
		choiceA: "Take a look at yourself, and then make a change",
		choiceB: "If you wanna make the world a better place",
		choiceC: "I’m gonna make a change, for once in my life",
		choiceD: "It’s gonna feel real good, gonna make a difference",
		correct: "If you wanna make the world a better place",
		song: "Song: Man in the Mirror by Michael Jackson",
		gif: "https://media.giphy.com/media/WDA585tqJAnD2/giphy.gif"
		}, {
		question: "\"Hey Jude, don't make it bad" + "<br>" + "Take a sad song and make it better" + "<br>" + "Remember to let her into your heart...\"",
		choiceA: "Don't carry the world upon your shoulders",
		choiceB: "By making his world a little colder",
		choiceC: "Then you can start to make it better",
		choiceD: "So let it out and let it in",
		correct: "Then you can start to make it better",
		song: "Song: Hey Jude by The Beatles",
		gif: "https://media.giphy.com/media/xRwDSySAra4PS/giphy.gif"
		}, {
		question: "\"It's a little bit funny, this feeling inside" + "<br>" + "I'm not one of those who can easily hide" + "<br>" + "I Don't have much money but boy, if I did...\"",
		choiceA: "I'd buy a big house where we both could live",
		choiceB: "I'd buy a big boat where we both could live",
		choiceC: "I'd give you everything you ever need",
		choiceD: "You would never be in need of anything",
		correct: "I'd buy a big house where we both could live",
		song: "Song: Your Song by Elton John",
		gif: "https://media.giphy.com/media/l1BgR1vWOEFgJGEUg/giphy.gif"
		}, {
		question: "\"That may be all I need" + "<br>" + "In darkness, she is all I see" + "<br>" + "Come and rest your bones with me...\"",
		choiceA: "And I never want to leave",
		choiceB: "And I would gladly hit the road, get up and go if I knew",
		choiceC: "Driving slow on Sunday morning",
		choiceD: "That someday it would lead me back to you",
		correct: "Driving slow on Sunday morning",
		song: "Song: Sunday Morning by Maroon 5",
		gif: "https://media.giphy.com/media/ySDlvqCOf2cE0/giphy.gif"
		}, {
		question: "\"I could stay awake just to hear you breathing" + "<br>" + "Watch you smile while you are sleeping..\"",
		choiceA: "Every moment spent with you is a moment I treasure",
		choiceB: "While you're far away dreaming",
		choiceC: "Wondering if it's me you're seeing",
		choiceD: "I just want to stay with you in this moment forever",
		correct: "While you're far away dreaming",
		song: "Song: I Don't Want to Miss a Thing by Aerosmith",
		gif: "https://media.giphy.com/media/ZK5e9a97vGh32/giphy.gif"
		}, {
		question: "\"Up in the club, just broke up" + "<br>" + "I'm doing my own little thing" + "<br>" + "You decided to dip and now you wanna trip..\"",
		choiceA: "'Cause another brother noticed me",
		choiceB: "You can't be mad at me",
		choiceC: "Wondering if it's me you're seeing",
		choiceD: "'Cause I cried my tears for three good years",
		correct: "'Cause another brother noticed me",
		song: "Song: Single Ladies by Beyonce",
		gif: "https://media.giphy.com/media/fKGTOIjWSBMHu/giphy.gif"
		}, {
		question: "\"Jealousy, turning saints into the sea" + "<br>" + "Swimming through sick lullabies" + "<br>" + "Choking on your alibis..\"",
		choiceA: "Open up my eager eyes",
		choiceB: "Cause I'm Mr Brightside",
		choiceC: "But it's just the price I pay",
		choiceD: "I just can't look its killing me",
		correct: "But it's just the price I pay",
		song: "Song: Mr. Brightside by The Killers",
		gif: "https://media.giphy.com/media/Ns1Qisp0sM1Hi/giphy.gif"
		
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
		timer = 30;
		pageCount++;
		if (pageCount < 5){
		$(".time").html("Time Remaining: " + timer + " Seconds");
		$(".question").html(questions.QA[pageCount].song + "<br>" + "<br>" + questions.QA[pageCount].question);
		$("#choiceA").text(questions.QA[pageCount].choiceA).data("value", questions.QA[pageCount].choiceA);
		$("#choiceB").text(questions.QA[pageCount].choiceB).data("value", questions.QA[pageCount].choiceB);
		$("#choiceC").text(questions.QA[pageCount].choiceC).data("value", questions.QA[pageCount].choiceC);
		$("#choiceD").text(questions.QA[pageCount].choiceD).data("value", questions.QA[pageCount].choiceD);

		$("#answerPage").css({"display": "none"});
		$(".btnStart").css({"display": "none"});
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
				$(".answerComment").html("The Correct Answer was: " + questions.QA[pageCount].correct);
				$(".gif").html("<img src=" + questions.QA[pageCount].gif + " width='400px' height='400px'>");
				$("#questionPage").css({"display": "none"});
				$("#answerPage").css({"display": "initial"});
				unansweredCount++;
				$(".answer").html("");
				setTimeout(loadQuestion, 5000);


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
					pageCount = -1;
					correctCount = 0;
					wrongCount = 0;
					unansweredCount = 0;
					$("#resultPage").css({"display": "none"});
					loadQuestion();
				})
			}

		})
	$(".choiceBtn").on("click", function (){

		if($(this).data("value") === questions.QA[pageCount].correct){
			$(".answerComment").html("");
			$(".answer").html("You are Correct!");
			$(".gif").html("<img src=" + questions.QA[pageCount].gif + " width='400px' height='400px'>");
			//$(".gif").html("test");
			correctCount ++;
		}
		if($(this).data("value") != questions.QA[pageCount].correct) {
			$(".answer").html("Wrong Answer!");
			$(".answerComment").html("You chose: " + "\"" + $(this).data("value") + "\"" + "<br>" + "The Correct Answer was: " + "\"" + questions.QA[pageCount].correct + "\"");
			$(".gif").html("<img src=" + questions.QA[pageCount].gif + " width='400px' height='400px'>");
			wrongCount++;
		}
		$("#questionPage").css({"display": "none"});
		$("#answerPage").css({"display": "initial"});
		stop();
		

		setTimeout(function clickQuestion(){
			pageCount++;
			if (pageCount < 10) {
				
				timer = 30;
				$(".time").html("Time Remaining: " + timer + " Seconds");
				$(".question").html(questions.QA[pageCount].song + "<br>" + "<br>" + questions.QA[pageCount].question);
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
							$(".answerComment").html("The Correct Answer was: " + questions.QA[pageCount].correct);
							$(".gif").html("<img src=" + questions.QA[pageCount].gif + " width='400px' height='400px'>");
							$("#questionPage").css({"display": "none"});
							$("#answerPage").css({"display": "initial"});
							unansweredCount++;
							pageCount++;
							setTimeout(clickQuestion, 5000);
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
			
		},5000);


	})




















});