import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Hero({ heroText, title, imageURL, id }) {
  const style = {
    background: `url("${imageURL}") no-repeat center center #ffffff`,
    backgroundSize: 'cover',
  };

  const string = 'This is the Hero\nsegment';

  return (
    <div className="col-12" key={id}>
      <Jumbotron fluid style={style}>
        {title && (
          <h1>
            <pre>{`${string}`}</pre>
          </h1>
        )}
        {heroText && (
          <p>
            You see the right business opportunities and go after them. You also recognize the value
            that good search engine optimization has to drive a recurring stream of leads
            month-over-month. You just need help developing website pages and learning content that
            satisfy the true search intent of your audience to uncover the growth you know is
            possible. That’s where we can help.
          </p>
        )}
      </Jumbotron>
    </div>
  );
}

export default Hero;
