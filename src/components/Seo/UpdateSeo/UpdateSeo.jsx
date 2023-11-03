import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { useEffect, useRef, useState } from "react";
import InputComponent from "./InputComponent";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewBlog } from "../../../redux/actions/BlogAction";
import { useParams } from "react-router-dom";
import { addSeo, getSeo, updateSeo } from "../../../redux/actions/SeoAction";
import Seo from "../../../pages/Seo/Seo";

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
  "&>textarea": {
    width: "98%",
    height: "400px",
    resize: "none",
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 2px rgba(0,0,0,0.2)",
    borderRadius: "3px",
    padding: "10px",
  },
}));
const SchemaBox = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "10px",
  "&>p": {
    color: "#252F43",
    fontSize: "16px",
    fontFamily: "'Tektur', cursive",
    fontWeight: "500",
    marginTop: "10px",
  },
  "&>textarea": {
    width: "98%",
    height: "400px",
    resize: "none",
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 2px rgba(0,0,0,0.2)",
    borderRadius: "3px",
    padding: "10px",
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

const KeywordBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginBottom: "10px",
}));

const UpdateSeo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [seoTitle, setSeoTitle] = useState("");
  const [canonical, setCanonical] = useState("");
  const [seoSchema, setSeoSchema] = useState("");
  const [seoSchemaCondition, setSeoSchemaCondition] = useState(false);
  const [formCondition, setFormCondition] = useState(false);
  const [seoDescription, setSeoDescription] = useState("");
  const [seoDescriptionCondition, setSeoDescriptionCondition] = useState(false);
  const [seoKeywords, setSeoKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [keywordCondition, setKeywordCondition] = useState(false);
  const [count, setCount] = useState(0);
  const { SeoData } = useSelector((state) => state.Seos);
  const [upID, setUpID] = useState();

  const handleDelete = (id) => {
    const newdata = seoKeywords.filter((item) => item.id !== id);
    setSeoKeywords([...newdata]);
  };
  const handleKeywordClick = () => {
    setSeoKeywords([...seoKeywords, { id: count, name: keywordInput }]);
    setCount(count + 1);
    setKeywordInput("");
  };
  const handleFormSubmit = () => {
    console.log("sdfs");
    setFormCondition(true);
    setSeoDescriptionCondition(true);
    setSeoSchemaCondition(true);

    if (
      seoTitle !== "" &&
      seoDescription !== "" &&
      canonical !== "" &&
      seoSchema !== ""
    ) {
      let keydata = seoKeywords?.map((data) => {
        return data.name;
      });
      const finalData = {
        content_id: id,
        seo_title: seoTitle,
        canonical_tag: canonical,
        description: seoDescription,
        seo_schema: seoSchema,
        keywords: keydata,
      };
      //   console.log(finalData, upID);
      dispatch(updateSeo(finalData, upID));
    }
  };
  useEffect(() => {
    if (SeoData) {
      setSeoTitle(SeoData?.seo_title);
      setCanonical(SeoData?.canonical_tag);
      setSeoDescription(SeoData?.description);
      setSeoSchema(SeoData?.seo_schema);
      let tempkey = SeoData?.keywords?.map((data, index) => {
        return { name: data, id: index };
      });
      setSeoKeywords(tempkey);
      setUpID(SeoData._id);
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSeo(id));
  }, []);
  console.log(SeoData);
  return (
    <MainBox>
      <Box>
        <Typography style={{ color: "#252F43" }}>
          <FilterTiltShiftIcon
            sx={{ width: 25, height: 25, color: "#2DB484" }}
          />
          Update SEO
        </Typography>
      </Box>
      <form onSubmit={() => handleFormSubmit()}>
        <InputComponent
          title={seoTitle}
          setTitle={setSeoTitle}
          titlename="Enter Title"
          errorname="Please Enter Valid Title"
          placeholdername="Enter Seo Title"
          errorContition={formCondition}
          importantRequired={true}
          inputType="text"
        />
        <InputComponent
          title={canonical}
          setTitle={setCanonical}
          titlename="Enter Canonical Tag"
          errorname="Please Enter Valid Canonical Tag"
          placeholdername="Enter Canonical Tag"
          errorContition={formCondition}
          importantRequired={true}
          inputType="text"
        />
        <KeywordBox>
          <InputComponent
            title={keywordInput}
            setTitle={setKeywordInput}
            titlename="Enter Keywords"
            errorname="Please Enter Valid Keywords"
            placeholdername="Enter Keywords"
            errorContition={keywordCondition}
            importantRequired={false}
            inputType="text"
          />
          <Button
            style={{
              width: "150px",
              backgroundColor: "#5A73CD",
              color: "#fff",
              padding: "18px 0px",
              marginTop: "37px",
              marginLeft: "10px",
            }}
            onClick={() => handleKeywordClick()}
          >
            ADD
          </Button>
        </KeywordBox>

        {/* <InputComponent
            title={blogSubTitle}
            setTitle={setBlogSubTitle}
            titlename="Enter Sub Title"
            errorname="Please Enter Valid Sub Title"
            placeholdername="Enter Blog Sub Title"
            errorContition={formCondition}
            importantRequired={true}
            inputType="text"
          /> */}
        <Stack
          direction="row"
          spacing={1}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {seoKeywords.length > 0
            ? seoKeywords.map((data) => {
                return (
                  <Chip
                    style={{
                      backgroundColor: "#5A73CD",
                      color: "#fff",
                      margin: "5px",
                    }}
                    label={data.name}
                    onDelete={() => handleDelete(data.id)}
                    deleteIcon={<CancelIcon style={{ color: "#fff" }} />}
                  />
                );
              })
            : null}
        </Stack>

        <BoxDes>
          <Typography>
            Seo Description<span style={{ color: "#E5323F" }}> *</span>
          </Typography>
          <textarea
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
          ></textarea>
          {seoDescriptionCondition && seoDescription === "" ? (
            <Typography
              style={{ color: "#E5323F", fontSize: "12px", fontWeight: "600" }}
            >
              *Please Enter Valid Description
            </Typography>
          ) : null}
        </BoxDes>
        <SchemaBox>
          <Typography>
            Seo Schema<span style={{ color: "#E5323F" }}> *</span>
          </Typography>
          <textarea
            value={seoSchema}
            onChange={(e) => setSeoSchema(e.target.value)}
          ></textarea>
          {seoSchemaCondition &&
          (seoSchema === "" || seoSchema === "<p><br></p>") ? (
            <Typography
              style={{ color: "#E5323F", fontSize: "12px", fontWeight: "600" }}
            >
              *Please Enter Valid Schema
            </Typography>
          ) : null}
        </SchemaBox>

        <Button onClick={() => handleFormSubmit()}>Submit</Button>
      </form>
    </MainBox>
  );
};

export default UpdateSeo;
