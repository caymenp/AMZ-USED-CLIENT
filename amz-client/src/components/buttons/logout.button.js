import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button
      className="button__logout"
      onClick={handleLogout}
      style={{
        backgroundColor: "#c97c08",
        border: 0,
        color: "whitesmoke",
        padding: 10,
        width: "7rem",
        borderRadius: 20,
      }}
    >
      Log Out
    </button>
  );
};
