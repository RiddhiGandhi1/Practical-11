import axios from 'axios';
import React from 'react';

function Register() {
  const user = {
    username: "",
    password: "",
    name: "",
    age: 0,
  };

  const registerUsers = () => {
    //   if(username && password && name && age) {
    //     axios.post("/api/registration", user).then((res) => console.log(res.data));
    //   }else{
    //     alert("Invalid Input")
    //   }
    axios.post("/api/registration", user).then((res) => console.log(res.data));
  }

  return (
    <div className="App"><br/><br/>
      <h1>Register</h1><br/>
      <input placeholder = "username" onChange = { (e) => (user.username = e.target.value) } /><br/><br/>
      <input type="password" placeholder = "password" onChange = { (e) => (user.password = e.target.value) } /><br/><br/>
      <input placeholder = "name" onChange = { (e) => (user.name = e.target.value) } /><br/><br/>
      <input placeholder = "age" onChange = { (e) => (user.age = Number(e.target.value)) } /><br/><br/>
      <button onClick = { registerUsers }>Sign Up</button><br/><br/>
      <p>Already have an account ? <a href="/login">Sign in</a></p>
    </div>
  );
}

export default Register;
