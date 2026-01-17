// So'zlar bazasi
const words = [
    "zarb", "kitob", "yuzlab", "tobla", "tup", "avtobus", "avtomat", "asfalt", "qirg'ovul", "fursat",
    "odat", "savod", "sud", "badqovoq", "iztirob", "izquvar", "tuzsiz", "bo'tako'z", "tijorat", "material", "projektor", "ajdar", "garaj", "achchiq",
    "shanba", "jonbozlik", "ko'rinmaslik", "haqiqiy", "mozaika",
];

let currentIndex = 0;

// So'zlarni tasodifiy aralashtirish
function shuffleWords() {
    words.sort(() => Math.random() - 0.5);
}

// Maskani yaratish (undosh harflardan bittasini yashirish, birinchi harfni yashirmaymiz)
function maskWord(word) {
    const masked = word.split('');
    const consonant = ['b', 'p', 'd', 't', 'v', 'f', "z", "s", "m", "n", "j", "ch", "q"]; // Undosh harflar ro'yxati
    const possibleIndices = [];

    // So'zdagi undosh harflarni topamiz, birinchi harfni o'ziga qo'shmaymiz
    for (let i = 1; i < word.length; i++) { // 0-indeksni o'tkazib yuboramiz
        if (consonant.includes(word[i].toLowerCase())) {
            possibleIndices.push(i);
        }
    }

    // Agar undosh harflar mavjud bo'lsa, tasodifiy bittasini yashiramiz
    if (possibleIndices.length > 0) {
        const randomIndex = possibleIndices[Math.floor(Math.random() * possibleIndices.length)];
        masked[randomIndex] = '...';
    }

    return masked.join('');
}

// Keyingi so'zni ko'rsatish
function showNextWord() {
    // Har safar so'zlarni aralashtirib olish
    shuffleWords();
    
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
