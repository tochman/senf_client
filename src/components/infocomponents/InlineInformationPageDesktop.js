/** @format */

import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import MyButton from "../../util/MyButton";

// MUI Stuff
import Dialog from "@material-ui/core/Dialog";

// Redux stuff
import { connect } from "react-redux";
import { clearErrors } from "../../redux/actions/dataActions";
import { Link } from "react-router-dom";

//LazyLoad
import { LazyImage } from "react-lazy-images";

import Headline from "../../images/headline.png";
import FirstImageBad from "../../images/bigbubblemanbad.png";

//IMAGES
import FirstImage from "../../images/bigbubbleman.png";
import Mountain from "../../images/bigbubblenew.png";

//LOADER
import CircularProgress from "@material-ui/core/CircularProgress";

//ICON TO OPEN THE INFOMENU
import Info from "../../images/icons/info.png";
import CloseIcon from "@material-ui/icons/Close";

import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = {
  root: {
    //backgroundColor: "rgb(0,0,0,0.5)",
    padding: "0",
    borderRadius: "20px !important",
  },

  paper: {
    //backgroundColor: "rgb(0,0,0,0.5)",
    boxShadow: "none",

    height: "auto",
    padding: "0",
    top: "18em",
    borderRadius: "20px ",
  },

  closeButton: {
    position: "absolute",
    top: "2.5vw",
    left: "2.5vw",
    color: "black",
    zIndex: "990",
    padding: 10,
  },

  nav: {
    width: "100vw",
    height: "80px",
    position: "fixed",
    backgroundColor: "white",
    zIndex: 999,
  },

  PlattformButton2: {
    position: "fixed",
    zIndex: 99,
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
    width: "200px",
    right: "50px",
    bottom: "50px",
    borderRadius: "100px",
    color: "white",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.2)",
    backgroundColor: "#414345",
    textTransform: "none",
    fontSize: "14pt",
    border: " solid 1px #414345",
  },

  KontaktButton: {
    position: "absolute",
    zIndex: 99,
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
    width: "50vw",
    left: "25vw",
    top: "1760px",
    borderRadius: "100px",
    color: "#414345",
    backgroundColor: "white",
    textTransform: "none",
    fontSize: "14pt",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.2)",
  },

  TopPath: {
    position: "absolute",
    top: "0",
    width: "100vw",
  },

  FirstImage: {
    position: "absolute",
    top: "24vw",
    width: "75vw",
    marginLeft: "15.3vw",
  },
};

class InlineInformationPage extends Component {
  render() {
    const {
      classes,
      openInfoPageDesktop,
      cookiesSetDesktop,
      handleOpenInfoPageDesktop,
      handleCloseInfoPageDesktop,
      handleCookiesDesktop,
      handleOpenCookiePreferences,
      handleMinimumCookies,
      loading,
    } = this.props;

    const dialogComponent =
      !loading && !cookiesSetDesktop ? (
        <Dialog
          scroll={"paper"}
          open={openInfoPageDesktop}
          onClose={this.handleClose}
          className="dialogOverlayContent"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          maxWidth={"sm"}
          PaperProps={{
            style: { borderRadius: "20px" },
          }}
        >
          <DialogContent style={{ height: "200px" }}>
            <div className="cookiesText">
              {" "}
              <span className="cookiesHeader">Ohne Cookies geht's nicht.</span>
              <br />
              Für die Bereitstellung einiger Funktionen und die Verbesserung
              dieses Services brauchen wir Cookies. Falls du wirklich nur die
              technisch notwendigsten Cookies akzeptieren willst, klicke{" "}
              <span className="Terms" onClick={handleMinimumCookies}>
                hier
              </span>
              &nbsp;oder konfiguriere deine{" "}
              <span className="Terms" onClick={handleOpenCookiePreferences}>
                Cookie-Einstellungen
              </span>
              .
            </div>

            <button
              className="buttonWide buttonCookiesDesktop"
              onClick={handleCookiesDesktop}
            >
              Akzeptieren
            </button>
          </DialogContent>
        </Dialog>
      ) : !loading ? (
        <Dialog
          scroll={"paper"}
          open={openInfoPageDesktop}
          onClose={this.handleClose}
          className="dialogOverlayContent"
          TransitionComponent={Transition}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          maxWidth={"lg"}
          PaperProps={{
            style: {
              borderRadius: "20px",
              width: "1000px",
              height: "900px",
              maxHeight: "calc(100vh - 80px)",
              overflowX: "hidden",
            },
          }}
        >
          <button
            onClick={handleCloseInfoPageDesktop}
            className="buttonRound buttonClose"
            style={{ position: "fixed" }}
          >
            <CloseIcon />
          </button>

          <DialogContent style={{}}>
            <img className="Gib" src={Headline} width="100px"></img>

            <LazyImage
              src={FirstImage}
              className="FirstImage"
              alt="Person_Senftube"
              placeholder={({ imageProps, ref }) => (
                <img
                  ref={ref}
                  src={FirstImageBad}
                  className="FirstImage"
                  alt="Person_Senftube"
                />
              )}
              actual={({ imageProps }) => (
                <img {...imageProps} alt="Person_Senftube" />
              )}
            />
            <div className="SVGweb" alt="TopPath">
              <img src={Mountain} className="Mountain" alt="Mountain" />

              <div>
                <span className="title1Web">
                  Du hast Ideen für <br /> dein Kölner Veedel?
                </span>

                <span className="subTitle1Web">
                  Hier kannst du deine Ideen teilen und die der anderen sehen;
                  in den Dialog treten und für Ideen, die dir gefallen stimmen!
                </span>
              </div>
              <span className="title2Web">
                Eure Stimmen können <br /> laut werden!
              </span>
              <span className="subTitle2Web">
                Sowohl den Stadtvertreter:innen als auch euch wollen wir hier
                Bürger-Know-How vermitteln. Lasst die Stadt Köln eure Ideen
                hören!
              </span>
              <span className="title3Web">
                Du willst das Projekt <br /> unterstützen?
              </span>
              <span className="subTitle3Web">
                Wir konnten bereits tolle Kooperationen eingehen. Wenn auch dich
                unsere Denkweise anspricht, lass uns quatschen!
              </span>

              <button
                className="buttonWide buttonInlineInfoIdeas"
                onClick={handleCloseInfoPageDesktop}
              >
                Ideen anzeigen
              </button>

              <a href="mailto:dein@senf.koeln">
                <button className="buttonWide buttonInlineInfoContact">
                  Kontakt
                </button>
              </a>

              <span className="footer">
                <Link to="/impressum">
                  <span className="impressum"> Impressum </span>
                </Link>
                <Link to="/datenschutz">
                  <span className="datenschutz"> | Datenschutz | </span>
                </Link>
                <Link to="/agb">
                  <span className="agb"> AGB </span>
                </Link>
              </span>
              <span className="footercopy">
                Illustrationen: Gizem Güvenda&#287;
              </span>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <div className="white">
          <div className="spinnerDiv">
            <CircularProgress size={50} thickness={2} />
            {/* <img src={lamploader} className="lamploader" alt="LikeIcon" /> */}
          </div>
        </div>
      );

    return (
      <Fragment>
        <div onClick={handleOpenInfoPageDesktop}>
          <div className="inlineInfoIcon">
            <img src={Info} width="35" alt="EndImage" />

            <span className="inlineInfoIconText">Infos</span>
          </div>
        </div>

        {dialogComponent}
      </Fragment>
    );
  }
}

const mapActionsToProps = {
  clearErrors,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(InlineInformationPage));
