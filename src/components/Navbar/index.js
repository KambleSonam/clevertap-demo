import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
import bell from '../../assets/bell.png'
import promptBell from '../../assets/promptBell.svg'
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/events' activestyle="true">
            Events
          </NavLink>
          <NavLink to='/annual' activestyle="true">
            Annual Report
          </NavLink>
          <NavLink to='/team' activestyle="true">
            Teams
          </NavLink>
          <NavLink to='/blogs' activestyle="true">
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activestyle="true">
            Sign Up
          </NavLink>
          <div id='language'><img style={{width: '24px', height: '24px'}} src={promptBell} className="bell-icon" alt="bell" /></div>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;