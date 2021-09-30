import React, { useState } from "react";
import { useMutation, useLazyQuery } from '@apollo/client';
import { CREATE_USER, GET_AUTH } from '../utils/queries';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Auth from '../utils/auth';

const Login = (props) => {
    const [loginFormState, setLoginFormState] = useState({ email: '', password: '', active: true });
    const [signUpFormState, setSignUpFormState] = useState({ email: '', displayName: '', password: '', active: false });
    const [createUser, createUserState] = useMutation(CREATE_USER);
    const [userAuth, userAuthState] = useMutation(GET_AUTH);

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

        try {
            const { data } = await userAuth({
                variables:
                {
                    email: loginFormState.email,
                    password: loginFormState.password
                }
            });

            Auth.login(data.getAuth.token);
        } catch (e) {
            console.error(e);
        }

        // setLoginFormState({
        //     ...signUpFormState,
        //     email: ' ',
        //     password: ' '
        // });

    };
    const handleSignUpFormSubmit = async event => {
        event.preventDefault();



        try {
            const { data } = await createUser({
                variables:
                {
                    email: signUpFormState.email,
                    password: signUpFormState.password,
                    displayName: signUpFormState.displayName
                }
            });

            Auth.login(data.createUser.token);
        } catch (e) {
            console.error(e);
        }

        // setSignUpFormState({
        //     ...signUpFormState,
        //     email: '',
        //     displayName: '',
        //     password: ''
        // })
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
            <Col xs="12" className="m-0 p-0" style={{ height: "500px" }}>
                <Card style={{ backgroundColor: 'black' }}>
                    <CardImg width="100%" style={{ height: "100vh", opacity: "0.5" }} src={require('../assets/Carousel/Baby.jpg').default} alt="Card image cap" />
                    <CardImgOverlay className="d-flex flex-column">
                        <CardTitle style={{ color: 'pink' }} tag="h5" className="fw-bold fs-1">Welcome to Tot Titles Together</CardTitle>
                        <CardText style={{ color: 'pink' }} className="fs-3">Our goal is to help expecting partners with rating names for their future children.</CardText>
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
                                            <Label for="SignUpEmail">Display Name</Label>
                                            <Input type="text" name="displayName" id="SignUpDisplayName" value={signUpFormState.displayName} placeholder="Your Display Name" onChange={handleSignUpChange} />
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
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
    )
}

export default Login;