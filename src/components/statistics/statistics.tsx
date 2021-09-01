import React from 'react';

interface Props {
  good: number,
  neutral: number,
  bad: number,
  total: number,
  positivePercentage: () => number
}

const Statistics: React.FC<Props> = (props) => {
    const { good, neutral, bad, total, positivePercentage } = props;
        const positiveFidback = positivePercentage();
    
    return (
        <div>
          <ul>
            <li>Good: { good }</li>
            <li>Neutral: { neutral }</li>
            <li>Bad: {bad}</li>
            <li>Total: { total }</li>
            <li>Positive feedback: {positiveFidback} %</li>
          </ul>
        </div>
    )
};

export default Statistics;
