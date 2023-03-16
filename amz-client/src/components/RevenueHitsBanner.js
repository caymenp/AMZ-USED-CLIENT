import React, { useEffect } from "react";

export const AdBanner = () => {
  useEffect(() => {
    const div = document.querySelector(".adBanner");
    const script = document.createElement("script");

    script.setAttribute("data-cfasync", false);
    script.setAttribute("type", "text/javascript");
    script.setAttribute(
      "src",
      "//p456270.clksite.com/adServe/banners?tid=456270_892370_2"
    );

    div.appendChild(script);
    return () => {
      document.removeChild(script);
    };
  }, []);
};
