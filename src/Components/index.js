import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "./home.js";
import { CreateAccount } from "./createaccount.js";
import { Login } from "./login.js";
import { Deposit } from "./deposit.js";
import { Withdraw } from "./withdraw.js";
import { NavBar } from "./navbar.js";
import { LoginSuccess } from "./loginSuccess.js";

export const UserContext = React.createContext(null);

export function Spa() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home/" exact element={<Home />} />
        <Route path="/createaccount/" exact element={<CreateAccount />} />
        <Route path="/login/" exact element={<Login />} />
        <Route path="/deposit/" exact element={<Deposit />} />
        <Route path="/withdraw/" exact element={<Withdraw />} />
        <Route path="/loginSuccess/" exact element={<LoginSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
