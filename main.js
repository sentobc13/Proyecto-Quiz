const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("questions");
const answerButtonsElement = document.getElementById("answer-buttons");

let currentQuestion = 0;
let score = 0;
let questions = [];

const API_URL =
  "https://quizapi.io/api/v1/questions?apiKey=j3qCjpMiS3nj5Hj1aqOXiDmaL7LORKnPePdbzFWs&limit=10";

const getQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    questions = response.data;
    showQuestions();
  } catch (error) {
    console.error(error);
  }
};
getQuestions();

const showQuestions = async () => {
  try {
    const question = questions[currentQuestion];
    questionElement.innerHTML = question.question
    console.log(question);
  } catch (error) {}
};

startButton.addEventListener('click', getQuestions);