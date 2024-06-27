import React, { useState, useEffect } from "react";
import { FaTwitter, FaTumblr, FaQuoteLeft, FaHeart } from "react-icons/fa";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    let url = "<Add URL>";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let getRandomQuote = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[getRandomQuote];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  const handleClick = () => {
    getQuote();
  };

  return (
    <>
      <div id="quote-box">
        <div className="quote-text" id="text">
          <p>
            <FaQuoteLeft className="quote" />
            &nbsp;{quote}
          </p>
        </div>
        <div className="quote-author" id="author">
          <p>- {author}</p>
        </div>
        <div id="buttons">
          <div className="social-media">
            <a
              href="https://twitter.com/intent/tweet?"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
            >
              <span>
                <FaTwitter className="icons" />
              </span>
            </a>
            <a
              href="https://www.tumblr.com/"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FaTumblr className="icons" />
              </span>
            </a>
          </div>
          <button onClick={handleClick} id="new-quote">
            New Quote
          </button>
        </div>
      </div>
      <div className="footer">
        Created By{" "}
        <a href="https://www.linkedin.com/in/mohit-maurya-76a282204/">
          Mohit Maurya <FaHeart />
        </a>
      </div>
    </>
  );
};

export default Quotes;
