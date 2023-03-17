import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Auth0ProviderWithNavigate } from "./contexts/user.context";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(document.getElementById("root"));
const TRACKING_ID = "G-JN9YKFLXZ4";
ReactGA.initialize(TRACKING_ID);
root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);

const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};
console.log(window.location.pathname);
reportWebVitals(SendAnalytics);
