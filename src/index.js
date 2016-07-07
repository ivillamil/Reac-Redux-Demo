import React, { Component } from "react";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store, { history } from "./store";

import Main from "./components/Main";
import Users from "./components/Users";
import Themes from "./components/Themes";

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={Users} />
                <Route path="/themes" component={Themes} />
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('app'));
