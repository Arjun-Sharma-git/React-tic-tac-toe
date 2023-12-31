import React, { useEffect, useState } from "react";
import logo from "../assets/quote.png";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const url = "https://api.adviceslip.com/advice";
  async function fetchQuotes() {
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data.slip);
  }

  useEffect(() => {
    const intervalCall = setInterval(() => {
      fetchQuotes();
    }, 10000);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);

  return (
    <div className="quote-section">
      <h1 className="quote-heading">Quote #{quote.id ? quote.id : "1"}</h1>
      <div className="quote-body">
        <p>
          {quote
            ? quote.advice
            : "Play is the true mother of invention."}
        </p>
      </div>
      <div className="quote-logo">
        <img src={logo} alt="logo " width={12} height={12} />
      </div>
    </div>
  );
};

export default Quotes;
