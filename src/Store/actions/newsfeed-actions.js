import { db, storage } from "../../config/fbConfig";
import { toast } from "react-toastify";
import moment from "moment";

// Create a feed
export const createFeed = (data, username, userId) => {
  return dispatch => {
    dispatch({ type: "LOADING" });
    const newsfeed = {};

    // get Profile image
    const response = storage
      .ref(`/users/${userId}/profile.jpg`)
      .getDownloadURL();
    response
      .then(img => {
        // save feed data
        newsfeed.userId = userId;
        newsfeed.username = username;
        newsfeed.photo = data.image;
        newsfeed.userImage = img;
        newsfeed.content = data.content;
        newsfeed.commentCount = 0;
        newsfeed.createdAt = new Date().toString();
      })
      .then(() => {
        return db.collection("newsfeed").add(newsfeed);
      })
      .then(() => {
        toast.success("Created feed successfully", {
          onClose: () => (window.location.href = "/")
        });
      })
      .then(() => {
        dispatch({ type: "STOP_LOADING" });
      });
  };
};
