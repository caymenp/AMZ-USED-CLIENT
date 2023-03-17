import React, { useEffect, useRef, useState } from "react";

export const MobileAd = () => {
  const banner = useRef();

  let atOptions = {
    key: "47eeffc47431a6c4c6a0eecdd3ecc57c",
    format: "iframe",
    height: 50,
    width: 320,
    params: {},
  };

  useEffect(() => {
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

export const DesktopAd = () => {
  const banner = useRef();

  let atOptions = {
    key: "4c5581218a5c987490d5ea466bd596e7",
    format: "iframe",
    height: 90,
    width: 728,
    params: {},
  };

  useEffect(() => {
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

export const AdterraBanner = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 730;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return width < breakPoint ? <MobileAd /> : <DesktopAd />;
};
