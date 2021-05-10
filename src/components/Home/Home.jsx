import { useHistory } from 'react-router-dom';
import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

// Material UI styles allow us add classes to MUI components
const useStyles = makeStyles({
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    },
});

function Home() {

    // linked to useStyles above
    const classes = useStyles();
    // Allows us to navigate between pages
    const history = useHistory();

    // Takes us to the first page of the survey
    // Happens when we click a specific button
    function beginSurvey () {
        history.push('/feeling');
    }
    

    return (
        <>
        {/* In Material UI we use nested grids and paper 
        components in order to create the desired layout. 
        I am still trying to get some padding into the 
        greater paper component and am not sure how to yet.  */}
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