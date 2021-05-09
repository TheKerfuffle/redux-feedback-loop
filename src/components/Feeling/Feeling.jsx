import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const useStyles = makeStyles({
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    },
});

function Feeling() {

    const classes = useStyles();

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
                                    How are you feeling today?
                        </Typography>

                            </Grid>
                        </Grid>

                        <Grid container justify='center'>
                            <Grid item xs={3}>

                            </Grid>
                            <Grid item xs={6}>
                                <input type="number" value={feeling} placeholder="0 - 5"
                                    onChange={(event) => setFeeling(event.target.value)} />
                            </Grid>
                            <Grid item xs={3}>

                            </Grid>

                        </Grid>

                        <Grid container justify='center' >
                            <Grid item xs={2}>

                            </Grid>
                            <Grid item xs={8}>

                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained"
                                    color="primary"
                                    onClick={toUnderstanding}
                                    disabled={!validFeeling}
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

export default Feeling;