import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardHeader, CardText, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';


const Entry = (props) => {
    // names will eventually be an array possibly
    const [formState, setFormState] = useState({ gender: '', names: '', rating: '3' });

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
        switch(param) {
            case '1':
                return 'Like';
            case '2':
                return 'Fancy';
            case '3':
                return 'Enjoy';
            case '4':
                return 'Love';
            case '5':
                return 'Adore';
        }
    }

    const handleRemove = (event) => {
        const matchItem = event.target.getAttribute("name");
        setNameListState(nameListState.filter(item => item.names !== matchItem));
    }

    return (
        <Row>
            <Col sm="12" md="6">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Name Entry</CardTitle>
                        <Form onSubmit={handleFormSubmit}>
                            <FormGroup tag="fieldset" row>
                                <legend className="col-form-label col-sm-2 col-md-4">Gender</legend>
                                <Col sm={10}>
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
                                <Input xs="8" type="range" name="rating" id="rating" min="1" max="5" step="1" value={formState.rating} onChange={handleChange} />
                                <Row className="d-flex justify-content-between">
                                    <span>Like</span>
                                    <span>Fancy</span>
                                    <span>Enjoy</span>
                                    <span>Love</span>
                                    <span>Adore</span>
                                </Row>
                            </FormGroup>
                            <FormGroup className="mb-2">
                                <Label for="name">Name</Label>
                                <Input placeholder='Your baby name here' name='names' type='text' id='names' value={formState.names} onChange={handleChange} />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col md="6" sm="12">
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