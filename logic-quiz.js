// Quiz State
let questions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
let timeRemaining = 45 * 60; // 45 minutes in seconds

// Load questions from JSON
async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        questions = await response.json();
        document.getElementById('totalQuestions').textContent = questions.length;
    } catch (error) {
        console.error('Savollarni yuklashda xatolik:', error);
        alert('Savollarni yuklashda xatolik yuz berdi!');
    }
}

// Start Quiz
function startQuiz() {
    if (questions.length === 0) {
        alert('Savollar hali yuklanmagan!');
        return;
    }
    
    // Initialize user answers array
    userAnswers = new Array(questions.length).fill(null);
    currentQuestionIndex = 0;
    timeRemaining = 45 * 60;
    
    // Switch to quiz screen
    switchScreen('quizScreen');
    
    // Start timer
    startTimer();
    
    // Display first question
    displayQuestion();
}

// Switch between screens
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Start Timer
function startTimer() {
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}

// Update Timer Display
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timerElement = document.getElementById('timer');
    
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Add warning class if less than 5 minutes
    if (timeRemaining <= 5 * 60) {
        timerElement.classList.add('warning');
    } else {
        timerElement.classList.remove('warning');
    }
}

// Display Question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update question counter
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressPercentage').textContent = `${Math.round(progress)}%`;
    
    // Display question text
    document.getElementById('questionText').textContent = question.question;
    
    // Display options
    const optionsGrid = document.getElementById('optionsGrid');
    optionsGrid.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }
        
        button.innerHTML = `
            <div class="option-letter">${letters[index]}</div>
            <span>${option}</span>
        `;
        
        button.onclick = () => selectOption(index);
        optionsGrid.appendChild(button);
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('nextBtnText').textContent = 'Yakunlash';
    } else {
        document.getElementById('nextBtnText').textContent = 'Keyingi';
    }
}

// Select Option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update UI
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, index) => {
        if (index === optionIndex) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        finishQuiz();
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Finish Quiz
function finishQuiz() {
    clearInterval(timerInterval);
    
    // Calculate results
    let correctCount = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const wrongCount = questions.length - correctCount;
    const percentage = Math.round((correctCount / questions.length) * 100);
    
    // Display results
    document.getElementById('scoreNumber').textContent = correctCount;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
    document.getElementById('percentageScore').textContent = `${percentage}%`;
    
    // Animate score ring
    const circumference = 2 * Math.PI * 85;
    const offset = circumference - (percentage / 100) * circumference;
    
    // Add SVG gradient definition
    const svg = document.querySelector('.score-ring');
    if (!document.getElementById('scoreGradient')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'scoreGradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:#667eea;stop-opacity:1');
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('style', 'stop-color:#764ba2;stop-opacity:1');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }
    
    setTimeout(() => {
        document.getElementById('scoreRing').style.strokeDashoffset = offset;
    }, 100);
    
    // Set results message and icon
    let message = '';
    let icon = '';
    
    if (percentage >= 90) {
        message = 'Ajoyib! Siz a\'lo natija ko\'rsatdingiz! 🌟';
        icon = '🏆';
    } else if (percentage >= 75) {
        message = 'Juda yaxshi! Mantiqiy fikrlash qobiliyatingiz yuqori! 👏';
        icon = '🎉';
    } else if (percentage >= 60) {
        message = 'Yaxshi natija! Hali rivojlanish uchun joy bor. 💪';
        icon = '👍';
    } else if (percentage >= 40) {
        message = 'Yomon emas, lekin ko\'proq mashq qilish kerak. 📚';
        icon = '📖';
    } else {
        message = 'Mashq qilishda davom eting! Siz albatta muvaffaqiyatga erishasiz! 💡';
        icon = '💪';
    }
    
    document.getElementById('resultsMessage').innerHTML = `<p>${message}</p>`;
    document.getElementById('resultsIcon').textContent = icon;
    
    // Switch to results screen
    switchScreen('resultsScreen');
}

// Show Answers Review
function showAnswers() {
    const reviewContent = document.getElementById('reviewContent');
    reviewContent.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
        
        let optionsHTML = '';
        question.options.forEach((option, optIndex) => {
            let optionClass = 'review-option';
            
            if (optIndex === correctAnswer) {
                optionClass += ' correct-answer';
            }
            
            if (optIndex === userAnswer && !isCorrect) {
                optionClass += ' wrong-answer';
            }
            
            if (optIndex === userAnswer) {
                optionClass += ' user-answer';
            }
            
            optionsHTML += `
                <div class="${optionClass}">
                    <div class="review-option-letter">${letters[optIndex]}</div>
                    <span>${option}</span>
                    ${optIndex === correctAnswer ? ' ✅' : ''}
                    ${optIndex === userAnswer && !isCorrect ? ' ❌' : ''}
                </div>
            `;
        });
        
        reviewItem.innerHTML = `
            <div class="review-question">
                <span class="review-status">${isCorrect ? '✅' : '❌'}</span>
                <span>${index + 1}. ${question.question}</span>
            </div>
            <div class="review-options">
                ${optionsHTML}
            </div>
        `;
        
        reviewContent.appendChild(reviewItem);
    });
    
    switchScreen('reviewScreen');
}

// Back to Results
function backToResults() {
    switchScreen('resultsScreen');
}

// Restart Quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    timeRemaining = 45 * 60;
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    switchScreen('startScreen');
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
});
