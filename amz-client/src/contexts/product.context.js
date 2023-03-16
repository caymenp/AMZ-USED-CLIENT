import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState, useContext, createContext } from "react";
import App from "../App";
import { PageLoader } from "../components/pageLoader";
import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  refreshItem,
} from "../services/ProductService";

const ProductContext = createContext();

const initialData = {
  data: [],
  actions: {},
};

export const ProductProvider = ({ children }) => {
  const { user } = useAuth0();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const getAllUserItems = async () => {
    const res = await getAllProducts("caymenpope10@gmail.com");
    const newData = res.data;

    //Setting initial data object as the response from API
    initialData.data = newData;

    console.log("Setting new data on context");
    //Set state data
    setData(initialData);
  };

  const addNewItem = async (prodURL) => {
    await addNewProduct(user.email, prodURL);
    await getAllUserItems();
  };

  const deleteItem = async (prodID) => {
    await deleteProduct(prodID);
    await getAllUserItems();
  };

  const refreshProduct = async (prodID, prodURL) => {
    const newData = await refreshItem(prodID, prodURL);
    return newData;
  };

  const dispatchActions = {
    getAllProducts: async function () {
      await getAllUserItems();
    },
    addNewItem: async function (prodURL) {
      setLoading(true);
      await addNewItem(prodURL);
      setLoading(false);
    },
    deleteProduct: async function (prodID) {
      setLoading(true);
      await deleteItem(prodID);
      setLoading(false);
    },
    refreshProductPrice: async function (prodID, prodURL) {
      setLoading(true);
      const newData = await refreshProduct(prodID, prodURL);
      setLoading(false);
      return newData;
    },
  };

  //Get All Items
  useEffect(() => {
    setLoading(true);
    console.log("PRODUCT CONTEXT MOUNTED");
    getAllUserItems();
    initialData.actions = dispatchActions;
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ProductContext.Provider value={data}>
      {children}
      {loading && <PageLoader />}
    </ProductContext.Provider>
  );
};

export function useProductData() {
  const context = useContext(ProductContext);
  if (context === undefined) return;
  return context.data;
}

export function useProductActions() {
  const context = useContext(ProductContext);
  if (context === undefined) return;
  return context.actions;
}
