const quizNavbar = document.getElementById("quiz-navbar");
const homeDiv = document.getElementById("home");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionsAPI = document.getElementById("questions");
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
  } catch (error) {
    console.error(error);
  }
};
getInfo();

const startQuiz = async (e) => {
  e.preventDefault();
  try {
    homeDiv.classList.add("d-none");
    const question = questions[currentQuestion];
    questionsAPI.innerText = question.question;
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
        console.log("answer", answer);
        console.log("correct answer", question.answers[correctAnswer]);

        if (answer === question.answers[correctAnswer]) {
          button.dataset.correctAnswer = true
        }
        
      }
    });
    questionsAPI.appendChild(answerCards);
  } catch (error) {
    console.error(error);
  }
};

startButton.addEventListener("click", startQuiz);
