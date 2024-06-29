//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "HTML stands for -",
    correct:  "HyperText Markup Language",
    options: [
      "HyperText and links Markup Language",
      "HyperText Markup Language",
      "HyperText and links Markup Language",
      "None of these"
    ]
  },

  {
    id: "1",
    question: " The tags in HTML are -",
    correct: "not case sensitive",
    options: [
      "case-sensitive",
      "in upper case",
      "not case sensitive",
      "in lowercase"
    ]
  },

  {
    id: "2",
    question: "CSS stands for -",
    correct: "Cascading style sheets",
    options: [
      "Cascade style sheets",
      "Color and style sheets",
      "Cascading style sheets",
      "None of the above"
    ]
  },

  {
    id: "3",
    question: "Which of the following is correct about JavaScript?",
    correct: "JavaScript is an Object-Based language",
    options: [
      "JavaScript is an Object-Based language",
      "JavaScript is Assembly-language",
      "JavaScript is an Object-Oriented language",
      "JavaScript is a High-level language"
    ]
  },

  {
    id: "4",
    question: "Which of the following is not javascript data types?",
    correct: "Float type",
    options: [
      "Null type",
      "Undefined type",
      "Float type",
      "All of the mentioned"
    ]
  },

  {
    id: "5",
    question: "What Is Angular JS?",
    correct: "AngularJS is an open-source front-end web framework",
    options: [
      "AngularJS is a closed-source front-end web framework",
      "AngularJS is an open-source front-end web framework",
      "AngularJS is an open-source backend web framework",
      "AngularJS is a closed-source back-end web framework"
    ]
  },

  {
    id: "6",
    question: " What is React.js?",
    correct: "Free and open-source JavaScript front-end library",
    options: [
      "Open-source JavaScript back-end library",
      "JavaScript front-end library to create a database",
      "Free and open-source JavaScript front-end library",
      "None of the mentioned"
    ]
  },

  {
    id: "7",
    question: "React.js is written in which of the following language?",
    correct: "JavaScript",
    options: [
      "JavaScript",
      "java",
      "C",
      "C++"
    ]
  },

  {
    id: "8",
    question: " Which of the following command is used to Install create-react-app?",
    correct: "npm install -g create-react-app",
    options: [
      "npm install create-react-app",
      "npm install -f create-react-app",
      "npm install -g create-react-app",
      "install -g create-react-app"
    ]
  },

  {
    id: "9",
    question: "The CSS property used to make the rounded borders, or rounded corners around an element is -",
    correct: "border-radius",
    options: [
      "border-collapse",
      "border-radius",
      "border-spacing",
      "None of the above"
    ]
  },
  
  {
    id: "10",
    question: " The CSS property used to set the distance between the borders of the adjacent cells in the table is -",
    correct: "border-spacing",
    options: [
      "border-collapse",
      "border-radius",
      "border-spacing",
      "None of the above"
    ]
  },
  
  {
    id: "11",
    question: " Which of the following extension is used to save an HTML file?",
    correct: ".html",
    options: [
      ".hl",
      ".h",
      ".htl",
      ".html"
    ]
  },

  {
    id:"12",
    question: "Who is the father of Computers?",
    correct: "Charles Babbage",
    options: [
      "Charles Babbage",
      "Dennis Ritchie",
      "Bjarne Stroustrup",
      "James Gosling"
    ]
  },

  {
    id: "13",
    question: "What is the full form of CPU?",
    correct: "Central Processing Unit",
    options: [
      "Computer Processing Unit",
      "Computer Principle Unit",
      "Control Processing Unit",
      "Central Processing Unit"
    ]
  },

  {
    id: "14",
    question: "Which of the following language does the computer understand?",
    correct: " Computer understands only Binary Language",
    options: [
      "Computer understands only Assembly Language",
      "Computer understands only Binary Language",
      "Computer understands only C Language",
      "Computer understands only BASIC"
    ]
  },

  {
    id: "15",
    question: "Which of the following is not a characteristic of a computer?",
    correct: "I.Q.",
    options: [
      "Versatility",
      "Accuracy",
      "Diligence",
      "I.Q."
    ]
  },

  {
    id: "16",
    question: "Which of the following is the smallest unit of data in a computer?",
    correct: "Bit",
    options: [
      "Bit",
      "KB",
      "Nibble",
      "Byte"
    ]
  },

  {
    id: "17",
    question: "Google (www.google.com) is a:",
    correct: "Search Engine",
    options: [
      "Search Engine",
      "Method in Math",
      "Directory of images",
      "Chat service on the web"
    ]
  },
  
  {
    id: "18",
    question:"www stands for:",
    correct: "World Wide Web",
    options: [
      "World Wide Web",
      "World Wide Wares",
      "World Wide Wait",
      "World Wide War"
    ]
  },

  {
    id: "19",
    question: "WWhat is the full of LAN?",
    correct: "Local Area Network",
    options: [
      "Low-level Access Network",
      "Local Area Network",
      "Load Adjusting Network",
      "Lower Area Network"
    ]
  
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener("click",(displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question = document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
  startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
  window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
