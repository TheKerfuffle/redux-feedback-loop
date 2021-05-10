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

function Supported() {

    const classes = useStyles();

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
                                    Do you feel supported?
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container justify='center'>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={6}>
                                <input type="number" value={supported} placeholder="0 - 5"
                                    onChange={(event) => setSupported(event.target.value)} />
                            </Grid>
                            <Grid item xs={3}>
                            </Grid>
                        </Grid>
                        
                        <Grid container justify='center' >
                            <Grid item xs={2}>
                                <Button variant="contained"
                                    onClick={toUnderstanding}
                                    startIcon={<KeyboardArrowLeftIcon />}>
                                    Back
                                </Button>
                            </Grid>
                            <Grid item xs={8}>

                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained"
                                    color="primary"
                                    onClick={toComments}
                                    disabled={!validSupported}
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

export default Supported;