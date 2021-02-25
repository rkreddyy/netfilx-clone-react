import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

const App = () => (
    <div className="App">
        Hello React Webpack...!
    </div>
);

export default hot(module)(App);
