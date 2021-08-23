import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appbar: {
    background: theme.palette.common.black,
  },
  toolbar: {
    color: theme.palette.common.white,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "100px",
  },
  text: {
    width: "fit-content",
    textAlign: "center",
    marginBottom: "10px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    border: "1px solid #fff",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 2, 1, 2),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
