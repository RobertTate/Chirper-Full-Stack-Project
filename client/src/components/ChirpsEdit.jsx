import React, { Component, Fragment } from 'react';


class ChirpsEdit extends Component {
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
    
    handleChange(text) {
        this.setState({ text });
    }
    
    editChirp(text) {
        fetch("/api/chirps/" + this.props.match.params.id, {
            method: 'PUT',
            body: JSON.stringify({ text }),
            headers: new Headers({
                'content-type': 'application/json'
            })
        }).then((result) => {
            this.props.history.push('/');
            }).catch((err) => {
                console.log(err);
            });



    }




    render() {
        // console.log(this.props.match.params.id)
        // console.log(this.state.text)
        return (
            <Fragment>
                <div className="jumbotron">
                    {/* <h1>{`${this.state.text}`}</h1> */}
                    <input 
                    className="form-control form-control-lg" 
                    type="text"
                    onChange={(event) => this.handleChange(event.target.value)}
                    placeholder={`${this.state.text}`} />
                    <button
                        type="submit"
                        className="btn btn-primary m-3"
                        onClick={() => {
                            this.editChirp(this.state.text);
                        }}
                    >Edit This Chirp</button>
                </div>
            </Fragment>
        )

    }

}

export default ChirpsEdit;