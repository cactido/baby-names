import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';


const Login = (props) => {

    const [loginFormState, setLoginFormState] = useState({ email: '', password: '' });
    const [signUpFormState, setSignUpFormState] = useState({ email: '', username: '', password: '' });

    const handleLoginChange = (event) => {
        const { name, value } = event.target

        setLoginFormState({
            ...loginFormState,
            [name]: value
        });
    }
    const handleSignUpChange = (event) => {
        const { name, value } = event.target

        setSignUpFormState({
            ...signUpFormState,
            [name]: value
        });
    }

    const handleLoginFormSubmit = async event => {
        event.preventDefault();

        console.log("submitted login form", loginFormState);
    }

    const handleSignUpFormSubmit = async event => {
        event.preventDefault();
        console.log("submitted Sign Up form", signUpFormState);
    }

    return (
        <Row>
            <Col sm="6">
                <Card body className="main-card">
                    <CardTitle tag="h5">Login</CardTitle>
                    <Form onSubmit={handleLoginFormSubmit}>
                        <FormGroup>
                            <Label for="loginEmail">Email</Label>
                            <Input type="email" name="email" id="loginEmail" value={loginFormState.email} placeholder="Your Email" onChange={handleLoginChange} />
                        </FormGroup>
                        <FormGroup className="mb-2">
                            <Label for="loginPassword">Password</Label>
                            <Input placeholder='**************' name='password' type='password' id='loginPassword' value={loginFormState.password} onChange={handleLoginChange} />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Card>
            </Col>
            <Col sm="6">
                <Card body className="main-card">
                    <CardTitle tag="h5">Sign Up</CardTitle>
                    <Form onSubmit={handleSignUpFormSubmit}>
                        <FormGroup>
                            <Label for="SignUpEmail">Email</Label>
                            <Input type="email" name="email" id="SignUpEmail" value={signUpFormState.email} placeholder="Your Email" onChange={handleSignUpChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input placeholder='Username' name='username' type='username' id='username' value={signUpFormState.username} onChange={handleSignUpChange} />
                        </FormGroup>
                        <FormGroup className="mb-2">
                            <Label for="SignUpPassword">Password</Label>
                            <Input placeholder='**************' name='password' type='password' id='SignUpPassword' value={signUpFormState.password} onChange={handleSignUpChange} />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Card>
            </Col>
        </Row>
    )

}

export default Login;