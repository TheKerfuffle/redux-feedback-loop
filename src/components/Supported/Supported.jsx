import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

function Supported() {

    const history = useHistory();
    const dispatch = useDispatch();

    let [supported, setSupported] = useState('');

    const validSupported = supported > 0 && supported <= 5;

    function toComments() {
        dispatch({ type: 'SET_SUPPORTED', payload: {property: 'supported', value: supported} });
        history.push('/comments');
    }

    return (
        <>
            <form onSubmit={toComments}>
                <input type="number" value={supported} placeholder="0 - 5"
                onChange={(event) => setSupported(event.target.value)}/>

                <button type="submit" disabled={!validSupported}>Next</button>
            </form>
        </>

    )
}

export default Supported;