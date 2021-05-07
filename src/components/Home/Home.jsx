import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

    function beginSurvey () {
        history.push('/feeling');
    }
    

    return (
        <>
            <h2>Begin Survey:</h2>
            <button onClick={beginSurvey}>Get Started!</button>
        </>

    )
}

export default Home;