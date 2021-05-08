import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

function Comments() {

    const survey = useSelector(store => store.surveyStore);
    const history = useHistory();
    const dispatch = useDispatch();

    let [comments, setComments] = useState('');

    useEffect(() => {
        setCommentsState();
    }, [])

    function setCommentsState() {
        if (survey.comments === undefined) {
            setComments('');
        } else {
            setComments(survey.comments);
        }
    }

    const validComment = comments.length >= 0;

    function toReview() {
        dispatch({ type: 'SET_PROPERTY', payload: { property: 'comments', value: comments } });
        history.push('/review');
    }

    function toSupported() {
        history.push('/supported');
    }

    return (
        <>
            <button onClick={toSupported}>Back</button>
            <input type="text" value={comments} placeholder="OPTIONAL: Comments go here."
                onChange={(event) => setComments(event.target.value)} />

            <button onClick={toReview} disabled={!validComment}>Next</button>

        </>

    )
}

export default Comments;