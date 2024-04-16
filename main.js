const quizNavbar = document.getElementById("quiz-navbar");
const homeDiv = document.getElementById("home")
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
 e.preventDefault()
  try {
    homeDiv.classList.add("d-none")
    const question = questions[currentQuestion];
    questionsAPI.innerText = question.question;
    //pintar las respuestas en botones
    console.log(question.answers);
    Object.values(question.answers).forEach(answer => {
      console.log(answer)
    
    })
    // console.log(question);
  } catch (error) {}
};

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;

    if (answer.correct) {
      button.dataset.correct = true;
    }

    answerButtonsElement.appendChild(button);
  });
}

// questions.forEach((question) => {
//     const questionsAPI = document.createElement("questions");
//     questionsAPI.classList.add("questions");
//     questionsAPI.textContent = question.question;
//     const answersElement = document.createElement("ul");
  
//     answersElement.classList.add("answers");
  
//     question.answers.forEach((answer) => {
//       const answerItem = document.createElement("li");
//       answerItem.textContent = answer.answer;
//       answersElement.appendChild(answerItem);
  
//       quizContainer.appendChild(questionElement);
//       quizContainer.appendChild(answersElement);
//     });
//   });

  
startButton.addEventListener("click", startQuiz);
