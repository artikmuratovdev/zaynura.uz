let questions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let answered = false;

// DOM elementlari
const questionText = document.getElementById('questionText');
const answerContainer = document.getElementById('answerContainer');
const answerText = document.getElementById('answerText');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const scoreEl = document.getElementById('score');
const timerText = document.getElementById('timerText');
const timerProgress = document.querySelector('.timer-ring-progress');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const resultsContainer = document.getElementById('resultsContainer');
const finalScore = document.getElementById('finalScore');
const scorePercentage = document.getElementById('scorePercentage');
const questionContainer = document.getElementById('questionContainer');

// Multiple choice uchun container yaratish (agar yo'q bo'lsa)
let optionsGrid = document.createElement('div');
optionsGrid.style.display = 'grid';
optionsGrid.style.gap = '0.75rem';
optionsGrid.style.marginTop = '1.5rem';
optionsGrid.style.width = '100%';
questionContainer.parentNode.insertBefore(optionsGrid, answerContainer);

// Timer ring
const radius = 32;
const circumference = 2 * Math.PI * radius;
timerProgress.style.strokeDasharray = `${circumference} ${circumference}`;

async function init() {
    try {
        const response = await fetch('linguistics-quiz.json');
        questions = await response.json();
    } catch (e) {
        console.error("Xatolik:", e);
    }
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    currentIndex = 0;
    score = 0;
    totalQuestionsEl.textContent = questions.length;
    scoreEl.textContent = score;
    
    startBtn.style.display = 'none';
    resultsContainer.style.display = 'none';
    questionContainer.style.display = 'flex';
    optionsGrid.style.display = 'grid';
    document.querySelector('.quiz-info').style.display = 'flex';
    
    showQuestion();
}

function showQuestion() {
    answered = false;
    const q = questions[currentIndex];
    questionText.textContent = q.question;
    currentQuestionEl.textContent = currentIndex + 1;
    
    optionsGrid.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'secondary-btn'; // Eski uslubdagi tugma klassi
        btn.style.width = '100%';
        btn.style.textAlign = 'left';
        btn.style.padding = '1rem';
        btn.style.background = 'white';
        btn.style.color = '#1e293b';
        btn.style.border = '2px solid #e2e8f0';
        btn.textContent = `${String.fromCharCode(65 + idx)}) ${opt}`;
        btn.onclick = () => handleAnswer(idx);
        optionsGrid.appendChild(btn);
    });

    answerContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (!answered) handleAnswer(-1); // Vaqt tugasa xato deb hisoblash
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerText.textContent = timeLeft;
    const offset = circumference - (timeLeft / 15) * circumference;
    timerProgress.style.strokeDashoffset = offset;
    
    if (timeLeft <= 5) {
        timerText.style.color = '#ef4444';
        timerProgress.style.stroke = '#ef4444';
    } else {
        timerText.style.color = '#4f46e5';
        timerProgress.style.stroke = '#4f46e5';
    }
}

function handleAnswer(idx) {
    if (answered) return;
    answered = true;
    clearInterval(timer);
    
    const q = questions[currentIndex];
    const btns = optionsGrid.querySelectorAll('button');
    
    if (idx === q.correct) {
        score++;
        scoreEl.textContent = score;
        if (idx !== -1) btns[idx].style.borderColor = '#22c55e';
        if (idx !== -1) btns[idx].style.background = '#f0fdf4';
    } else {
        if (idx !== -1) {
            btns[idx].style.borderColor = '#ef4444';
            btns[idx].style.background = '#fef2f2';
        }
        btns[q.correct].style.borderColor = '#22c55e';
        btns[q.correct].style.background = '#f0fdf4';
    }
    
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.style.display = 'none';
    optionsGrid.style.display = 'none';
    document.querySelector('.quiz-info').style.display = 'none';
    
    resultsContainer.style.display = 'block';
    finalScore.textContent = `${score} / ${questions.length}`;
    scorePercentage.textContent = Math.round((score / questions.length) * 100) + "% to'g'ri";
    
    restartBtn.style.display = 'inline-block';
}

function restartQuiz() {
    restartBtn.style.display = 'none';
    startQuiz();
}

init();
