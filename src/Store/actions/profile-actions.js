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
        console.log(doc.data());
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
// updateUser
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

// delete user
export const deleteUser = uid => {
  return dispatch => {
    dispatch({ type: "LOADING" });
    const batch = db.batch();

    const removeUser = db
      .collection("users")
      .doc(`${uid}`)
      .delete();
    removeUser
      .then(() => {
        return db
          .collection("newsfeed")
          .where("userId", "==", uid)
          .get();
      })
      .then(data => {
        data.forEach(doc => {
          batch.delete(doc.ref);
        });
      })
      .then(() => {
        return db
          .collection("comments")
          .where("userId", "==", uid)
          .get();
      })
      .then(data => {
        data.forEach(doc => {
          return db
            .collection("newsfeed")
            .doc(`/${doc.data().feedId}`)
            .update({ commentCount: 0 });
        });
      })
      .then(() => {
        return db
          .collection("comments")
          .where("userId", "==", uid)
          .get();
      })
      .then(data => {
        data.forEach(doc => {
          batch.delete(doc.ref);
        });
      })
      .then(() => {
        return batch.commit();
      })
      .then(() => {
        return storage.ref(`/users/${uid}/profile.jpg`).delete();
      })
      .then(() => {
        return localStorage.removeItem("token");
      })
      .then(() => {
        return auth.currentUser.delete();
      })
      .then(() => {
        toast.info("Account removed", {
          onClose: () => (window.location.href = "/")
        });
      })
      .catch(err => {
        dispatch({ type: "STOP_LOADING" });
        toast.error("Error removing account");
        console.log(err);
      });
  };
};
