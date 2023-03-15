import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export const AccountActionBar = ({ openModal }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Button variant="outlined">Account</Button>
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
