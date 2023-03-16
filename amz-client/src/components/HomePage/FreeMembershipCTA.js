import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { SignupButton } from "../buttons/signup.button";

export const MembershipCTABanner = () => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,.3)",
        padding: "2rem",
        marginBottom: "3rem",
      }}
    >
      <Grid
        container
        direction={"row"}
        width={"90%"}
        textAlign={"center"}
        marginLeft="auto"
        marginRight="auto"
      >
        <Grid item xs={12}>
          <Typography variant="h4">
            Membership is <strong style={{ color: "#1565C0" }}>FREE!</strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Members gain access to AMZ-Next, and realize all of the savings on
            items they were already buying!
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="1rem">
          <SignupButton />
        </Grid>
      </Grid>
    </div>
  );
};
