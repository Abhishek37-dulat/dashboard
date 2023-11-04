import {
  Box,
  Button,
  Collapse,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../assets/image/istockphoto-922962354-612x612.jpg";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { ConditionDelete } from "./ConditionDelete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CateData from "../../constant/cate.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost, getAllPost } from "../../redux/actions/PostAction";
import CustomizedProgressBars from "./Loading";

const BannerMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "96%",
  padding: "2%",
  position: "relative",
  "& > div": {
    marginTop: "20px",
    width: "100%",
    "& > button": {
      backgroundColor: "#fff",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    },
  },
}));

const CateSelection = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "96%",
  padding: "2%",
  marginTop: "10px",
  position: "relative",
  "& > div": {},
}));

const CateBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  height: "50px",
  backgroundColor: "#fff",
  borderRadius: "4px",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  cursor: "pointer",
  "& > div": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
}));

const CateList = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  backgroundColor: "#fff",
  marginTop: "0px",
  "& > div": {
    borderTop: "1px solid #A4A8AB",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "2px 0px",
    cursor: "pointer",
    "& > p": {
      marginLeft: "10px",
    },
  },
}));

const FieldBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "96%",
  marginTop: "0px",
  padding: "2%",
  "& > div": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    marginTop: "10px",
    "& > input": {
      backgroundColor: "#fff",
      color: "#8B93A5",
      width: "96%",
      height: "50px",
      paddingLeft: "5px",
      border: "none",
      outline: "none",
      boxShadow: "0px 0px 2px rgba(0,0,0,0.2)",
      borderRadius: "5px",
      marginTop: "5px",
    },
    "& > p": {
      marginTop: "5px",
      color: "#252F43",
    },
  },
}));

const PagesBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  "& > div": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginTop: "20px",
    "& > p": {
      // border: "1px solid black",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "98%",
      padding: "1% 1%",
      fontSize: "20px",
      color: "#fff",
      backgroundColor: "#5A73CD",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    },
    "& > div": {
      // border: "1px solid red",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      flexWrap: "wrap",
      "& > p": {
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "98%",
        padding: "1%",
        fontSize: "16px",
        color: "#8B93A5",
      },
    },
  },
}));

const customSuccessToastStyleSuccess = {
  background: "#4CAF50", // Replace this with your desired background color
  color: "#fff", // Text color for the toast
};

const customSuccessToastStyleError = {
  background: "#E75758", // Replace this with your desired background color
  color: "#fff", // Text color for the toast
};

const NewPoster = () => {
  const dispatch = useDispatch();
  const logoRef = useRef();
  const [toggleChangeLogo, setToggleChangeLogo] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [showDetails, setShowDetails] = useState({});
  const [dropIcon, setDropIcon] = useState({});
  const [mainSelect, setMainSelect] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValueDisplay, setSelectedValueDisplay] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const [errorImage, setErrorImage] = useState(false);
  const [formData1, setFormData1] = useState({
    title: "",
    description: "",
    image: null,
    location: "",
  });
  const { PostData } = useSelector((state) => state.Posts);
  const [deleteObjectData, setDeleteObjectData] = useState();
  const handleLogo = (e) => {
    setToggleChangeLogo(!toggleChangeLogo);
  };
  const handleChangeSelectValue = (value) => {
    setSelectedValue(value);
    setSelectedValueDisplay(value);
    setMainSelect(false);
  };

  const handleMainSelect = (e) => {
    setMainSelect(!mainSelect);
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData1((prevFormData) => ({
        ...prevFormData,
        image: file,
      }));
    }
  };
  const handleFormDataChange = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  };
  const handleShowDetails = (index) => {
    setShowDetails((predata) => ({
      ...predata,
      [index]: !predata[index],
    }));
    handleDropIcon(index);
  };

  const handleDropIcon = (index) => {
    setDropIcon((predata) => ({
      ...predata,
      [index]: !predata[index],
    }));
  };

  let imageRead = (formData1, selectedValueDisplay) => {
    console.log(formData1, selectedValueDisplay);
    const reader = new FileReader();
    if (formData1.image) {
      reader.readAsDataURL(formData1.image);
      reader.onloadend = () => {
        const finalData = {
          title: formData1.title,
          description: formData1.description,
          image: reader.result,
          location: formData1.location,
          categorie: selectedValueDisplay,
        };
        dispatch(addNewPost(finalData));
      };
    } else if (formData1.title) {
      const finalData = {
        title: formData1.title,
        description: formData1.description,
        location: formData1.location,
        categorie: selectedValueDisplay,
      };
      dispatch(addNewPost(finalData));
    } else {
      console.log("not found");
    }
  };
  const handleSaveToggle = (e) => {
    if (selectedValueDisplay === "") {
      toast.error("Please Select Valid Categorie!", {
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
      imageRead(formData1, selectedValueDisplay);
      // dispatch(addNewPost(finalData));

      setToggleChangeLogo(!toggleChangeLogo);
      setFormData1({
        title: "",
        description: "",
        image: null,
      });
      setSelectedValueDisplay("");
    }
  };
  const handleClickOpen = (data) => {
    setDeleteObjectData(data);
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  console.log("selectedValue: ", PostData);
  return (
    <BannerMainBox>
      <Box>
        <Typography>ADD NEW POSTER</Typography>
      </Box>
      <Box>
        <Button onClick={(e) => handleLogo(e)}>{"ADD NEW POSTER"}</Button>
      </Box>
      {toggleChangeLogo ? (
        <Box>
          <Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <CateSelection>
                <CateBox onClick={() => handleMainSelect()}>
                  <Box>
                    <Typography style={{ marginLeft: "10px" }}>
                      {selectedValueDisplay === ""
                        ? "Select Categorie"
                        : selectedValueDisplay}
                    </Typography>
                    <Typography style={{ marginRight: "10px" }}>
                      {!mainSelect ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <KeyboardArrowUpIcon />
                      )}
                    </Typography>
                  </Box>
                </CateBox>
                <Collapse
                  style={{ width: "100%" }}
                  in={mainSelect}
                  timeout="auto"
                >
                  <CateList>
                    {CateData?.AllCate?.map((data, index) => {
                      return (
                        <>
                          <Box onClick={() => handleShowDetails(index)}>
                            <Typography>{data}</Typography>
                            <Typography>
                              <KeyboardArrowDownIcon />
                            </Typography>
                          </Box>
                          {CateData[data]?.map((subData) => {
                            return (
                              <Collapse
                                style={{ backgroundColor: "#EEEFF1" }}
                                in={showDetails[index]}
                                timeout="auto"
                              >
                                <Box style={{ backgroundColor: "#EEEFF1" }}>
                                  <Typography
                                    style={{ marginLeft: "20px" }}
                                    onClick={() =>
                                      handleChangeSelectValue(subData)
                                    }
                                  >
                                    {subData}
                                  </Typography>
                                </Box>
                              </Collapse>
                            );
                          })}
                        </>
                      );
                    })}
                  </CateList>
                </Collapse>
              </CateSelection>
              {selectedValueDisplay !== "Marquee" &&
              selectedValueDisplay !== "Hair Transformation" &&
              selectedValueDisplay !== "Mobile" &&
              selectedValueDisplay !== "Email" &&
              selectedValueDisplay !== "Address" &&
              selectedValueDisplay !== "Location" &&
              selectedValueDisplay !== "FAQs" &&
              selectedValueDisplay !== "Before And After" &&
              selectedValueDisplay !== "Before And After Title" &&
              selectedValueDisplay !== "FAQs Title" &&
              selectedValueDisplay !== "Male image" &&
              selectedValueDisplay !== "Female image" &&
              selectedValueDisplay !== "" ? (
                <FieldBox>
                  <Box>
                    <Typography>Enter Title</Typography>
                    <input
                      type="text"
                      placeholder="Enter Title"
                      name="title"
                      value={formData1.title}
                      onChange={(e) => handleFormDataChange(e)}
                    />
                    {errorTitle ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please enter title*
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box>
                    <Typography>Enter Description</Typography>
                    <textarea
                      style={{
                        width: "96%",
                        height: "150px",
                        padding: "10px 4px",
                        marginTop: "5px",
                        border: "none",
                        outline: "none",
                        boxShadow: "0px 0px 2px rgba(0,0,0,0.2)",
                        borderRadius: "5px",
                        marginRight: "2px",
                        resize: "none",
                      }}
                      type="text"
                      placeholder="Enter Description"
                      name="description"
                      value={formData1.description}
                      onChange={(e) => handleFormDataChange(e)}
                    />
                    {errorDescription ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please enter description*
                      </Typography>
                    ) : null}
                  </Box>
                  <Box>
                    <Typography>Select Image</Typography>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageUpload}
                    />

                    {formData1?.image && (
                      <img
                        src={URL.createObjectURL(formData1.image)}
                        alt="Selected_Image"
                        style={{
                          maxWidth: "200px",
                          backgroundColor: "#EEEFF1",
                          border: "5px solid #fff",
                          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                          padding: "10px",
                          borderRadius: "7px",
                          marginTop: "10px",
                        }}
                      />
                    )}
                    {errorImage ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please select image*
                      </Typography>
                    ) : null}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "Before And After" ? (
                <FieldBox>
                  <Box>
                    <Typography>Select Image</Typography>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageUpload}
                    />

                    {formData1?.image && (
                      <img
                        src={URL.createObjectURL(formData1.image)}
                        alt="Selected_Image"
                        style={{
                          maxWidth: "200px",
                          backgroundColor: "#EEEFF1",
                          border: "5px solid #fff",
                          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                          padding: "10px",
                          borderRadius: "7px",
                          marginTop: "10px",
                        }}
                      />
                    )}
                    {errorImage ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please select image*
                      </Typography>
                    ) : null}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "Male image" ? (
                <FieldBox>
                  <Box>
                    <Typography>Select Image</Typography>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageUpload}
                    />

                    {formData1?.image && (
                      <img
                        src={URL.createObjectURL(formData1.image)}
                        alt="Selected_Image"
                        style={{
                          maxWidth: "200px",
                          backgroundColor: "#EEEFF1",
                          border: "5px solid #fff",
                          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                          padding: "10px",
                          borderRadius: "7px",
                          marginTop: "10px",
                        }}
                      />
                    )}
                    {errorImage ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please select image*
                      </Typography>
                    ) : null}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "Female image" ? (
                <FieldBox>
                  <Box>
                    <Typography>Select Image</Typography>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageUpload}
                    />

                    {formData1?.image && (
                      <img
                        src={URL.createObjectURL(formData1.image)}
                        alt="Selected_Image"
                        style={{
                          maxWidth: "200px",
                          backgroundColor: "#EEEFF1",
                          border: "5px solid #fff",
                          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                          padding: "10px",
                          borderRadius: "7px",
                          marginTop: "10px",
                        }}
                      />
                    )}
                    {errorImage ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please select image*
                      </Typography>
                    ) : null}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "Hair Transformation" ? (
                <FieldBox>
                  <Box>
                    <Typography>Select Image</Typography>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageUpload}
                    />

                    {formData1?.image && (
                      <img
                        src={URL.createObjectURL(formData1.image)}
                        alt="Selected_Image"
                        style={{
                          maxWidth: "200px",
                          backgroundColor: "#EEEFF1",
                          border: "5px solid #fff",
                          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                          padding: "10px",
                          borderRadius: "7px",
                          marginTop: "10px",
                        }}
                      />
                    )}
                    {errorImage ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please select image*
                      </Typography>
                    ) : null}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "Before And After Title" ? (
                <FieldBox>
                  <Box>
                    <Typography>Enter Before And After Title</Typography>
                    <input
                      type="text"
                      placeholder="Enter Title"
                      name="title"
                      value={formData1.title}
                      onChange={(e) => handleFormDataChange(e)}
                    />
                    {errorTitle ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please enter Marquee*
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "Marquee" ? (
                <FieldBox>
                  <Box>
                    <Typography>Enter Marquee</Typography>
                    <input
                      type="text"
                      placeholder="Enter Marquee"
                      name="title"
                      value={formData1.title}
                      onChange={(e) => handleFormDataChange(e)}
                    />
                    {errorTitle ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please enter Marquee*
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "Mobile" ? (
                <FieldBox>
                  <Box>
                    <Typography>Enter Mobile Number</Typography>
                    <input
                      type="text"
                      placeholder="Enter Mobile Number"
                      name="title"
                      value={formData1.title}
                      onChange={(e) => handleFormDataChange(e)}
                    />
                    {errorTitle ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please enter Mobile Number*
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "Email" ? (
                <FieldBox>
                  <Box>
                    <Typography>Enter Email</Typography>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      name="title"
                      value={formData1.title}
                      onChange={(e) => handleFormDataChange(e)}
                    />
                    {errorTitle ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please enter Email*
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "Location" ? (
                <FieldBox>
                  <Box>
                    <Typography>Enter Location</Typography>
                    <input
                      type="text"
                      placeholder="Enter Location"
                      name="title"
                      value={formData1.location}
                      onChange={(e) => handleFormDataChange(e)}
                    />
                    {errorTitle ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please enter Location*
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "Address" ? (
                <FieldBox>
                  <Box>
                    <Typography>Enter Address</Typography>
                    <input
                      type="text"
                      placeholder="Enter Address"
                      name="title"
                      value={formData1.title}
                      onChange={(e) => handleFormDataChange(e)}
                    />
                    {errorTitle ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please enter Address*
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "FAQs" ? (
                <FieldBox>
                  <Box>
                    <Typography>Enter Question</Typography>
                    <input
                      type="text"
                      placeholder="Enter Question"
                      name="title"
                      value={formData1.title}
                      onChange={(e) => handleFormDataChange(e)}
                    />
                    {errorTitle ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please enter Question*
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box>
                    <Typography>Enter Answer</Typography>
                    <textarea
                      style={{
                        width: "96%",
                        height: "150px",
                        padding: "10px 4px",
                        marginTop: "5px",
                        border: "none",
                        outline: "none",
                        boxShadow: "0px 0px 2px rgba(0,0,0,0.2)",
                        borderRadius: "5px",
                        marginRight: "2px",
                        resize: "none",
                      }}
                      type="text"
                      placeholder="Enter Answer"
                      name="description"
                      value={formData1.description}
                      onChange={(e) => handleFormDataChange(e)}
                    />
                    {errorDescription ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please enter Answer*
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                </FieldBox>
              ) : selectedValueDisplay === "FAQs Title" ? (
                <FieldBox>
                  <Box>
                    <Typography>Enter FAQs Title</Typography>
                    <input
                      type="text"
                      placeholder="Enter FAQs Title"
                      name="title"
                      value={formData1.title}
                      onChange={(e) => handleFormDataChange(e)}
                    />
                    {errorTitle ? (
                      <Typography
                        style={{ color: "#E83E3E", fontSize: "14px" }}
                      >
                        please enter FAQs Title*
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                </FieldBox>
              ) : null}

              <Button
                style={{
                  backgroundColor: "#2DB484",
                  color: "#fff",
                  marginTop: "10px",
                }}
                onClick={() => handleSaveToggle()}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </Box>
      ) : null}
      <Box
        style={{
          // border: "1px solid black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {CateData?.AllCate?.map((data, index) => {
          return data ? (
            <PagesBox>
              <Box>
                <Typography>{data}</Typography>
              </Box>
              {CateData[data]?.map((item) => (
                <Box>
                  <Box>
                    <Typography>{item}</Typography>
                  </Box>
                  <Box>
                    {PostData?.map((data, index) => {
                      if (data?.categorie === item) {
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
                              marginLeft: "10px",
                              position: "relative",
                              margin: "5px",
                              backgroundColor: "#fff",
                              boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                            }}
                          >
                            <Typography>
                              {data?.categorie ? data?.categorie : ""}
                            </Typography>
                            <Typography>
                              {data?.title ? data?.title : ""}
                            </Typography>
                            <Typography>
                              {data?.description ? data?.description : ""}
                            </Typography>
                            {data?.post_image &&
                            data?.post_image?.length > 0 ? (
                              <img
                                style={{ maxHeight: "150px" }}
                                src={data?.post_image[0]?.url}
                                alt="img1"
                              />
                            ) : (
                              <img
                                style={{ height: "100px" }}
                                src={Img1}
                                alt="img1"
                              />
                            )}

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
                          </Box>
                        );
                      }
                    })}
                  </Box>
                </Box>
              ))}
            </PagesBox>
          ) : (
            <CustomizedProgressBars />
          );
        })}
      </Box>
      <ConditionDelete
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        deleteObjectData={deleteObjectData}
      />
    </BannerMainBox>
  );
};

export default NewPoster;
