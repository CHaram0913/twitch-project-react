import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../services/history';
import { mainRoutes } from '../routes';
import CssBaseline from 'material-ui/CssBaseline';

import TopMenu from './../containers/top_menu';
import RemoteControl from './../containers/remote_control';

/**
 * Pages
 * */
const mainSwitch = (
    <Switch>
        {mainRoutes.map(function (item, index) {
            return (
                item.wrapper ? 'Something else' : <Route key={index} path={item.path} component={item.component}/>
            )
        })}
    </Switch>
);

export default class App extends React.Component {

    render() {
        return (
            <div>
                <CssBaseline />
                <Router history={history}>
                    <Fragment>
                        <TopMenu />
                        <RemoteControl />
                        {mainSwitch}
                    </Fragment>
                </Router>
            </div>
        );
    }
}