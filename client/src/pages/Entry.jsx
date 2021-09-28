import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';


const Entry = (props) => {
    // names will eventually be an array possibly
    const [formState, setFormState] = useState({ gender: '', names: ''});

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        });
    }
    const handleFormSubmit = async event => {
        event.preventDefault();

        console.log("submitted name form", formState);
    }

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Name Entry</CardTitle>
                    <Form onSubmit={handleFormSubmit}>
                        <FormGroup tag="fieldset" row>
                            <legend className="col-form-label col-sm-2">Gender</legend>
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
                        <FormGroup className="mb-2">
                            <Label for="name">Name</Label>
                            <Input placeholder='Your baby name here' name='names' type='text' id='names' value={formState.names} onChange={handleChange} />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )

}

export default Entry;