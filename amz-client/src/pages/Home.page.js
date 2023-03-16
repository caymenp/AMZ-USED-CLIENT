import { height } from "@mui/system";
import React from "react";
import { LoginButton } from "../components/buttons/login.button";
import { HomeHero } from "../components/HomeHero";
import { MembershipCTABanner } from "../components/HomePage/FreeMembershipCTA";
import { HowItWorks } from "../components/HomePage/HowItWorks";
import { WhyUsed } from "../components/HomePage/WhyUsed";
import { SplashCard } from "../components/UI-Cards/SplashCard";
import LOGO from "../util/media/AMZused_LOGO.png";

export const Home = () => {
  return (
    <div>
      <HomeHero />
      <MembershipCTABanner />
      <HowItWorks />
    </div>
  );
};
