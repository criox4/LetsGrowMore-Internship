import "./styles.css";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState();
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
  };

  return (
    <>
      <header className="headbar">
        <h1> my react </h1>
        <button class="btn" onClick={loadUsers}>
          Get Users
        </button>
      </header>
      <div className="row">
        {users?.map((current, index) => {
          return (
            <div className="column" key={index}>
              <img src={current.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-name">
                  {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-email">{current.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
