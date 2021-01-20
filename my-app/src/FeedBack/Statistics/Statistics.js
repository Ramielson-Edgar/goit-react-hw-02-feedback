import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <section>
      <div className="stats">
        <p className="title">Goood: {good}</p>
        <p className="title">Natural: {neutral} </p>
        <p className="title">Bad: {bad}</p>
        <p className="totalAmount">Total: {total}</p>
        <p className="feedback">Positive feedback: {positivePercentage}%</p>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  Statistics: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.string.isRequired,
      neutral: PropTypes.string.isRequired,
      bad: PropTypes.string.isRequired,
    })
  ),
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
