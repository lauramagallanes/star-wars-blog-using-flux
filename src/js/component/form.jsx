import React, { useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


export const Form = () => {

const {store, actions} = useContext(Context);
// const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [username, setUsername] = useState("");
let history = useHistory();


const handleSubmit = (e)=>{
    e.preventDefault()
   let onLogged = actions.login(firstName, lastName, email, password, username);
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setUsername("")

    onLogged ? history.push("/") : null;
    
  }
          

    return(
        <div className="container bg-light">
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstName" onChange={(e) => setFirstName(e.target.value)}
            value={firstName}/>
  </div>
  <div className="mb-3">
    <label for="lastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastName" onChange={(e) => setLastName(e.target.value)}
            value={lastName}/>
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}
            value={email}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)}
            value={password}/>
  </div>
  <div className="mb-3">
    <label for="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)}
            value={username}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
        )
    }