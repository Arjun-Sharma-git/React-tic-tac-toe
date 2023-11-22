import React from "react";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";
import { useNavigate } from "react-router-dom";
import { SetGameScore } from "../functions";

const PopUp = ({
  setOpen,
  setSquares,
  setComputersturn,
  refresh,
  setRefresh,
  defaultSquare,
  winner,
  setWinner,
  player,
  round,
  setRound,
  setTie,
  setUserscore,
  setPcscore,
  finalwinner,
  setFinalwinner,
}) => {
  const navigate = useNavigate();
  const handleNext = () => {
    setSquares(defaultSquare);
    setComputersturn(false);
    setRefresh(false);
    setOpen(false);
    setWinner("");
  };

  const handleAgain = () => {
    setRound(0);
    setUserscore(0);
    setPcscore(0);
    setTie(0);
    setSquares(defaultSquare);
    setComputersturn(false);
    setRefresh(false);
    setOpen(false);
    setWinner("");
    setFinalwinner("");
  };

  const handleQuit = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="popup-body">
      {finalwinner === "" ? (
        <div>
          <h2>
            {refresh
              ? ""
              : winner === "player"
              ? "YOU OWN!"
              : winner === "computer"
              ? "CPU OWN!"
              : "TIE!"}
          </h2>
          <div className="message">
            {refresh || winner === "tie" ? (
              ""
            ) : (
              <img
                src={
                  winner === "computer"
                    ? player === "cross"
                      ? circle
                      : cross
                    : player === "cross"
                    ? cross
                    : circle
                }
                alt="icon"
              />
            )}

            {winner === "tie" ? (
              <h1>Tie! please try again</h1>
            ) : (
              <h1
                style={{
                  color:
                    winner === "player"
                      ? player === "cross"
                        ? "rgb(49, 196, 190)"
                        : "rgb(247, 179, 54)"
                      : player === "cross"
                      ? "rgb(247, 179, 54)"
                      : "rgb(49, 196, 190)",
                }}
              >
                {refresh ? "Do you want to quit ?" : "TAKES THE ROUND"}
              </h1>
            )}
          </div>
        </div>
      ) : (
        <div className="final-winner">
          <h2>{finalwinner}</h2>
        </div>
      )}
      <div className="popup-buttons">
        <button onClick={handleQuit} id="quite">
          QUIT
        </button>
        {refresh || round === 5 ? (
          <button onClick={handleAgain}>
            {refresh ? "NEW GAME" : "PLAY AGAIN"}
          </button>
        ) : (
          <button onClick={handleNext}>NEXT ROUND</button>
        )}
      </div>
    </div>
  );
};

export default PopUp;
