import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class ChirpsID extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }

    componentDidMount() {
        fetch("/api/chirps/" + this.props.match.params.id, {
            method: 'GET',
            headers: new Headers({
                'content-type': 'application/json'
            })
        }).then((result) => result.json())
            .then((result) => {
                // console.log(result);
                result = result.text;
                // console.log(result);
                this.setState({
                    text: result
                })
            }).catch((err) => {
                console.log(err);
            });
    }

    deleteChirp() {
        fetch("/api/chirps/" + this.props.match.params.id, {
            method: 'DELETE',
            headers: new Headers({
                'content-type': 'application/json'
            })
        }).then((result) => {
            this.props.history.goBack();
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <Fragment>
                <div className="jumbotron">
                    <h1>{`${this.state.text}`}</h1>
                    <Link className="btn btn-primary m-3" to={`/chirp/edit/${this.props.match.params.id}`}>Edit Chirp</Link>
                    <button
                        type="submit"
                        className="btn btn-primary m-3"
                        onClick={() => {
                            this.deleteChirp();
                        }}
                    >Delete This Chirp</button>
                </div>
            </Fragment>
        )
    }






}

export default ChirpsID;