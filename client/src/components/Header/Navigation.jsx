import React, { useEffect, useState } from 'react';
import { Nav, NavLink, Row, Col } from 'reactstrap';
import Auth from '../../utils/auth';

const Navigation = () => {

    const [pageState, setPageState] = useState({logged: false});

    const handleClick = (event) => {
      switch (event.target.name) {
        case 'logout':
          Auth.logout();
          break;
        case 'Home':
          window.location.assign(`/${event.target.name}`);
          break;
        case 'Entry':
          window.location.assign(`/${event.target.name}`);
          break;
        case 'Compare':
          window.location.assign(`/${event.target.name}`);
          break;
        case 'List':
          window.location.assign(`/${event.target.name}`);
          break;
        
      }
      
    }

    useEffect(() => {
      if(Auth.loggedIn()) {
        setPageState({logged: true});
      } else {
        setPageState({logged: false});
      }
    },[])
    return(
        <Nav className="d-flex flex-row-reverse">
          {pageState.logged && (
            <Row>
              <Col>
              <NavLink name='Home' onClick={handleClick}
            style={{color: 'lightpink', cursor: 'pointer'}} >
           Home
           </NavLink>
           </Col>
              <Col>
              <NavLink name='List' onClick={handleClick}
            style={{color: 'lightpink', cursor: 'pointer'}} >
           Names
           </NavLink>
           </Col>
              <Col>
              <NavLink name='Compare' onClick={handleClick}
            style={{color: 'lightpink', cursor: 'pointer'}} >
           Rate
           </NavLink>
           </Col>
              <Col>
              <NavLink name='Entry' onClick={handleClick}
            style={{color: 'lightpink', cursor: 'pointer'}} >
           Add
           </NavLink>
           </Col>
              <Col>
              <NavLink name='logout'  onClick={handleClick}
            style={{color: 'lightpink', cursor: 'pointer'}} >
           Logout
           </NavLink>
           </Col>
            </Row>
          )}
        </Nav>
    )
}

export default Navigation;