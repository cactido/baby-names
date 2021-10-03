import React from 'react';
import { Col, Row } from 'reactstrap';
import Navigation from './Navigation';

const Header = () => {

    return (
        <Row className="header">
            <Col xs="4" className="d-flex align-items-center">
                <h3>Tot Titles Together</h3>
            </Col>
            <Col xs="8">
                <Navigation></Navigation>
            </Col>
        </Row>
    )
}

export default Header;