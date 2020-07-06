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

export const fetchFeeds = () => {
  return dispatch => {
    dispatch({ type: "LOADING" });
    let feeds = [];

    const response = db
      .collection("newsfeed")
      .orderBy("createdAt", "asc")
      .get();
    response
      .then(data => {
        data.forEach(doc => {
          const newsfeed = {
            feedId: doc.id,
            userId: doc.data().userId,
            photo: doc.data().photo,
            userImage: doc.data().userImage,
            username: doc.data().username,
            content: doc.data().content,
            commentCount: doc.data().commentCount,
            createdAt: moment(doc.data().createdAt).fromNow()
          };
          feeds.unshift(newsfeed);
        });
        return dispatch({ type: "FETCH_SUCCESS", payload: feeds });
      })
      .then(() => {
        dispatch({ type: "STOP_LOADING" });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
