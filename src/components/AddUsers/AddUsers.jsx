import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import SingleCard from "./SingleCard";

const UserMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  padding: "2%",
  "& > div": {
    marginTop: "20px",
  },
}));
const TopSection = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  padding: "2%",
  "&>button": {
    backgroundColor: "#5A73CD",
    color: "#000",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    padding: "7px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "0.4s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
    },
    "&:active": {
      transform: "scale(1)",
    },
    "&>p": {
      color: "#fff",
    },
  },
}));

const UsersSection = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexWrap: "wrap",
  width: "calc(100% - 4%)",
  padding: "2%",
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AddUsers = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("hello");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <UserMainBox>
      <TopSection>
        <button onClick={() => handleClickOpen()}>
          <Typography>Create New User</Typography>
        </button>
      </TopSection>
      <UsersSection>
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </UsersSection>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Create New User"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography>Enter Email Id</Typography>
            <input
              type="text"
              placeholder="Enter Email id"
              style={{ padding: "10px 20px" }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </UserMainBox>
  );
};

export default AddUsers;
