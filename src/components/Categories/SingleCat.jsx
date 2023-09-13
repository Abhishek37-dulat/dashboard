import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Snackbar,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import {
  deleteExistingCategorie,
  updateNewCategorie,
} from "../../redux/actions/CategoriesAction";

const FormInputBoxs = styled(Box)(({ theme }) => ({
  border: "none",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  cursor: "pointer",
  "& > input": {
    width: "95%",
    height: "50px",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    paddingLeft: "5%",
    fontFamily: "'Tektur', cursive",
  },
}));

const FormInputBoxsheader = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "70px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  //   border: "1px solid black",
}));
const Buttonsave = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#C6A762",
  ":hover": {
    color: "#fff",
    backgroundColor: "#C6A762",
    opacity: 0.8,
    transform: "scale(0.98)",
  },
}));

const ButtonDelete = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#E93E3E",
  ":hover": {
    color: "#fff",
    backgroundColor: "#E93E3E",
    opacity: 0.8,
    transform: "scale(0.98)",
  },
}));
const ButtonAdd = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#5A73CD",
  ":hover": {
    color: "#fff",
    backgroundColor: "#5A73CD",
    opacity: 0.8,
    transform: "scale(0.98)",
  },
}));

const SingleCat = ({ open, setOpen, data }) => {
  console.log("Single: ", data);
  const dispatch = useDispatch();
  const [openalert, setOpenalert] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [mainCatValue, setMainCatValue] = useState("");
  const [subDataValues, setSubDataValues] = useState([]);
  const [count, setCount] = useState(data.subCategories.length);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubItemData = (e, subId) => {
    e.preventDefault();
    setSubDataValues((items) =>
      items.map((item) =>
        item.id === subId ? { ...item, name: e.target.value } : item
      )
    );
  };

  const handleClose = (e, ID) => {
    dispatch(deleteExistingCategorie(ID));
    setOpen(false);
    handleOpenalert("Categorie Delete", "error");
  };
  const handleBoxClose = () => {
    setOpen(false);
  };

  const handleClosealert = () => {
    setOpenalert(false);
  };

  const handleOpenalert = (message, messageColor) => {
    setOpenalert(true);
    setMessage(message);
    setMessageColor(messageColor);
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    let tempData = {
      name: mainCatValue,
      subCategories: subDataValues,
    };
    dispatch(updateNewCategorie(data._id, tempData));
    handleClose();
    handleOpenalert("Saved successfully!", "success");
  };

  const handleSubCategorieAdd = () => {
    setSubDataValues([...subDataValues, { id: count, name: "" }]);
    setCount(count + 1);
  };
  const reduceInputBox = async (e, subId) => {
    const updated = subDataValues.filter((item) => item.id !== subId);
    setSubDataValues(updated);
  };

  useEffect(() => {
    let tempdata = data.subCategories?.map((item, index) => {
      return { id: index, name: item.name };
    });
    setMainCatValue(data.name);
    setSubDataValues(tempdata);
  }, [data]);
  console.log("SingleOneData: ");
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openalert}
        key={"top" + "right"}
        autoHideDuration={2000}
        onClose={handleClosealert}
      >
        <Alert
          onClose={handleClosealert}
          severity={messageColor}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <Dialog
        fullWidth={true}
        fullScreen={fullScreen}
        maxWidth={"lg"}
        open={open}
        onClose={handleBoxClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <Box>
            <FormInputBoxsheader>
              <Typography sx={{ color: "#C6A762" }}>
                <Grid4x4Icon sx={{ width: 40, height: 40 }} />
              </Typography>
              <Typography>
                <IconButton onClick={handleBoxClose}>
                  <CloseIcon sx={{ color: "#E93E3E" }} />
                </IconButton>
              </Typography>
            </FormInputBoxsheader>
            <form>
              <label
                style={{ color: "#252F43", fontFamily: "'Tektur', cursive" }}
              >
                MainCategorie
              </label>
              <FormInputBoxs>
                <input
                  type="text"
                  value={mainCatValue}
                  onChange={(e) => setMainCatValue(e.target.value)}
                />
              </FormInputBoxs>
              {subDataValues?.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <label
                      style={{
                        color: "#5A73CD",
                        fontFamily: "'Tektur', cursive",
                      }}
                    >
                      SubCategorie
                    </label>
                    <FormInputBoxs>
                      <input
                        type="text"
                        name={item.name}
                        value={item.name}
                        onChange={(e) => handleSubItemData(e, item.id)}
                      />
                      &#160;
                      <IconButton onClick={(e) => reduceInputBox(e, item.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </FormInputBoxs>
                  </React.Fragment>
                );
              })}
            </form>

            <DialogActions>
              <Buttonsave
                sx={{ color: "#fff", backgroundColor: "#C6A762" }}
                autoFocus
                onClick={(e) => handleSaveChanges(e)}
              >
                Save Changes
              </Buttonsave>
              <ButtonDelete
                sx={{ color: "#fff", backgroundColor: "#E93E3E" }}
                onClick={(e) => handleClose(e, data._id)}
                autoFocus
              >
                Delete&#160;
                <DeleteIcon />
              </ButtonDelete>
              <ButtonAdd
                sx={{ color: "#fff", backgroundColor: "#5A73CD" }}
                onClick={() => handleSubCategorieAdd()}
                autoFocus
              >
                Add SubCategorie&#160;
              </ButtonAdd>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SingleCat;
