import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
//import Jobs from './Jobs';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                {/* <Route path="/jobs" component={Jobs} /> */}
                <Route path="/" component={Login} />
            </Switch>
        </Router>
    );
};

export default App;
