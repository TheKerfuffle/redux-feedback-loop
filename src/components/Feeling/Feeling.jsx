import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

function Feeling() {

    const survey = useSelector(store => store.surveyStore);
    const history = useHistory();
    const dispatch = useDispatch();

    let [feeling, setFeeling] = useState('');

    useEffect(() => {
        setFeelingState();
    }, [])

    function setFeelingState() {
        if (survey.feeling === undefined) {
            setFeeling('');
        } else {
            setFeeling(survey.feeling);
        }
    }

    const validFeeling = feeling > 0 && feeling <= 5;

    function toUnderstanding() {
        dispatch({ type: 'SET_PROPERTY', payload: { property: 'feeling', value: feeling } });
        history.push('/understanding');
    }

    return (
        <>
            <h3>How are you feeling today?</h3>
            
            <input type="number" value={feeling} placeholder="0 - 5"
                onChange={(event) => setFeeling(event.target.value)} />

            <button onClick={toUnderstanding} disabled={!validFeeling}>Next</button>

        </>

    )
}

export default Feeling;