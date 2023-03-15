import axios from "axios";

export async function getAllProducts(email) {
  const params = {
    userEmail: email,
  };
  const response = await axios.get("http://localhost:3000/app/userItems", {
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
    "http://localhost:3000/app/addItem",
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
    "http://localhost:3000/app/deleteItem",
    params
  );

  return response;
}

export async function refreshItem(prodID, prodURL) {
  const payload = {
    _id: prodID,
    productURL: prodURL,
  };
  const response = await axios.post(
    "http://localhost:3000/app/refreshItem",
    payload
  );

  return response;
}
