import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
//import Jobs from './Jobs';
//<Route path="/jobs" component={Jobs} />

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
