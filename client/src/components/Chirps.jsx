import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './Form';
import ChirpList from './ChirpList';

const styles = {
    width: "18rem",
};

class Chirps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateresult: [],
            

        };
    }


    componentDidMount() {
        this.getChirps();
    }

    getChirps() {
        fetch('/api/chirps/', {
            method: 'GET',
            headers: new Headers({
                'content-type': 'application/json'
            })
        }).then((result) => result.json())
        .then((chirps) => {
            let keys = Object.keys(chirps);
            let chirpArr = [];

            for (let i of keys) {
                if (i !== 'nextid') {
                    let chirp = {
                        text: chirps[i].text,
                        id: i
                    }
                    chirpArr.unshift(chirp);
                }
            }
            this.setState({ stateresult: chirpArr });
        }).catch((err) => {
            console.log(err);
        });
    }

    // When submit it clicked, the state of text is saved as an array value.
    handleClick(text) {
        fetch('/api/chirps/', {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: new Headers({
                'content-type': 'application/json'
            })
        }).then((result) => {
            this.getChirps();
        });

        // let addValue = this.state.array;
        // addValue.unshift(this.state.text);
        // this.setState({ array: addValue });
    }

    render() {
        return (
            <Fragment>
                <Form click={(text) => this.handleClick(text)} />
                <ChirpList chirps={this.state.stateresult} />
            </Fragment>
        );
    }
}

export default Chirps;
