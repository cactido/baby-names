import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const Navigation = () => {
    return(
        <Nav className="d-flex flex-row-reverse">
        <NavLink href="/faves" 
        style={{color: 'lightpink'}}>
          Favorites
          </NavLink>
           <NavLink href="/logout"
           style={{color: 'lightpink'}} >
          Logout
          </NavLink>
        </Nav>
    )
}

export default Navigation;