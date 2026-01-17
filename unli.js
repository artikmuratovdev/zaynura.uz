// So'zlar bazasi
const words = [
    "mikrofon", "direktor", "termos", "piramida", "go'zallik", "ko'zgu", "aluminiy", "yubiley", "qirg'ovul", " chirmovuq",
    "tonna", "fido", "alanga", "gavda", "boshqaruv", "noyabr", "oila",  "bo'tako'z", " atelye", "material", "milliard", "radiator", "tabiat", "shariat",
    "biologiya", "million", "stadion", "radio", "mozaika", "maishat", "alkoloid", "okean", "laureat"
];

let currentIndex = 0;

// So'zlarni tasodifiy aralashtirish
function shuffleWords() {
    words.sort(() => Math.random() - 0.5);
}

// Maskani yaratish (unlilardan bittasini yashirish)
function maskWord(word) {
    const masked = word.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'o\'']; // Unlilar ro'yxati
    const possibleIndices = [];

    // So'zdagi unlilarni topamiz
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            possibleIndices.push(i);
        }
    }

    // Agar unli harflar mavjud bo'lsa, tasodifiy bittasini yashiramiz
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
