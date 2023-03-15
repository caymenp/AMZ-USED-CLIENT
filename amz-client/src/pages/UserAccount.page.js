import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProfileCard } from "../components/UI-Cards/UserProfile";
import { ProfileActionBar } from "../components/ProfileActionBar";
import { userNotAuth } from "../components/UserNotAuth";

export const UserAccount = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!user) {
    return <userNotAuth />;
  }

  return (
    <div>
      <ProfileActionBar />
      <UserProfileCard />
    </div>
  );
};
