import React, { useState } from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardHeader, CardBody } from 'reactstrap';

const Compare = () => {

    return (
        <Row>
            <h1>Name Rating</h1>
            <Form className="mb-3">
                <Row className="mb-3">
                    <FormGroup>
                        <Label for="partnerId"><h5>Partner Id Entry</h5></Label>
                        <Input type="textarea" name="partnerId" id="partnerId" placeholder="Please Enter Your Partner's ID here." />
                    </FormGroup>
                </Row>
                <Button xs="2">Rate Names</Button>
            </Form>
            {/* below element only renders if a valid partner id has been entered */}
            <Row className="m-0 p-0">
                <Col className="m-0 p-0">
                    <Card>
                        <CardHeader className="main-card">Partners Names</CardHeader>
                        <CardBody>
                            <Form>
                                {/* map function to go through list of names */}
                                {/* Row class name will have girlname or boy name based off of the gender given */}
                                <Row key="ph" className='d-flex justify-content-evenly border border-dark p-2 m-1 girl-name'>
                                    <Col>
                                       <h2>Alice</h2>
                                    </Col>
                                    <Col>
                                       <span className="text">for a Girl</span> 
                                    </Col>
                                    <Row>
                                        <FormGroup>
                                            <Label for="rating" className="text">Rating:</Label>
                                            <Input type="select" name="rating" id="rating">
                                                <option>1 Like</option>
                                                <option>2 Fancy</option>
                                                <option>3 Enjoy</option>
                                                <option>4 Love</option>
                                                <option>5 Adore</option>
                                            </Input>
                                        </FormGroup>
                                    </Row>
                                </Row>
                                {/* will submit the resulting rated array back to the user */}
                                <Button>Submit Ratings</Button>
                            </Form>
                            {/* {nameListState.map(item => (
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
                        ))} */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Row>



    )
}

export default Compare;