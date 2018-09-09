import React from 'react';

const Option = (props) => (
    <li>
        {props.text}
        <button onClick={() => props.remove(props.id)}>
            Delete
        </button>
    </li>
);

export default Option;