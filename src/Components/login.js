import React, {useState} from 'react';
import { getData } from '../getData.js';
import { Card } from './context.js';

// ToDo: 
// get name, email, balance
// store within local storage
// display info on screen

export function Login(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
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
        ).then((res) => res.json())
        .then(async (data) => {
          console.log(data, "user")
          if(data.status === "ok") {
            window.localStorage.setItem("token", data.data)
            window.localStorage.setItem("LoggedIn", true)
            await getData();
            window.location.href = "../loginSuccess"
          }
        })
        try {
            const result = await response.json();
            console.log("Result: ", result);
            if(result.status === 401){
                return window.alert(result.error)
            }
        } catch (error){
            console.error("Error: ", error);
        }
      
    }

    return (
        <Card
        bgcolor="primary"
        header="Login"
        body={
            
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
        }
        />
    )
}