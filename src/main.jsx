import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CountDuration from "./pages/CountDuration.jsx";
import CurrencyConvert from "./pages/CurrencyConvert.jsx";
import MobileLegend from "./pages/MobileLegend.jsx";
import TicTacToe from "./pages/TicTacToe.jsx";
import MatchingCard from "./pages/MatchingCard.jsx";
import SalaryCalculation from "./pages/SalaryCalculation.jsx";
import WordScramble from "./pages/WordScramble.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/count-duration",
        element: <CountDuration />,
    },
    {
        path: "/currency-convert",
        element: <CurrencyConvert />,
    },
    {
        path: "/mobile-legend",
        element: <MobileLegend />,
    },
    {
        path: "/tic-tac-toe",
        element: <TicTacToe />,
    },
    {
        path: "/matching-card",
        element: <MatchingCard />,
    },
    {
        path: "/salary-calculation",
        element: <SalaryCalculation />,
    },
    {
        path: "/word-scramble",
        element: <WordScramble />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
