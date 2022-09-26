import React, { useState } from "react";
import "./ButtonLoader.css";

export default function ButtonLoader(props) {
    const [loading, setLoading] = useState(false);

    const handleOnClick = () => {
        setLoading(true);
        console.log("Mostro l'animazione ");
        const timer = setTimeout(() => {
            console.log("E' passato un secondo, nascondo l'animazione ");
            setLoading(false);
        }, 2000);
    };

    return (
        <button onClick={handleOnClick}>
            <svg
                className={[
                    "rotating",
                    loading === true ? "animation" : "hide",
                ].join(" ")}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z" />
            </svg>
            clicca
        </button>
    );
}
