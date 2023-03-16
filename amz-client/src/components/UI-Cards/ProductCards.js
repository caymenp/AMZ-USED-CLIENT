import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProductData } from "../../contexts/product.context";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AdBanner } from "../RevenueHitsBanner";

export const ProductCards = ({ handleDelete, handleDetails }) => {
  const data = useProductData();

  const getDiscountedAmount = (newPrice, usedPrice) => {
    const amountDiff = newPrice - usedPrice;
    return Math.trunc((amountDiff / newPrice) * 100);
  };

  return (
    <Grid container direction={"row"}>
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
                      Last Update:{" "}
                      {new Date(
                        product.productPriceUsed[
                          product.productPriceUsed.length - 1
                        ].dateTracker
                      ).toLocaleDateString()}
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
                            $
                            {
                              product.productPriceUsed[
                                product.productPriceUsed.length - 1
                              ].usedPrice
                            }
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Typography
                      color="text.secondary"
                      align="center"
                      sx={{ marginTop: 2 }}
                    >
                      You are saving{" "}
                      <strong>
                        {getDiscountedAmount(
                          product.fullPrice,
                          product.productPriceUsed[
                            product.productPriceUsed.length - 1
                          ].usedPrice
                        )}
                        %{" "}
                      </strong>
                      off the normal price!
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
              {"<!-- Ezoic - under_first_paragraph - under_first_paragraph -->"}
              <div id="ezoic-pub-ad-placeholder-102"> </div>
              {
                "<!-- End Ezoic - under_first_paragraph - under_first_paragraph -->"
              }
            </Grid>
          );
        })}
    </Grid>
  );
};
