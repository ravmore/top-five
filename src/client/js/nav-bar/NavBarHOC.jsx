import React from 'react';
import NavBar from './NavBar';

const NavBarHOC = (WrappedComponent) =>
  class NavBarHOC extends React.Component {
    render() {
      return (
        <div>
          <NavBar />
          <WrappedComponent { ...this.props } />
        </div>
      );
    }
  }

export default NavBarHOC;