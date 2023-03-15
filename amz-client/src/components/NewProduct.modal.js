import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useProductActions } from "../contexts/product.context";

export default function NewProductModal({ loadModal }) {
  const actions = useProductActions();
  const [open, setOpen] = useState(true);
  const [url, setURL] = useState("");

  const handleClose = () => {
    loadModal();
  };

  const handleAdd = async () => {
    await actions.addNewItem(url);
    handleClose();
  };

  const handleInput = (event) => {
    setURL(event.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Adding a new product is super easy! We handle all the hard work, you
            just copy the <strong>full</strong> URL of the product you want to
            start tracking from Amazon. Once you have it, you can paste it in
            the field below, then click "Add Product".
          </DialogContentText>
          <TextField
            margin="normal"
            id="name"
            label="Amazon Product URL"
            type="URL"
            fullWidth
            variant="standard"
            value={url}
            onChange={handleInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleAdd}>
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
