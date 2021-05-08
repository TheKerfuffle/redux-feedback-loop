import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

function Understanding() {

    const survey = useSelector(store => store.surveyStore);
    const history = useHistory();
    const dispatch = useDispatch();

    let [understanding, setUnderstanding] = useState('');

    useEffect(() => {
        setUnderstandingState();
    }, [])

    function setUnderstandingState() {
        if (survey.understanding === undefined) {
            setUnderstanding('');
        } else {
            setUnderstanding(survey.understanding);
        }
    }

    const validUnderstanding = understanding > 0 && understanding <= 5;

    function toSupported() {
        dispatch({ type: 'SET_PROPERTY', payload: { property: 'understanding', value: understanding } });
        history.push('/supported');
    }

    function toFeeling() {
        history.push('/feeling');
    }

    return (
        <>
            <h3>How well are you understanding the content?</h3>

            <button onClick={toFeeling}>Back</button>
            <input type="number" value={understanding} placeholder="0 - 5"
                onChange={(event) => setUnderstanding(event.target.value)} />

            <button onClick={toSupported} disabled={!validUnderstanding}>Next</button>

        </>

    )
}

export default Understanding;