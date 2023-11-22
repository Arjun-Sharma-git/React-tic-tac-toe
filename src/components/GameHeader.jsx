import React from "react";
import refreshicon from "../assets/refresh.png";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

const GameHeader = ({ player, handleRefresh, computersturn }) => {
  return (
    <div className="game-header">
      <div className="game-icons" id="game-icon">
        <img src={player === "cross" ? cross : circle} alt="icon" />
        <img src={player === "cross" ? circle : cross} alt="icon" />
      </div>
      <div className="game-icons" id="whose-turn">
        <img
          src={
            player === "circle"
              ? computersturn
                ? cross
                : circle
              : computersturn
              ? circle
              : cross
          }
          alt="icon"
        />
        <h1>TURN</h1>
      </div>
      <div className="game-icons" id="refresh-icon">
        <img onClick={handleRefresh} src={refreshicon} alt="refresh" />
      </div>
    </div>
  );
};

export default GameHeader;
