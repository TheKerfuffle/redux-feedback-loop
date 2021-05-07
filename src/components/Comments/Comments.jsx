import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    let [comments, setComments] = useState('');

    const validComment = comments.length >= 0;

    function toReview() {
        dispatch({ type: 'SET_COMMENTS', payload: {property: 'comments', value: comments} });
        history.push('/review');
    }

    return (
        <>
            <form onSubmit={toReview}>
                <input type="text" value={comments} placeholder="OPTIONAL: Comments go here."
                onChange={(event) => setComments(event.target.value)}/>

                <button type="submit" disabled={!validComment}>Next</button>
            </form>
        </>

    )
}

export default Comments;