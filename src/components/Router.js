import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from "../App";
import SearchBar from "./SearchBar";
import NotFound from "./NotFound";

const Router = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/" component={SearchBar}/>
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;