import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../logOut.js";
import styled from "styled-components";
import { Login } from "./login.js";
import bank from "../images/bank.png"

const LoginAndLogout = styled.li`
  right: 5px;
  position: absolute;
  top: 15px
`;

const LogoImage = styled.img`
max-height: 30px;
padding-left: 10px;
`

const NameStyle = styled.span`
  display: inline-flex;
`

const LogoutButtonStyle = styled.button`
  display: contents;
`

export function NavBar() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const name = window.localStorage.getItem("name")
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg .bg-primary-subtle">
        <LogoImage src={bank} alt='logo'/>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home/">
            Bank Home Page
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {isLoggedIn ? (
                <>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/deposit/">
                      Deposit
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/withdraw/">
                      Withdraw
                    </Link>
                  </li>
                  <LoginAndLogout className="nav-item active">
                    <NameStyle>
                      Hello {name+ '   '}, 
                    <LogoutButtonStyle className="nav-link" onClick={logOut} to="/home/">
                      {'   '}Log Out?
                    </LogoutButtonStyle>
                      </NameStyle>
                  </LoginAndLogout>
                </>
              ) : (
                <LoginAndLogout>
                  <button id="loginBtn" onClick={() => setIsOpen(true)}>
                    Login
                  </button>
                  {isOpen && <Login setIsOpen={setIsOpen} />}
                </LoginAndLogout>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
