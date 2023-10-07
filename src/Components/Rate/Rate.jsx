import React, { useState } from "react";
import "./Rate.css";
import img from "../../assets/icon-star.svg";

export default function Rate(props) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="main">
      <div className="img-circle">
        <img className="star-img" src={img} alt="star image" />
      </div>
      <div className="text">
        <h1 className="main-text">How did we do?</h1>
        <p className="main-paragraph">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="star-div">
        {stars.map((item) => {
          return (
            <button
              key={item}
              className="star-btn"
              style={
                props.number === item
                  ? { backgroundColor: "#7C8798", color: "white" }
                  : {}
              }
              onClick={() => props.setNumber(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        className="submit-btn"
        onClick={() => {
          if (props.number) props.setSubmit(true);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
