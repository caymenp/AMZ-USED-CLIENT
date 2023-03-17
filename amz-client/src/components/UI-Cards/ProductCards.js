import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProductData } from "../../contexts/product.context";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AdterraBanner } from "../AdsBanner";

export const ProductCards = ({ handleDelete, handleDetails }) => {
  const data = useProductData();

  const checkUsedPriceArray = (product) => {
    let arraySize = product.productPriceUsed.length;

    if (arraySize === 0) {
      return 0;
    } else {
      return arraySize;
    }
  };

  const getUpdateDate = (product) => {
    let arraySize = checkUsedPriceArray(product);

    if (arraySize === 0) {
      return new Date(product.dateAdded).toLocaleDateString();
    } else {
      return new Date(
        product.productPriceUsed[arraySize - 1].dateTracker
      ).toLocaleDateString();
    }
  };

  const displayUsedPrice = (product) => {
    const arraySize = checkUsedPriceArray(product);
    if (
      arraySize === 0 ||
      product.productPriceUsed[arraySize - 1].usedPrice === 0
    ) {
      return "No deals listed 😢";
    } else {
      let mostRecentPrice = product.productPriceUsed[arraySize - 1].usedPrice;
      return `$${mostRecentPrice}`;
    }
  };

  const getDiscountedAmount = (product) => {
    let arraySize = checkUsedPriceArray(product);
    if (
      arraySize === 0 ||
      product.productPriceUsed[arraySize - 1].usedPrice === 0
    ) {
      return "No Deals Found. 😱 We will keep searching!";
    } else {
      const amountDiff =
        product.fullPrice - product.productPriceUsed[arraySize - 1].usedPrice;
      const savings = Math.trunc((amountDiff / product.fullPrice) * 100);

      return `You are saving ${savings}% off the normal price! 🥳`;
    }
  };

  return (
    <div>
      {data &&
        [...data].reverse().map((product) => {
          return (
            <Grid container direction={"column"}>
              <Grid item xs={12}>
                <Card sx={{ minWidth: 275, marginBottom: 2 }} key={product._id}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {product.productName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Last Update: {getUpdateDate(product)}
                    </Typography>
                    <Grid container direction="row">
                      <Grid
                        container
                        xs={6}
                        direction="column"
                        borderRight="1pt black solid"
                      >
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography variant="subtitle1" align="center">
                            Price New
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <Typography variant="h6" align="center">
                            ${product.fullPrice}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container xs={6} direction="column">
                        <Grid item xs={12} sm={12}>
                          <Typography variant="subtitle1" align="center">
                            Price Used
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <Typography variant="h6" align="center">
                            {displayUsedPrice(product)}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Typography
                      color="text.secondary"
                      align="center"
                      sx={{ marginTop: 2 }}
                    >
                      {getDiscountedAmount(product)}
                    </Typography>
                    <Grid container>
                      <Grid item xs={12} textAlign="center" marginTop={2}>
                        <a
                          href={product.productURL}
                          target="_blank"
                          rel="noopener"
                          style={{ textDecoration: "none" }}
                        >
                          <Button variant="outlined">🛒 View on Amazon</Button>
                        </a>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Grid container direction="row" spacing={2} padding={2}>
                    <Grid item xs={6} sm={6} textAlign="left">
                      <Button
                        key={product._id}
                        size="small"
                        onClick={() => {
                          handleDelete(product._id);
                        }}
                      >
                        Delete Product
                      </Button>
                    </Grid>
                    <Grid item xs={6} sm={6} textAlign="right">
                      <Button
                        size="small"
                        onClick={() => {
                          handleDetails(product);
                        }}
                      >
                        View Price History
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          );
        })}
      <div style={{ width: "90%" }}>
        <AdterraBanner />
      </div>
    </div>
  );
};
