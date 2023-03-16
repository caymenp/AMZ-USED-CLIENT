import { Typography, Paper, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import phoneRender from "../util/media/iPhone 11 Render.png";

export const HomeHero = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Grid
        container
        sx={{
          textAlign: "right",
          verticalAlign: "center",
          overflowX: "hidden",
          height: "calc(100vh - 88px)",
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{ margin: "auto", marginLeft: "2rem", marginRight: "2rem" }}
        >
          <Typography variant="h4" color={"white"}>
            We save you money
          </Typography>
          <Typography variant="h4">
            by finding the <strong>hidden</strong> deals 💰
          </Typography>

          <Button
            sx={{ marginTop: "2rem" }}
            variant="contained"
            onClick={() => {
              let e = document.getElementById("HowItWorks");

              e.scrollIntoView({
                block: "end",
                behavior: "smooth",
                inline: "center",
              });
            }}
          >
            Find Out How!
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            margin: "auto",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
          }}
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
  );
};
