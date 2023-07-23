import React, { useState } from "react";
import { getData } from "../getData.js";
import styled from "styled-components";
import { Link } from "react-router-dom";


const LoginMoadDiv = styled.div`
  position: absolute;
  top: 20rem;
  right: 15rem;
  z-index: 10;
  width: 500px;
  height: 500px;
  background: white;
  border-radius: 35px;
  border-style: solid;
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

const ModalStyle = styled.div`
  padding: 40px;
`;

const ModalHeading = styled.h1`
  font-weight: 500;
  font-size: 25px;
  text-align: left;
`;

const CloseModal = styled.div`
  position: absolute;
  text-align: right;
  right: 3rem;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

const LoginButton = styled.button`
  position: absolute;
  text-align: right;
  right: 80%;
`;

export function Login({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const raw = {
      email,
      password,
    };
    const response = await fetch("https://sully-jimenezfullstackbankingapplication-ttsi.onrender.com/profile-login", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(raw),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.status === "ok") {
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          await getData();
          window.location.href = "../loginSuccess/";
        }
      });
    try {
      const result = await response.json();
      console.log("Result: ", result);
      if (result.status === 401) {
        return window.alert(result.error);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <LoginMoadDiv>
      <ModalStyle>
        <CloseModal onClick={() => setIsOpen(false)}>x</CloseModal>
        <ModalHeading>Email address</ModalHeading>
        <br />
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <br />
        <ModalHeading>Password</ModalHeading>
        <br />
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <br />
        <LoginButton
          type="submit"
          className="btn btn-light"
          onClick={handleSubmit}
        >
          Login
        </LoginButton>
        <div onClick={() => setIsOpen(false)}>
          Don't have an account?{" "}
          <Link className="nav-link" to="/createaccount/">
            Sign Up
          </Link>
        </div>
      </ModalStyle>
    </LoginMoadDiv>
  );
}
