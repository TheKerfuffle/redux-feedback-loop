import { useDispatch, useSelector } from 'react-redux';



function Review() {

    const survey = useSelector(store => store.surveyStore);
    const dispatch = useDispatch();

    function redoSurvey() {
        history.push('/Home');
        dispatch({type: 'RESET_SURVEY'});
    }

    function handleSubmit() {
        history.push('/complete');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>New Survey:</h3>
                <h4>Feeling: {survey.feeling}</h4>
                <h4>Understanding: {survey.understanding}</h4>
                <h4>Supported: {survey.supported}</h4>
                <h4>Comments: {survey.comments}</h4>
                <button type="submit">Submit</button>
                <button onClick={redoSurvey}>Redo Survey</button>
            </form>
        </>

    )
}

export default Review;