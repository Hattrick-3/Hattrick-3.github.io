import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/home';
import Auth from './containers/auth';
import DetailPhoto from './containers/detail-photo';

export default (
	<div>
        <Route exact path="https://hattrick-3.github.io/Hattrick-3.github.io/Diplom%20Redux/index.html" component={Home} />
				<Route path="https://hattrick-3.github.io/Hattrick-3.github.io/Diplom%20Redux/index.html/auth" component={Auth} />
        <Route path="https://hattrick-3.github.io/Hattrick-3.github.io/Diplom%20Redux/index.html/photo/:id" component={DetailPhoto} />
    </div>
);
