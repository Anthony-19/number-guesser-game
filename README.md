📖 Overview

The Number Guesser Game is a fun and interactive web app built with React.js.
The player tries to guess a randomly generated number between 1 and 100 within a limited number of attempts.
After each guess, feedback is provided — whether the guess is too high, too low, or correct.

🚀 Features

✅ Random Number Generation – A secret number between 1 and 100 is generated each round.
✅ Player Input – The player guesses via a simple input field and button.
✅ Feedback System – Displays hints (“too high”, “too low”, “correct”).
✅ Attempt Limit – Players have a limited number of guesses depending on the difficulty level.
✅ Win/Loss Message – Shows a clear success or failure message at the end of each round.
✅ Restart Option – Players can restart without reloading the page.
✅ Responsive Design – Works smoothly on mobile and desktop.
✅ Built with React Hooks – Uses useState and useEffect for state management.

🌟 Optional Enhancements

🟢 Difficulty Levels (Easy / Medium / Hard)
🟢 Simple CSS Animations for smoother UI
🟢 Input Validation (prevents invalid or out-of-range guesses)
🟢 Clean, modern design using CSS

🧠 How to Play

Select a difficulty level (if available).

Guess a number between 1 and 100.

Click the Guess button.

Read the feedback (“too high” / “too low”).

Continue until you win or run out of attempts.

Click Play Again to restart.

⚙️ Installation & Setup

To run this project locally:

# Clone the repository
git clone https://github.com/your-username/number-guesser.git

# Navigate into the project
cd number-guesser

# Install dependencies
npm install

# Start the app
npm start


Then open your browser and go to http://localhost:3000

🧩 Tech Stack

React.js (Hooks)

HTML5 / CSS3

JavaScript (ES6+)

Git & GitHub

🪄 Game Logic Summary

The secret number is generated using:

Math.floor(Math.random() * 100) + 1;


Each player guess is validated to ensure it’s a number between 1–100.

After each guess:

If correct → Player wins 🎉

If too high or too low → Hints are shown and attempts decrease.

The game ends after attempts reach 0 or when the number is guessed correctly.

🧱 Folder Structure
number-guesser/
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── components/
│
├── public/
│   └── index.html
│
└── README.md

🧑‍💻 Git Workflow Recommendation

To follow best practices:

# Create a new feature branch
git checkout -b feature/difficulty-levels

# Commit after completing each step
git add .
git commit -m "Add difficulty level selection"

# Push to GitHub
git push origin feature/difficulty-levels

🏆 Credits

Developed by Eze Anthony Nnaemeka
Built with ❤️ using React.js

Would you like me to now generate the next version of your React app with:

✅ Difficulty levels (Easy, Medium, Hard)

✅ Animated transitions for messages and game states?