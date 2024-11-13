
const MyquizData = [
    {
      question: 'What is a common sympton of depresssion?',
      options: ['Sadness', 'Energy', 'Excitement', 'Appetite'],
      answer: 'Sadness',
    },
    {
      question: 'How does exercise affect mental health?',
      options: ['Reduce Stress', 'Increase Stress', 'No Effect', 'Worsens Mood'],
      answer: 'Reduce Stress',
    },
    {
      question: 'Which activity can boost mental well-being?',
      options: ['Watching TV', 'Sleeping', 'Socialising', 'Eating'],
      answer: 'Socialising',
    },
    {
      question: 'What helps to manage anxiety?',
      options: ['Caffeine', 'Meditation', 'Fast Food', 'Loud Music'],
      answer: 'Meditation',
    },
    {
      question: 'Which is a sign of good mental health?',
      options: [
        'Constant Worry',
        'Happiness',
        'Frequent Sadness',
        'Isolation',
      ],
      answer: 'Happiness',
    },
    {
      question: 'What impacts mental health negatively?',
      options: ['Regular routine', 'Positive thinking', 'Social Widthdrawl', 'Exercise'],
      answer: 'Social Widthdrawl',
    },
    {
      question: 'How can sleep affect your mood?',
      options: [
        'Improves it',
        'No Impact',
        'Colours it Blue',
        'Makes it spicy',
      ],
      answer: 'Improves it',
    },
    {
      question: 'Which diet is linked to better brain health?',
      options: [
        'Fast food',
        'High Sugar',
        'Balanced Diet',
        'High Fat',
      ],
      answer: 'Balanced Diet',
    },
    {
      question: 'Which behavior is a stress reliever?',
      options: ['Yelling', 'Sitting', 'Reading', 'Arguing'],
      answer: 'Reading',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = MyquizData[currentQuestion];
   // displayQuestionNo(currentQuestion.toString());
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
    
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === MyquizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: MyquizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: MyquizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < MyquizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';

    resultContainer.innerHTML = `<hr>You scored ${score} out of ${MyquizData.length}!`;
    console.log(score);
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
    
   
    let incorrectAnswersHtml = '<br>';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <hr>
           <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
          <hr>
        </p>
      `;
    }
  
    resultContainer.innerHTML = `<br>
      <p>You scored ${score} out of ${MyquizData.length}!</p>
      <br>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
      <br>
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();