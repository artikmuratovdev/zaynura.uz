// Talaffuz qilishni boshqarish uchun o'zgaruvchilar
let recognition;
let isRecognizing = false;
let currentWord = '';

// HTML elementlari bilan ulanish
const startRecognitionButton = document.getElementById('startRecognition');
const stopRecognitionButton = document.getElementById('stopRecognition');
const recognizedWord = document.getElementById('recognizedWord');
const wordToPronounce = document.getElementById('wordToPronounce');
const feedback = document.getElementById('feedback');

// 10 ta so‘zni yaratish
const wordsList = ['Salom', 'Xush kelibsiz', 'Tabriklayman', 'Yaxshi', 'Rahmat', 'Hayr', 'Kuting', 'Iltimos', 'Kecha', 'Bugun'];

// So‘zlarni tasodifiy tanlash
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    return wordsList[randomIndex];
}

// Talaffuzni boshlash
startRecognitionButton.onclick = () => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'uz-UZ';
        recognition.continuous = false;
        recognition.interimResults = false;

        // Talaffuzni boshlab, so‘zni ko‘rsatish
        currentWord = getRandomWord();
        wordToPronounce.textContent = `Talaffuz qilish uchun so‘z: ${currentWord}`;


        recognition.onstart = () => {
            isRecognizing = true;
            startRecognitionButton.disabled = true;
            stopRecognitionButton.disabled = false;
            feedback.textContent = "Talaffuz qilishni boshlang...";
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            recognizedWord.textContent = transcript;
            
            if (transcript.toLowerCase() === currentWord.toLowerCase()) {
                feedback.textContent = "Talaffuzingiz to‘g‘ri!";
                feedback.style.color = 'green';
            } else {
                feedback.textContent = "Talaffuzda xatolik bor, iltimos qayta urinib ko‘ring.";
                feedback.style.color = 'red';
            }
        };

        recognition.onerror = () => {
            feedback.textContent = "Xatolik yuz berdi, iltimos yana urinib ko‘ring.";
            feedback.style.color = 'red';
        };

        recognition.onend = () => {
            isRecognizing = false;
            startRecognitionButton.disabled = false;
            stopRecognitionButton.disabled = true;
        };

        recognition.start();
    } else {
        feedback.textContent = "Bu brauzer talaffuzni qo‘llab-quvvatlamaydi.";
        feedback.style.color = 'red';
    }
};

// Talaffuzni to‘xtatish
stopRecognitionButton.onclick = () => {
    if (recognition && isRecognizing) {
        recognition.stop();
    }
};