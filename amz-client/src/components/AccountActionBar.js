import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";

export const AccountActionBar = ({ openModal }) => {
  const navigate = useNavigate();
  const RouteChange = () => {
    let path = "/user";
    navigate(path);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Button onClick={RouteChange} variant="outlined">
            Account
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={openModal}>
            Add Product
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
