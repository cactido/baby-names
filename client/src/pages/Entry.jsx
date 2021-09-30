import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardHeader, CardText, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';


const Entry = (props) => {
    // names will eventually be an array possibly
    const [formState, setFormState] = useState({ gender: '', names: '', rating: '3 Enjoy' });

    // temp state variable for creating the namelist html
    const [nameListState, setNameListState] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        });
    }
    const handleFormSubmit = async event => {
        event.preventDefault();
        setNameListState(namearr => [...namearr, formState]);
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
            <Col sm="12" md="6" className="m-0 p-0">
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
                            {/* <FormGroup>
                                <Label for="rating">Rating</Label>
                                <Input xs="8" type="range" name="rating" id="rating" min="1" max="5" step="1" value={formState.rating} onChange={handleChange} />
                                <Row className="d-flex justify-content-between">

                                </Row>
                            </FormGroup> */}
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
                            {/* <span>Like</span>
                            <span>Fancy</span>
                            <span>Enjoy</span>
                            <span>Love</span>
                            <span>Adore</span> */}
                            <FormGroup className="mb-2">
                                <Label for="name">Name</Label>
                                <Input placeholder='Your baby name here' name='names' type='text' id='names' value={formState.names} onChange={handleChange} />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col md="6" sm="12" className="m-0 p-0">
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
            </Col>
        </Row>
    )

}

export default Entry;