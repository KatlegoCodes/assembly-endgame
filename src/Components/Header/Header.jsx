import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <h1>Assembly:Endgame</h1>
        <p>
          Guess the word in under 8 minutes to keep the programming world safe
          from assembly
        </p>
      </header>
      <section className="game-status">
        <h2>You win</h2>
        <p>Well done!🎉</p>
      </section>
    </div>
  );
};

export default Header;
