import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Home } from "./pages/Home.page";
import { AccountPage } from "./pages/Account.page";
import { CallbackPage } from "./pages/Callback.page";
import "./App.css";
import { Header } from "./components/header";
import { ProductProvider } from "./contexts/product.context";
import { PageLoader } from "./components/pageLoader";
import { UserAccount } from "./pages/UserAccount.page";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader loading={true} />
      </div>
    );
  }

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
}

export default App;
