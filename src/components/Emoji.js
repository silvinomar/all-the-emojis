import React from 'react';

const Emoji = ({ id, name, code, character, group, unicode }) => {
    return (
        <span title={unicode}>{character}</span>
    );
}

export default Emoji;