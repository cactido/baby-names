import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { Row, Col, Card, CardImg, CardImgOverlay, CardTitle, CardText, Button } from 'reactstrap';
import Auth from '../utils/auth';

const Home = () => {
    
    const { loading, data } = useQuery(GET_ME);

    const userData = data?.me || {};

    useEffect(() => {
        if(!Auth.loggedIn()) {
            window.location.assign('/');
        }
      },[])

      const handleReDirClick = (event) => {
          const dir = event.target.name;
          window.location.assign(`/${dir}`);
      }

    return( 
        <Row>
            <Col xs="12" className="m-0 p-0" style={{ height: "500px" }}>
                <Card style={{backgroundColor: 'black'}}>
                    <CardImg width="100%" style={{ height: "100vh", opacity: "0.5" }} src={require('../assets/Carousel/Baby.jpg').default} alt="Card image cap"/>
                    <CardImgOverlay className="d-flex flex-column">
                        <CardTitle style={{color: 'pink'}} tag="h5" className="fw-bold fs-1">Welcome to Tot Titles Together {userData.display_name}</CardTitle>
                        <CardText style={{color: 'pink'}} className="fs-3">Our goal is to help expecting partners with rating names for their future children.</CardText>
                        <CardText style={{color: 'pink'}} className="fs-6">Here is your ID to share with your Partner:</CardText>
                        <CardText style={{backgroundColor: 'darkblue', color: 'pink'}} className="fs-3 d-flex justify-content-center">{userData._id}</CardText>
                        <Button onClick={handleReDirClick} name="Entry" className="mb-3" style={{backgroundColor: 'darkblue', color: 'pink'}}>Create Your Name List</Button>                    
                        <Button onClick={handleReDirClick} name="Compare" className="mb-3" style={{backgroundColor: 'darkblue', color: 'pink'}}>Rate Your Partners List</Button>                    
                        <Button onClick={handleReDirClick} name="List" className="mb-3" style={{backgroundColor: 'darkblue', color: 'pink'}}>View the Rated List</Button>                    
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
    )
}

export default Home;