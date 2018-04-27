import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Chirp from './Chirp';
import Chirps from './Chirps';
import kiwi from '../assets/kiwi.png';
import Header from './Header';
import Form from './Form';


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
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;
