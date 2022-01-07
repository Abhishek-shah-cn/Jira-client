import Signup from "./compoenents/SignUp";
import NavBar from "./compoenents/Navbar";
import Home from "./compoenents/Home";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./compoenents/Login";
import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data, "check 4 home");
      setUser(data.name);
    })();
  });
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} setUser={setUser} />

        <Route path="/" exact component={() => <Home user={user} />} />
        <Route path="/Login" component={() => <Login setUser={setUser} />} />
        <Route path="/Signup" component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
