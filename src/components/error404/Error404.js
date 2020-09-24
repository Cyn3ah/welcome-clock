import React from 'react';
import Moon_horizon from "./styles/images/Moon_horizon.jpg"
import "./styles/Error404.css"

function Error404(props) {
    return (
        <div className="Error404">
            <img src={Moon_horizon} alt="You're so Lost!" />
            <h1>You're Lost!</h1>
            <h1>
                Error 404 - page not found!
            </h1>
        </div>
    );
}

export default Error404;