import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login ({ setLoginUser }) {

    const user = {
        username: "",
        password: ""
    };

    let redi = useNavigate();

    const loginUser=()=>{
        axios.post("/api/login",user).then((res)=>
            {
                if((res.data.data).length === 1)
                {
                    redi("/home", { replace:true })
                    
                }
                else{
                    console.log("wrong");
                }
            }
        );
    }

    return (
        <div className="App"><br/><br/>
            <h1>Login</h1><br/>
            <input placeholder = "username" onChange = { (e) => (user.username = e.target.value) } /><br/><br/>
            <input type="password" placeholder = "password" onChange = { (e) => (user.password = e.target.value) } /><br/><br/>
            <button onClick = { loginUser } const path = '/home'>Login</button><br/>
            <p>Not have an account ? <a href="/">Sign Up</a></p>
        </div>
    );
}

export default Login;
