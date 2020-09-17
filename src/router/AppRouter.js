import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import Register from '../components/Register';
import UserDetails from '../components/UserDetails';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from '../router/PrivateRoute';
import PublicRoute from '../router/PublicRoute';


const AppRouter = (props) => (
    <HashRouter {...props}>
        <div>
            <Switch>
                <Route path="/" exact><Redirect to="/login" /></Route>
                <PublicRoute path="/login" component={LoginPage} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PublicRoute path="/register" component={Register} />
                <PrivateRoute path="/user/:id" component={UserDetails} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </HashRouter>
);

export default AppRouter;