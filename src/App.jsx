import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [secretNumber, setSecretNumber] = useState(0);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(5);
  const [guessedNumbers, setGuessedNumbers] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [error, setError] = useState(false); 

  // Generate random number when game starts
  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setSecretNumber(random);
  };

 const handleGuess = () => {
  //Check if input is empty
  if (guess.trim() === "") {
    setMessage("⚠️ Please enter a number!");
    setError(true);
    return;
  }

  // Convert to number
  const num = Number(guess);

  //Check if it is a valid number
  if (isNaN(num)) {
    setMessage("Please enter a valid number!");
    setError(true);
    return;
  }

  //Check range
  if (num < 1 || num > 100) {
    setMessage("Please enter a number between 1 and 100!");
    setError(true);
    return;
  }

  // Input is valid
  setError(false);

  if (gameOver) return;

  setGuessedNumbers([...guessedNumbers, num]);

  if (num === secretNumber) {
    setMessage("🎉 You guessed correctly!");
    setWin(true);
    setGameOver(true);
  } else if (num > secretNumber) {
    setMessage("Your guess is too high!");
    setAttempts((prev) => prev - 1);
  } else {
    setMessage(" Your guess is too low!");
    setAttempts((prev) => prev - 1);
  }

  setGuess("");
};

  // When attempts reach 0
  useEffect(() => {
    if (attempts === 0 && !win) {
      setGameOver(true);
      setMessage(`😢 You lost! The number was ${secretNumber}`);
      setError(false);
    }
  }, [attempts, win, secretNumber]);

  // Restart game
  const restartGame = () => {
    setGuess("");
    setGuessedNumbers([]);
    setAttempts(5);
    setMessage("");
    setError(false);
    setGameOver(false);
    setWin(false);
    generateRandomNumber();
  };

  return (
    <div className="container">
      <div className="container-flex">
        {!gameOver ? (
          <>
            <h3>
              I'm thinking of a number between 1 and 100 <br />
              Can you make a guess?
            </h3>

            <div className="input--numbers">
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter your guess"
                className={`input-guess ${error ? "input-error" : ""}`} error
              />
              <button className="check" onClick={handleGuess}>
                Guess
              </button>
            </div>

            {message && (
              <p className={`guessHighLow ${error ? "error-text" : ""}`}>
                {message}
              </p>
            )}

            <p className="no-of-chances">Attempts left: {attempts}</p>
            <p className="guessed-number">
              Guessed numbers:{" "}
              {guessedNumbers.length > 0 ? guessedNumbers.join(", ") : "---"}
            </p>
          </>
        ) : (
          <div className="lost">
            <h3 className="you--lost">
              {win ? "🎉 You won the game!" : "😢 You lost the game!"}
            </h3>
            <button className="play--again" onClick={restartGame}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
