document.addEventListener("DOMContentLoaded", function () {
    const scoreDisplay = document.getElementById("score");
    const questionText = document.getElementById("questionText");
    const answerItems = document.querySelectorAll(".answer");

    let score = 0; // Number of correct answers
    let currentQuestionIndex = 0;

    // Array of questions
    const questions = [
        {
            questionText: "What does Forex stand for?",
            options: ["Foreign Exchange", "Foreign Export", "Foreign Exit"],
            correctAnswer: "Foreign Exchange"
        },
        {
            questionText: "In Forex trading, what does 'pip' stand for?",
            options: ["Percentage in Point", "Percentage in Price", "Position in Point"],
            correctAnswer: "Percentage in Point"
        },
        {
            questionText: "Which currency pair is the most commonly traded in Forex?",
            options: ["USD/JPY", "EUR/USD", "AUD/NZD"],
            correctAnswer: "EUR/USD"
        }
    ];

    const totalQuestions = questions.length; 

    
    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.innerText = currentQuestion.questionText;
        
        
        answerItems.forEach((item, index) => {
            item.innerText = currentQuestion.options[index];
            item.style.backgroundColor = ""; 
        });

        
        scoreDisplay.innerText = `Score: ${score} out of ${totalQuestions}`;
    }

    
    function checkAnswer(selectedAnswer) {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        
        
        if (selectedAnswer === correctAnswer) {
            score += 1;
            alert("Correct!");
        } else {
            alert(`Incorrect! The correct answer was ${correctAnswer}.`);
        }
        
        
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            loadQuestion();
        } else {
            alert(`Well done! Your Final Score: ${score} out of ${totalQuestions}`);
        }
    }

    
    answerItems.forEach((item) => {
        item.addEventListener("click", function () {
            checkAnswer(item.innerText);
        });
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = "#e0e0e0"; 
        });
        item.addEventListener("mouseout", function () {
            item.style.backgroundColor = ""; 
        });
    });

    
    loadQuestion();
});
