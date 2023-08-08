import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { SketchPicker } from "react-color";

import { useDispatch, useSelector } from "react-redux";
import { addNewColor, getAllColors } from "../../redux/actions/ColorsAction";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ColorLists from "./ColorLists";

const MainOfColor = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  // height: "70px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
const SubOfColor1 = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  // height: "70px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& > p": {
    color: "#BAC0C4",
    fontSize: "14px",
    marginLeft: "10px",
  },
}));
const SubOfColorall = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  // height: "70px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
  "& > div": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    "& > div": {
      margin: "5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "& > p": {
        color: "#BAC0C4",
        fontSize: "14px",
        marginLeft: "10px",
      },
    },
    "& > p": {
      color: "#252F43",
      fontSize: "25px",
      marginLeft: "10px",
    },
  },
}));

const SubOfColor2 = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  // height: "70px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const SideColorBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "70px",
  height: "70px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "10px",
  borderRadius: "10px",

  backgroundColor: "#5A73CD",
  boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
  cursor: "pointer",
  ":active": {
    transform: "scale(0.98)",
  },
}));
const SideColors = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "70px",
  height: "70px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "10px",
  borderRadius: "10px",
  boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
  cursor: "pointer",
  marginTop: "20px",
  ":active": {
    transform: "scale(0.98)",
  },
}));

const ColorMatch = ({ newData, setNewData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("white");

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);

    setNewData({ name: color.hex });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "10px",
        }}
      >
        <SideColors
          style={{ backgroundColor: `${selectedColor}` }}
          onClick={handleIsOpen}
        ></SideColors>
        <Typography>{newData.colors}</Typography>
      </Box>
      {isOpen ? (
        <SketchPicker color={selectedColor} onChange={handleColorChange} />
      ) : null}
    </>
  );
};

const AddColor = () => {
  const dispatch = useDispatch();
  const [multiColor, setMultiColor] = useState([]);
  const [open, setOpen] = useState(false);
  const { ColorData } = useSelector((state) => state.Colors);
  const [newData, setNewData] = useState({ name: "" });

  useEffect(() => {
    dispatch(getAllColors());
  }, [dispatch]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  const handleMultipalColor = (e) => {
    e.preventDefault();
    setOpen(true);
    setMultiColor([{ name: "#fff" }, ...multiColor]);
  };
  const handleSaveButton = (e) => {
    e.preventDefault();
    if (newData) {
      dispatch(addNewColor(newData));
    }
    setOpen(false);
  };

  console.log(newData);
  return (
    <MainOfColor>
      <SubOfColor1>
        <SideColorBox onClick={(e) => handleMultipalColor(e)}>
          <LibraryAddIcon sx={{ width: 30, height: 30, color: "#fff" }} />
        </SideColorBox>
        <Typography>Add Colors</Typography>
      </SubOfColor1>
      <Divider />
      <SubOfColorall>
        <Box>
          <Typography>All Colors</Typography>
        </Box>
        <Box>
          {ColorData?.length > 0
            ? ColorData.map((c) => (
                <ColorLists name={c.colorname} colorId={c._id} />
              ))
            : null}
        </Box>
      </SubOfColorall>
      <Dialog
        fullWidth={true}
        fullScreen={fullScreen}
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <Box>
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <Typography
                style={{ color: "#252F43", fontFamily: "'Tektur', cursive" }}
              >
                ADD COLORS
              </Typography>
              <Typography>
                <ColorLensIcon />
              </Typography>
            </Box>
            <Box>
              <Typography>Click on the BOX to choose color</Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "40vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SubOfColor2>
                <ColorMatch newData={newData} setNewData={setNewData} />
              </SubOfColor2>
            </Box>

            <DialogActions>
              <Button
                sx={{ color: "#fff", backgroundColor: "#5A73CD" }}
                autoFocus
                onClick={(e) => handleSaveButton(e)}
              >
                Save Changes
              </Button>
              <Button
                sx={{ color: "#fff", backgroundColor: "#E93E3E" }}
                onClick={handleClose}
                autoFocus
              >
                Close&#160;
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </MainOfColor>
  );
};

export default AddColor;
