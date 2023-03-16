import React, { useEffect } from "react";

export const AdBanner = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    const script = document.createElement("script");

    script.setAttribute("type", "text/javascript");
    script.setAttribute(
      "src",
      "https://udbaa.com/slider.php?section=General&pub=292512&ga=g&side=left"
    );

    body.appendChild(script);
    return () => {
      document.removeChild(script);
    };
  }, []);
};
