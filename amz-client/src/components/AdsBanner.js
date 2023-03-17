import React, { useEffect, useRef, useState } from "react";

export const AdterraBanner = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 730;

  const banner = useRef();

  let atOptions = {
    key: "",
    format: "iframe",
    height: 0,
    width: 0,
    params: {},
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    if (width < breakPoint) {
      atOptions.key = "47eeffc47431a6c4c6a0eecdd3ecc57c";
      atOptions.height = 50;
      atOptions.width = 320;
    } else {
      atOptions.key = "4c5581218a5c987490d5ea466bd596e7";
      atOptions.height = 90;
      atOptions.width = 728;
    }

    if (!banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.profitabledisplaynetwork.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      if (banner.current) {
        banner.current.append(conf);
        banner.current.append(script);
      }
    }
  }, []);

  return <div style={{ textAlign: "center" }} ref={banner} />;
};
