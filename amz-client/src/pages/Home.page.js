import React, { useEffect } from "react";
import { HomeHero } from "../components/HomeHero";
import { MembershipCTABanner } from "../components/HomePage/FreeMembershipCTA";
import { HowItWorks } from "../components/HomePage/HowItWorks";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      navigate("/account");
    }
  }, [navigate, user]);

  return (
    <div>
      <HomeHero />
      <MembershipCTABanner />
      <HowItWorks />
    </div>
  );
};
