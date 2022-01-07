import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const Login = (props: { setUser: (user: string) => void }) => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const btnstyle = { margin: "8px 0" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();
    // console.log(email, password);

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data, "Check this api login data");
    console.log(data.name);

    setRedirect(true);
    props.setUser(data.name);
  };

  if (redirect) {
    return <Redirect to="./" />;
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid alignItems="center">
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={submit}>
          <TextField
            label="email"
            placeholder="Enter Email"
            fullWidth
            required
            onChange={(event: any) => setEmail(event.target.value)}
          />
          <TextField
            label="password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            onChange={(event: any) => setPassword(event.target.value)}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
