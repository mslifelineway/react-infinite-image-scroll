import { Card, CardMedia, makeStyles, Modal } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: "60%",
    margin: "120px auto",
    padding: "15px",
  },
  media: {
    height: "60vh",
  },
});

export default function ImageModal({ modalImage, open, handleClose }) {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
    >
      <Card className={classes.root}>
        <CardActionArea>
          {modalImage && (
            <CardMedia
              className={classes.media}
              image={modalImage}
              title="modal image"
            />
          )}
        </CardActionArea>
      </Card>
    </Modal>
  );
}
