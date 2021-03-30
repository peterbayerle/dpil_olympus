import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
var validator = require("email-validator");
 
class SignUp extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            invalid: [false, false, false]
        };
    };

    onSubmit(event) {
        event.preventDefault();
        var invalid = new Array(3);
        var name = event.target[0].value;

        invalid[0] = !name;
        invalid[1] = !validator.validate(event.target[1].value);

        invalid[2] = !event.target[2].value;

        this.setState({invalid: invalid});
        this.props.onSubmit(invalid.includes(true) ? false : name);
    };

    render () {
        return (
            <div className="pt-3">
                <h4 className="text-center">Create an account</h4>

                <Form onSubmit={this.onSubmit.bind(this)}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control isInvalid={this.state.invalid[0]} placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control isInvalid={this.state.invalid[1]} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control isInvalid={this.state.invalid[2]} type="password" placeholder="Enter Password" />
                    </Form.Group>



                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            
            );
        };
};

export default SignUp;
