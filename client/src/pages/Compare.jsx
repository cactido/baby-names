import React, { useState, useEffect } from 'react';

import { useQuery, useMutation } from '@apollo/client';

import { GET_USER, ADD_SELECTED_NAME, GET_ME } from '../utils/queries';

import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardHeader, CardBody, CardImg, CardImgOverlay } from 'reactstrap';

import Auth from '../utils/auth'

const Compare = () => {

    const user = Auth.getProfile();

    

    const [idState, setIdState] = useState({ id: '' });
    const [formState, setFormState] = useState({ partnerId: '' });

    const { loading, data, refetch } = useQuery(GET_USER, {
        variables: { id: idState.id }
    });    
    // const  { loading, data, refetch } = useQuery(GET_USER, {
    //     variables: { id: user.data._id }
    // }); 
       
    const meObject = useQuery(GET_ME);

    

    const [addSelected, addSelectedState] = useMutation(ADD_SELECTED_NAME);

    const handleIDForm = (event) => {
        event.preventDefault();

        // setFormState({ on: true });
        console.log(formState.partnerId);

        setIdState({ id: formState.partnerId });

        refetch();

    }

    const handleRating = (event) => {

        const rating = parseInt(event.target.value)

        const selectedItem = {name: event.target.name.split(' ')[0], gender: event.target.name.split(' ')[1], rating: rating, user_id: user.data._id}
        // console.log(selectedItem);
        try {
            const selectData = addSelected({
                variables: { user_id: selectedItem.user_id, name: selectedItem.name, gender: selectedItem.gender, rating: selectedItem.rating }
            })

            console.log(selectData);
        } catch(err){
            console.error(err);
        }
    }


    const handleFinish = (event) => {
        window.location.assign('/List');
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        });
    }

    if (loading) {
        return (<h1>Loading...</h1>)
    };

    return (
        <Row>
            <Col xs="12" className="m-0 p-0" style={{ height: "500px" }}>
                <Card style={{ backgroundColor: 'black' }}>
                    <CardImg width="100%" style={{ height: "100vh", opacity: "0.5" }} src={require('../assets/Carousel/Baby.jpg').default} alt="Card image cap" />
                    <CardImgOverlay className="d-flex flex-column">
                        <h1 style={{ color: 'pink' }} >Name Rating</h1>
                        <Form className="mb-3" onSubmit={handleIDForm}>
                            <Row className="mb-3">
                                <FormGroup>
                                    <Label for="partnerId"><h5 style={{ color: 'pink' }}>Partner Id Entry</h5></Label>
                                    <Input type="textarea" name="partnerId" id="partnerId" placeholder="Please Enter Your Partner's ID here." value={formState.partnerId} onChange={handleChange} />
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
                                            {data && data.getUser.provided_names.map(name_item => (
                                                <Row key={name_item.name} className={`d-flex justify-content-evenly border border-dark p-2 m-1 ${name_item.gender === 'girl' ? 'girl-name' : 'boy-name'}`}>
                                                    <Col>
                                                        <h2>{name_item.name}</h2>
                                                    </Col>
                                                    <Row>
                                                        <FormGroup>
                                                            <Label for="rating" className="text">Rating:</Label>
                                                            <Input type="select" name={`${name_item.name} ${name_item.gender}`} id="rating" onChange={handleRating}>
                                                                <option value='1'>1 Like</option>
                                                                <option value='2'>2 Fancy</option>
                                                                <option value='3'>3 Enjoy</option>
                                                                <option value='4'>4 Love</option>
                                                                <option value='5'>5 Adore</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </Row>
                                                </Row>
                                            )
                                            )}

                                            {/* will submit the resulting rated array back to the user */}
                                            <Button onClick={handleFinish}>Finish Ratings</Button>
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
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>



    )
}

export default Compare;