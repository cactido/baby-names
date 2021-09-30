import React, { useState } from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Compare = () => {

    return (
        <Form>
            <Row>
                <FormGroup>
                    <Label for="partnerId">Text Area</Label>
                    <Input type="textarea" name="partnerId" id="partnerId" placeholder="Please Enter Your Partner's ID here." />
                </FormGroup>
            </Row>
            <Button>Rate Names</Button>
        </Form>


    )
}

export default Compare;