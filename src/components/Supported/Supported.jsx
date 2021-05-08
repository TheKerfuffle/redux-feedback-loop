import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

function Supported() {

    const history = useHistory();
    const dispatch = useDispatch();

    let [supported, setSupported] = useState('');

    const validSupported = supported > 0 && supported <= 5;

    function toComments() {
        dispatch({ type: 'SET_PROPERTY', payload: { property: 'supported', value: supported } });
        history.push('/comments');
    }

    return (
        <>
            <h3>Do you feel supported?</h3>

            <input type="number" value={supported} placeholder="0 - 5"
                onChange={(event) => setSupported(event.target.value)} />

            <button onClick={toComments} disabled={!validSupported}>Next</button>

        </>

    )
}

export default Supported;