const quizNavbar = document.getElementById("quiz-navbar");
const homeDiv = document.getElementById("home");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionsAPI = document.getElementById("questions");
const questionP = document.getElementById("question-p")
const answerCards = document.getElementById("answer-cards");
const scoreDiv = document.getElementById("score")

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
  } else {
    button.classList.add("wrong");
  }
};

const selectAnswer = (e) => {
  const selectedBtnAnswer = e.target
  if (selectedBtnAnswer.dataset.correctAnswer == "true") {
    score++
    console.log(score);
  }
  Array.from(answerCards.children).forEach((button) => {
    backGroundColorAns(button); 
  })
  if (currentQuestion +1< questions.length) {
    nextButton.classList.remove("d-none");
  
  } else {
    questionsAPI.classList.add("d-none")
    scoreDiv.classList.remove("d-none");
    scoreDiv.innerText = `Score: ${score}`;
  }
};


const startQuiz = (e) => {
  e.preventDefault();

  homeDiv.classList.add("d-none");
  nextButton.classList.add("d-none");
  questionsAPI.classList.remove("d-none")
  setNextQuestion()
  score = 0

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
      button.addEventListener("click",selectAnswer) 
    }
  });
  questionsAPI.appendChild(answerCards);

}

const setNextQuestion = () =>{
  nextButton.classList.add("d-none");
  showQuestion(questions[currentQuestion]);
}


nextButton.addEventListener("click", () => {
  currentQuestion++;
  setNextQuestion();
});


// function resetState() {
//   nextButton.classList.add("hide");
//   answerButtonsElement.innerHTML=""
// }


startButton.addEventListener("click", startQuiz);
