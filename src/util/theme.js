/** @format */

export default {
  palette: {
    primary: {
      main: "#414345",

      contrastText: "#000",
    },
    secondary: {
      light: "#ff6333",
      main: "rgb(255, 205, 6)",
      dark: "#FA9A9A",
      contrastText: "#fff",
    },
    tertiary: {
      main: "rgb(91, 112, 204)",
    },
    green: {
      main: "#929df6",
    },
  },

  typography: {
    useNextVariants: true,
    fontWeight: "300",
    fontFamily: "Futura PT W01 Book",
  },
  form: {
    textAlign: "center",
  },
  image: {
    margin: "20px auto 20px auto",
  },
  pageTitle: {
    margin: "10px auto 10px auto",
  },
  textField: {
    margin: "10px auto 10px auto",
  },
  button: {
    marginTop: 20,
    position: "relative",
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  progress: {
    position: "absolute",
  },
  invisibleSeparator: {
    border: "none",
    margin: 4,
  },
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    marginBottom: 20,
  },
  paper: {
    padding: 20,
  },
  // profile: {
  //   "& .image-wrapper": {
  //     textAlign: "center",
  //     position: "relative",
  //     "& button": {
  //       position: "absolute",
  //       top: "80%",
  //       left: "70%"
  //     }
  //   },
  //   "& .profile-image": {
  //     width: 200,
  //     height: 200,
  //     objectFit: "cover",
  //     maxWidth: "100%",
  //     borderRadius: "50%"
  //   },
  //   "& .profile-details": {
  //     textAlign: "center",
  //     "& span, svg": {
  //       verticalAlign: "middle"
  //     },
  //     "& a": {
  //       color: "#00bcd4"
  //     }
  //   },
  //   "& hr": {
  //     border: "none",
  //     margin: "0 0 10px 0"
  //   },
  //   "& svg.button": {
  //     "&:hover": {
  //       cursor: "pointer"
  //     }
  //   }
  // },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px",
    },
  },
};
