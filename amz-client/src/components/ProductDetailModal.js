import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useProductActions } from "../contexts/product.context";
import { useAuth0 } from "@auth0/auth0-react";
import AMZad from "./AMZad";
import { Helmet } from "react-helmet";

export default function ProductDetailModal({
  product,
  handleClose,
  openModal,
}) {
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth0();
  const actions = useProductActions();
  const initialData = product;
  const [productData, setProductData] = React.useState(initialData);
  const [loading, setLoading] = React.useState(true);
  //AMZ ADS
  React.useEffect(() => {
    setOpen(openModal);
    setLoading(false);
  }, []);

  const handleRefresh = async () => {
    const newData = await actions.refreshProductPrice(
      productData._id,
      productData.productURL,
      productData.productPriceUsed[productData.productPriceUsed.length - 1]
        .usedPrice,
      user.email
    );

    setProductData(newData.data);
  };

  const handleRefreshOnClose = () => {
    if (initialData === productData) {
      setLoading(true);
      handleClose();
    } else {
      actions.getAllProducts();
      setLoading(true);
      handleClose();
    }
  };

  const getUsedPrice = (item) => {
    if (item.usedPrice === 0) {
      return "No Deals Listed";
    } else {
      return `$${item.usedPrice}`;
    }
  };

  const script1 = `
  amzn_assoc_placement = "adunit0";
  amzn_assoc_tracking_id = "pricecut20-20";
  amzn_assoc_ad_mode = "search";
  amzn_assoc_ad_type = "smart";
  amzn_assoc_marketplace = "amazon";
  amzn_assoc_region = "US";
  amzn_assoc_default_search_phrase = "${productData.productName}";
  amzn_assoc_default_category = "All";
  amzn_assoc_linkid = "57cc56e736c10ffd87f14ef0500116f1";
  amzn_assoc_design = "in_content";
  amzn_assoc_title = "Related Amazon Products:";`;

  return (
    <Dialog
      open={open}
      onClose={handleRefreshOnClose}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle fontSize={18} id="scroll-dialog-title">
        Used Price History
      </DialogTitle>
      <Grid container>
        <Grid item xs={12} textAlign="center">
          <img
            width={"40%"}
            src={productData.prodImg}
            alt={productData.productName}
          ></img>
        </Grid>
      </Grid>
      <DialogContent dividers={true}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Price Used</TableCell>
                <TableCell align="right">Date Reported</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productData.productPriceUsed.map((item) => (
                <TableRow
                  key={item.dateTracker}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {getUsedPrice(item)}
                  </TableCell>
                  <TableCell align="right">
                    {new Date(item.dateTracker).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container>
          <Grid item xs={12}>
            <div id="amzn_assoc_ad_div_adunit0_0">
              <Helmet>
                <script type="text/javascript">{script1}</script>
                <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>
              </Helmet>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRefreshOnClose}>Close</Button>
        <Button onClick={handleRefresh}>Refresh Price</Button>
      </DialogActions>
    </Dialog>
  );
}
