import React from "react";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "./buttons/logout.button";

export const ProfileActionBar = () => {
  const navigate = useNavigate();
  const onNavigate = () => {
    let path = "/account";
    navigate(path);
  };
  return (
    <div
      id="actionBarContainer"
      style={{
        display: "flex",
        backgroundColor: "whitesmoke",
        padding: 5,
        textAlign: "left",
        flexDirection: "row",
      }}
    >
      <button
        onClick={onNavigate}
        style={{ border: 0, backgroundColor: "transparent" }}
      >
        <KeyboardBackspaceRoundedIcon />
      </button>
      <p
        onClick={onNavigate}
        style={{
          paddingLeft: 5,
          margin: 0,
          marginTop: "auto",
          marginBottom: "auto",
          textAlign: "left",
          fontSize: "0.9rem",
        }}
      >
        Back
      </p>
    </div>
  );
};
