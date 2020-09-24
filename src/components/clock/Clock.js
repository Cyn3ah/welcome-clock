import React, { Component } from 'react';
import "./Clock.css"
import Saturn from "../../assets/images/FAVPNG_clock-face-time-past-clip-art_Mc8SmhBZ.png"

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div className="Clock">
                <img src={Saturn} alt="Saturn is my favorite planet" />
                <h2>It is now {this.state.date.toLocaleTimeString()}.
                </h2>
            </div>
        );
    }
}

export default Clock;