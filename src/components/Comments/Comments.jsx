import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const useStyles = makeStyles({
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    },
});

function Comments() {

    const classes = useStyles();

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
            <Grid className={classes.feedback} container justify='center'>
                <Grid item xs={10} >
                    <Paper>
                        <Grid item xs={12}>
                            <Grid container justify='center'>
                                <Typography
                                    variant="h4"
                                    color="primary"
                                    className={classes.title}
                                >
                                    Additional Comments
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify='center'>
                            <Grid item xs={3}>

                            </Grid>
                            <Grid item xs={6}>
                                <input type="text" value={comments} placeholder="OPTIONAL: Comments go here."
                                    onChange={(event) => setComments(event.target.value)} />
                            </Grid>
                            <Grid item xs={3}>

                            </Grid>
                        </Grid>
                        <Grid container justify='center' >
                            <Grid item xs={2}>
                                <Button variant="contained"
                                    onClick={toSupported}
                                    startIcon={<KeyboardArrowLeftIcon />}>
                                    Back
                                </Button>
                            </Grid>
                            <Grid item xs={8}>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained"
                                    color="primary"
                                    onClick={toReview}
                                    disabled={!validComment}
                                    endIcon={<KeyboardArrowRightIcon />}>
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

        </>

    )
}

export default Comments;