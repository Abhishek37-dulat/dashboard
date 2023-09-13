import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import CircularProgress from "@mui/material/CircularProgress";
import PreExistData from "./PreExistData";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCategorie,
  getAllCategories,
} from "../../redux/actions/CategoriesAction";

const CategorieMain = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "97%",
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "1.5%",
  marginTop: "20px",
}));

const CategorieAll = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "transparent",
  // boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
  "& > form": {
    // border: "1px solid #E1E3EC",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "10px",
    backgroundColor: "transparent",
  },
}));

const CategorieTopTitle = styled(Box)(({ theme }) => ({
  border: "2px solid #E1E3EC",
  width: "100%",
  height: "15vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "transparent",
  "& > span": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Tektur', cursive",
    fontSize: "24px",
    fontWeight: "600",
    color: "#252F43",
  },
}));
const CategorieBoxHandle = styled(Box)(({ theme }) => ({
  // border: "1px solid #E1E3EC",
  width: "100%",
  display: "flex",
  flexDirection: "Column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "transparent",
  marginTop: "15px",
  marginBottom: "10px",
}));

const HandleInputs = styled(Box)(({ theme }) => ({
  // border: "1px solid #E1E3EC",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  "& > input": {
    // border: "1px solid #E1E3EC",
    width: "100%",
    height: "10vh",
    paddingLeft: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",

    border: "none",
    outline: "none",
    fontFamily: "'Tektur', cursive",
    fontSize: "20px",
    fontWeight: "400",
    color: "#252F43",
  },
}));
const AllButtons = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
}));
const RightButton = styled(Box)(({ theme }) => ({
  // border: "1px solid #E1E3EC",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "transparent",
  "& > div": {
    marginTop: "4px",
    padding: "15px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    backgroundColor: "#252F43",
    cursor: "pointer",
    color: "#fff",
    fontFamily: "'Tektur', cursive",
    ":active": {
      transform: "scale(0.98)",
    },
  },
}));

const CategorieBoxHandleSmall = styled(Box)(({ theme }) => ({
  // border: "1px solid #E1E3EC",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px 0px 0px 10px",
  backgroundColor: "transparent",
  marginTop: "5px",
}));
const HandleInputsSmall = styled(Box)(({ theme }) => ({
  // border: "1px solid #E1E3EC",
  width: "100%",
  height: "10vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "#fff",
  padding: "2px",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",

  "& > input": {
    // border: "1px solid #E1E3EC",
    width: "90%",
    height: "10vh",
    paddingLeft: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px 0px 0px 10px",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontFamily: "'Tektur', cursive",
    fontSize: "20px",
    fontWeight: "400",
    color: "#252F43",
  },
}));
const DeleteButton = styled(Box)(({ theme }) => ({
  border: "1px solid #E1E3EC",
  width: "10%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0px 10px 10px 0px",
  backgroundColor: "transparent",
  "& > div": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: "0px 10px 10px 0px",
    border: "none",
    outline: "none",
    backgroundColor: "rgba(233,62,62,0.5)",
    cursor: "pointer",
    color: "#fff",
    fontFamily: "'Tektur', cursive",
    ":active": {
      transform: "scale(0.98)",
    },
  },
}));

const HandleSumbitButton = styled(Box)(({ theme }) => ({
  // border: "1px solid #E1E3EC",
  width: "100%",
  height: "10vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "transparent",
  "& > button": {
    padding: "10px 30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
    cursor: "pointer",
    ":active": {
      transform: "scale(0.98)",
    },
  },
}));
const CategorieTopMain = styled(Box)(({ theme }) => ({
  border: "none",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  marginTop: "10px",
  flexWrap: "wrap",
}));

const Subs = ({ number, setSubData, subData }) => {
  let x = 100;
  let y = 5;

  const [selectedValue, setSelectedValue] = useState("");
  const [newData, setNewData] = useState({ id: number, name: selectedValue });

  const handleOnchangeValue = (e) => {
    setSelectedValue(e.target.value);
    setNewData({ id: number, name: e.target.value });
  };
  const handleDelete = () => {
    console.log("number: ", number);
    const updatedData = subData.filter((item) => item.id !== number);
    setSubData(updatedData);
  };
  useEffect(() => {
    const index = subData.findIndex((item) => item.id === number);
    console.log("index: ", index);
    if (index !== -1) {
      const updatedData = [...subData];
      updatedData[index] = { ...updatedData[index], ...newData };
      setSubData(updatedData);
    }
  }, [newData]);
  console.log(selectedValue);
  console.log(newData);
  return (
    <CategorieBoxHandleSmall sx={{ width: `${x - y}%`, marginLeft: `${y}%` }}>
      <HandleInputsSmall>
        <input
          type="text"
          name="mainCat"
          placeholder="Create SubCategories"
          value={selectedValue}
          onChange={(e) => handleOnchangeValue(e)}
        />
        <DeleteButton>
          <Box onClick={() => handleDelete()}>
            <FolderDeleteIcon />
          </Box>
        </DeleteButton>
      </HandleInputsSmall>
    </CategorieBoxHandleSmall>
  );
};

const Categorie = () => {
  const dispatch = useDispatch();
  const [mainCat, setMainCat] = useState("");
  const [subData, setSubData] = useState([]);
  const [categoriedata, setCategoriedata] = useState({
    name: mainCat,
    subCategories: subData,
  });
  const [count, setCount] = useState(0);
  const { CategorieData } = useSelector((state) => state.Categories);

  const handleAddSub = (e) => {
    e.preventDefault();
    setCount(count + 1);
    setSubData([...subData, { id: count + 1, name: "" }]);
    setCategoriedata({ name: mainCat, subCategories: subData });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mainCat === "") {
      return console.log("Categorie name is required");
    } else {
      console.log("subData: ", subData);
      const tempdata = { name: mainCat, subCategories: subData };
      dispatch(addNewCategorie(tempdata));
    }
    setSubData([]);
    setMainCat("");
  };
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  console.log(CategorieData);

  return (
    <CategorieMain>
      <CategorieAll>
        <CategorieTopTitle>
          <span>
            <ElectricBikeIcon sx={{ width: 50, height: 50 }} />
          </span>
          <span>ADD CATEGORIES</span>
        </CategorieTopTitle>

        <form onSubmit={(e) => handleSubmit(e)}>
          <CategorieBoxHandle>
            <HandleInputs>
              <input
                type="text"
                name="mainCat"
                placeholder="Create Categories"
                value={mainCat}
                onChange={(e) => setMainCat(e.target.value)}
              />
            </HandleInputs>
            <AllButtons>
              <RightButton>
                <Box onClick={(e) => handleAddSub(e)}>Add SubCategories</Box>
              </RightButton>
            </AllButtons>
            {subData.map((data, index) => (
              <Subs
                key={data.id}
                number={data.id}
                setSubData={setSubData}
                subData={subData}
              />
            ))}
          </CategorieBoxHandle>

          <HandleSumbitButton>
            <button onClick={(e) => handleSubmit(e)}>
              <span>Submit</span>
              <span>
                <EnergySavingsLeafIcon />
              </span>
            </button>
          </HandleSumbitButton>
        </form>
        <Box>
          <Typography sx={{ color: "#252F43" }}>All Categories</Typography>
        </Box>
        <CategorieTopMain>
          {CategorieData?.length > 0 ? (
            CategorieData?.map((data, index) => {
              return <PreExistData key={data.id} data={data} />;
            })
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
              <Typography style={{ color: "#BAC0C7" }}>Loading...</Typography>
            </Box>
          )}
        </CategorieTopMain>
      </CategorieAll>
    </CategorieMain>
  );
};

export default Categorie;
