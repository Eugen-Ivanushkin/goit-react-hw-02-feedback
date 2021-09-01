import React from 'react';

interface Props{
    message:string
}

const Notification:React.FC<Props> = ({ message }) => {
    return (
        <>
            <h2>{ message }</h2>
        </>
    );
};

export default Notification;
