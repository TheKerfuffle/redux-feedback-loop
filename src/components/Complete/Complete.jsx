import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';

const useStyles = makeStyles({
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    },
});

function Complete() {

    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();

    function redoSurvey() {
        history.push('/');
        dispatch({ type: 'RESET_SURVEY' });
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
                                    THANK YOU FOR SUBMITTING A SURVEY
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify='center'>
                                <Typography
                                    variant="h5"
                                    color="primary"
                                >
                                    Always remember that Mitochondria is the powerhouse of the cell
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify='center'>
                                <Button variant="contained"
                                    onClick={redoSurvey}
                                    startIcon={<ReplayIcon />}>
                                    Redo Survey
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Complete;