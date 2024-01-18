import { Link } from "react-router-dom";
import "../css/wordscramble.css";

const WordScramble = () => {
    const handleEnter = () => {
        console.log("clicked");
    };

    return (
        <>
            <Link to="/" className="btn-back">
                Back
            </Link>
            <h1 className="header">Word Scramble</h1>
            <div className="word-container-all">
                <div className="message">wrong answer</div>
                <div className="word">
                    <span>T</span>
                    <span>E</span>
                    <span>S</span>
                    <span>T</span>
                </div>
                <div className="input-word">
                    <input type="text" placeholder="Guest the word" />
                    <button className="btn-enter-word" onClick={handleEnter}>
                        Enter
                    </button>
                </div>
                <button className="btn-start-game">Start Game</button>
            </div>
        </>
    );
};

export default WordScramble;
