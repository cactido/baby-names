import React from 'react';

import { Row, Col, Card, CardImg, CardImgOverlay, CardTitle, CardText, Button } from 'reactstrap'

const Home = () => {

    return( 
        <Row>
            <Col xs="12" className="m-0 p-0" style={{ height: "500px" }}>
                <Card style={{backgroundColor: 'black'}}>
                    <CardImg width="100%" style={{ height: "100vh", opacity: "0.5" }} src={require('../assets/Carousel/Baby.jpg').default} alt="Card image cap"/>
                    <CardImgOverlay className="d-flex flex-column">
                        <CardTitle style={{color: 'pink'}} tag="h5" className="fw-bold fs-1">Welcome to Tot Titles Together</CardTitle>
                        <CardText style={{color: 'pink'}} className="fs-3">Our goal is to help expecting partners with rating names for their future children.</CardText>
                        <CardText style={{color: 'pink'}} className="fs-6">Here is your ID to share with your Partner:</CardText>
                        <CardText style={{backgroundColor: 'darkblue', color: 'pink'}} className="fs-3">Placeholder User ID</CardText>
                        <Button className="mb-3" style={{backgroundColor: 'darkblue', color: 'pink'}}>Create Your Name List</Button>                    
                        <Button className="mb-3" style={{backgroundColor: 'darkblue', color: 'pink'}}>Rate Your Partners List</Button>                    
                        <Button className="mb-3" style={{backgroundColor: 'darkblue', color: 'pink'}}>View the Rated List</Button>                    
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
    )
}

export default Home;