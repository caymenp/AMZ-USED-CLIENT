import { height } from "@mui/system";
import React from "react";
import { LoginButton } from "../components/buttons/login.button";
import { HomeHero } from "../components/HomeHero";
import { SplashCard } from "../components/UI-Cards/SplashCard";
import LOGO from "../util/media/AMZused_LOGO.png";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <SplashCard />
    </>
  );
};
