import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export const HowItWorks = () => {
  return (
    <div
      id="HowItWorks"
      style={{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "4rem",
      }}
    >
      <Grid container direction={"row"}>
        <Grid item xs={12} textAlign="center" marginBottom={3}>
          <Typography variant="h4">How It Works</Typography>
        </Grid>
      </Grid>
      <Grid container direction={"row"} rowGap={2}>
        <Grid item xs={2} textAlign="right">
          <Typography variant="h6">✔</Typography>
        </Grid>
        <Grid item xs={9} marginLeft={2}>
          <Typography variant="body1">
            Members have access to our price tracking tool. Once you find a
            product you would like to track for better pricing, you copy the
            Amazon URL and paste it in our tracking tool.
          </Typography>
        </Grid>
        <Grid item xs={2} textAlign="right">
          <Typography variant="h6">✔</Typography>
        </Grid>
        {/* <Grid item xs={2} textAlign="center">
          <Typography variant="h6">Step 1:</Typography>
        </Grid> */}
        <Grid item xs={9} marginLeft={2}>
          <Typography variant="body1">
            We immediately search our database for any Amazon Warehouse listings
            that match your product. We tell you what the current Warehouse deal
            is and what the savings are, compared to the normal price!
          </Typography>
        </Grid>
        <Grid item xs={2} textAlign="right">
          <Typography variant="h6">✔</Typography>
        </Grid>
        {/* <Grid item xs={2} textAlign="center">
          <Typography variant="h6">Step 1:</Typography>
        </Grid> */}
        <Grid item xs={9} marginLeft={2}>
          <Typography variant="body1">
            If you like the current Warehouse pricing, you can click on the link
            to continue your purchase on Amazon.
          </Typography>
        </Grid>
        <Grid item xs={2} textAlign="right">
          <Typography variant="h6">✔</Typography>
        </Grid>
        {/* <Grid item xs={2} textAlign="center">
          <Typography variant="h6">Step 1:</Typography>
        </Grid> */}
        <Grid item xs={9} marginLeft={2}>
          <Typography variant="body1">
            If the price isnt as low as you'd like it to be, we will continue to
            check for updated listings <strong>automatically</strong>. If we
            catch a new listing that is lower than what we have already
            reported, we will alert you via email!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
