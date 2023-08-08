import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Box,
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Snackbar,
  Typography,
  styled,
  InputAdornment,
  Avatar,
} from "@mui/material";
import ntc from "ntc-hi-js";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AddColor from "./AddColor";
import { CategoriesData, ColorList, SizeData } from "../../constant/db";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/CategoriesAction";
import { getAllColors } from "../../redux/actions/ColorsAction";
import { addNewProduct } from "../../redux/actions/ProductAction";
import hair from "../../assets/image/Laptop2-removeb.png";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AddProducts = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "97%",
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "1.5%",
  marginTop: "20px",
  color: "#252F43",
}));
const AddProductall = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",

  borderRadius: "10px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
  "& > form": {
    // border: "1px solid black",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    padding: "20px",
    "& > p": {
      marginLeft: "5px",
      fontSize: "16px",
      fontFamily: "'Tektur', cursive",
      fontWeight: "500",
      border: "none",
      outline: "none",
    },
  },
}));
const AddProductLogo = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
  alignItem: "center",
  "& > p": {
    padding: "20px 0px",
    fontSize: "28px",
    fontFamily: "'Tektur', cursive",
    fontWeight: "600",
    "& > span": {
      marginLeft: "10px",
    },
  },
}));
const AddProductTitle = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "99%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItem: "center",
  padding: "5px",
  "& > input": {
    width: "96%",
    height: "50px",
    padding: "10px 15px",
    fontSize: "16px",
    fontFamily: "'Tektur', cursive",
    fontWeight: "500",
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
    borderRadius: "5px",
    marginRight: "2px",
  },
}));
const AddProductDes = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "99%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItem: "center",
  padding: "5px",
  "& > textarea": {
    width: "96%",
    height: "150px",
    padding: "10px 15px",
    fontSize: "16px",
    fontFamily: "'Tektur', cursive",
    fontWeight: "500",
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
    borderRadius: "5px",
    marginRight: "2px",
    resize: "none",
  },
}));
const AddProductCategorie = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "98%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItem: "center",
  padding: "5px",
  "& > div": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItem: "center",
    "& > p": {
      marginLeft: "5px",
      fontSize: "16px",
      fontFamily: "'Tektur', cursive",
      fontWeight: "500",
      border: "none",
      outline: "none",
    },
    "& > div": {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItem: "center",

      "& > div": {
        boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
        ":hover": {
          border: "none",
        },
        "& > div": {
          fontSize: "16px",
          fontFamily: "'Tektur', cursive",
          fontWeight: "500",
          border: "none",
          outline: "none",
        },
      },
    },
  },
}));
const AddProductColor = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "99%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItem: "center",
  padding: "5px",
}));

const AddProductSize = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "97.7%",
  display: "flex",
  flexDirection: "Column",
  justifyContent: "flex-start",
  alignItem: "center",
  padding: "10px",
  "& > div": {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "Column",
    justifyContent: "flex-start",
    alignItem: "center",
    width: "99%",
    "& > div": {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItem: "center",
      width: "99%",
      "& > p": {
        fontSize: "16px",
        fontFamily: "'Tektur', cursive",
        fontWeight: "500",
      },
      "& > div": {
        margin: "2px",
        backgroundColor: "#252F43",
        color: "#fff",
        ":hover": {
          backgroundColor: "#252F43",
          color: "#fff",
          opacity: "0.9",
        },
      },
      "& > form": {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItem: "center",
        width: "99%",
        "& > div > p": {
          fontSize: "16px",
          fontFamily: "'Tektur', cursive",
          fontWeight: "500",
        },
        "& > input": {
          width: "200px",
          height: "56px",
          borderRadius: "5px",
          border: "none",
          outline: "none",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
          padding: "0px 15px",
          fontSize: "16px",
          fontFamily: "'Tektur', cursive",
          fontWeight: "500",
          marginTop: "8px",
        },
        "& > div > div": {
          border: "none",
          outline: "none",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
        },
        "& > button": {
          marginTop: "8px",
          width: "100px",
          height: "55px",
          border: "none",
          outline: "none",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
          borderRadius: "5px",
          backgroundColor: "#5A73CD",
          color: "#fff",
          cursor: "pointer",
          marginLeft: "2px",
          ":active": {
            transform: "scale(0.98)",
          },
        },
      },
    },
  },
}));

const AddProductPrice = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "97.7%",
  display: "flex",
  flexDirection: "Column",
  justifyContent: "flex-start",
  alignItem: "center",
  padding: "10px",

  "& > div": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
    "& > div": {
      // border: "1px solid black",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: "10px",
      "& > p": {
        fontSize: "16px",
        fontFamily: "'Tektur', cursive",
        fontWeight: "500",
      },
    },
  },
}));
const AddProductPriceMoney = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "30%",
  display: "flex",
  flexWrap: "wrap",
  "& > div > div": {
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
  },
}));
const AddProductPriceDiscount = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "30%",
  display: "flex",
  flexWrap: "wrap",
  "& > div > div": {
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
  },
}));
const AddProductButtons = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "97.7%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItem: "center",
  padding: "10px",
  "& > button": {
    width: "100px",
    height: "50px",
    marginRight: "5px",
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    fontFamily: "'Tektur', cursive",
    fontWeight: "500",
    cursor: "pointer",
    ":active": {
      transform: "scale(0.98)",
    },
  },
}));

const AddProduct = () => {
  // ***********************************
  // ***********************************
  // ***********************************
  // ***********************************

  const [toggleProductName, setToggleProductName] = useState(false);
  const [toggleProductTagline, setToggleProductTagline] = useState(false);
  const [toggleProductDes, setToggleProductDes] = useState(false);
  const [toggleProductQty, setToggleProductQty] = useState(false);
  const [toggleProductPrice, setToggleProductPrice] = useState(false);
  const [toggleProductCategorie, setToggleProductCategorie] = useState(false);
  const [toggleProductImage, setToggleProductImage] = useState(false);
  // const [toggleProductName, setToggleProductName] = useState(false);
  // ***********************************
  // ***********************************
  // ***********************************
  // ***********************************

  const dispatch = useDispatch();
  const { CategorieData } = useSelector((state) => state.Categories);
  const { ColorData } = useSelector((state) => state.Colors);
  const [allColorData, setAllColorData] = useState([]);
  const ImageInputRef = useRef(null);
  const [mainCategorie, setMainCategorie] = useState("");
  const [subCategorie, setSubCategorie] = useState([]);
  const [colorSelect, setColorSelect] = useState([]);
  const [sizeType, setSizeType] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [sizeAll, setSizeAll] = useState([]);
  const [imageAll, setImageAll] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [imagePrint, setImagePrint] = useState([]);

  const [constantValues, setConstantValues] = useState({
    productname: "",
    producttagline: "",
    productdescription: "",
    productcostprice: "",
    productdiscount: "",
    productquantity: "",
  });

  const handleCategorieChange = (e) => {
    setSubCategorie([]);
    // console.log(e.target.value);
    setMainCategorie(e.target.value);
  };
  const handleSubCategorieChange = (e) => {
    e.preventDefault();
    setSubCategorie([...e.target.value]);
  };
  const handleSizeChange = (e) => {
    e.preventDefault();
    setSizeType(e.target.value);
  };
  const sizeSubmit = (e) => {
    e.preventDefault();
    if (sizeType === "") {
      return handleOpenalert("please select valid filled", "error");
    } else if (sizeInput === "") {
      return handleOpenalert("please Enter valid size", "error");
    } else {
      setSizeAll([...sizeAll, { size: sizeInput, type: sizeType }]);
    }
  };
  const sizeClearAll = (e) => {
    e.preventDefault();
    setSizeAll([]);
  };
  const handleChipClick = (e, number) => {
    e.preventDefault();
    // console.log(number);
  };
  const handleChipDelete = (e, number) => {
    e.preventDefault();

    const filteredArray = sizeAll.filter(
      (item) => sizeAll.indexOf(item) !== number
    );
    setSizeAll(filteredArray);
  };

  const imageSubmit = (e) => {
    e.preventDefault();
    console.log(imageInput[0]);
    if (imageInput === "") {
      return handleOpenalert("please Select Image", "error");
    } else {
      if (imageInput) {
        const reader = new FileReader();

        reader.onload = function (e) {
          // console.log("onLoad: ", e.target.result);
          setImagePrint([...imagePrint, e.target.result]);
        };

        reader.readAsDataURL(imageInput[0]);
      } else {
        console.log("Image Error");
      }
      setImageAll([...imageAll, { name: imageInput[0] }]);
      setImageInput("");
    }
  };
  // console.log(imageAll);

  const handleOpenalert = (message, messageColor) => {
    setOpen(true);
    setMessage(message);
    setMessageColor(messageColor);
  };

  const handleImageClick = (e, number) => {
    e.preventDefault();
    // console.log(number);
  };
  const handleImageDelete = (e, number) => {
    e.preventDefault();

    const filteredArray = imageAll.filter(
      (item) => imageAll.indexOf(item) !== number
    );
    setImageAll(filteredArray);
    const filteredArrayImage = imagePrint.filter(
      (item) => imagePrint.indexOf(item) !== number
    );
    setImagePrint(filteredArrayImage);
  };
  const imageClearAll = (e) => {
    e.preventDefault();
    setImageAll([]);
  };

  const handleChooseImage = () => {
    setImageInput("");
    ImageInputRef.current.click();
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleColorSelectChange = (e) => {
    e.preventDefault();
    setColorSelect([...e.target.value]);
  };
  const handleConstantProductValues = (e) => {
    e.preventDefault();
    if (e.target.name === "productdiscount") {
      const inputValue = e.target.value.slice(0, 2);
      setConstantValues((preValue) => ({
        ...preValue,
        [e.target.name]: inputValue,
      }));
    } else {
      setConstantValues((preValue) => ({
        ...preValue,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    constantValues.productname === ""
      ? setToggleProductName(true)
      : setToggleProductName(false);
    constantValues.producttagline === ""
      ? setToggleProductTagline(true)
      : setToggleProductTagline(false);
    constantValues.productquantity > 0
      ? setToggleProductQty(false)
      : setToggleProductQty(true);
    constantValues.productdescription === ""
      ? setToggleProductDes(true)
      : setToggleProductDes(false);
    constantValues.productcostprice === ""
      ? setToggleProductPrice(true)
      : setToggleProductPrice(false);
    mainCategorie === ""
      ? setToggleProductCategorie(true)
      : setToggleProductCategorie(false);
    imageAll.length <= 0
      ? setToggleProductImage(true)
      : setToggleProductImage(false);
    if (
      constantValues.productname !== "" &&
      constantValues.producttagline !== "" &&
      constantValues.productquantity > 0 &&
      constantValues.productdescription !== "" &&
      constantValues.productcostprice !== "" &&
      mainCategorie !== "" &&
      imageAll.length > 0
    ) {
      // -----------------------
      // -----------------------
      // -----------------------
      const tempSubCategorieData = subCategorie?.map((data) => {
        return { name: data };
      });
      const tempCategorieData = {
        name: CategorieData[mainCategorie].name,
        subCategories: tempSubCategorieData,
      };
      const tempColorData = colorSelect?.map((data) => {
        return { name: data };
      });

      // -----------------------
      // -----------------------
      // -----------------------
      const finalData = {
        product_title: constantValues.productname,
        product_tagline: constantValues.producttagline,
        product_qty: constantValues.productquantity,
        product_description: constantValues.productdescription,
        product_image: imageAll,
        product_color_tags: tempColorData,
        product_size_tags: sizeAll,
        product_categories: tempCategorieData,
        product_price: constantValues.productcostprice,
        product_discount: constantValues.productdiscount,
      };

      dispatch(addNewProduct(finalData));
      setConstantValues({
        productname: "",
        producttagline: "",
        productdescription: "",
        productcostprice: "",
        productdiscount: "",
        productquantity: "",
      });
      setSubCategorie([]);
      setColorSelect([]);
      setImageAll([]);
      setSizeAll([]);
      setSizeInput("");
      setSizeType("");
    }
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    setConstantValues({
      productname: "",
      producttagline: "",
      productdescription: "",
      productcostprice: "",
      productdiscount: "",
      productquantity: 0,
    });
    setSubCategorie([]);
    setColorSelect([]);
    setImageAll([]);
    setSizeAll([]);
    setSizeInput("");
    setSizeType("");
  };

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllColors());
  }, [dispatch]);
  useEffect(() => {
    const updatedColorData = ColorData?.map((item) => {
      const n_match = ntc.name(item.colorname, "en");
      const colorV = n_match.color.name;
      return { id: item._id, colorname: colorV };
    });
    setAllColorData(updatedColorData);
  }, [ColorData]);

  return (
    <AddProducts>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        key={"top" + "right"}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={messageColor}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <AddProductall>
        <form>
          <AddProductLogo>
            <Typography>
              <span>
                <AccountTreeIcon
                  sx={{ width: 20, height: 20, color: "#2DB484" }}
                />
              </span>
              <span style={{ color: "#252F43" }}>ADD PRODUCTS</span>
            </Typography>
          </AddProductLogo>
          <Typography>
            Product Name <span style={{ color: "red" }}>*</span>
          </Typography>
          <AddProductTitle>
            <input
              type="text"
              placeholder="Enter Product name"
              name="productname"
              value={constantValues.productname}
              onChange={(e) => handleConstantProductValues(e)}
            />
          </AddProductTitle>
          <Typography style={{ fontSize: "12px", color: "red" }}>
            {toggleProductName ? "Product name is required*" : null}
          </Typography>
          <Typography>
            TagLine for Product <span style={{ color: "red" }}>*</span>
          </Typography>
          <AddProductTitle>
            <input
              type="text"
              placeholder="Enter Taglines For Your Products"
              name="producttagline"
              value={constantValues.producttagline}
              onChange={(e) => handleConstantProductValues(e)}
            />
          </AddProductTitle>
          <Typography style={{ fontSize: "12px", color: "red" }}>
            {toggleProductTagline ? "Product tag line is required*" : null}
          </Typography>
          <Typography>
            Product Quantity <span style={{ color: "red" }}>*</span>
          </Typography>
          <AddProductTitle>
            <input
              type="number"
              placeholder="Enter Product Quantity in numbers"
              name="productquantity"
              value={constantValues.productquantity}
              onChange={(e) => handleConstantProductValues(e)}
            />
          </AddProductTitle>
          <Typography style={{ fontSize: "12px", color: "red" }}>
            {toggleProductQty
              ? "Product quantity is required and should be greater then 0*"
              : null}
          </Typography>
          <Typography>
            Product Description <span style={{ color: "red" }}>*</span>
          </Typography>
          <AddProductDes>
            <textarea
              placeholder="Enter Product Description..."
              name="productdescription"
              value={constantValues.productdescription}
              onChange={(e) => handleConstantProductValues(e)}
            />
          </AddProductDes>
          <Typography style={{ fontSize: "12px", color: "red" }}>
            {toggleProductDes ? "Product description is required*" : null}
          </Typography>
          <AddProductCategorie>
            <Box>
              <Typography>
                Select Categories <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
            <Box>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={mainCategorie}
                  onChange={handleCategorieChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {CategorieData.map((data, index) => (
                    <MenuItem key={data.id} value={index}>
                      {data.name}
                    </MenuItem>
                  ))}
                </Select>

                <FormHelperText>Select Main Categorie</FormHelperText>
              </FormControl>

              <FormControl>
                <InputLabel id="demo-multiple-checkbox-label">Ca...</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={subCategorie}
                  onChange={handleSubCategorieChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {CategorieData[mainCategorie]?.subCategories?.map((data) => (
                    <MenuItem key={data.id} value={data.name}>
                      <Checkbox
                        checked={subCategorie.indexOf(data.name) > -1}
                      />
                      <ListItemText primary={data.name} />
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Select SubCategories</FormHelperText>
              </FormControl>
            </Box>
          </AddProductCategorie>
          <Typography style={{ fontSize: "12px", color: "red" }}>
            {toggleProductCategorie ? "Please Select Product Categorie*" : null}
          </Typography>
          <Typography>Product Colors</Typography>
          <AddProductColor>
            <FormControl>
              <InputLabel id="demo-multiple-checkbox-label">Colors</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={colorSelect}
                onChange={handleColorSelectChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {allColorData?.map((data, index) => (
                  <MenuItem
                    style={{
                      backgroundColor: `${ColorData[index].colorname}`,
                      color: "#D9E0E6",
                    }}
                    key={data._id}
                    value={data.colorname}
                  >
                    <Checkbox
                      checked={colorSelect.indexOf(data.colorname) > -1}
                    />
                    <ListItemText primary={data.colorname} />
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Select SubCategories</FormHelperText>
            </FormControl>
          </AddProductColor>
          <AddProductSize>
            <Box>
              <Box>
                <Typography>ADD SIZES</Typography>
              </Box>
              <Box>
                <form onSubmit={() => sizeSubmit()}>
                  <input
                    type="text"
                    placeholder="Enter size in Inces"
                    value={sizeInput}
                    onChange={(e) => setSizeInput(e.target.value)}
                  />
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={sizeType}
                      onChange={handleSizeChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {SizeData.map((data, index) => (
                        <MenuItem key={index} value={data}>
                          {data}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Select size type</FormHelperText>
                  </FormControl>
                  <button onClick={(e) => sizeSubmit(e)}>ADD</button>
                  <button onClick={(e) => sizeClearAll(e)}>Clear All</button>
                </form>
              </Box>
              <Box>
                {sizeAll?.map((data, index) => (
                  <Chip
                    key={index}
                    label={data.size + " " + data.type}
                    onClick={(e) => handleChipClick(e, index)}
                    onDelete={(e) => handleChipDelete(e, index)}
                    deleteIcon={<CancelIcon style={{ color: "#fff" }} />}
                  />
                ))}
              </Box>
            </Box>
          </AddProductSize>
          <AddProductSize>
            <Box>
              <Box>
                <Typography>
                  ADD IMAGES <span style={{ color: "red" }}>*</span>
                </Typography>
              </Box>

              <Box>
                <form onSubmit={() => imageSubmit()}>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "200px",
                      height: "56px",
                      borderRadius: "5px",
                      border: "none",
                      outline: "none",
                      boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                      padding: "0px 15px",
                      fontSize: "16px",
                      fontFamily: "'Tektur', cursive",
                      fontWeight: "500",
                      marginTop: "8px",
                    }}
                    onClick={() => handleChooseImage()}
                  >
                    <Typography>
                      {imageInput ? "Click Add" : "Choose Image"}
                    </Typography>
                  </Box>
                  <input
                    style={{ display: "none" }}
                    ref={ImageInputRef}
                    type="file"
                    accept="image/*"
                    placeholder="Enter size in Inces"
                    onChange={(e) => setImageInput(e.target.files)}
                  />
                  <button onClick={(e) => imageSubmit(e)}>ADD</button>
                  <button onClick={(e) => imageClearAll(e)}>Clear All</button>
                </form>
              </Box>
              <Box>
                {imageAll?.map((data, index) => (
                  <Chip
                    sx={{ height: "50px" }}
                    key={index}
                    label={
                      (data.name.name.length > 7
                        ? data.name.name.substring(0, 7) + "..."
                        : data.name.name) +
                      " => " +
                      "Image: " +
                      (index + 1)
                    }
                    onClick={(e) => handleImageClick(e, index)}
                    onDelete={(e) => handleImageDelete(e, index)}
                    deleteIcon={<CancelIcon style={{ color: "#fff" }} />}
                    avatar={
                      <img
                        alt="Natacha"
                        src={imagePrint[index]}
                        style={{ width: "30px", height: "30px" }}
                      />
                    }
                  />
                ))}
              </Box>
            </Box>
          </AddProductSize>
          <Typography style={{ fontSize: "12px", color: "red" }}>
            {toggleProductImage ? "Please Select atleast One Image*" : null}
          </Typography>
          <AddProductPrice>
            <Box>
              <Box>
                <Typography>Product Cost</Typography>
              </Box>
              <Box>
                <AddProductPriceMoney>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Amount<span style={{ color: "red" }}>*</span>
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">₹</InputAdornment>
                      }
                      label="Amount"
                      name="productcostprice"
                      type="number"
                      value={constantValues.productcostprice}
                      onChange={(e) => handleConstantProductValues(e)}
                    />
                  </FormControl>
                </AddProductPriceMoney>
                <AddProductPriceDiscount>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Discount
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">%</InputAdornment>
                      }
                      label="Amount"
                      name="productdiscount"
                      value={constantValues.productdiscount}
                      onChange={(e) => handleConstantProductValues(e)}
                      type="number"
                      inputProps={{ maxLength: 2 }}
                    />
                  </FormControl>
                </AddProductPriceDiscount>
              </Box>
              <Box>
                <Typography>
                  Final Price:{" "}
                  <span style={{ fontSize: "20px", color: "#5A73CD" }}>
                    ₹
                    {(
                      constantValues.productcostprice -
                      (constantValues.productcostprice *
                        constantValues.productdiscount) /
                        100
                    ).toFixed(2)}
                  </span>
                </Typography>
              </Box>
            </Box>
          </AddProductPrice>
          <Typography style={{ fontSize: "12px", color: "red" }}>
            {toggleProductPrice ? "Product Price required**" : null}
          </Typography>
          <AddProductButtons>
            <button
              style={{ backgroundColor: "#2DB484" }}
              onClick={(e) => handleSubmitForm(e)}
            >
              Submit
            </button>
            <button
              style={{ backgroundColor: "#C6A762" }}
              onClick={(e) => handleResetForm(e)}
            >
              Reset
            </button>
          </AddProductButtons>
        </form>
      </AddProductall>
    </AddProducts>
  );
};

export default AddProduct;
