import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_PROVIDED_NAME, GET_ME, REMOVE_PROVIDED_NAME } from "../utils/queries";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardHeader, CardText, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';


const Entry = (props) => {
    // names will eventually be an array possibly
    const [formState, setFormState] = useState({ gender: '', names: '', rating: '3 Enjoy' });

    // temp state variable for creating the namelist html
    // const [nameListState, setNameListState] = useState([]);

    const {loading, data} = useQuery(GET_ME);

    const userData = data?.me || {};

    const [addProvidedName, addProvidedNameState] = useMutation(ADD_PROVIDED_NAME);

    const [removeProvidedName, removeProvidedNameState] =  useMutation(REMOVE_PROVIDED_NAME);

    // console.log(userData);

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        });
        console.log(formState.gender);
    }
    const handleFormSubmit = async event => {
        // event.preventDefault();
        // setNameListState(namearr => [...namearr, formState]);

        const rated = parseInt(formState.rating.split(" ")[0]);

        // console.log("ID:",userData._id);
        // console.log("rated:",rated);
        // console.log("name:", formState.names)

        try {
            console.log(formState.gender.toLowerCase());
            const { data } = await addProvidedName(
                {
                    variables: {user_id: userData._id, name: formState.names, rating: rated, gender:formState.gender.toLowerCase() }
                }
            )
        } catch (err) {
            console.error(err);
        }
    }

    const renderRating = (param) => {
        switch (param) {
            case 1:
                return 'Like';
            case 2:
                return 'Fancy';
            case 3:
                return 'Enjoy';
            case 4:
                return 'Love';
            case 5:
                return 'Adore';
        }
    }

    const handleRemove = (event) => {
        const matchItem = event.target.getAttribute("name");
        // setNameListState(nameListState.filter(item => item.names !== matchItem));
        // console.log(matchItem);
        try {
            const { data } = removeProvidedName({ variables: {name: matchItem}});
                window.location.reload();
        } catch (err) {
            console.error(err)
        }

    }

    if(loading) {
        return <h2>LOADING...</h2>;
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
                                    {userData.provided_names.map(item => (
                                        <Row key={item.name} className={`d-flex justify-content-evenly border border-dark p-2 m-1 ${item.gender === 'girl' ? 'girl-name' : 'boy-name'}`}>
                                            <Col>
                                                {item.name}
                                            </Col>
                                            <Col>
                                                {item.gender}
                                            </Col>
                                            <Col>
                                                {renderRating(item.rating)}
                                            </Col>
                                            <Col>
                                                <span style={{cursor: 'pointer'}} name={item.name} onClick={handleRemove}>X</span>
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