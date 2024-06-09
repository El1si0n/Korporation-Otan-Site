const alphabet = [
    { letter: "A", phonetic: "Alpha" },
    { letter: "B", phonetic: "Bravo" },
    { letter: "C", phonetic: "Charlie" },
    { letter: "D", phonetic: "Delta" },
    { letter: "E", phonetic: "Echo" },
    { letter: "F", phonetic: "Foxtrot" },
    { letter: "G", phonetic: "Golf" },
    { letter: "H", phonetic: "Hotel" },
    { letter: "I", phonetic: "India" },
    { letter: "J", phonetic: "Juliette" },
    { letter: "K", phonetic: "Kilo" },
    { letter: "L", phonetic: "Lima" },
    { letter: "M", phonetic: "Mike" },
    { letter: "N", phonetic: "November" },
    { letter: "O", phonetic: "Oscar" },
    { letter: "P", phonetic: "Papa" },
    { letter: "Q", phonetic: "Quebec" },
    { letter: "R", phonetic: "Romeo" },
    { letter: "S", phonetic: "Sierra" },
    { letter: "T", phonetic: "Tango" },
    { letter: "U", phonetic: "Uniform" },
    { letter: "V", phonetic: "Victor" },
    { letter: "W", phonetic: "Whisky" },
    { letter: "X", phonetic: "X-ray" },
    { letter: "Y", phonetic: "Yankee" },
    { letter: "Z", phonetic: "Zulu" }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const resultElement = document.getElementById("result");
const resultContainer = document.getElementById("result-container");
const restartButton = document.getElementById("restart-button");
const finalScoreElement = document.getElementById("final-score");

function displayQuestion() {
    questionElement.innerHTML = `Quelle est la transcription phonétique de la lettre "<b>${alphabet[currentQuestion].letter}</b>" ?`;
    resultContainer.style.display = "none";
    restartButton.style.display = "none";
    finalScoreElement.style.display = "none";
}

function checkAnswer() {
    const userAnswer = answerElement.value.toLowerCase();
    const correctAnswer = alphabet[currentQuestion].phonetic.toLowerCase();

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Bonne réponse !";
        score++;
    } else {
        resultElement.innerHTML = `Mauvaise réponse. La réponse correcte est "<b>${alphabet[currentQuestion].phonetic}</b>".`;
    }

    resultContainer.style.display = "block";
    updateScore();
}

function updateScore() {
    scoreElement.textContent = `Score : ${score} / ${alphabet.length}`;
}

function nextQuestion() {
    if (currentQuestion < alphabet.length - 1) {
        currentQuestion++;
        displayQuestion();
        answerElement.value = "";
    } else {
        questionElement.innerHTML = "<b>Quiz terminé !</b>";
        answerElement.disabled = true;
        document.getElementById("next-button").style.display = "none";
        restartButton.style.display = "block";
        finalScoreElement.style.display = "block";
        finalScoreElement.textContent = `Votre note : ${score} / ${alphabet.length}`;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answerElement.disabled = false;
    displayQuestion();
    updateScore();
    answerElement.value = "";
    finalScoreElement.style.display = "none";
}

document.getElementById("check-button").addEventListener("click", checkAnswer);
document.getElementById("next-button").addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

displayQuestion();
updateScore();
