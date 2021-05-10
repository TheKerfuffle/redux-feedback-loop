import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    },
});

function Review() {

    const classes = useStyles();

    const survey = useSelector(store => store.surveyStore);
    const dispatch = useDispatch();
    const history = useHistory();

    // Takes us back to the start of the survey
    //  and clears the survey reducer
    function redoSurvey() {
        history.push('/');
        dispatch({ type: 'RESET_SURVEY' });
    }

    // Submits feedback to the database through an axios post route
    function handleSubmit() {
        history.push('/complete');
        addSurvey();
        dispatch({ type: 'RESET_SURVEY' });
    }

    // Handles the axios post submit of the feedback
    function addSurvey() {
        axios({
            method: 'POST',
            url: '/survey',
            data: survey
        })
            .then(response => {
                console.log('added a survey', response);
            })
            .catch(error => {
                console.log('Unable to add survey', error);
                alert('Unable to add survey');
            })
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
                                    Review Submission
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify='center'>
                                <Typography
                                    variant="h5"
                                    color="primary"
                                >
                                    Feeling: {survey.feeling}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify='center'>
                                <Typography
                                    variant="h5"
                                    color="primary"
                                >
                                    Understanding: {survey.understanding}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify='center'>
                                <Typography
                                    variant="h5"
                                    color="primary"
                                >
                                    Supported: {survey.supported}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify='center'>
                                <Typography
                                    variant="h5"
                                    color="primary"
                                >
                                    Comments: {survey.comments}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container justify='center' >
                            <Grid item xs={2}>
                                <Button variant="contained"
                                    onClick={redoSurvey}
                                    startIcon={<ReplayIcon />}>
                                    Redo Survey
                                </Button>
                            </Grid>
                            <Grid item xs={8}>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained"
                                    color="primary"
                                    onClick={handleSubmit}
                                    endIcon={<SendIcon />}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>

    )
}

export default Review;