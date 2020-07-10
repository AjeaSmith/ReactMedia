import { db, auth, storage } from "../../config/fbConfig";
import { toast } from "react-toastify";

// fetch user
export const getUser = userId => {
  return dispatch => {
    dispatch({ type: "LOADING" });
    const results = {};

    const response = db.doc(`/users/${userId}`).get();
    response
      .then(doc => {
        results.name = doc.data().name;
        results.email = doc.data().email;
        results.DOB = doc.data().DOB;
        results.joined = doc.data().joined;
        results.profileImage = doc.data().profileImage;
        results.userId = doc.data().userId;
        return db
          .collection("newsfeed")
          .where("userId", "==", userId)
          .get();
      })
      .then(data => {
        results.feeds = [];
        data.forEach(doc => {
          results.feedId = doc.id;
          results.feeds.unshift(doc.data());
        });
        dispatch({ type: "STOP_LOADING" });
        return dispatch({ type: "FETCH_USER_SUCCESS", payload: results });
      });
  };
};
export const updateUser = ({ updateEmail }) => {
  return dispatch => {
    dispatch({ type: "LOADING" });

    const currentUser = auth.currentUser;

    currentUser
      .updateEmail(updateEmail)
      .then(() => {
        return currentUser.updateProfile({ email: updateEmail });
      })
      .then(() => {
        return db.doc(`/users/${currentUser.uid}`).get();
      })
      .then(doc => {
        return doc.ref.update({ email: updateEmail });
      })
      .then(() => {
        toast.success("Account updated", {
          onClose: () => (window.location.href = `/profile/${currentUser.uid}`)
        });
      })
      .catch(err => {
        toast.error("There was an error updating your account");
        console.log(err);
      });
  };
};
