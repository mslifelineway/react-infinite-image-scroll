import { AppBar, InputBase, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function Header({ handleInputChange }) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.text}>
          Search Photos
        </Typography>
        <div className={classes.search}>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
