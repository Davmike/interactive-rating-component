import React from "react";
import "./Result.css";
import image from "../../assets/illustration-thank-you.svg";

export default function Result(props) {
  return (
    <div className="main">
      <img className="thank-you" src={image} alt="thank you image" />
      <div className="selected-div">
        <p className="selected-number">You selected {props.number} out of 5</p>
      </div>
      <h1 className="main-text">Thank you!</h1>
      <p className="result-paragraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
