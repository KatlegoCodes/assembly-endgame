import React from "react";
import { languages } from "../languages.js";
import { useState } from "react";

const Body = () => {
  const [currentWord, setCurrentWord] = useState("JAVASCRIPT");

  return (
    <div>
      <section className="language-cards">
        {languages.map((language) => {
          return (
            <div
              className="language-card"
              key={language.name}
              style={{
                backgroundColor: language.backgroundColor,
                color: language.color,
              }}
            >
              {language.name}
            </div>
          );
        })}
      </section>
      <section className="main">
        {currentWord.split("").map((letter, index) => {
          return <span key={index}>{letter}</span>;
        })}
      </section>
    </div>
  );
};

export default Body;
