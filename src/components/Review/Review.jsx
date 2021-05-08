import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Review() {

    const survey = useSelector(store => store.surveyStore);
    const dispatch = useDispatch();
    const history = useHistory();

    function redoSurvey() {
        history.push('/');
        dispatch({ type: 'RESET_SURVEY' });
    }

    function handleSubmit() {
        history.push('/complete');
        addSurvey();
        dispatch({ type: 'RESET_SURVEY' });
    }

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
            <h3>New Survey:</h3>
            <h4>Feeling: {survey.feeling}</h4>
            <h4>Understanding: {survey.understanding}</h4>
            <h4>Supported: {survey.supported}</h4>
            <h4>Comments: {survey.comments}</h4>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={redoSurvey}>Redo Survey</button>
        </>

    )
}

export default Review;