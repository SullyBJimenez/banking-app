import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogOut } from "../logOut.js";
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

export function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState()
  const [isOpen, setIsOpen] = useState(false);
  const name = window.localStorage.getItem("name")
  const loggedInLocalStorage = window.localStorage.getItem("loggedIn")

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem("loggedIn"))
  }, [loggedInLocalStorage])

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
                    <LogOut setIsLoggedIn={setIsLoggedIn}>

                    </LogOut>
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
