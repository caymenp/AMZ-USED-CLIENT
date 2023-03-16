import { Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import phoneRender from "../util/media/iPhone 11 Render.png";

export const HomeHero = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid
          container
          sx={{
            textAlign: "center",
            verticalAlign: "center",
            overflowX: "hidden",
          }}
        >
          <Grid item xs={12} md={5} sx={{ margin: "auto" }}>
            <Typography variant="h4" color={"white"}>
              We save you money
            </Typography>
            <Typography variant="h4">
              by finding the <strong>hidden</strong> deals 💰
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ margin: "auto", marginRight: "auto", marginLeft: "auto" }}
          >
            <img
              style={{
                width: "30rem",
                height: "auto",
                margin: "auto",
              }}
              alt="AMZ-USED"
              src={phoneRender}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
