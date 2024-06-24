import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Jobs from './Jobs';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Login />} />
                <Route exact path="/jobs" element={<Jobs />} />
            </Routes>
        </Router>
    );
};

export default App;
