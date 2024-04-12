const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");



const API_URL = "https://quizapi.io/api/v1/questions?apiKey=j3qCjpMiS3nj5Hj1aqOXiDmaL7LORKnPePdbzFWs&limit=10"

axios.get(API_URL)
.then((res)=>console.log(res))
.catch((err)=>console.error(err))


const hideViews = ()=> {
    startButton.classlist.add("hide")
}