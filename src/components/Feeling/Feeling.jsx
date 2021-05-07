import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function Feeling() {

    const history = useHistory();

    let [feeling, setFeeling] = useState('');

    const goodFeeling = feeling >= 0 && feeling <= 5;

    function toUnderstanding() {
        history.pushState('/understanding');
    }

    return (
        <>
            <form onSubmit={toUnderstanding}>
                <input type="number" value={feeling} placeholder="0 - 5"
                onChange={(event) => setFeeling(event.target.value)}/>

                <button type="submit" disabled={!goodFeeling}>Next</button>
            </form>
        </>

    )
}

export default Feeling;