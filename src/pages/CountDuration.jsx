import { Link } from "react-router-dom";
import "../css/countduration.css";

const COUNTDOWN_TARGET = new Date("2024-03-25T22:55:59");
console.log("countdown target:", COUNTDOWN_TARGET);

const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    console.log("total time left: ", totalTimeLeft);
};
getTimeLeft();

const CountDuration = () => {
    return (
        <div>
            <Link to="/" className="btn-back">
                Back
            </Link>
            <h1 className="header">Count Duration</h1>
            <div className="countdown-container">
                <div className="box">
                    <div className="value">
                        <span>30</span>
                    </div>
                    <span className="label">days</span>
                </div>

                <div className="box">
                    <div className="value">
                        <span>10</span>
                    </div>
                    <span className="label">hours</span>
                </div>

                <div className="box">
                    <div className="value">
                        <span>20</span>
                    </div>
                    <span className="label">minutes</span>
                </div>

                <div className="box">
                    <div className="value">
                        <span>15</span>
                    </div>
                    <span className="label">seconds</span>
                </div>
            </div>
        </div>
    );
};

export default CountDuration;
