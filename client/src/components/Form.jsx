import React, { Component, Fragment } from 'react';
import Chirp from './Chirp';

class Form extends Component {
    constructor(props) {
        super(props);
        // Using state here to set up a starting value for property text, and an empy array for property array.
        this.state = {
            stateText: ""
        };

    }
    handleChange(stateText) {
        this.setState({ stateText });
    }

    render() {
        return (
            <Fragment>
                <form>
                    <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <br />
                        <label htmlFor="exampleInputEmail1">Enter Your CHIRP Below</label>
                        <input
                            type="text"
                            className="form-control form-control-lg col-xs-12 col-sm-12 col-md-12 col-lg-12"
                            onChange={(event) => this.handleChange(event.target.value)}
                            placeholder="CHIRP Away!"
                        />
                        <small id="emailHelp" className="form-text text-muted">140 characters or less, please.</small>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => {
                                this.props.click(this.state.stateText);
                            }}
                        >SUBMIT</button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default Form;