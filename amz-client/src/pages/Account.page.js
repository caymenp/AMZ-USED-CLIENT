import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLoader } from "../components/pageLoader";
import { useProductActions, useProductData } from "../contexts/product.context";
import { ProductCards } from "../components/UI-Cards/ProductCards";
import { AccountActionBar } from "../components/AccountActionBar";
import "../styles/pageStyles/accountPage.css";
import NewProductModal from "../components/NewProduct.modal";
import ConfirmationModal from "../components/ConfirmationModal";
import ProductDetailModal from "../components/ProductDetailModal";
import { AdterraBanner } from "../components/AdsBanner";
import { UserNotAuth } from "../components/UserNotAuth";

export const AccountPage = () => {
  const data = useProductData();
  const actions = useProductActions();
  const { user } = useAuth0();
  const [prodID, setProdID] = useState();
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [loading, setLoading] = useState(false);
  // const { data, setData } = dataSet;
  const handleModalOpen = () => {
    setOpen(!open);
  };

  const handleConfirm = () => {
    setConfirm(!confirm);
  };

  useEffect(() => {
    console.log("Account Mounted");
    console.log(data);
  }, []);

  const deleteItem = (id) => {
    setProdID(id);
    setConfirm(true);
    // await actions.deleteProduct(id);
  };

  const deleteListing = async () => {
    setLoading(true);
    await actions.deleteProduct(prodID);
    setConfirm(false);
    setLoading(false);
  };

  const detailModal = (product) => {
    setSelectedProduct(product);
    setOpenDetails(true);
  };

  const handleDetailModal = () => {
    setOpenDetails(!openDetails);
  };

  // if (!user) {
  //   return <UserNotAuth />;
  // }

  return (
    <div id="accountWrapper">
      <div
        id="actionBarContainer"
        style={{
          backgroundColor: "whitesmoke",
          padding: 5,
          marginBottom: "2rem",
        }}
      >
        <AccountActionBar openModal={handleModalOpen} />
      </div>
      <AdterraBanner />
      <div id="accountContentContainer">
        <ProductCards
          handleDelete={deleteItem}
          handleDetails={detailModal}
          openModal={handleModalOpen}
        />
      </div>

      {open && <NewProductModal loadModal={handleModalOpen} />}

      {loading && <PageLoader loading={loading} />}

      {confirm && (
        <ConfirmationModal
          deleteItem={deleteListing}
          setConfirm={handleConfirm}
        />
      )}

      {openDetails && (
        <ProductDetailModal
          product={selectedProduct}
          handleClose={handleDetailModal}
        />
      )}
    </div>
  );
};
