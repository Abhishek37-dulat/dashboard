import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../assets/image/mylogo.4b54036c814d0669a746.png";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { ConditionDelete } from "./ConditionDelete";
import { addNewBanner, getAllBanner } from "../../redux/actions/BannerAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllCategories } from "../../redux/actions/CategoriesAction";

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

const customSuccessToastStyleSuccess = {
  background: "#4CAF50", // Replace this with your desired background color
  color: "#fff", // Text color for the toast
};

const customSuccessToastStyleError = {
  background: "#E75758", // Replace this with your desired background color
  color: "#fff", // Text color for the toast
};

const BannerMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  padding: "2%",
  "& > div": {
    marginTop: "20px",
    "& > button": {
      backgroundColor: "#fff",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    },
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

const AllBanner = () => {
  const dispatch = useDispatch();
  const logoRef = useRef();
  const [logoImage, setLogoImage] = useState(null); // Store the uploaded image
  const [toggleChangeLogo, setToggleChangeLogo] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [bannerTitle, setBannerTitle] = useState("");
  const [bannerDescription, setBannerDescription] = useState("");
  const [open, setOpen] = React.useState(false);
  const { BannerData } = useSelector((state) => state.Banners);
  const [deleteBannerData, setDeleteBannerData] = useState(null);
  const { CategorieData } = useSelector((state) => state.Categories);
  const [mainCategorie, setMainCategorie] = useState("");
  const [subCategorie, setSubCategorie] = useState([]);

  const handleLogo = (e) => {
    if (logoRef.current) {
      logoRef.current.click();
    }
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoImage(file);
      setToggleChangeLogo(true);
    }
  };

  const handleSaveToggle = (e) => {
    if (mainCategorie === "") {
      toast.error("Please Select Categorie!", {
        toastId: "error1",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleError,
      });
    } else {
      if (logoImage !== null) {
        const tempSubCategorieData = subCategorie?.map((data) => {
          return { name: data };
        });
        const tempCategorieData = {
          name: CategorieData[mainCategorie].name,
          subCategories: tempSubCategorieData,
        };
        dispatch(
          addNewBanner({
            image: logoImage,
            title: bannerTitle,
            description: bannerDescription,
            categories: tempCategorieData,
          })
        );
        setToggleChangeLogo(!toggleChangeLogo);
      } else {
        toast.error("Please Select image!", {
          toastId: "error1",
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: customSuccessToastStyleError,
        });
      }
    }
  };
  const handleClickOpen = (data) => {
    setDeleteBannerData(data);
    setOpen(true);
  };
  const handleCategorieChange = (e) => {
    setSubCategorie([]);
    // console.log(e.target.value);
    setMainCategorie(e.target.value);
  };
  const handleSubCategorieChange = (e) => {
    e.preventDefault();
    setSubCategorie([...e.target.value]);
  };

  useEffect(() => {
    dispatch(getAllBanner());
    dispatch(getAllCategories());
  }, [dispatch]);

  console.log(BannerData);

  return (
    <BannerMainBox>
      <Box>
        <Typography>ADD NEW BANNER</Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          width: "500px",
          padding: "10px",
          boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
        }}
      >
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
                    <Checkbox checked={subCategorie.indexOf(data.name) > -1} />
                    <ListItemText primary={data.name} />
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Select SubCategories</FormHelperText>
            </FormControl>
          </Box>
        </AddProductCategorie>
        <TextField
          id="standard-password-input"
          label="Title"
          type="text"
          // variant="standard"
          variant="filled"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "5px 5px 0px 0px",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
            marginTop: "10px",
          }}
          value={bannerTitle}
          onChange={(e) => setBannerTitle(e.target.value)}
        />
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          // variant="standard"
          variant="filled"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "5px 5px 0px 0px",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
            marginTop: "10px",
          }}
          value={bannerDescription}
          onChange={(e) => setBannerDescription(e.target.value)}
        />
        <input
          type="file"
          ref={logoRef}
          // style={{ display: "none" }}
          style={{
            backgroundColor: "#E8E8E8",
            borderRadius: "5px ",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
            marginTop: "10px",
            padding: "10px",
          }}
          onChange={handleImageUpload}
        />
        {toggleChangeLogo ? (
          <Box>
            <Box>
              {logoImage ? (
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginTop: "10px",
                  }}
                >
                  <img
                    src={URL.createObjectURL(logoImage)}
                    alt="logoImg"
                    style={{
                      maxWidth: "200px",
                      backgroundColor: "#EEEFF1",
                      border: "5px solid #fff",
                      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                      padding: "10px",
                      borderRadius: "7px",
                    }}
                  />
                </Box>
              ) : (
                <Typography>No logo uploaded</Typography>
              )}
            </Box>
          </Box>
        ) : null}

        <Button
          style={{
            backgroundColor: "#2DB484",
            color: "#fff",
            marginTop: "10px",
          }}
          onClick={() => handleSaveToggle()}
        >
          Save Banner
        </Button>
      </Box>

      <Box
        style={{
          //   border: "1px solid red",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {BannerData?.map((data, index) => {
          return (
            <Box
              style={{
                // border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                // width: "100%",
                padding: "2%",
                position: "relative",
                margin: "5px",
                backgroundColor: "#fff",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
              }}
            >
              <Typography>{data?.title}</Typography>
              <img
                style={{ maxHeight: "200px" }}
                src={`${process.env.REACT_APP_URL}/images/${data?.banner_image[0]}`}
                alt={`banner-img-${index}`}
              />
              <IconButton
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "#D81C4E",
                }}
                onClick={() => handleClickOpen(data)}
              >
                <DisabledByDefaultIcon />
              </IconButton>
              <Typography>{data?.description}</Typography>
            </Box>
          );
        })}
      </Box>
      <ConditionDelete
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        deleteBannerData={deleteBannerData}
      />
    </BannerMainBox>
  );
};

export default AllBanner;
