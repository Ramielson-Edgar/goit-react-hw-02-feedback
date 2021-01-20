import React, { Component } from "react";
import s from "./FeedBack.module.css";
import FeedbackOptions from "./FeedbackOption/FeedbackOption";
import Section from "./Section-title/";
import Notification from "./Notification";
import Statistics from "./Statistics";

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  OnIncrement = (options) => {
    this.setState((prevState) => ({
      [options]: prevState[options] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalAmount = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );
    return totalAmount;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return percentage >= 0 ? percentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const arr = Object.keys(this.state);

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.wrapper}>
        <Section title="Please live feedback">
          <FeedbackOptions options={arr} onLeaveFeedback={this.OnIncrement} />

          <h2 className="heading">Statistics</h2>

          {positivePercentage > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given">
              No feedback given
            </Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default FeedBack;
