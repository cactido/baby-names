import React, { useEffect, useState } from 'react';
import { Nav, NavLink } from 'reactstrap';
import Auth from '../../utils/auth';

const Navigation = () => {

    const [pageState, setPageState] = useState({logged: false});

    const handleClick = (event) => {
      Auth.logout();
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
            <NavLink  onClick={handleClick}
            style={{color: 'lightpink', cursor: 'pointer'}} >
           Logout
           </NavLink>
          )}
        </Nav>
    )
}

export default Navigation;