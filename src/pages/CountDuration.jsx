import { Link } from "react-router-dom";
import "../css/countduration.css";
import { useEffect, useState } from "react";

const COUNTDOWN_TARGET = new Date("2024-01-28T22:55:59");

const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    // console.log("total time left: ", totalTimeLeft);

    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);

    return { days, hours, minutes, seconds };
};

const CountDuration = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <Link to="/" className="btn-back">
                Back
            </Link>
            <h1 className="header">Count Duration</h1>
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
        </div>
    );
};

export default CountDuration;
