import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  styled,
} from "@mui/material";
import React, { useRef, useState } from "react";
import InputComponent from "./InputComponent";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewBlog } from "../../../redux/actions/BlogAction";

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

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  width: "80%",
  padding: "20px",
  marginTop: "50px",
  "&>div": {
    "&>p": {
      fontSize: "28px",
      fontFamily: "'Tektur', cursive",
      fontWeight: "600",
    },
  },
  "&>form": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));

const AddProductCategorie = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItem: "center",
  marginTop: "10px",
  "&>p": {
    color: "#E5323F",
    fontSize: "12px",
    fontWeight: "600",
  },
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

const BoxDes = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "10px",
  "&>p": {
    color: "#252F43",
    fontSize: "16px",
    fontFamily: "'Tektur', cursive",
    fontWeight: "500",
    marginTop: "10px",
  },
}));
const BoxImage = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "10px",
  "&>p": {
    color: "#252F43",
    fontSize: "16px",
    fontFamily: "'Tektur', cursive",
    fontWeight: "500",
    marginTop: "10px",
  },
}));

const AddBlog = () => {
  const dispatch = useDispatch();
  const logoRef = useRef();
  const [logoImage, setLogoImage] = useState([]);
  const [finalLogoImage, setfinalLogoImage] = useState([]);
  const [toggleChangeLogo, setToggleChangeLogo] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [urlTitle, setUrlTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [blogSubTitle, setBlogSubTitle] = useState("");
  const [formCondition, setFormCondition] = useState(false);
  const [blogDescription, setBlogDescription] = useState("");
  const [mainCategorie, setMainCategorie] = useState("");
  const [mainCategorieName, setMainCategorieName] = useState("");
  const [subCategorie, setSubCategorie] = useState([]);
  const { CategorieData } = useSelector((state) => state.Categories);
  const [toggleProductCategorie, setToggleProductCategorie] = useState(false);
  const [blogDescriptionCondition, setBlogDescriptionCondition] =
    useState(false);
  const [blogImageCondition, setBlogImageCondition] = useState(false);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      if (files.length <= 5) {
        const uploadedImages = Array.from(files);
        for (let x = 0; x < uploadedImages.length; x++) {
          imageRead(uploadedImages[x]);
        }
        setLogoImage(uploadedImages);
        setToggleChangeLogo(true);
      } else {
        alert(`You can upload a maximum of 5 images.`);
        logoRef.current.value = "";
      }
    }
  };
  let imageRead = (img) => {
    const reader = new FileReader();
    if (img) {
      reader.readAsDataURL(img);
      reader.onloadend = () => {
        setfinalLogoImage((prev) => [...prev, reader.result]);
      };
    } else {
      console.log("not found");
    }
  };
  const handleCategorieChange = (e) => {
    setSubCategorie([]);
    setMainCategorie(e.target.value);
  };
  const handleSubCategorieChange = (e) => {
    e.preventDefault();
    setSubCategorie([...e.target.value]);
  };

  const handleFormSubmit = () => {
    console.log("sdfs");
    setFormCondition(true);
    setBlogDescriptionCondition(true);
    setToggleProductCategorie(true);
    setBlogImageCondition(true);

    if (
      urlTitle !== "" &&
      blogTitle !== "" &&
      blogSubTitle !== "" &&
      blogDescription !== "" &&
      mainCategorie !== "" &&
      finalLogoImage.length > 0
    ) {
      const tempSubCateData = subCategorie?.map((data) => {
        return { name: data };
      });
      const finalCateData = {
        name: CategorieData[mainCategorie]?.name,
        subCategories: tempSubCateData,
      };
      const finalData = {
        urltitle: urlTitle,
        blog_title: blogTitle,
        blog_subtitle: blogSubTitle,
        blog_description: blogDescription,
        blog_categories: finalCateData,
        blog_image: finalLogoImage,
        blog_phone_number: phoneNumber,
      };
      console.log(finalData, finalLogoImage);
      dispatch(addNewBlog(finalData));
    }
  };
  console.log(formCondition, blogDescription, logoImage);
  return (
    <MainBox>
      <Box>
        <Typography style={{ color: "#252F43" }}>
          <FilterTiltShiftIcon
            sx={{ width: 25, height: 25, color: "#2DB484" }}
          />
          ADD NEW BLOG
        </Typography>
      </Box>
      <form onSubmit={() => handleFormSubmit()}>
        <InputComponent
          title={blogTitle}
          setTitle={setBlogTitle}
          titlename="Enter Title"
          errorname="Please Enter Valid Title"
          placeholdername="Enter Blog Title"
          errorContition={formCondition}
          importantRequired={true}
          inputType="text"
        />
        <InputComponent
          title={blogSubTitle}
          setTitle={setBlogSubTitle}
          titlename="Enter Sub Title"
          errorname="Please Enter Valid Sub Title"
          placeholdername="Enter Blog Sub Title"
          errorContition={formCondition}
          importantRequired={true}
          inputType="text"
        />
        <InputComponent
          title={urlTitle}
          setTitle={setUrlTitle}
          titlename="Enter URL Title"
          errorname="Please Enter Valid Url"
          placeholdername="Enter URL Title"
          errorContition={formCondition}
          importantRequired={true}
          inputType="text"
        />

        <AddProductCategorie>
          <Box>
            <Typography>
              Select Categories <span style={{ color: "#E5323F" }}>*</span>
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
          <Typography>
            {toggleProductCategorie && mainCategorie === ""
              ? "*Please Select Product Categorie"
              : null}
          </Typography>
        </AddProductCategorie>

        <BoxDes>
          <Typography>
            Blog Description<span style={{ color: "#E5323F" }}> *</span>
          </Typography>
          <ReactQuill
            theme="snow"
            value={blogDescription}
            onChange={setBlogDescription}
          />
          {blogDescriptionCondition &&
          (blogDescription === "" || blogDescription === "<p><br></p>") ? (
            <Typography
              style={{ color: "#E5323F", fontSize: "12px", fontWeight: "600" }}
            >
              *Please Enter Valid Description
            </Typography>
          ) : null}
        </BoxDes>
        <InputComponent
          title={phoneNumber}
          setTitle={setPhoneNumber}
          titlename="Enter Phone number"
          errorname="Please Enter Valid phone number"
          placeholdername="Enter Your Phone number"
          errorContition={false}
          importantRequired={false}
          inputType="number"
        />
        <BoxImage>
          <Typography>
            Blog Image<span style={{ color: "#E5323F" }}> *</span>
          </Typography>
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
            multiple
            onChange={handleImageUpload}
          />

          {toggleChangeLogo ? (
            <Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginTop: "10px",
                  flexWrap: "wrap",
                }}
              >
                {logoImage.length > 0 ? (
                  logoImage?.map((data) => {
                    return (
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          marginTop: "10px",
                          margin: "10px",
                        }}
                      >
                        <img
                          src={URL.createObjectURL(data)}
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
                    );
                  })
                ) : (
                  <Typography>No logo uploaded</Typography>
                )}
              </Box>
            </Box>
          ) : null}
          {blogImageCondition && logoImage.length <= 0 ? (
            <Typography
              style={{ color: "#E5323F", fontSize: "12px", fontWeight: "600" }}
            >
              *Please Select Image
            </Typography>
          ) : null}
        </BoxImage>

        <Button onClick={() => handleFormSubmit()}>Submit</Button>
      </form>
    </MainBox>
  );
};

export default AddBlog;
