import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "../styles/componentStyles/header.css";
import LOGO from "../util/media/AMZused_LOGO.png";
import { LoginButton } from "./buttons/login.button";

export const Header = () => {
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
          <LoginButton />
        </Grid>
      </Grid>
    </div>
  );
};
