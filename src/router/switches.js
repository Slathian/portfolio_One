import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from '../pages/home'


const Switches = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </React.Fragment>
    )
};
export default Switches;