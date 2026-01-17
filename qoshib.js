// script.js
const questions = [
    { question: "qabul xona / qabulxona", correct: "qabulxona", answer1: "qabul xona", answer2: "qabulxona" },
    { question: "tabrik noma / tabriknoma", correct: "tabriknoma", answer1: "tabrik noma", answer2: "tabriknoma" },
    { question: "tog' olcha / tog'olcha", correct: "tog'olcha", answer1: "tog' olcha", answer2: "tog'olcha" },
    { question: "beda poya / bedapoya", correct: "bedapoya", answer1: "beda poya", answer2: "bedapoya" },
    { question: "foto apparat / fotoapparat", correct: "fotoapparat", answer1: "foto apparat", answer2: "fotoapparat" },
    { question: "ming boshi / mingboshi", correct: "mingboshi", answer1: "ming boshi", answer2: "mingboshi" },
    { question: "orom baxsh / orombaxsh", correct: "orombaxsh", answer1: "orom baxsh", answer2: "orombaxsh" },
    { question: "sovuq mijoz / sovuqmijoz", correct: "sovuqmijoz", answer1: "sovuq mijoz", answer2: "sovuqmijoz" },
    { question: "suv talab / suvtalab", correct: "suvtalab", answer1: "suv talab", answer2: "suvtalab" },
    { question: "o'rin bosar / o'rinbosar", correct: "o'rinbosar", answer1: "o'rin bosar", answer2: "o'rinbosar" },
    { question: "suv talab / suvtalab", correct: "suvtalab", answer1: "suv talab", answer2: "suvtalab" },
    { question: "oy bolta / oybolta", correct: "oybolta", answer1: "oy bolta", answer2: "oybolta" },
    { question: "bodom qovoq / bodomqovoq", correct: "bodomqovoq", answer1: "bodom qovoq", answer2: "bodomqovoq" },
    { question: "qizil ishton / qizilishton", correct: "qizilishton", answer1: "qizil ishton", answer2: "qizilishton" },
    { question: " tok qaychi /  tokqaychi", correct: " tokqaychi", answer1: " tok qaychi", answer2: " tokqaychi" },
    { question: "ko'z oynak / ko'zoynak", correct: "ko'zoynak", answer1: "ko'z oynak", answer2: "ko'z oynak" },
    { question: "kelin tushdi / kelintushdi", correct: "kelintushdi", answer1: "kelin tushdi", answer2: "kelintushdi" },
    { question: " ochil dasturxon /  ochildasturxon", correct: " ochildasturxon", answer1: " ochil dasturxon", answer2: "ochildasturxon" },
    { question: "bayram oldi / bayramoldi", correct: "bayramoldi", answer1: "bayram oldi", answer2: "bayramoldi" },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;
    document.getElementById("answer1").textContent = question.answer1;
    document.getElementById("answer2").textContent = question.answer2;
}

function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestionIndex];
    const resultText = document.getElementById("result-text");
    
    if ((selectedAnswer === 1 && question.answer1 === question.correct) || 
        (selectedAnswer === 2 && question.answer2 === question.correct)) {
        resultText.textContent = "To‘g‘ri!";
        score++;
    } else {
        resultText.textContent = "Noto‘g‘ri. To‘g‘ri javob: " + question.correct;
    }
    
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("result-container").classList.add("hidden");
        document.getElementById("question-container").classList.remove("hidden");
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    document.getElementById("score-text").textContent = `O‘yin tugadi! Sizning ballaringiz: ${score}/${questions.length}`;
    document.getElementById("score-container").classList.remove("hidden");
}

window.onload = loadQuestion;
