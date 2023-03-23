import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  function inboxEvent() {
    // clevertap.event.push('React Web Test');
  };

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
          {/* <div><button  id='CMInbox' style={{ marginLeft: '8px'}}>Inbox</button></div> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};
  
export default Navbar;