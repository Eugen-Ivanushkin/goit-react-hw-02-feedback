import React from 'react';

interface Props {
    incGood: () => void,
    incNeutral: () => void,
    incBad: () => void,
}

const FeedbackOptions: React.FC<Props> = (props) => {
    const {incGood, incNeutral, incBad} = props;

    
    return (
        <div>
          <button onClick={incGood}>Good</button>
          <button onClick={incNeutral}>Neutral</button>
          <button onClick={incBad}>Bad</button>
        </div>
    )
};

export default FeedbackOptions;
