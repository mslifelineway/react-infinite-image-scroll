import "./App.css";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "./containers/Header";
import { Avatar, Box, Grid, makeStyles } from "@material-ui/core";
import ImageModal from "./containers/ImageModal";
import CustomSnackbar from "./containers/CustomSnackbar";
const clientId = `?client_id=${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "100%",
    height: "200px",
  },
  imageLists: {
    width: "100%",
    margin: "0px",
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const [snackbarOptions, setSnackbarOptions] = React.useState({
    open: false,
    severity: "error",
    message: "",
  });
  const handleSnackbarClose = () => {
    setSnackbarOptions({ open: false });
  };

  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [query, setQuery] = React.useState("");

  const getImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientId}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientId}${urlPage}`;
    }

    try {
      const imageResp = await axios.get(url);
      const data = await imageResp.data;
      setPhotos((old) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...old, ...data.results];
        } else {
          return [...old, ...data];
        }
      });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      const { message, response } = e;
      if (response)
        setSnackbarOptions({
          message: response.data ? response.data : "Something went wrong!",
          open: true,
          severity: "error",
        });
      else
        setSnackbarOptions({ message: message, open: true, severity: "error" });
    }
  };

  useEffect(() => {
    getImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((old) => {
          return old + 1;
        });
      }
    });

    return () => window.removeEventListener("scroll", event);
  }, []);

  const renderInfiniteImages = () => {
    return photos.map((photo, index) => {
      return (
        <Grid
          item
          key={index}
          lg={3}
          md={3}
          sm={4}
          xs={12}
          onClick={() => {
            setModalImage(photo.urls.regular);
            setOpen(true);
          }}
        >
          <Avatar
            className={classes.avatar}
            src={photo.urls.regular}
            variant="square"
            alt="load image"
          />
        </Grid>
      );
    });
  };

  const handleInputChange = (search) => {
    setQuery(search);
    setPage(1);
    getImages();
  };

  return (
    <>
      <Header handleInputChange={handleInputChange} />
      <Box height="110px"></Box>
      <CustomSnackbar
        handleSnackbarClose={handleSnackbarClose}
        snackbarOptions={snackbarOptions}
      />
      <Grid container spacing={2} className={classes.imageLists}>
        {renderInfiniteImages()}
      </Grid>
      <ImageModal
        modalImage={modalImage}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

export default App;
