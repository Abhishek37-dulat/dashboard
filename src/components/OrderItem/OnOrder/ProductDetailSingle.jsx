import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import laptop from "../../../assets/image/Laptop2-removeb.png";
import { useSelector } from "react-redux";

const Ticket3 = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #D9E0E6",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& > p": {
    flex: 1,
    color: "#4E5C66",
    padding: "2px",
    paddingBottom: "20px",
    "& > img": {
      width: "100px",
      padding: "2px",
    },
  },
}));

const ProductDetailSingle = ({ Number, data }) => {
  const [productDetails, setProductDetails] = useState();
  const { ProductData } = useSelector((state) => state.Products);
  useEffect(() => {
    ProductData?.map((item) => {
      if (data.product_id === item._id) {
        console.log(data.product_id);
        setProductDetails(item);
      }
      console.log(item._id);
    });
  }, [setProductDetails, ProductData, data]);
  useEffect(() => {}, []);
  console.log(ProductData);
  return (
    <Ticket3>
      <Typography>
        {Number + 1}
        <img
          src={`${process.env.REACT_APP_URL}/images/${productDetails?.product_image[0]}`}
          alt=""
        />
      </Typography>
      <Typography>
        {productDetails?.product_title?.substring(0, 10) + "..."}
      </Typography>
      <Typography>₹{productDetails?.product_price?.toFixed(2)}</Typography>
      <Typography>{data?.qty}</Typography>
      <Typography>
        ₹
        {(
          (productDetails?.product_price -
            (productDetails?.product_price * productDetails?.product_discount) /
              100) *
          data?.qty
        )?.toFixed(2)}
      </Typography>
      <Typography>{productDetails?.product_qty - data?.qty}</Typography>
    </Ticket3>
  );
};

export default ProductDetailSingle;
