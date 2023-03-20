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
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [validationError, setValidationError] = useState();

  const handleClose = () => {
    loadModal();
  };

  const handleAdd = async () => {
    await actions.addNewItem(url);
    handleClose();
  };

  const handleInput = (event) => {
    setURL(event.target.value);

    if (event.target.value.indexOf(" ") >= 0) {
      setBtnDisabled(true);
      setValidationError(
        "The URL cannot contain any spaces. Please ensure you're using the FULL URL from Amazon."
      );
    } else if (event.target.value.indexOf("dp") >= 0) {
      setBtnDisabled(true);
      setValidationError(
        "This doesn't look like an Amazon link we've seen before. Please make sure to copy the FULL URL from Amazon."
      );
    } else {
      setBtnDisabled(false);
    }
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
        {validationError && (
          <span style={{ color: "	#EE4B2B" }}>{validationError}</span>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            disabled={btnDisabled}
            onClick={handleAdd}
          >
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
