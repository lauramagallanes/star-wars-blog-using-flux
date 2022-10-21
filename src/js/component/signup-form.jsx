import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


export const Signup = () => {

    const { store, actions } = useContext(Context);

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    let history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault()
        let onSignupped = await actions.signup(first_name, last_name, email, password, username);
        console.log(onSignupped)

        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setUsername("")

        onSignupped ? history.push("/") : null;

    }


    return (
        <div className="container d-flex justify-content-center">
        <div className="col-6 bg-light d-flex justify-content-center p-5">
            <form onSubmit={handleSubmit}>
            <h1 style={{margin: "auto"}}>Signup</h1>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" onChange={(e) => setFirstName(e.target.value)}
                        value={first_name} />                    
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" onChange={(e) => setLastName(e.target.value)}
                        value={last_name} />                    
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)}
                        value={username} />                    
                </div>

                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
        </div>
    )
}