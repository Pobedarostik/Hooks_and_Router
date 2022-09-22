import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className="good">Good: {good}</p>
      <p className="neutral">Neutral: {neutral}</p>
      <p className="bad">Bad: {bad}</p>
      <p className="item">Total: {total}</p>
      <p className="item">Positive feedback: {positivePercentage} %</p>
    </div>
  );
};

export default Statistics;
