import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Paper, Typography } from "@mui/material";
import { LoginButton } from "./buttons/login.button";
import { SignupButton } from "./buttons/signup.button";

export const UserNotAuth = () => {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "3rem",
        width: "90%",
      }}
    >
      <Typography variant="h4" textAlign={"center"}>
        Whoops!
      </Typography>
      <Typography variant="subtitle1" textAlign="center" marginTop={"2rem"}>
        Looks like you are not signed in. <br></br> You must be logged in to
        your member profile to access this page.
      </Typography>
      <Typography variant="h6" textAlign="center" marginTop={"2rem"}>
        Already a member?
      </Typography>
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <LoginButton />
      </div>
      <hr
        style={{
          border: "1pt black solid",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      ></hr>
      <Typography variant="h6" textAlign="center">
        Not A Member?
      </Typography>
      <Typography variant="subtitle2" textAlign="center">
        Signup today! Membership is free!
      </Typography>
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <SignupButton />
      </div>
    </div>
  );
};
