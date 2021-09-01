import React, { Component } from 'react';

interface Props {
    title:string
}

class Section extends Component<Props> {
    
    render() {
        const {title, children } = this.props;
        return (
        <>
            <h2>{title}</h2>
            {children}
        </>
    )
    }
};

export default Section;
