import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    let [understanding, setUnderstanding] = useState('');

    const validUnderstanding = understanding > 0 && understanding <= 5;

    function toSupported() {
        dispatch({ type: 'SET_PROPERTY', payload: { property: 'understanding', value: understanding } });
        history.push('/supported');
    }

    return (
        <>
            <h3>How well are you understanding the content?</h3>

            <input type="number" value={understanding} placeholder="0 - 5"
                onChange={(event) => setUnderstanding(event.target.value)} />

            <button onClick={toSupported} disabled={!validUnderstanding}>Next</button>

        </>

    )
}

export default Understanding;