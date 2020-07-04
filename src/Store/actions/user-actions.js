import { auth, db, storage } from "../../config/fbConfig";
import JWT from "jsonwebtoken";
import { toast } from "react-toastify";
// save user
const saveUser = (user, data, dispatch) => {
  // get profile image
  const profileImage = data.photo[0];
  const metadata = {
    contentType: "image/jpeg"
  };
  // storage profile image in storage
  const response = storage
    .ref(`/users/${user.user.uid}/profile.jpg`)
    .put(profileImage, metadata);
  response
    .then(uploadTask => {
      return uploadTask.ref.getDownloadURL();
    })
    .then(img => {
      // save user
      db.collection("users")
        .doc(user.user.uid)
        .set({
          email: data.email,
          name: data.username,
          DOB: data.DOB,
          profileImage: img,
          userId: user.user.uid,
          joined: new Date().toDateString()
        });
      // update user profile
      return user.user.updateProfile({
        displayName: data.username,
        photoURL: img
      });
    })
    .then(() => {
      // get user token
      return user.user.getIdToken();
    })
    .then(token => {
      // store token in localstorage
      const secretToken = JWT.sign({ user: user.user }, token);
      localStorage.setItem("token", secretToken);
    })
    .then(() => {
      dispatch({ type: "STOP_LOADING" });
      toast.success("Signed up successfully", {
        onClose: () => (window.location.href = "/")
      });
    })
    .catch(err => {
      console.log(err);
    });
};
// Signup user
export const signUpUser = data => {
  return dispatch => {
    dispatch({ type: "LOADING" });
    const response = auth.createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    response
      .then(user => {
        saveUser(user, data, dispatch);
      })
      .catch(err => {
        dispatch({ type: "STOP_LOADING" });
        dispatch({ type: "SIGNUPERROR", payload: err.message });
        return toast.error(err.message);
      });
  };
};

// save token
const saveToken = (user, dispatch) => {
  // get user token
  const userToken = user.user.getIdToken();

  userToken
    .then(token => {
      const secretToken = JWT.sign({ user: user.user }, token);
      localStorage.setItem("token", secretToken);
    })
    .then(() => {
      toast.success("Signed in successfully", {
        onClose: () => (window.location.href = "/")
      });
    })
    .then(() => {
      dispatch({ type: "STOP_LOADING" });
    })
    .catch(err => {
      console.log(err);
    });
};
// login user
export const loginUser = data => {
  return dispatch => {
    dispatch({ type: "LOADING" });

    const response = auth.signInWithEmailAndPassword(data.email, data.password);
    response
      .then(user => {
        saveToken(user, dispatch);
      })
      .catch(err => {
        dispatch({ type: "STOP_LOADING" });
        dispatch({ type: "LOGINERROR", payload: err.message });
        toast.error(err.message);
      });
  };
};

// Signout user
export const signOut = () => {
  return dispatch => {
    const response = auth.signOut();
    response
      .then(() => {
        localStorage.removeItem("token");
      })
      .then(() => {
        window.location.href = "/";
      })
      .catch(err => {
        console.log(err);
      });
  };
};
