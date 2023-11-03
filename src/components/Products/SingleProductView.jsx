import {
  Box,
  IconButton,
  Rating,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import mm from "../../assets/image/mm.png";
import mm1 from "../../assets/image/hair.png";
import mm2 from "../../assets/image/Laptop2.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import convertCssColorNameToHex from "convert-css-color-name-to-hex";
import colorNameList from "color-name-list";

const MainProductBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
}));

const BoxImage = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "50%",
  position: "relative",
}));

const BoxImageLeft = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "50px",
  height: "50px",
  position: "absolute",
  top: "50%",
  left: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const BoxImageMid = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "96%",
  marginTop: "1vh",
  marginLeft: "2%",
  height: "78vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "#fff",
  "& > img": {
    // height: "80%",
    width: "80%",
  },
}));
const BoxImageRight = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "50px",
  height: "50px",
  position: "absolute",
  top: "50%",
  right: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const BoxDetails = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  marginBottom: "50px",
  padding: "5px 10px",
}));

const SingleProductView = () => {
  const [count, setCount] = useState(0);
  const [imgL, setImgL] = useState([]);
  const { singleProduct } = useSelector((state) => state.Products);
  const [color, setColor] = useState("#000000");
  const [dataFromLocal, setDataFromLocal] = useState();
  const handleLeftClick = (e) => {
    setCount(
      (prevIndex) =>
        (prevIndex - 1 + dataFromLocal?.product_image?.length) %
        dataFromLocal?.product_image?.length
    );
  };
  const handleRightClick = (e) => {
    setCount(
      (prevIndex) => (prevIndex + 1) % dataFromLocal?.product_image?.length
    );
  };
  const handleColorChange = (name) => {
    const newColorName = name.toLowerCase();
    const color = colorNameList.find(
      (entry) => entry.name.toLowerCase() === newColorName
    );
    return color.hex;
  };
  console.log(singleProduct);
  useEffect(() => {
    const tempData = localStorage.getItem("SingleProduct");
    const singleProductData = JSON.parse(tempData);
    setDataFromLocal(singleProductData);
    if (singleProductData?.product_image) {
      setImgL((prevImgL) => [...prevImgL, ...singleProductData.product_image]);
    }
  }, [setDataFromLocal, singleProduct]);

  console.log("dataFromLocal?????????????????", dataFromLocal);
  return (
    <MainProductBox>
      <BoxImage>
        <BoxImageLeft>
          <IconButton onClick={(e) => handleLeftClick(e)}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </BoxImageLeft>
        <BoxImageMid>
          <img src={dataFromLocal?.product_image[count].url} alt={count} />
        </BoxImageMid>
        <BoxImageRight>
          <IconButton onClick={(e) => handleRightClick(e)}>
            <ArrowForwardIosIcon />
          </IconButton>
        </BoxImageRight>
      </BoxImage>
      <BoxDetails>
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            {dataFromLocal?.product_title}
          </Typography>
        </Box>
        <Box>
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </Stack>
        </Box>
        <Box>
          <Typography>{dataFromLocal?.product_tagline}</Typography>
        </Box>
        <Box>
          <Typography>{dataFromLocal?.product_description}</Typography>
        </Box>
        <Box>
          <br />
          <Box>
            <Typography>Colors</Typography>
          </Box>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            {dataFromLocal?.product_color_tags?.map((data) => {
              return (
                <Box
                  style={{
                    // border: "1px solid black",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                    marginRight: "5px",
                    backgroundColor: `${handleColorChange(data.name)}`,
                  }}
                ></Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <br />
          <Box>
            <Typography>Sizes</Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {dataFromLocal?.product_size_tags?.map((data) => {
              return (
                <Box
                  style={{
                    // border: "1px solid black",
                    // width: "20px",
                    height: "30px",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                    marginRight: "5px",
                    backgroundColor: "#5A73CD",
                    padding: "5px",
                    color: "#fff",
                  }}
                >
                  <Typography> 12cms </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <br />
          <Box>
            <Typography>Dimensions</Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                // border: "1px solid black",
                // width: "20px",
                height: "30px",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                marginRight: "5px",
                backgroundColor: "#5A73CD",
                padding: "5px",
                color: "#fff",
              }}
            >
              <Typography>L :{dataFromLocal?.product_length}cms</Typography>
            </Box>
            <Box
              style={{
                // border: "1px solid black",
                // width: "20px",
                height: "30px",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                marginRight: "5px",
                backgroundColor: "#5A73CD",
                padding: "5px",
                color: "#fff",
              }}
            >
              <Typography>B :{dataFromLocal?.product_breadth}cms</Typography>
            </Box>
            <Box
              style={{
                // border: "1px solid black",
                // width: "20px",
                height: "30px",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                marginRight: "5px",
                backgroundColor: "#5A73CD",
                padding: "5px",
                color: "#fff",
              }}
            >
              <Typography>H :{dataFromLocal?.product_height}cms</Typography>
            </Box>
            <Box
              style={{
                // border: "1px solid black",
                // width: "20px",
                height: "30px",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                marginRight: "5px",
                backgroundColor: "#5A73CD",
                padding: "5px",
                color: "#fff",
              }}
            >
              <Typography>
                W :{dataFromLocal?.product_weight * 1000}grams
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <br />
          <Box>
            <Typography>Quantity</Typography>
          </Box>
          <Box>
            <Typography>{dataFromLocal?.product_qty}</Typography>
          </Box>
        </Box>

        <Box>
          <br />
          <Box>
            <Typography>Categories</Typography>
          </Box>
          <Box>
            <Typography>
              {dataFromLocal?.product_categories[0]?.name}
            </Typography>
          </Box>
        </Box>
        <Box>
          <br />
          <Box>
            <Typography>Price</Typography>
          </Box>
          <Box>
            <Typography style={{ color: "#2DB484" }}>
              ₹{dataFromLocal?.product_price}
            </Typography>
          </Box>
        </Box>
        <Box>
          <br />
          <Box>
            <Typography>Discount</Typography>
          </Box>
          <Box>
            <Typography style={{ color: "#C66463" }}>
              {dataFromLocal?.product_discount}%
            </Typography>
          </Box>
        </Box>
      </BoxDetails>
    </MainProductBox>
  );
};

export default SingleProductView;
