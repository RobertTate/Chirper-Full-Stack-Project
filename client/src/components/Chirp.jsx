import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ChirpsID from './ChirpsID';

const styles = {
    width: "18rem",
};

const Chirp = (props) => {
        return (
            <Fragment>
                <div className="card card-text-center m-3" style={styles}>
                    <div className="card-body">
                        <h4 className="card-title">{`${props.text}`}</h4>
                        <Link className="btn btn-info" to={`/chirp/${props.id}`}>Edit Details</Link>
                    </div>
                </div>
            </Fragment>
        );
    
    
}

export default Chirp;