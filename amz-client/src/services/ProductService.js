import axios from "axios";

export async function getAllProducts(email) {
  const params = {
    userEmail: email,
  };
  const response = await axios.get("https://api.amzused.com/app/userItems", {
    params: { userEmail: email },
  });

  return response;
}

export async function addNewProduct(email, prodURL) {
  const payload = {
    userEmail: email,
    productURL: prodURL,
  };
  const response = await axios.post(
    "https://api.amzused.com/app/addItem",
    payload
  );

  return response;
}

export async function deleteProduct(prodID) {
  const params = {
    params: {
      _id: prodID,
    },
  };
  const response = await axios.delete(
    "https://api.amzused.com/app/deleteItem",
    params
  );

  return response;
}

export async function refreshItem(prodID, prodURL, recePrice, email) {
  const payload = {
    _id: prodID,
    productURL: prodURL,
    recentPrice: recePrice,
    userEmail: email,
  };
  const response = await axios.post(
    "https://api.amzused.com/app/refreshItem",
    payload
  );

  return response;
}
