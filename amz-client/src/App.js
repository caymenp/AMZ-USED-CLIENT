import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0, User } from "@auth0/auth0-react";
import { Home } from "./pages/Home.page";
import { AccountPage } from "./pages/Account.page";
import { CallbackPage } from "./pages/Callback.page";
import "./App.css";
import { Header } from "./components/header";
import { ProductProvider, useProductData } from "./contexts/product.context";
import { PageLoader } from "./components/pageLoader";
import { UserAccount } from "./pages/UserAccount.page";
import { UserNotAuth } from "./components/UserNotAuth";

function App() {
  const { isLoading, isAuthenticated, user } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader loading={true} />
      </div>
    );
  }

  if (user) {
    return (
      <ProductProvider>
        <div className="page-layout">
          <Header />
          <div className="contentWrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/user" element={<UserAccount />} />
              <Route path="/callback" element={<CallbackPage />} />
            </Routes>
          </div>
        </div>
      </ProductProvider>
    );
  } else {
    return (
      <div className="page-layout">
        <Header />
        <div className="contentWrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/callback" element={<CallbackPage />} />
            <Route path="*" element={<UserNotAuth />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
