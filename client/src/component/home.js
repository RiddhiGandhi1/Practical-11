import axios from 'axios';
import React from 'react';

function Search() {
  const user = {
    username: "",
    password: "",
    name: "",
    age: 0,
  };

  const searchUsers = () => {
    axios.post("/api/search", user).then((res) => console.log(res.data));
  }

  return (
    <div className="App"><br/><br/>
        <h1>User</h1><br/>
        <input placeholder = "Search" onChange = { (e) => (user.username = e.target.value) } />&nbsp;
        <button onClick = { searchUsers }>Search</button>
    </div>
  );
}

export default Search;
