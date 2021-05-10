import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

// Adds styling to the 'title' of this page
const useStyles = makeStyles({
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    },
});

// IMPORTANT! I will comment up this component, 
// All of the other survey components will 
// have similar but differently named components.
// reference this page for questions about those
function Feeling() {

    // allows us to use the MUI styling on a component
    const classes = useStyles();

    // initialize functional components of this code
    // Access our reducer, dispatch to the reducer 
    // and navigate the pages of this app
    const survey = useSelector(store => store.surveyStore);
    const history = useHistory();
    const dispatch = useDispatch();

    // Local storage for the feeling variable, editted through the input field
    let [feeling, setFeeling] = useState('');

    // On page load we access this function
    useEffect(() => {
        setFeelingState();
    }, [])

    // This function, called on page load
    // Assigns the current value of the 
    // survey reducer to the local variable.
    function setFeelingState() {
        if (survey.feeling === undefined) {
            setFeeling('');
        } else {
            setFeeling(survey.feeling);
        }
    }

    // Determines whether the button to move 
    // on to the next part of the survey is clickable
    const validFeeling = feeling > 0 && feeling <= 5;

    // Dispatches a valid input to the reducer and 
    // navigated us to the next page
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