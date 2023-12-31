import React, { useEffect } from "react";
import { render } from "../helpers.js";
import { Card } from "./context.js";

export function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(Boolean);

  useEffect(() => {
    if (password.length === 0 && email.length === 0 && name.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [password.length, email.length, name.length]);

  function validate(field, label) {
    if (!field) {
      setStatus(window.alert("Error: " + label + " cannot be empty"));
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (label === "password" && password.length < 8) {
      setStatus(
        window.alert("Error: " + label + " cannot be less than 8 characters")
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  async function handleCreate() {

    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    const raw = {
      email,
      name,
      password,
    };
    const url = render;


    try {
      const response = await fetch(
        url+"profile",
        {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(raw),
        }
      );
      const result = await response.json();
      console.log("Result:", result);
      if(result.status === 500){
        return window.alert(result.error)
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email address
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
            Password
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
            <button
              type="submit"
              className="btn btn-light"
              disabled={isDisabled}
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}