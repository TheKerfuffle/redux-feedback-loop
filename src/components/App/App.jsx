import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Complete from '../Complete/Complete';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>

          </ul>
        </nav>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/feeling" exact>
          <Feeling />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
        <Route path="/supported" exact>
          <Supported />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/complete" exact>
          <Complete />
        </Route>
        
      </Router>

    </div>
  );
}

export default App;
