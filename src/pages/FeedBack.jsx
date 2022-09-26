import { useState } from 'react';
import Section from '../components/feedBack/Section';
import FeedbackOptions from '../components/feedBack/FeedbackOptions';
import Notification from '../components/feedBack/Notification';
import Statistics from '../components/feedBack/Statistics';

import React from 'react';

function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const name = e.target.name;
    switch (name) {
      case 'Good':
        setGood((prev) => prev + 1);
        break;
      case 'Neutral':
        setNeutral((prev) => prev + 1);
        break;
      case 'Bad':
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  const options = ['Good', 'Neutral', 'Bad'];
  const total = countTotalFeedback();

  return (
    <>
      <div className="feedBack">
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    </>
  );
}

export default FeedBack;
