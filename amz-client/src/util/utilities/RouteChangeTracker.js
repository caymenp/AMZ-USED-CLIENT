import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export default function RouteChangeTracker() {
  const TRACKING_ID = "G-JN9YKFLXZ4";
  ReactGA.initialize(TRACKING_ID);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname + location.search + location.hash;
    ReactGA.send({
      hitType: "pageview",
      page: currentPath,
      page_search: location.search,
      page_hash: location.hash,
    });
  }, [location]);
}
