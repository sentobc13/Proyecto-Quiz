const quizNavbar = document.getElementById("quiz-navbar");
const homeDiv = document.getElementById("home");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionsAPI = document.getElementById("questions");
const questionP = document.getElementById("question-p")
const answerCards = document.getElementById("answer-cards");


let currentQuestion = 0;
let score = 0;
let questions = [];

const API_URL =
  "https://quizapi.io/api/v1/questions?apiKey=j3qCjpMiS3nj5Hj1aqOXiDmaL7LORKnPePdbzFWs&limit=10";

const getInfo = async () => {
  try {
    const response = await axios.get(API_URL);
    questions = response.data;
    console.log(questions);
  } catch (error) {
    console.error(error);
  }
};
getInfo();

const backGroundColorAns = (button) => {
  button.setAttribute("disabled", "");
  if (button.dataset.correctAnswer == "true") {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }
};

const selectAnswer = () => {
  Array.from(answerCards.children).forEach((button) => {
    backGroundColorAns(button);
    
  });
};


const startQuiz = (e) => {
  e.preventDefault();

  homeDiv.classList.add("d-none");
  questionsAPI.classList.remove("d-none")
  setNextQuestion()

};


const showQuestion = (question) => {
  answerCards.innerHTML= "";
  question = questions[currentQuestion];
  questionP.innerText = question.question;
  let correctAnswer = "";
  Object.keys(question.correct_answers).forEach((answer) => {
    if (question.correct_answers[answer] == "true") {
      correctAnswer = answer.substring(0, 8);
    }
  });

  Object.values(question.answers).forEach((answer) => {
    if (answer !== null) {
      const button = document.createElement("button");
      button.innerText = answer;
      answerCards.appendChild(button);
      

      if (answer === question.answers[correctAnswer]) {
        button.dataset.correctAnswer = true;
      } else {
        button.dataset.correctAnswer = false;
      }
      button.addEventListener("click", function () {
        selectAnswer(button)
       
      });
    }
  });
  questionsAPI.appendChild(answerCards);

}

const setNextQuestion = () =>{
  showQuestion(questions[currentQuestion]);
}


nextButton.addEventListener("click", () => {
  currentQuestion++;
  setNextQuestion();
});


const showNextQuestion = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];
    questionsAPI.innerText = question.question;
    
  
  }
};


function resetState() {
  nextButton.classList.add("hide");
  answerButtonsElement.innerHTML=""
}


startButton.addEventListener("click", startQuiz);
