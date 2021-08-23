import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#281AC8",
    },
    secondary: {
      main: "#FD749B",
    },
    error: {
      main: "#F85D5D",
    },
    success: {
      main: "#5DF888",
    },
  },
  typography: {
    fontFamily: "Poppins Medium",
    body1: {
      fontFamily: "Poppins",
    },
  },
});

export default theme;
