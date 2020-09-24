import React from 'react';

function Welcome(props) {
    return (
        <div className="Welcome">
            <h1>
                Congratulations! You've found {props.name}'s Welcome Clock!
            </h1>
        </div>
    );
}

export default Welcome;