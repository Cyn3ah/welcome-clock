import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            formData: {
                firstName: '',
                lastName: '',
            }
        }
    }

    handleChange = (event) => {
        const formData = { ...this.state.formData };
        formData[event.target.name] = event.target.value;

        this.setState({ formData });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            submitted: true
        });
    }

    resetForm = (event) => {
        this.setState({
            submitted: false,
            formData: {
                firstName: '',
                lastName: '',
            }
        });
    }

    render() {
        if (this.state.submitted) {
            return (
                <div className="Contact">
                    <h2>Thank you, {this.state.formData.firstName}, wanna play Jeopardy?</h2>
                    <button onClick={this.resetForm}>Reset Form</button>
                </div>
            )
        }

        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="First name">First name: </label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.formData.firstName}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="Last name">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.formData.lastName}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button>Submit Form</button>

                </form>

                <div>
                    Full Name:{" "}
                    {this.state.formData.firstName}{" "}{this.state.formData.lastName}
                </div>
            </div>
        );
    }
}

export default Contact;