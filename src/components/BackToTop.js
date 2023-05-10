import React from 'react';

const BackToTop = ({ scroll }) => {
    const className = `backToTop${scroll ? ' visible' : ''}`;
    return (
        <a href="#" className={'backToTop ' + className}>
            🔝
        </a>
    );
}

export default BackToTop;