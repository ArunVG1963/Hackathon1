// script.js
const questions = [
    {
      question: "What does IPO stand for?",
      answers: [
        { text: "Initial Public Offering", correct: true },
        { text: "Internal Profit Optimization", correct: false },
        { text: "International Pricing Offer", correct: false }
      ]
    },
    {
      question: "Which stock index tracks 500 large U.S. companies?",
      answers: [
        { text: "Dow Jones", correct: false },
        { text: "NASDAQ", correct: false },
        { text: "S&P 500", correct: true }
      ]
    },
    {
      question: "Which of these is a major stock exchange in the US?",
      answers: [
        { text: "Shanghai Stock Exchange", correct: false },
        { text: "New York Stock Exchange", correct: true },
        { text: "Tokyo Stock Exchange", correct: false }
      ]
    },
    {
      question: "What does it mean to have a 'bull market'?",
      answers: [
        { text: "Market is declining", correct: false },
        { text: "Market is flat", correct: false },
        { text: "Market is rising", correct: true }
      ]
    },
    {
      question: "What is a dividend?",
      answers: [
        { text: "A stock option", correct: false },
        { text: "Share of profits paid to shareholders", correct: true },
        { text: "Company debt", correct: false }
      ]
    },
    {
      question: "What is a stock ticker?",
      answers: [
        { text: "Company stock symbol", correct: true },
        { text: "Stock price prediction", correct: false },
        { text: "Index performance measure", correct: false }
      ]
    },
    {
      question: "Which company was the first to reach a $1 trillion market cap?",
      answers: [
        { text: "Amazon", correct: false },
        { text: "Microsoft", correct: false },
        { text: "Apple", correct: true }
      ]
    },
    {
      question: "What is diversification?",
      answers: [
        { text: "Focusing on a single stock", correct: false },
        { text: "Investing in multiple assets", correct: true },
        { text: "Avoiding high-risk stocks", correct: false }
      ]
    },
    {
      question: "What is short selling?",
      answers: [
        { text: "Buying stocks with a loan", correct: false },
        { text: "Selling borrowed stocks", correct: true },
        { text: "Selling stocks at a loss", correct: false }
      ]
    },
    {
      question: "What does ETF stand for?",
      answers: [
        { text: "Exchange Traded Fund", correct: true },
        { text: "Earnings Trading Format", correct: false },
        { text: "Equity Transaction Fund", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const scoreElement = document.getElementById("score");
  const progressBar = document.getElementById("progress-bar");
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = score;
    showQuestion(questions[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = "";
    question.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    });
    updateProgressBar();
  }
  
  function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progress + "%";
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
      score++;
      scoreElement.innerText = score;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
      button.classList.add(button.dataset.correct ? "correct" : "wrong");
    });
    setTimeout(nextQuestion, 10000);
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      alert(`Quiz finished! Your score: ${score}/${questions.length}`);
      startQuiz();
    }
  }
  
  startQuiz();
  