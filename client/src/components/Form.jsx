import React, { Component, Fragment } from 'react';
import Chirp from './Chirp';

class Form extends Component {
    constructor(props) {
        super(props);
        // Using state here to set up a starting value for property text, and an empy array for property array.
        this.state = {
            stateText: "",
            locationText: ""
        };

    }
    handleTextChange(stateText) {
        this.setState({ stateText });
    };

    handleLocationChange(locationText) {
        this.setState({ locationText });
    };

    render() {
        return (
            <Fragment>
                <form>
                    <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <br />
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Users</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option>Select User</option>
                                <option value="1">Bobby Tate</option>
                                <option value="2">Thomas Edstrom</option>
                                <option value="3">Justin Davis</option>
                                <option value="4">Kenneth Cooper</option>
                                <option value="5">Ives Salbert</option>
                                <option value="6">Anna Tate</option>
                                <option value="7">Justin Childers</option>
                                <option value="8">Chris Canady</option>
                                <option value="9">Nate Underwood</option>
                                <option value="10">Alison Jordan</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            className="form-control form-control-sm col-xs-12 col-sm-12 col-md-12 col-lg-12"
                            onChange={(event) => this.handleLocationChange(event.target.value)}
                            placeholder="Location"
                        />
                        <br />
                        <label htmlFor="exampleInputEmail1">Enter Your CHIRP Below</label>
                        <input
                            type="text"
                            className="form-control form-control-lg col-xs-12 col-sm-12 col-md-12 col-lg-12"
                            onChange={(event) => this.handleTextChange(event.target.value)}
                            placeholder="CHIRP Away!"
                        />

                        <small id="emailHelp" className="form-text text-muted">140 characters or less, please.</small>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => {
                                this.props.click(this.state.stateText, this.state.locationText);
                            }}
                        >SUBMIT</button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default Form;