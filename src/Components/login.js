import React, {useState} from 'react';
import { Card } from './context.js';

export function Login(){
    console.log('hello')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = React.useState(true);
    
    const handleSubmit = async () =>{
        const raw = {
            email,
            password,
        };
        const response = await fetch(
            "http://localhost:2020/profile-login",
                {
                method: "POST",
                mode: "cors",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(raw),
                }
        );
        try {
            const result = await response.json();
            console.log("Result: ", result);
            if(result.status === 401){
                return window.alert(result.error)
            }
        } catch (error){
            console.error("Error: ", error);
        }
        setShow(false);
    }

    function clearForm() {
        setEmail("");
        setPassword("");
        setShow(true);
      }

    return (
        <Card
        bgcolor="primary"
        header="Login"
        body={
            show ? (
                <>
              Email address
              <br />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value = {email}
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
                value = {password}
                onChange = {(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleSubmit}
              >
                Login
              </button>
            </>
            ) : (
                <>
                  <h5>Login Successful</h5>
                  <button type="submit" className="btn btn-light" onClick={clearForm}>
                    Return to Login
                  </button>
                </>
              )
            
        }
        />
    )
}