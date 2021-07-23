import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/main.scss";

import Switches from './router/switches';
import Navbar from './components/navBar';

const App = () => (
    <div className="default">

        <div className="main-body">
            <Router>
                <Navbar />
                <Switches />
            </Router>
        </div>
    </div>
);

export default App;