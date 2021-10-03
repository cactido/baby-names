import React from 'react';

import Result from '../Result.js';

import { Row, Col, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const List = () => {

    return (

        <Row>
            <Col xs="12" className="m-0 p-0" style={{ height: "500px" }}>
                <Card style={{ backgroundColor: 'black' }}>
                    <CardImg width="100%" style={{ height: "100vh", opacity: "0.5" }} src={require('../assets/Carousel/Baby.jpg').default} alt="Card image cap" />
                    <CardImgOverlay className="d-flex flex-column">
                        <Card className="m-0 p-0">
                            <CardHeader className="main-card fs-1 fw-bold">Compared Lists</CardHeader>
                            <Card className="m-1">
                                <CardHeader className="main-card fs-3">List Title</CardHeader>
                                <CardBody>
                                    <Result></Result>
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
                        </Card>

                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
    )
}

export default List;