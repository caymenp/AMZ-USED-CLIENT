import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AccountActionBar } from "../AccountActionBar";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { LogoutButton } from "../buttons/logout.button";

export const UserProfileCard = () => {
  const { user } = useAuth0();
  return (
    <>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h5">Welcome Back!</Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <img
            style={{ borderRadius: 75 }}
            src={user.picture}
            alt={user.name}
          />
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={20} sx={{ width: "90%", margin: "auto" }}>
            <Grid container>
              <Grid item xs={12} textAlign="center">
                <Typography variant="h6">User Details</Typography>
              </Grid>
              <Grid item xs={12}>
                Username: {user.name}
              </Grid>
              <Grid item xs={12}>
                Email: {user.email}
              </Grid>
              <Grid item xs={12} textAlign="center">
                <LogoutButton />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
