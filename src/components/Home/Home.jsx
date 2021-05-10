import { useHistory } from 'react-router-dom';
import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    },
});

function Home() {

    const classes = useStyles();

    const history = useHistory();

    function beginSurvey () {
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
                                    Begin Survey:
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify='center'>
                                <Button variant="contained"
                                    onClick={beginSurvey}
                                    endIcon={<KeyboardArrowRightIcon />}>
                                    Begin Survey
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>

    )
}

export default Home;