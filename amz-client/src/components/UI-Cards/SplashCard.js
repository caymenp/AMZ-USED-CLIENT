import React from "react";
import Paper from "@mui/material/Paper";
import "../../styles/componentStyles/SplashCard.css";
import { SignupButton } from "../buttons/signup.button";

export const SplashCard = () => {
  return (
    <div id="splashCardContainer">
      <Paper elevation={15}>
        <div id="homeCardContent">
          <h2>Save On Any Product!</h2>
          <text>
            Effortlessly add items to your AMZ-Used account to unlock amazing
            deals, that arent so easy to find!
          </text>
          <h3>No more buyers remorse</h3>
          <text>
            We track your items, and alert you in real time of any new listings
            that have been added (if cheaper). 😉 We do the heavy lifting, you
            sit back and think of what you will do with all of the savings!
          </text>
          <div id="signUpBTNWrapper">
            <SignupButton />
          </div>
        </div>
      </Paper>
    </div>
  );
};
