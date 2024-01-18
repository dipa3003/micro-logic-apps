import { Link } from "react-router-dom";
import "../css/wordscramble.css";
import { useEffect, useState } from "react";

const WORDS = ["singa", "gajah", "kuda", "kucing", "zebra", "anjing", "buaya", "kelinci"];

const WordScramble = () => {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");
    const [isPlay, setIsPlay] = useState(false);
    const [correctWord, setCorrectWord] = useState("");
    const [scrambleWord, setScrambleWord] = useState("");

    useEffect(() => {
        let clearMessage;
        if (message === "Wrong Answer!") {
            clearMessage = setTimeout(() => setMessage(""), 2000);
        }
        return () => {
            if (clearMessage) {
                clearTimeout(clearMessage);
            }
        };
    }, [message]);

    const selectWord = () => {
        const randomIndex = Math.floor(Math.random() * WORDS.length);
        return WORDS[randomIndex];
    };

    const handleEnter = () => {
        if (inputValue) {
            if (correctWord.toLowerCase() === inputValue.toLowerCase()) {
                setMessage("Correct Answer!");
            } else {
                setMessage("Wrong Answer!");
            }
        } else {
            alert("You have to guest the word");
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleStartGame = () => {
        setIsPlay(true);
        const word = selectWord();
        setCorrectWord(word);
        console.log("word:", word);
        setScrambleWord(construcScrambleWord(word));
    };

    const handleNewGame = () => {
        setInputValue("");
        setMessage("");
        const word = selectWord();
        setCorrectWord(word);
        console.log("word:", word);
        setScrambleWord(construcScrambleWord(word));
    };

    const construcScrambleWord = (word) => {
        const shuffleWord = word.split("");
        //The Fisher-Yates Suffle method
        for (let i = shuffleWord.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let k = shuffleWord[i];
            shuffleWord[i] = shuffleWord[j];
            shuffleWord[j] = k;
        }
        return shuffleWord.join("");
    };
    console.log("inputValuestate:", inputValue);

    return (
        <>
            <Link to="/" className="btn-back">
                Back
            </Link>
            <h1 className="header">Word Scramble</h1>
            <div className="word-container-all">
                {!!message && <div className="message">{message}</div>}

                {isPlay ? (
                    <>
                        <div className="word">
                            {correctWord.split("").map((item, i) => (
                                <span key={i}>{inputValue[i]}</span>
                            ))}
                        </div>
                        <p className="scramble-word">{scrambleWord}</p>
                        <div className="input-word">
                            <input type="text" placeholder="Guest the word" onChange={handleInputChange} value={inputValue} />
                            <button className="btn-enter-word" onClick={handleEnter}>
                                Enter
                            </button>
                        </div>
                        <button className="btn-start-game" onClick={handleNewGame}>
                            NEW GAME
                        </button>
                    </>
                ) : (
                    <button className="btn-start-game" onClick={handleStartGame}>
                        START GAME
                    </button>
                )}
            </div>
        </>
    );
};

export default WordScramble;
