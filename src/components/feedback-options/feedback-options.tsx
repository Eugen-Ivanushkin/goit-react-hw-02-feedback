import React, { MouseEventHandler } from 'react';

interface Props {
    options:string[],
    onLeaveFeedback: (e:React.MouseEvent) => void,
}

const FeedbackOptions: React.FC<Props> = (props) => {
    const { options, onLeaveFeedback } = props;
    
    return (
        <div>
            {options.map(option => <button onClick={onLeaveFeedback}>{option}</button>)}
        </div>
    )
};

export default FeedbackOptions;
