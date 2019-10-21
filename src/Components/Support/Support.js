import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MdClose } from "react-icons/md";
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import "./Support.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  itemVal: {
    color: "#666",
    fontSize: "12px",
    margin: "5px 0px",
    fontWeight: 300
  }
}));

export function Support(props) {
  const classes = useStyles();
  const [btnOpen, setBtnOpen] = React.useState(true);
  const [topic, setTopic] = React.useState(10);
  let value;
  const handleTextChange = event => {
    if (event.target.value.length > 0) {
      setBtnOpen(false);
    } else {
      setBtnOpen(true);
    }
  };

  const handleSelectChange = event => {
    setTopic(event.target.value);
  };
  return (
    <Dialog
      open={props.open}
      onClose={() => props.closeDialog}
      aria-labelledby="form-dialog-title"
      maxWidth="xs"
    >
      <DialogTitle id="form-dialog-title" className="dg-title">
        We love your feedback!
        <Button onClick={() => props.closeDialog()} className="close-btn">
          <MdClose />
        </Button>
      </DialogTitle>
      <DialogContent>
        <FormControl className={classes.formControl}>
          <InputLabel>Topic</InputLabel>
          <Select
            className="select-topic"
            value={topic}
            onChange={handleSelectChange}
          >
            <MenuItem className={classes.itemVal} value={10}>
              I have a feedback
            </MenuItem>
            <MenuItem className={classes.itemVal} value={20}>
              I have an Issue
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            autoFocus
            margin="dense"
            id="feedback"
            label="share your ideas"
            type="text"
            fullWidth
            className="text-feedback"
            onChange={handleTextChange}
            value={value}
          />
        </FormControl>
        <div className="disclaimer-text">
          Your satisfaction is very important to us. If your issue requires
          immideate attention please contact the SafeWire Support at
          614-362-8058.
        </div>
      </DialogContent>
      <DialogActions className="action-box">
        <Button
          variant="outlined"
          onClick={() => props.closeDialog()}
          color="primary"
          disabled={btnOpen}
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}
