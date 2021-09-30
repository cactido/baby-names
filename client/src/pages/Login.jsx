import React, { useState } from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const Login = (props) => {

    const [loginFormState, setLoginFormState] = useState({ email: '', password: '', active: true });
    const [signUpFormState, setSignUpFormState] = useState({ email: '', username: '', password: '', active: false });

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

    const handleSwitch = (event) => {
        const { name } = event.target;

        if (name === "toSignUp") {
            setLoginFormState({
                ...loginFormState,
                active: false
            });

            setSignUpFormState({
                ...signUpFormState,
                active: true
            })
        } else if (name === 'toLogin') {
            setLoginFormState({
                ...loginFormState,
                active: true
            });

            setSignUpFormState({
                ...signUpFormState,
                active: false
            })
        }

    }

    return (
        <Row>
            <Col xs="12" sm="6" className="m-0 p-0" style={{ height: "300px" }}>
                <Card>
                    <CardImg width="100%" style={{ height: "300px" }} src={require('../assets/Carousel/Baby.jpg').default} alt="Card image cap"/>
                    <CardImgOverlay className="d-flex justify-content-end flex-column">
                        <CardTitle tag="h5">Welcome to Tot Titles Together</CardTitle>
                        <CardText>Our goal is to help expecting partners to discuss names for their children without fear of their favorite names getting shot down.</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col xs="12" sm="6" className="m-0 p-0">
                {loginFormState.active && (
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
                            <Row>
                                <h5>Not a member?: <Button name='toSignUp' color="primary" onClick={handleSwitch}>Sign Up</Button></h5>
                            </Row>
                        </Form>
                    </Card>
                )}
                {signUpFormState.active && (
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
                            <Row>
                                <h5>Already a member?: <Button name='toLogin' color="primary" onClick={handleSwitch}>Login</Button></h5>
                            </Row>
                        </Form>
                    </Card>
                )}
            </Col>
        </Row>
    )

}

export default Login;