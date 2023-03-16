import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export const WhyUsed = () => {
  return (
    <div style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}>
      <Grid
        container
        direction={"row"}
        sx={{ background: "rgba(255, 255, 255, 0.3)" }}
      >
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4">How We Do It</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
