main();

function main() {
  recommendMusic();
}

function recommendMusic() {
  // Define Variables
  let iq = 0;
	let questionIndex = 0;
  let genres = [];
	let genresString = "";
	let intelligenceLevel = "";
	let musicSelection = "";
	let output = "";
	// randomNumber Function
	function randomNum(min, max) {
    return Math.random() * (max - min) + min;
	}
  // Define Questions
  let questions = [
    "Who would win: a sentient Flaming Hot Dorito, or a sentient Onion Ring?",
		"If you could change one thing in history, what would it be & why?",
		"If an animated movie about your life were made, who would voice you?", 
		"If you could have any superpower, what would it be?",
		"If you were the president of the United States for a day?", 
		"What advice would you give your past yourself knowing what you know now?", 
		"Yes or No?", 
		"iurgh?vouidfhvohdfoih,hnxcjv", 
		"If you won the lottery, what would you do with the money & why?", 
		"If you could have any tattoo, what would it be & where would you put it?"
  ];
	// Define Button Labels
	let buttonOne = [
    "Flaming Hot Dorito", 
    "Preserve the superior but extinct banana", 
    "Chris Pratt", 
    "When you scream, you become invisible", 
    "Get rid of North Dakota", 
    "Invest heavily in Enron", 
    "Yes", 
    "Option Uno", 
    "Invest all your $ in Beanie Babies", 
    "Ryan Reynolds - Stomach"
  ];
  let buttonTwo = [
    "Onion Ring", 
    "Don't let sliced bread be invented", 
    "Chris Pratt", 
    "Every time you sneeze, a random person farts", 
    "Declare war on New Jersey & France", 
    "Drop out of school & join a circus, you’ll learn more valuable skills there.", 
    "No", 
    "Button", 
    "Invest your $ in more Lottery Tickets for more $", 
    "Ryan Reynolds - Face"
  ];
	// Define Button min/max values
	let buttonOneMin = [-15, 10, -5, 0, 0, -25, -15, -10, -15, 1];
	let buttonOneMax = [10, 30, 0, 20, 5, 0, 15, 10, 15, 5];
	let buttonTwoMin = [-10, -10, -5, -20, 0, 0, -15, -15, -20, 0];
	let buttonTwoMax = [15, 0, 0, 0, 5, 25, 15, 15, 15, 10];
  // Quiz (Had to switch to kinda weird function system to create loop
	// because waiting for user input created issues)
	loadQuestion();
	function loadQuestion() {
		// Sets Elements
		document.getElementById('question').innerText = questions[questionIndex];
		document.getElementById('optionOne').innerText =  buttonOne[questionIndex];
		document.getElementById('optionTwo').innerText =  buttonTwo[questionIndex];
		// After Option gets clicked Logic
    document.getElementById('optionOne').onclick = function() {
			iq += randomNum(buttonOneMin[questionIndex], buttonOneMax[questionIndex]);
      nextQuestion();
    };

    document.getElementById('optionTwo').onclick = function() {
			iq += randomNum(buttonTwoMin[questionIndex], buttonTwoMax[questionIndex]);
      nextQuestion();
    };		
	}
	// Genres Portion of Quiz
	function nextQuestion() {
		questionIndex++;

		// If any questions left, loads next, Else genres part
		if (questionIndex < 10) {
			loadQuestion();
		} else {
			// Finalizes IQ score
			iq = Math.round(
				((((iq-randomNum(-15.3, 38.4))*1.2)+105.3)+iq+80.3)/2
			);
			// Load Genre Portion of quiz
			askGenres();
		}
	}

	function askGenres() {
		// Sets elements
		document.getElementById('question').innerText = "Please select your favorite genres";
		document.getElementById("genreForm").style.display = "block";
		document.getElementById("options").style.display = "none";
		// Submit button stuff
		document.getElementById('genreForm').addEventListener('submit', function(event) {
			event.preventDefault();

			if (document.querySelector('input[type="checkbox"][id="rock"]:checked')) {
        genres.push("Rock");
			}
			if (document.querySelector('input[type="checkbox"][id="pop"]:checked')) {
					genres.push("Pop");
			}
			if (document.querySelector('input[type="checkbox"][id="hipHop"]:checked')) {
					genres.push("Hip-Hop");
			}
			// If no genres were selected, set genres to "nothing"
			if (genres.length === 0) {
				genres.push("nothing");
			}
			selectIntelligenceAndMusic();
		});
	}

	function selectIntelligenceAndMusic() {
		// Depending on IQ, sets a worded version
		// also generates music selection based off iq level and genre selection
		if (iq >= 160) {
			intelligenceLevel = "Very Super Mega Big Brain";
			if (genres.includes("Rock")) {
				musicSelection += "Killing in the Name ";
				musicSelection += "by Rage Against the Machine<br>";
				musicSelection += "Bohemian Rhapsody by Queen<br>";
				musicSelection += "Something in the Orange by Our Last Night<br>";
			}
			if (genres.includes("Pop")) {
				musicSelection += "mos thoser by food house, Gupi, Fraxiom<br>";
				musicSelection += "Billie Jean by Michael Jackson<br>";
			}
			if (genres.includes("Hip-Hop")) {
				musicSelection += "Lost In The World by Kanye West, Pusha T<br>";
				musicSelection += "Blood On The Leaves by Kanye West<br>";
			}
		} else if (iq >= 130) {
			intelligenceLevel = "Very Superior";
			if (genres.includes("Rock")) {
				musicSelection += "Hotel California by Eagles<br>";
				musicSelection += "Comfortably Numb by Pink Floyd<br>";
				musicSelection += "We Don't Talk About Bruno by Our Last Night<br>";
			}
			if (genres.includes("Pop")) {
				musicSelection += "That's What I Like by Bruno Mars<br>";
				musicSelection += "September by Earth, Wind & Fire<br>";
			}
			if (genres.includes("Hip-Hop")) {
				musicSelection += "Lost In The World by Kanye West, Pusha T<br>";
				musicSelection += "Multiply by Xzibit, Nate Dogg<br>";
			}
		} else if (iq >= 120) {
			intelligenceLevel = "Superior";
			if (genres.includes("Rock")) {
				musicSelection += "Sweet Child O’ Mine by Guns N’ Roses<br>";
				musicSelection += "Back in Black by AC/DC<br>";
				musicSelection += "White Room by Cream<br>";
			}
			if (genres.includes("Pop")) {
				musicSelection += "That's What I Like by Bruno Mars<br>";
				musicSelection += "September by Earth, Wind & Fire<br>";
			}
			if (genres.includes("Hip-Hop")) {
				musicSelection += "Lost In The World by Kanye West, Pusha T<br>";
				musicSelection += "Multiply by Xzibit, Nate Dogg<br>";
			}
		} else if (iq >= 110) {
			intelligenceLevel = "High Average";
			if (genres.includes("Rock")) {
				musicSelection += "Sunshine Of Your Love by Cream<br>";
				musicSelection += "Smooth by Santana, Rob Thomas<br>";
				musicSelection += "Aja by Steely Dan<br>";
			}
			if (genres.includes("Pop")) {
				musicSelection += "Blinding Lights by The Weeknd<br>";
				musicSelection += "Bad Guy by Billie Eilish<br>";
			}
			if (genres.includes("Hip-Hop")) {
				musicSelection += "HUMBLE. by Kendrick Lamar<br>";
				musicSelection += "Redemption by Zacari, Babes Wodumo<br>";
			}
		} else if (iq >= 90) {
			intelligenceLevel = "Average";
			if (genres.includes("Rock")) {
				musicSelection += "Wonderwall by Oasis<br>";
			}
			if (genres.includes("Pop")) {
				musicSelection += "Please Please Please by Sabrina Carpenter<br>";
				musicSelection += "Blinding Lights by The Weeknd<br>";
			}
			if (genres.includes("Hip-Hop")) {
				musicSelection += "Hotline Bling by Drake<br>";
			}
		} else if (iq >= 80) {
			intelligenceLevel = "Below Average";
			if (genres.includes("Rock")) {
				musicSelection += "The Final Countdown by Europe<br>";
				musicSelection += "We Didn’t Start the Fire by Billy Joel<br>";
			}
			if (genres.includes("Pop")) {
				musicSelection += "Party in the U.S.A.” by Miley Cyrus<br>";
			}
			if (genres.includes("Hip-Hop")) {
				musicSelection += "Turn Down for What by DJ Snake & Lil Jon<br>";
			}
		} else if (iq >= 70) {
			intelligenceLevel = "Borderline";
			if (genres.includes("Rock")) {
				musicSelection += "Party All the Time by Eddie Murphy<br>";
			}
			if (genres.includes("Pop")) {
				musicSelection += "Baby by Justin Bieber<br>";
			}
			if (genres.includes("Hip-Hop")) {
				musicSelection += "Face Off by Tech N9ne, Joey Cool, ";
				musicSelection += "King Iso, Dwayne Johnson<br>";
			}
		} else {
			intelligenceLevel = "Extremely Low";
			if (genres.includes("Rock")) {
				musicSelection += "The Wheels On The Bus<br>";
			}
			if (genres.includes("Pop")) {
				musicSelection += "Rain, Rain Go Away<br>";
			}
			if (genres.includes("Hip-Hop")) {
				musicSelection += "ABCs<br>";
			}
		}
    calculateAndDisplayoutput();
	}
	
	function calculateAndDisplayoutput() {
		// Converts all the user's genres intro a more readable string
		if (genres.length === 1) {
			genresString = genres[0];
		} else if (genres.length > 1) {
			genresString = 
				genres.slice(0, -1).join(", ") + ", & " + genres[genres.length - 1];
		}
		// Got rid of Line Break in the middle because it looked better without
		output += "You have an IQ of " + iq + ". ";
		output += "That means you have " + intelligenceLevel + " intelligence. ";
		output += "With your love of " + genresString;
		output += " and your intelligence level, ";
		output += "that suggests that you would like the following songs:<br><br>";
		output += "<center>" + musicSelection + "</center>";
		document.getElementById("question").innerHTML = output;
		document.getElementById("genreForm").style.display = "none";
		document.getElementById("question").style.textAlign = "left";
	}
}
