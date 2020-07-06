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

// fetch feeds
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

// single feed
export const fetchSingleFeed = feedId => {
  return dispatch => {
    dispatch({ type: "LOADING" });
    let feedData = {};
    let result = [];
    let comments = [];

    const response = db.doc(`/newsfeed/${feedId}`).get();
    response
      .then(doc => {
        feedData.feedId = doc.id;
        feedData.photo = doc.data().photo;
        feedData.content = doc.data().content;
        feedData.username = doc.data().username;
        feedData.userImage = doc.data().userImage;
        feedData.commentCount = doc.data().commentCount;
        feedData.createdAt = moment(doc.data().createdAt).fromNow();
        return result.push(feedData);
      })
      .then(() => {
        dispatch({ type: "FETCH_ONE_SUCCESS", payload: result });
      })
      .then(() => {
        return db
          .collection("comments")
          .where("feedId", "==", feedId)
          .get();
      })
      .then(data => {
        data.forEach(doc => {
          return comments.push(doc.data());
        });
      })
      .then(() => {
        dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: comments });
      })
      .then(() => {
        dispatch({ type: "STOP_LOADING" });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
