import { useDispatch, useSelector } from 'react-redux';



function Review() {

    const survey = useSelector(store => store.surveyStore);
    const dispatch = useDispatch();

    return (
        <>
            <h3>New Survey:</h3>
            <h4>Feeling: {survey.feeling}</h4>
            <h4>Understanding: {survey.understanding}</h4>
            <h4>Supported: {survey.supported}</h4>
            <h4>Comments: {survey.comments}</h4>
        </>

    )
}

export default Review;