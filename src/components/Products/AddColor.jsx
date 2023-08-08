import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { SketchPicker } from "react-color";

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
  ":active": {
    transform: "scale(0.98)",
  },
}));

const ColorMatch = ({ number, multiColor, setMultiColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [newData, setNewData] = useState({ id: number, colors: selectedColor });
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    setNewData({ id: number, colors: color.hex });
  };
  useEffect(() => {
    const index = multiColor.findIndex((item) => item.id === number);
    if (index !== -1) {
      const updatedData = [...multiColor];
      updatedData[index] = { ...updatedData[index], ...newData };
      setMultiColor(updatedData);
    }
  }, [isOpen]);

  return (
    <>
      <SideColors
        style={{ backgroundColor: `${selectedColor}` }}
        key={number}
        onClick={handleIsOpen}
      ></SideColors>
      {isOpen ? (
        <SketchPicker color={selectedColor} onChange={handleColorChange} />
      ) : null}
    </>
  );
};

const AddColor = () => {
  const [multiColor, setMultiColor] = useState([]);
  const [chooseColor, setChooseColor] = useState("#fff");
  const [count, setCount] = useState(0);

  const handleMultipalColor = (e) => {
    e.preventDefault();
    setCount(count + 1);
    setMultiColor([{ id: count + 1, colors: chooseColor }, ...multiColor]);
  };

  return (
    <>
      <SideColorBox onClick={(e) => handleMultipalColor(e)}>
        <LibraryAddIcon sx={{ width: 30, height: 30, color: "#fff" }} />
      </SideColorBox>
      {multiColor?.map((data, index) => (
        <ColorMatch
          key={data.id}
          number={data.id}
          multiColor={multiColor}
          setMultiColor={setMultiColor}
        />
      ))}
    </>
  );
};

export default AddColor;
