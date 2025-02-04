const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1,
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"],
        correct: 0,
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3,
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correct: 1,
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correct: 2,
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correct: 1,
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Ozone", "Opium"],
        correct: 0,
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const questionNumberElement = document.getElementById("question-number");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(button, index);
        optionsElement.appendChild(button);
    });

    nextButton.style.display = "none"; 
}

function selectAnswer(button, index) {
    const currentQuestion = quizData[currentQuestionIndex];
    
    
    Array.from(optionsElement.children).forEach(button => {
        button.disabled = true;
    });

    
    if (index === currentQuestion.correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }

   
    nextButton.style.display = "inline-block";
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    resultElement.classList.remove("hidden");
    scoreElement.textContent = score;
    document.getElementById("quiz").classList.add("hidden");
}

restartButton.onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
    nextButton.style.display = "none";
};

loadQuestion();
