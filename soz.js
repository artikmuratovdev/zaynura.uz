// So'zlar bazasi va tushiriladigan harflar indekslari
const wordsData = [
    { word: "mutaxassis", maskIndices: [4, 7] },
    { word: "assimilyatsiya", maskIndices: [2, 10] },
    { word: "tafovut", maskIndices: [4] },
    { word: "regressiya", maskIndices: [4, 8] },
    { word: "diffuziya", maskIndices: [3, 6] },
    { word: "transkripsiya", maskIndices: [3, 9] },
    { word: "fidoyi", maskIndices: [2] },
    { word: "intellekt", maskIndices: [3, 7] },
    { word: "mudofaa", maskIndices: [6] },
    { word: "konsonantizm", maskIndices: [5, 10] },
    { word: "geminatsiya", maskIndices: [3, 8] },
    { word: "artikulyatsiya", maskIndices: [4, 11] },
    { word: "hasharot", maskIndices: [4] },
    { word: "taqozo", maskIndices: [4] },
    { word: "morfologiya", maskIndices: [3, 9] },
    { word: "qorong'i", maskIndices: [2] },
    { word: "eksperiment", maskIndices: [5, 10] },
    { word: "dissonans", maskIndices: [3, 7] },
    { word: "kompensatsiya", maskIndices: [5, 11] },
    { word: "yuriskonsult", maskIndices: [4, 10] },
    { word: "tatbiq", maskIndices: [3] },
];

let currentIndex = 0;

// Maskani yaratish (belgilangan indekslarga asosan yashirish)
function maskWord(word, maskIndices) {
    const masked = word.split('');
    maskIndices.forEach(index => {
        if (index > 0 && index < word.length) {
            masked[index] = '...';
        }
    });
    return masked.join('');
}

// Keyingi so'zni ko'rsatish
function showNextWord() {
    if (currentIndex < wordsData.length) {
        const { word, maskIndices } = wordsData[currentIndex];
        const maskedWord = maskWord(word, maskIndices);
        document.getElementById("maskedWord").innerText = maskedWord;
        document.getElementById("result").innerText = "";
        document.getElementById("userInput").value = "";
    } else {
        document.getElementById("maskedWord").innerText = "Mashq tugadi!";
        document.getElementById("result").innerText = `Tabriklaymiz! Siz barcha ${wordsData.length} so'zni to'g'ri yozdingiz!`;
    }
}

// Javobni tekshirish
function checkAnswer() {
    const userInput = document.getElementById("userInput").value.trim().toLowerCase();
    const correctWord = wordsData[currentIndex].word;

    if (userInput === correctWord) {
        document.getElementById("result").innerText = "To'g'ri!";
        currentIndex++;
        showNextWord();
    } else {
        document.getElementById("result").innerText = "Xato! Qayta urinib ko'ring.";
    }
}

// Dastlabki sozlash
showNextWord();