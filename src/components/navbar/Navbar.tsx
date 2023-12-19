import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void; 
}

const NavbarStyled = styled.nav`
  padding-left: 100px;
  padding-right: 100px;
`;

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, onLogout }) => {
  return (
    <NavbarStyled className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          {!isAuthenticated && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/preferences">
                  User Preference
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={onLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
