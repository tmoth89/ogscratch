import React from 'react';
import { Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom'; // removed Switch, Redirect
import { Provider } from 'react-redux';
import Signin from './components/Signin';
import MainContainer from './containers/MainContainer';
import Home from './components/Home';
import Signup from './components/Signup';
import store from './store';

// require('./styles.css'); - we just have not used any styling


const Root = () => (
    <Provider store={store}>
        <Router>
            <Route path='/' component={MainContainer} />
            <Route path='/signin' component={Signin} />
            <Route path='/home' component={Home} />
            <Route path='/signup' component={Signup} />
        </Router>
    </Provider>
)

export default Root;