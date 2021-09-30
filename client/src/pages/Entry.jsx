import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_PROVIDED_NAME, GET_ME } from "../utils/queries";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardHeader, CardText, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';


const Entry = (props) => {
    // names will eventually be an array possibly
    const [formState, setFormState] = useState({ gender: '', names: '', rating: '3 Enjoy' });

    // temp state variable for creating the namelist html
    const [nameListState, setNameListState] = useState([]);

    const {loading, data} = useQuery(GET_ME);

    const userData = data?.me || {};

    const [addProvidedName, addProvidedNameState] = useMutation(ADD_PROVIDED_NAME);

    console.log(userData);

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        });
    }
    const handleFormSubmit = async event => {
        event.preventDefault();
        // setNameListState(namearr => [...namearr, formState]);

        const rated = parseInt(formState.rating.split(" ")[0]);

        console.log("ID:",userData._id);
        console.log("rated:",rated);
        console.log("name:", formState.names)

        try {
            const { data } = await addProvidedName(
                {
                    variables: {user_id: userData._id, name: formState.names, rating: rated }
                }
            )
        } catch (err) {
            console.error(err);
        }
    }

    const renderRating = (param) => {
        switch (param) {
            case '1 Like':
                return 'Like';
            case '2 Fancy':
                return 'Fancy';
            case '3 Enjoy':
                return 'Enjoy';
            case '4 Love':
                return 'Love';
            case '5 Adore':
                return 'Adore';
        }
    }

    const handleRemove = (event) => {
        const matchItem = event.target.getAttribute("name");
        setNameListState(nameListState.filter(item => item.names !== matchItem));
    }

    return (
        <Row>
            <Col xs="12" className="m-0 p-0" style={{ height: "500px" }}>
                <Card style={{ backgroundColor: 'black' }}>
                    <CardImg width="100%" style={{ height: "100vh", opacity: "0.5" }} src={require('../assets/Carousel/Baby.jpg').default} alt="Card image cap" />
                    <CardImgOverlay className="d-flex flex-column">
                            <Card>
                                <CardHeader className="main-card">Name Entry</CardHeader>
                                <CardBody>
                                    <Form onSubmit={handleFormSubmit}>
                                        <FormGroup tag="fieldset" row>
                                            <legend className="col-form-label col-sm-2 col-md-4">Gender</legend>
                                            <Col xs="12" className="m-0 p-0">
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name="gender" value="Boy" onChange={handleChange} />{' '}
                                                        Boy
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name="gender" value="Girl" onChange={handleChange} />{' '}
                                                        Girl
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="rating">Rating</Label>
                                            <Input type="select" name="rating" id="rating" value={formState.rating} onChange={handleChange}>
                                                <option>1 Like</option>
                                                <option>2 Fancy</option>
                                                <option>3 Enjoy</option>
                                                <option>4 Love</option>
                                                <option>5 Adore</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup className="mb-2">
                                            <Label for="name">Name</Label>
                                            <Input placeholder='Your baby name here' name='names' type='text' id='names' value={formState.names} onChange={handleChange} />
                                        </FormGroup>
                                        <Button>Submit</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                  
                        
                            <Card>
                                <CardHeader className="main-card">Names</CardHeader>
                                <CardBody>
                                    {nameListState.map(item => (
                                        <Row key={item.names} className={`d-flex justify-content-evenly border border-dark p-2 m-1 ${item.gender === 'Girl' ? 'girl-name' : 'boy-name'}`}>
                                            <Col>
                                                {item.names}
                                            </Col>
                                            <Col>
                                                {item.gender}
                                            </Col>
                                            <Col>
                                                {renderRating(item.rating)}
                                            </Col>
                                            <Col>
                                                <span name={item.names} onClick={handleRemove}>X</span>
                                            </Col>
                                        </Row>
                                    ))}
                                </CardBody>
                            </Card>
                     
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
    )

}

export default Entry;