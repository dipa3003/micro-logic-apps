import { Link } from "react-router-dom";
import "../css/countduration.css";
import { useEffect, useState } from "react";

const getTimeLeft = (time) => {
    const COUNTDOWN_TARGET = new Date(`${time}`);
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();

    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);

    return { days, hours, minutes, seconds };
};

const CountDuration = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [timeTarget, setTimeTarget] = useState(null);
    const [isCount, setIsCount] = useState(false);

    useEffect(() => {
        if (isCount) {
            const timer = setInterval(() => {
                setTimeLeft(getTimeLeft(timeTarget));
            }, 1000);

            return () => {
                clearInterval(timer);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            };
        }
    }, [isCount, timeTarget]);

    function handleDate(value) {
        setTimeTarget(value);
    }
    function handleStart() {
        if (!timeTarget) return alert("Input date cannot be empty!");
        setIsCount(true);
    }

    function handleReset() {
        setIsCount(false);
    }

    return (
        <>
            <Link to="/" className="btn-back">
                Back
            </Link>
            <h1 className="header">Count Duration</h1>
            <div className="countdown-content-all">
                <div className="countdown-container">
                    {Object.entries(timeLeft).map((item, i) => (
                        <div className="box" key={i}>
                            <div className="value">
                                <span>{item[1]}</span>
                            </div>
                            <span className="label">{item[0]}</span>
                        </div>
                    ))}
                </div>
                <div className="input-date">
                    <input onChange={(e) => handleDate(e.target.value)} type="datetime-local" name="dateTarget" id="dateTarget" />
                    {isCount ? (
                        <button className="btn-start-count-2" disabled>
                            Counting...
                        </button>
                    ) : (
                        <button onClick={handleStart} className="btn-start-count">
                            Start
                        </button>
                    )}

                    <button onClick={handleReset} className="btn-reset-count">
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};

export default CountDuration;
