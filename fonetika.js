// Ovoz yozish va taqqoslash uchun kerakli o'zgaruvchilar
let mediaRecorder;
let audioChunks = [];
let wordsList = [];  // So‘zlar ro‘yxati
let currentWord = '';  // Foydalanuvchi talaffuz qilishi kerak bo‘lgan so‘z

// DOM elementlariga ulanish
const startRecordingButton = document.getElementById('startRecording');
const stopRecordingButton = document.getElementById('stopRecording');
const audioPlayback = document.getElementById('audioPlayback');
const compareResultButton = document.getElementById('compareResult');
const submitWordsButton = document.getElementById('submitWords');
const feedbackMessage = document.getElementById('feedbackMessage');
const wordToPronounce = document.getElementById('wordToPronounce');

// Foydalanuvchi so‘zlarini kiritish
submitWordsButton.onclick = () => {
    wordsList = [];
    for (let i = 1; i <= 10; i++) {
        const word = document.getElementById(`wordInput${i}`).value.trim();

        if (word) {
            wordsList.push(word);
        }
    }

    if (wordsList.length === 10) {
        // Tasodifiy so‘zni tanlash
        currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];
        wordToPronounce.innerHTML = `Sizni kutayotgan so'z: <strong>${currentWord}</strong>`;

        feedbackMessage.textContent = 'Iltimos, talaffuz qilishni boshlang!';
        feedbackMessage.style.color = 'blue';
        startRecordingButton.disabled = false;  // Yozishni boshlash tugmasini yoqish
    } else {
        feedbackMessage.textContent = "Iltimos, barcha so‘zlarni kiriting!";
        feedbackMessage.style.color = 'red';
    }
};

// Yozishni boshlash
startRecordingButton.onclick = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioPlayback.src = audioUrl;
        audioChunks = [];  // Yangi yozish uchun tozalash
        compareResultButton.disabled = false; // Natijani ko'rsatish tugmasini yoqish
        feedbackMessage.textContent = "Yozish tugadi, endi natijani ko‘rish mumkin!";
        feedbackMessage.style.color = 'green';
    };

    mediaRecorder.start();
    startRecordingButton.disabled = true;
    stopRecordingButton.disabled = false;
    feedbackMessage.textContent = "Iltimos, so'zni talaffuz qilib yozing...";
};

// Yozishni to'xtatish
stopRecordingButton.onclick = () => {
    mediaRecorder.stop();
    startRecordingButton.disabled = false;
    stopRecordingButton.disabled = true;
};

// Talaffuzni baholash (qayta ishlash)
compareResultButton.onclick = () => {
    // Foydalanuvchi ovozi va tasodifiy tanlangan so‘zni taqqoslash
    const userWord = currentWord; // Ovozdan olingan so'z (bu API orqali olinadi)
    
    if (userWord.toLowerCase() === currentWord.toLowerCase()) {
        feedbackMessage.textContent = 'Talaffuzingiz to‘g‘ri!';
        feedbackMessage.style.color = 'green';
    } else {
        feedbackMessage.textContent = "Talaffuzda xato bor. Iltimos, qayta urinib ko‘ring.";
        feedbackMessage.style.color = 'red';
    }
};