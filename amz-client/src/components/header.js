import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "../styles/componentStyles/header.css";
import LOGO from "../util/media/AMZused_LOGO.png";
import { LoginButton } from "./buttons/login.button";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./buttons/logout.button";

export const Header = () => {
  const { user } = useAuth0();
  return (
    <div id="headerContainer">
      <Grid container direction={"row"}>
        <Grid item xs={6} textAlign="left">
          <img id="brandLOGO" alt="AMZ-Used" src={LOGO} />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{ margin: "auto", marginRight: "1rem", textAlign: "right" }}
        >
          {user && <LogoutButton />}
          {!user && <LoginButton />}
        </Grid>
      </Grid>
    </div>
  );
};
