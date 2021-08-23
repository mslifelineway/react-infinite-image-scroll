import { Snackbar } from "@material-ui/core";
import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackbar({
  snackbarOptions,
  handleSnackbarClose,
}) {
  return (
    <>
      {snackbarOptions.message && (
        <Snackbar
          open={snackbarOptions.open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarOptions.severity}
          >
            {snackbarOptions.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
