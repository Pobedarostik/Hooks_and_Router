import React from 'react';
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          className={option}
          key={shortid.generate()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
