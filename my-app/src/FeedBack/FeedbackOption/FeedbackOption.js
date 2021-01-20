import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <button
            className={s.btn}
            key={index}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  FeedbackOptions: PropTypes.func,
};

export default FeedbackOptions;
