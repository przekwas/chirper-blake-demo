import * as React from 'react';
import '../scss/app';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllChirps from './public/AllChirps';
import AdminChirps from './admin/AdminChirp';
import AddChirp from './public/AddChirp';
import NavB from './shared/Navb';

class IApp extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <Router>
                <>
                <NavB />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={AllChirps} />
                        <Route exact path="/admin/:id" component={AdminChirps} />
                        <Route exact path="/new" component={AddChirp} />
                    </Switch>
                </div>
                </>
            </Router>
        );
    }
}

interface IAppProps { }
interface IAppState { }

export default IApp;