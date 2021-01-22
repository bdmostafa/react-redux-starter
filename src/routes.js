import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AboutPage from './components/about/AboutPage';
import App from './components/App';
import HomePage from './components/home/HomePage';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);