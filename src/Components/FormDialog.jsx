import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || ""
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const randomNumber = Math.floor(1 + Math.random() * (100 - 1));

const Input = styled("input")({
  display: "none",
});

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useStateWithLocalStorage(randomNumber);

  const onChange = (event) => setValue(event.target.value);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        color="secondary"
        sx={{
          position: "absolute",
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(2),
        }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Branch</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Add a Branch Name and a Promotion
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Branch Name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Longitude"
            fullWidth
            variant="standard"
            value={value}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Latitude"
            fullWidth
            variant="standard"
          />
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button variant="contained" component="span">
              Upload Promotion
            </Button>
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onChange}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
