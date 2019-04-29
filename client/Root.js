import React from 'react';
import { Route, Redirect, Link, BrowserRouter  as Router } from 'react-router-dom'; // removed Switch, Redirect
import { Provider } from 'react-redux';
import App from './components/App';
import Main from './containers/MainContainer';
import test2 from './components/Test2';
import store from './store';

// require('./styles.css');


const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route path='/' component={Main} />
            <Route path='/signin' component={App} />
            <Route path='/test2' component={test2} />
        </Router>
    </Provider>
)

export default Root;