import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

function Supported() {

    const survey = useSelector(store => store.surveyStore);
    const history = useHistory();
    const dispatch = useDispatch();

    let [supported, setSupported] = useState('');

    useEffect(() => {
        setSupportedState();
    }, [])

    function setSupportedState() {
        if (survey.supported === undefined) {
            setSupported('');
        } else {
            setSupported(survey.supported);
        }
    }

    const validSupported = supported > 0 && supported <= 5;

    function toComments() {
        dispatch({ type: 'SET_PROPERTY', payload: { property: 'supported', value: supported } });
        history.push('/comments');
    }

    function toUnderstanding() {
        history.push('/understanding');
    }

    return (
        <>
            <h3>Do you feel supported?</h3>

            <button onClick={toUnderstanding}>Back</button>
            <input type="number" value={supported} placeholder="0 - 5"
                onChange={(event) => setSupported(event.target.value)} />

            <button onClick={toComments} disabled={!validSupported}>Next</button>

        </>

    )
}

export default Supported;