# Family Guy Quiz Application

This is a simple quiz application themed around the TV show Family Guy. It presents multiple-choice questions to the user and provides feedback on their answers.

## Technologies Used
- HTML
- CSS
- JavaScript

## Project Structure
The project consists of the following files:

- `index.html`: Contains the structure and content of the quiz application.
- `styles.css`: Defines the styles and layout for the quiz application.
- `QuizApp.js`: Implements the quiz logic, including loading questions, displaying them, and checking answers.

## HTML Structure
The HTML (`index.html`) defines the basic structure of the quiz application:
- Includes a header with the title of the quiz.
- Contains a `quiz` div where questions are dynamically inserted.
- Displays a submit button (`submit`) to check answers.
- Shows results (`results`) after the user submits their answers.
- Includes a footer with a copyright notice.

## CSS Styling (`styles.css`)
- Styles the header (`h1`) to center align and provide padding.
- Sets the background image and styles for the body.
- Defines styles for `.question` and `.answers` to format question and answer blocks.
- Styles the submit button to have a bold font, red background, and hover effect.
- Sets specific styles for `#results` to display the score in green.

## JavaScript (`QuizApp.js`)
- Contains an array (`quizData`) with quiz questions, answer options, and correct answers.
- Implements `loadQuiz()` function to dynamically load questions into the `quiz` div.
- Defines `showQuestions()` to iterate over `quizData` and generate HTML for each question.
- Implements `showResults()` to check user-selected answers and display the score in `results`.

## Usage
To use the Family Guy Quiz Application:
1. Clone the repository.
2. Open `index.html` in your web browser.
3. Answer the quiz questions and click the submit button to see your score.

## Author
- **Ryan Phillips**

&copy; 2024 Ryan Phillips. All rights reserved.