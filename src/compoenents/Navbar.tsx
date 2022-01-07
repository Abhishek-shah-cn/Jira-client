import React from "react";
import {
  AppBar,
  Toolbar,
  List,
  makeStyles,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Signup from "./SignUp";
import Login from "./Login";

const usedStyles = makeStyles({
  navbarDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    width: "90px",
    color: "white",
  },
});

const NavBar = (props: { user: string; setUser: (user: string) => void }) => {
  const classes = usedStyles();

  const logout = async () => {
    const response = await fetch("http://localhost:5000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    props.setUser("");
  };

  let auth;

  if (props.user === "") {
    auth = (
      <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
        <List>
          <Link to="/Signup"> SignUp</Link>
        </List>
        <List>
          <Link to="/Login"> Login</Link>
        </List>
      </Container>
    );
  } else {
    auth = (
      <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
        <List>
          <Link to="/Login" onClick={logout}>
            {" "}
            Logout
          </Link>
        </List>
      </Container>
    );
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
            <List>
              <Link to="/">Home</Link>
            </List>
            {auth}
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
