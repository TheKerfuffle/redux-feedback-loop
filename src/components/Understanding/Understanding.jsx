import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    let [understanding, setUnderstanding] = useState('');

    const validUnderstanding = understanding > 0 && understanding <= 5;

    function toSupported() {
        dispatch({ type: 'SET_UNDERSTANDING', payload: {property: 'understanding', value: understanding} });
        history.push('/supported');
    }

    return (
        <>
            <form onSubmit={toSupported}>
                <input type="number" value={understanding} placeholder="0 - 5"
                onChange={(event) => setUnderstanding(event.target.value)}/>

                <button type="submit" disabled={!validUnderstanding}>Next</button>
            </form>
        </>

    )
}

export default Understanding;