/** @format */

import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  MARK_NOTIFICATIONS_READ,
  CLEAR_LOADING_ERRORS,
} from "../types";
import axios from "axios";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      // dispatch({ type: CLEAR_ERRORS });

      dispatch({ type: CLEAR_LOADING_ERRORS });
      if (history.location.pathname === "/verify") {
        history.push("/");
      }
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/signup", newUserData)
    .then((res) => {
      //setAuthorizationHeader(res.data.token);
      //dispatch(getUserData());

      history.push("/verify", newUserData);
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

// export const verifyUser = newUserData => dispatch => {
//   dispatch({ type: LOADING_UI });
//   axios
//     .post("/verify", newUserData)
//     .then(res => {
//       setAuthorizationHeader(res.data.token);
//       dispatch(getUserData());
//       dispatch({ type: CLEAR_ERRORS });
//     })
//     .catch(err => {
//       dispatch({
//         type: SET_ERRORS,
//         payload: err.response.data
//       });
//     });
// };

export const resetPassword = (email, history) => (dispatch) => {
  axios
    .post("/resetPassword", email)
    .then((res) => {
      // history.push("/");
    })
    .catch((err) => console.log(err));
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// export const uploadImage = formData => dispatch => {
//   dispatch({ type: LOADING_USER });
//   axios
//     .post("/user/image", formData)
//     .then(() => {
//       dispatch(getUserData());
//     })
//     .catch(err => console.log(err));
// };

export const editUserDetails = (userDetails) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/user", userDetails)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

// export const markNotificationsRead = notificationIds => dispatch => {
//   axios
//     .post("/notifications", notificationIds)
//     .then(res => {
//       dispatch({
//         type: MARK_NOTIFICATIONS_READ
//       });
//     })
//     .catch(err => console.log(err));
// };

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);

  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
