// So'zlar bazasi
const words = [
    "mutaxassis","hasharot", "ahamiyat", " ahbob ", "ahdlashuv", "ahkom", "ahmoqona", "  ahvol", "ehtimom", "hajviy", "hadik",
    "xabar", "xo'roz", "xohish", "xushnud", "baxt", "axborot", "mix", "anarxiya", "axloqiy", "daxlsiz", "ixtisossiz", "mayxushlik"
];           

let currentIndex = 0;

// So'zlarni tasodifiy aralashtirish
function shuffleWords() {
    words.sort(() => Math.random() - 0.5);
}

// Maskani yaratish (`x` yoki `h` harflaridan bittasini yashirish)
function maskWord(word) {
    const masked = word.split('');
    const possibleIndices = [];

    // So'zdagi `x` yoki `h` harflarini topamiz
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'x' || word[i] === 'h') {
            possibleIndices.push(i);
        }
    }

    // Agar `x` yoki `h` harflaridan biri mavjud bo'lsa, tasodifiy bittasini yashiramiz
    if (possibleIndices.length > 0) {
        const randomIndex = possibleIndices[Math.floor(Math.random() * possibleIndices.length)];
        masked[randomIndex] = '...';
    }

    return masked.join('');
}

// Keyingi so'zni ko'rsatish
function showNextWord() {
    if (currentIndex < words.length) {
        const word = words[currentIndex];
        const maskedWord = maskWord(word);
        document.getElementById("maskedWord").innerText = maskedWord;
        document.getElementById("result").innerText = "";
        document.getElementById("userInput").value = "";
    } else {
        document.getElementById("maskedWord").innerText = "Mashq tugadi!";
        document.getElementById("result").innerText = `Tabriklaymiz! Siz barcha ${words.length} so'zni to'g'ri yozdingiz!`;
    }
}

// Javobni tekshirish
function checkAnswer() {
    const userInput = document.getElementById("userInput").value.trim().toLowerCase();
    const correctWord = words[currentIndex];

    if (userInput === correctWord) {
        document.getElementById("result").innerText = "To'g'ri!";
        currentIndex++;
        showNextWord();
    } else {
        document.getElementById("result").innerText = "Xato! Qayta urinib ko'ring.";
    }
}

// Dastlabki sozlash
shuffleWords();
showNextWord();
