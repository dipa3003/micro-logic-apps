import { Link } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <div className="header">
                <p>Micro-logic Challange</p>
            </div>
            <div className="navigation-btn">
                <Link to="/count-duration">Count Duration</Link>
                <Link to="/currency-convert">Currency Convert</Link>
                <Link to="/mobile-legend">Mobile Legend</Link>
                <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
                <Link to="/matching-card">Matching Card</Link>
                <Link to="/salary-calculation">Salary Calculation</Link>
                <Link to="/word-scramble">Word Scramble</Link>
            </div>
        </>
    );
}

export default App;
