import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

import "../styles/main.scss";

import thumb from '../images/thumb_image.png';

const Home = () => {

    const state = useSelector(state => state.count);

    const dispatch = useDispatch();
    
    const {increment, decrement} = bindActionCreators(actionCreators, dispatch);
  
  
    return (
    <div className="default">
        <div className="title">
            Template
        </div>

        <div className="image">
            <img src={thumb} alt="default-image" />
        </div>

        <div>
            <h1>Counter: {state.count}</h1>
            <div>
                <button className="btn btn-default" onClick={increment}>
                    Increment
                </button>
                <button className="btn btn-default" onClick={decrement}>
                    Decrement
                </button>
            </div>
        </div>

    </div>
    );
};

export default Home;