import React, { Component, Fragment } from 'react';
import Chirp from './Chirp';

class ChirpList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.chirps.map((chirp) => {
                    return (
                        <Chirp key={chirp.id} text={chirp.text} id={chirp.id} color="blue" />
                    )
                })}
            </Fragment>
        )
    }

}

export default ChirpList;