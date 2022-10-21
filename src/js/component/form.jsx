import React, { useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


export const Form = () => {

const {store, actions} = useContext(Context);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

let history = useHistory();


const handleSubmit = async (e)=>{
    e.preventDefault()
   let onLogged = await actions.login(email, password);
   console.log(onLogged)
    
    setEmail("")
    setPassword("")
    
    onLogged ? history.push("/") : null;
    
  }
          

    return(
        <div className="container bg-light">
        <form onSubmit={handleSubmit}>
  
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}
            value={email}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)}
            value={password}/>
  </div>
    
  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>
        )
    }