import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';


function App() {
    return(
        <>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/register" component={RegisterPage} exact />
            <Route path="/login" component={LoginPage} exact />
        </Switch>
        </>
    );
}

export default App;