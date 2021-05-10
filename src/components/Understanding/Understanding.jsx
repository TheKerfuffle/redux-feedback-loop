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

function Understanding() {

    const classes = useStyles();

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
                                    How well are you understanding the content?
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container justify='center'>
                            <Grid item xs={3}>

                            </Grid>
                            <Grid item xs={6}>
                                <input type="number" value={understanding} placeholder="0 - 5"
                                    onChange={(event) => setUnderstanding(event.target.value)} />
                            </Grid>
                            <Grid item xs={3}>

                            </Grid>
                        </Grid>
                        
                        <Grid container justify='center' >
                            <Grid item xs={2}>
                            <Button variant="contained"
                                    onClick={toFeeling}
                                    startIcon={<KeyboardArrowLeftIcon />}>
                                    Back
                                </Button>
                            </Grid>
                            <Grid item xs={8}>

                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained"
                                    color="primary"
                                    onClick={toSupported}
                                    disabled={!validUnderstanding}
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

export default Understanding;