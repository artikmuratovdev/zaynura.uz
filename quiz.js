// Savollar va javoblar
const questions = [
    { question: "Qaysi so'z barcha tillarda deyarli bir xil talaffuz qilinadi?", answer: "Mama" },
    { question: "Qaysi so'z aytilganda, aytilayotgan narsaning o'zi sodir bo'ladi?", answer: "Jim! (aytilganda sukunat talab qilinadi)" },
    { question: "Qaysi so'z qancha ko'p aytilsa, shuncha ma'nosini yo'qotadi?", answer: "Kechirasiz" },
    { question: "Qaysi so'z savol ham, javob ham bo'la oladi?", answer: "Nima?" },
    { question: "Qaysi so'z yozilganda uzun, aytilganda esa qisqa?", answer: "Uzun" },
    { question: "Qaysi so'z aytilmasdan turib ham tushuniladi?", answer: "Rahmat (imo bilan)" },
    { question: "Qaysi so'z barcha tillarda eng tez o'zgaradi?", answer: "Salomlashuv so'zlari (slang)" },
    { question: "Qaysi so'z odamni xafa ham, xursand ham qilishi mumkin?", answer: "To'g'ri" },
    { question: "Qaysi so'z gap bo'lmasdan ham gap vazifasini bajaradi?", answer: "Ha yoki Yo'q" },
    { question: "Qaysi so'z yolg'on bo'lsa ham, ish bajariladi?", answer: "Keling" },
    { question: "Qaysi til eng ko'p davlatlarda rasmiy til hisoblanadi?", answer: "Ingliz tili" },
    { question: "Qaysi tilda so'zlar o'ngdan chapga yoziladi?", answer: "Arab va ivrit tillari" },
    { question: "Qaysi yozuv tizimida bitta belgi butun bir so'zni bildiradi?", answer: "Xitoy ierogliflari" },
    { question: "Qaysi tilni bilmasdan ham uni tushunish mumkin?", answer: "Imo-ishora tili (qisman)" },
    { question: "Qaysi tilda eng qisqa gap ham to'liq ma'no beradi?", answer: "Buyruq gaplar (Kel!)" },
    { question: "Qaysi so'z dunyoning hamma joyida taniladi?", answer: "OK" },
    { question: "Qaysi til eng tez o'rganiladi deb hisoblanadi?", answer: "Esperanto" },
    { question: "Qaysi tilda bitta so'z butun bir gap bo'la oladi?", answer: "Turk va eskimos tillarida" },
    { question: "Qaysi tilda so'z ohangi ma'noni o'zgartiradi?", answer: "Xitoy tilida" },
    { question: "Qaysi yozuvda harflar alohida emas, tutash yoziladi?", answer: "Arab yozuvi" },
    { question: "Qaysi gap aytilganda ko'pincha unga ishonilmaydi?", answer: "Ishoning" },
    { question: "Qaysi gap so'zsiz ham tushunarli?", answer: "Savol ohangi bilan aytilgan bitta so'z" },
    { question: "Qaysi so'z odamni tinchlantiradi?", answer: "Xavotir olmang" },
    { question: "Qaysi so'z noto'g'ri aytilsa, butun ma'no o'zgaradi?", answer: "Ism" },
    { question: "Qaysi gap ko'pincha kech bo'lgach aytiladi?", answer: "Kechirasiz" },
    { question: "Qaysi so'z bilan tortishuv boshlanishi mumkin?", answer: "Lekin" },
    { question: "Qaysi so'z bilan tortishuv tugashi mumkin?", answer: "Mayli" },
    { question: "Qaysi so'z eshitilmasa ham ta'sir qiladi?", answer: "Sukut" },
    { question: "Qaysi gap hech qachon yolg'on bo'lmaydi?", answer: "Men hozir gapiryapman" },
    { question: "Qaysi so'z eng ko'p va'dalarda ishlatiladi?", answer: "Ertaga" },
    { question: "Qaysi so'z aytilishi bilan gap tugaydi?", answer: "Xayr" },
    { question: "Qaysi so'z aytilsa, odam ko'pincha kulib yuboradi?", answer: "Hazil" },
    { question: "Qaysi so'z ishni boshlashga undaydi?", answer: "Boshladik" },
    { question: "Qaysi so'z ko'pincha gapning o'rtasida tortishuvni o'zgartiradi?", answer: "Lekin" },
    { question: "Qaysi so'z odamni kutishga majbur qiladi?", answer: "Hozir" },
    { question: "Qaysi so'z aytilganda, odam o'zini oqlay boshlaydi?", answer: "Nega?" },
    { question: "Qaysi so'z ko'pincha bahsni yumshatadi?", answer: "Balki" },
    { question: "Qaysi so'zdan keyin savol tug'iladi?", answer: "Chunki" },
    { question: "Qaysi so'z gapni davom ettirishga majbur qiladi?", answer: "Davom eting" },
    { question: "Qaysi so'z aytilganda hamma jim bo'lib qoladi?", answer: "Diqqat" },
    { question: "Qaysi so'z aytilsa, odam darhol javob beradi?", answer: "Kim?" },
    { question: "Qaysi gap ko'pincha yolg'on bo'lib chiqadi?", answer: "Oxirgi marta" },
    { question: "Qaysi so'z aytilmasa ham seziladi?", answer: "Sukut" },
    { question: "Qaysi so'z kutilmaganda aytilsa, hammaga qiziq bo'ladi?", answer: "Sir" },
    { question: "Qaysi so'z gapni yopadi, lekin suhbatni emas?", answer: "Xo'p" },
    { question: "Qaysi til ovozsiz ham gapiradi?", answer: "Tana tili" },
    { question: "Qaysi so'z qanchalik qisqa bo'lsa, shunchalik kuchli ta'sir qiladi?", answer: "Yo'q" },
    { question: "Qaysi so'z aytilganda, ish tezlashadi?", answer: "Tez" },
    { question: "Qaysi so'z gapga ohang qo'shadi?", answer: "Undov so'zlar" },
    { question: "Qaysi so'z bilan odam o'zini tanishtiradi?", answer: "Ism" },
    { question: "Qaysi so'z suhbatni ochadi?", answer: "Salom" },
    { question: "Qaysi so'z suhbatni yopadi?", answer: "Xayr" },
    { question: "Qaysi so'z hech qachon aytilmasa ham mavjud?", answer: "Ma'no" },
    { question: "Qaysi so'z aytilganda hamma kutadi?", answer: "Boshlaymiz" },
    { question: "Qaysi so'z aytilganda savol tug'ilmaydi?", answer: "Ha" },
    { question: "Qaysi so'z bilan suhbat boshlanadi?", answer: "Salom" },
    { question: "Qaysi so'z bilan suhbat tugaydi?", answer: "Xayr" },
    { question: "Qaysi so'z aytilganda odam odatda kuladi?", answer: "Hazil" },
    { question: "Qaysi so'z aytilsa, odam o'zini himoya qiladi?", answer: "Nega?" },
    { question: "Qaysi so'z bilan odam rozi bo'ladi?", answer: "Ha" },
    { question: "Qaysi so'z bilan odam rad etadi?", answer: "Yo'q" },
    { question: "Qaysi so'z odamni xursand qiladi?", answer: "A'lo" },
    { question: "Qaysi so'z odamni o'ylantirib qo'yadi?", answer: "Balki" },
    { question: "Qaysi so'z aytilganda, suhbat chuqurlashadi?", answer: "Chunki" },
    { question: "Qaysi so'z bilan odam so'zini yakunlaydi?", answer: "Xullas" },
    { question: "Qaysi so'z bilan odam minnatdorlik bildiradi?", answer: "Rahmat" },
    { question: "Qaysi so'z aytilsa, suhbat cho'ziladi?", answer: "Yana" },
    { question: "Qaysi so'z aytilganda, savol tug'iladi?", answer: "Qanday?" },
    { question: "Qaysi so'z suhbatni yumshatadi?", answer: "Iltimos" },
    { question: "Qaysi til dunyoda eng ko'p o'rganiladi?", answer: "Ingliz tili" },
    { question: "Qaysi yozuv o'ngdan chapga qarab yoziladi?", answer: "Arab yozuvi" },
    { question: "Qaysi yozuv belgilar orqali so'zni ifodalaydi?", answer: "Xitoy yozuvi" },
    { question: "Qaysi yozuvda harflar tutashib ketadi?", answer: "Arab yozuvi" },
    { question: "Qaysi yozuvda katta-kichik harf farqi yo'q?", answer: "Arab yozuvi" },
    { question: "Qaysi tilda bitta so'z gap bo'la oladi?", answer: "Eskimos tillarida" },
    { question: "Qaysi til xalqaro muloqot tili hisoblanadi?", answer: "Ingliz tili" },
    { question: "Qaysi yozuvda har bir belgi alohida talaffuz qilinadi?", answer: "Lotin yozuvi" },
    { question: "Qaysi tilda so'z tartibi juda muhim?", answer: "Ingliz tilida" },
    { question: "Qaysi yozuv eng qadimiylardan biri?", answer: "Ieroglif yozuvi" },
    { question: "Qaysi til ko'proq qisqartmalardan foydalanadi?", answer: "Ingliz tili" },
    { question: "Qaysi yozuv raqam va harfni aralashtirib ishlatadi?", answer: "Zamonaviy internet yozuvi" },
    { question: "Qaysi til ko'plab tillardan so'z olgan?", answer: "Ingliz tili" },
    { question: "Qaysi yozuv o'qishda ohangni kam ko'rsatadi?", answer: "Lotin yozuvi" },
    { question: "Qaysi tilda talaffuz yozuvdan farq qiladi?", answer: "Ingliz tili" },
    { question: "Qaysi yozuv ko'rish orqali tez esda qoladi?", answer: "Ieroglif yozuvi" },
    { question: "Qaysi gap aytilganda odam shubhalanadi?", answer: "Rostini aytsam" },
    { question: "Qaysi so'z aytilganda, odam javob kutadi?", answer: "Kim?" },
    { question: "Qaysi so'z aytilganda, odam o'zini oqlaydi?", answer: "Sababi" },
    { question: "Qaysi so'z suhbatga keskinlik qo'shadi?", answer: "Aslida" },
    { question: "Qaysi so'z suhbatni sekinlashtiradi?", answer: "Balki" },
    { question: "Qaysi so'z aytilganda, odam xafa bo'lishi mumkin?", answer: "Tanqid" },
    { question: "Qaysi so'z aytilganda, odam xursand bo'ladi?", answer: "Maqtov" },
    { question: "Qaysi so'z suhbatni davom ettiradi?", answer: "Yana" },
    { question: "Qaysi so'z suhbatni to'xtatadi?", answer: "Bas" },
    { question: "Qaysi so'z odamni fikrlashga majbur qiladi?", answer: "Nega?" },
    { question: "Qaysi so'z bilan odam fikrini o'zgartiradi?", answer: "Balki" },
    { question: "Qaysi so'z bilan odam rozi bo'lmasligini yumshoq bildiradi?", answer: "Ammo" },
    { question: "Qaysi so'z aytilganda, odam kutishga tayyorlanadi?", answer: "Hozir" },
    { question: "Qaysi so'z aytilganda, suhbat yopilmaydi?", answer: "Xo'p" },
    { question: "Qaysi so'z aytilganda, suhbat rasmiylashadi?", answer: "Marhamat" },
    { question: "Qaysi so'zsiz gapning ma'nosi o'zgarmaydi?", answer: "Imo-ishora bilan aytilgan so'z" },
    { question: "Qaysi so'z aytilganda, odam ishga kirishadi?", answer: "Marhamat" },
    { question: "Qaysi so'z aytilganda, sukut buziladi?", answer: "Gap" },
    { question: "Qaysi so'z aytilmasa ham, tushuniladi?", answer: "Ma'no" },
    { question: "Qaysi so'z bilan odam hurmat ko'rsatadi?", answer: "Siz" },
    { question: "Qaysi so'z aytilganda, odam o'zini yaqin his qiladi?", answer: "Sen" },
    { question: "Qaysi so'z aytilganda, masofa seziladi?", answer: "Rasmiy murojaat" },
    { question: "Qaysi so'z aytilganda, bahs kuchayadi?", answer: "Aslida" },
    { question: "Qaysi so'z aytilganda, bahs pasayadi?", answer: "Mayli" },
    { question: "Qaysi so'z eng ko'p takrorlanadi, lekin kam o'ylab aytiladi?", answer: "Ha" },
    { question: "Qaysi so'z aytilganda, vaqt yutib olinadi?", answer: "Hozir" },
    { question: "Qaysi so'z aytilganda, hamma kutadi, lekin kelmasligi mumkin?", answer: "Ertaga" },
    { question: "Qaysi so'z aytilmaganda, ko'proq ma'no beradi?", answer: "Sukut" }
];

// O'yin holati
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let isAnswerShown = false;
let usedQuestions = [];

// DOM elementlari
const questionText = document.getElementById('questionText');
const answerText = document.getElementById('answerText');
const answerContainer = document.getElementById('answerContainer');
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

// Timer ring parametrlari
const radius = 32;
const circumference = 2 * Math.PI * radius;

// Boshlash tugmasi
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    // Tasodifiy 20 ta savol tanlash
    usedQuestions = getRandomQuestions(20);
    currentQuestionIndex = 0;
    score = 0;
    
    totalQuestionsEl.textContent = usedQuestions.length;
    scoreEl.textContent = score;
    
    startBtn.style.display = 'none';
    resultsContainer.style.display = 'none';
    
    showQuestion();
}

function getRandomQuestions(count) {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, questions.length));
}

function showQuestion() {
    if (currentQuestionIndex >= usedQuestions.length) {
        showResults();
        return;
    }
    
    isAnswerShown = false;
    const question = usedQuestions[currentQuestionIndex];
    
    questionText.textContent = question.question;
    answerText.textContent = question.answer;
    answerContainer.classList.remove('show');
    
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    
    nextBtn.style.display = 'none';
    
    // Timer boshlash
    startTimer();
}

function startTimer() {
    timeLeft = 15;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            showAnswer();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerText.textContent = timeLeft;
    
    // Timer rangini o'zgartirish
    timerText.classList.remove('warning', 'danger');
    if (timeLeft <= 5) {
        timerText.classList.add('danger');
        timerProgress.style.stroke = '#f44336';
    } else if (timeLeft <= 10) {
        timerText.classList.add('warning');
        timerProgress.style.stroke = '#ff9800';
    } else {
        timerProgress.style.stroke = '#4caf50';
    }
    
    // Ring progressini yangilash
    const offset = circumference - (timeLeft / 15) * circumference;
    timerProgress.style.strokeDashoffset = offset;
}

function showAnswer() {
    if (isAnswerShown) return;
    
    isAnswerShown = true;
    clearInterval(timer);
    
    answerContainer.classList.add('show');
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    clearInterval(timer);
    
    const percentage = Math.round((score / usedQuestions.length) * 100);
    
    document.querySelector('.quiz-info').style.display = 'none';
    document.querySelector('.question-container').style.display = 'none';
    answerContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    
    resultsContainer.style.display = 'block';
    finalScore.textContent = `${score} / ${usedQuestions.length}`;
    scorePercentage.textContent = `${percentage}% to'g'ri javob`;
    
    restartBtn.style.display = 'inline-block';
}

function restartQuiz() {
    document.querySelector('.quiz-info').style.display = 'flex';
    document.querySelector('.question-container').style.display = 'flex';
    answerContainer.style.display = 'block';
    restartBtn.style.display = 'none';
    
    startQuiz();
}

// Timer ring sozlash
timerProgress.style.strokeDasharray = `${circumference} ${circumference}`;
timerProgress.style.strokeDashoffset = 0;
