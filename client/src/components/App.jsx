import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Chirps from './Chirps';
import Header from './Header';
import ChirpsID from './ChirpsID';
import ChirpsEdit from './ChirpsEdit';

const styles = {
    width: "18rem",
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateresult: [],
            stateTextArray: [],
            stateText: ""
        };
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Chirps} />
                        <Route exact path="/chirp/:id" component={ChirpsID} />
                        <Route exact path="/chirp/edit/:id" component={ChirpsEdit} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;
