import React from 'react';
import { Route, Link, BrowserRouter  as Router } from 'react-router-dom'; // removed Switch, Redirect
import { Provider } from 'react-redux';
import App from './components/App';
import test1 from './components/Test1';
import test2 from './components/Test2';
import store from './store';

// require('./styles.css');


const Root = ({store}) => (
    <Provider store={store}>
        <Router>
                <Route path='/' component={App} />
                <Route path='/test1' component={test1} />
                <Route path='/test2' component={test2} />
        </Router>
    </Provider>
)

export default Root;