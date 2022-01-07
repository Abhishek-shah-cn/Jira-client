import React, { useState } from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 5 };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data, "Check this api register data");
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="./Login" />;
  }

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid alignItems="center">
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={submit}>
          <TextField
            fullWidth
            label="name"
            placeholder="Enter your Name"
            onChange={(event: any) => setName(event.target.value)}
          />
          <TextField
            fullWidth
            label="email"
            placeholder="Enter your Email"
            onChange={(event: any) => setEmail(event.target.value)}
          />
          <TextField
            fullWidth
            label=" password"
            placeholder="Password"
            onChange={(event: any) => setPassword(event.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={marginTop}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
