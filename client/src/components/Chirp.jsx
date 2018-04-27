import React, { Fragment } from 'react';

const styles = {
    width: "18rem",
};

const Chirp = (props) => {
        return (
            <Fragment>
                <div className="card card-text-center" style={styles}>
                    <div className="card-body">
                        <h5 className="card-title">{`${props.text}`}</h5>
                    </div>
                </div>
            </Fragment>
        );
    
    
}

export default Chirp;