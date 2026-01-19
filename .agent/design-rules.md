# Dizayn Qoidalari

## Umumiy Dizayn Standarti

Barcha yangi test va savol sahifalari uchun **`uslub.html` dizayni** ishlatilishi SHART.

### Asosiy Dizayn Elementlari

**Rang Palitra:**
- Primary color: `#4f46e5` (indigo)
- Secondary color: `#818cf8` (light indigo)
- Success color: `#22c55e` (green)
- Error color: `#ef4444` (red)
- Background color: `#f8fafc` (light gray)
- Card background: `#ffffff` (white)

**Shriftlar:**
- Font family: `'Inter', system-ui, -apple-system, sans-serif`
- Font Awesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`

**Border Radius:**
- Small: `0.25rem` (4px)
- Medium: `0.5rem` (8px)
- Large: `1rem` (16px)

**Shadows:**
- Card shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- Input shadow: `0 1px 3px 0 rgb(0 0 0 / 0.1)`

**Transitions:**
- Standard: `all 0.3s ease`

### Struktura Shabloni

Har bir sahifa quyidagi elementlardan iborat bo'lishi kerak:

1. **Container** - asosiy konteyner
   - Background: white
   - Border radius: 1rem
   - Padding: 2rem
   - Max-width: 600px
   - Box shadow

2. **Header** - sarlavha
   - H1 tag
   - Text align: center
   - Color: primary color
   - Font size: 2rem

3. **Progress Bar**
   - Width: 100%
   - Height: 0.5rem
   - Background: #e2e8f0
   - Border radius: 0.25rem
   - Progress fill: primary color

4. **Stats** - statistika
   - Display: flex
   - Justify-content: space-between
   - Font size: 0.875rem
   - Color: #64748b

5. **Content Card** - savol/ta'rif kartasi
   - Background: #f8fafc
   - Border radius: 0.75rem
   - Padding: 1.5rem
   - Font size: 1.125rem

6. **Input Group** - input maydoni
   - Width: 100%
   - Padding: 0.75rem 1rem
   - Border: 2px solid #e2e8f0
   - Border radius: 0.5rem
   - Focus: border-color primary + box-shadow

7. **Buttons** - tugmalar
   - Padding: 0.75rem 1rem
   - Font size: 1rem
   - Color: white
   - Background: primary color
   - Border radius: 0.5rem
   - Display: flex with icons
   - Hover: secondary color

8. **Feedback** - javob haqida xabar
   - Text align: center
   - Padding: 0.75rem
   - Border radius: 0.5rem
   - Correct: green background
   - Incorrect: red background

9. **Modal** - natijalar modali
   - Fixed position
   - Background: rgba(0, 0, 0, 0.5)
   - Modal content: white, padding 2rem

### CSS Fayl Strukturasi

```css
:root {
    --primary-color: #4f46e5;
    --secondary-color: #818cf8;
    --success-color: #22c55e;
    --error-color: #ef4444;
    --background-color: #f8fafc;
    --card-background: #ffffff;
}

body { ... }
.container { ... }
h1 { ... }
.progress-bar { ... }
.stats { ... }
.definition-card { ... }
input[type="text"] { ... }
button { ... }
.feedback { ... }
.modal { ... }
@media (max-width: 640px) { ... }
```

### JavaScript Struktura

```javascript
// Ma'lumotlar
const terms = [ ... ];

// Holat
let currentIndex = 0;
let correctAnswers = 0;
let totalAttempts = 0;

// Funksiyalar
function updateProgress() { ... }
function showNextDefinition() { ... }
function checkAnswer() { ... }
function showResults() { ... }
function restartQuiz() { ... }
```

### Namuna Fayl

**Dizayn namunasi:** `uslub.html`

Har bir yangi sahifa yaratilganda, `uslub.html` faylining dizayni va strukturasidan foydalanish MAJBURIY.

### Qo'shimcha Qoidalar

- ✅ Toza va sodda dizayn
- ✅ Professional ko'rinish
- ✅ Responsive dizayn (mobile-friendly)
- ✅ Smooth transitions
- ✅ Font Awesome iconlar
- ✅ Progress bar
- ✅ Real-time statistika
- ✅ Modal natijalar
- ✅ Keyboard support (Enter)
- ✅ Auto-focus input
- ❌ Murakkab animatsiyalar
- ❌ Ortiqcha effektlar
- ❌ Qorong'u fon

---

**Muhim:** Har bir yangi test/savol sahifasi yaratilganda, `uslub.html` dizayniga rioya qilish SHART!
