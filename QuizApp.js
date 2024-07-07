const quizData = [
    {
        question: "What street do the Griffins live on?",
        answers: {
            a: "Spooner",
            b: "Cleveland",
            c: "Sesame"
        },
        correctAnswer: "a"
    },
    {
        question: "Who has a secret relationship with Mayor West?",
        answers: {
            a: "Lois",
            b: "Quagmire",
            c: "Meg"
        },
        correctAnswer: "c"
    },
    {
        question: "Who lives across the street from the Griffins?",
        answers: {
            a: "Mort",
            b: "Joe",
            c: "Cleveland"
        },
        correctAnswer: "c"
    },
    {
        question: "What kind of pet does Quagmire have?",
        answers: {
            a: "Gerbil",
            b: "Cat",
            c: "Giraffe"
        },
        correctAnswer: "b"
    },
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    function showQuestions() {
        let output = [];
        quizData.forEach((currentQuestion, questionNumber) => {
            let answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter}: ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        let score = 0;
        quizData.forEach((currentQuestion, questionNumber) => {
            const selectedOption = document.querySelector(`input[name=question${questionNumber}]:checked`);
            if (selectedOption && selectedOption.value === currentQuestion.correctAnswer) {
                score++;
            }
        });
        resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
    }

    showQuestions();

    submitButton.addEventListener('click', showResults);
}

loadQuiz();
