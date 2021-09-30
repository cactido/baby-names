import React from 'react';

import { Row, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

const List = () => {

    return (
        <Row>
            <Card className="m-0 p-0">
                <CardHeader className="main-card fs-1 fw-bold">Compared Lists</CardHeader>
                <Card className="m-1">
                    <CardHeader className="main-card fs-3">List Title</CardHeader>
                    <CardBody>
                        List Contents
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
        </Row>
    )
}

export default List;