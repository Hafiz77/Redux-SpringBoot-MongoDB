import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './app/store';

// Layouts
import App from './app/layouts/App.js';


// Components
import Home from './app/components/home';
import WidgetContainer from './app/components/widget-container';
import UsersContainer from './app/components/users-container';
import CreateUser from './app/components/create-user';

let rootElement = document.querySelector('.container');

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>

            <Route component={App}>
                <Route path="/" component={Home} />
                <Route path="/create" component={CreateUser} />
                <Route path="/widgets" component={WidgetContainer} />
                <Route path="/users" component={UsersContainer} />
            </Route>
        </Router>
    </Provider>),rootElement);