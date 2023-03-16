import React, { useEffect, useRef } from "react";

export const AdterraBanner = () => {
  const banner = useRef();

  const atOptions = {
    key: "e3aa72cb0f62015fd801c7c4897786d4",
    format: "iframe",
    height: 60,
    width: 468,
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
