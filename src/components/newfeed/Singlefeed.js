import React, { Fragment, useEffect } from "react";
import CommentForm from "../comment/commentForm";
import { connect } from "react-redux";
import {
  fetchSingleFeed,
  deleteFeed
} from "../../Store/actions/newsfeed-actions";
import LoadingSpinner from "../spinner/LoadingSpinner";
import jwt_decode from "jwt-decode";
import moment from "moment";
import { Link } from "react-router-dom";
const Singlefeed = ({
  match,
  getFeed,
  feed,
  isloading,
  comments,
  deleteFeed
}) => {
  const token = jwt_decode(localStorage.getItem("token"));
  const { uid } = token.user;
  const { id } = match.params;
  useEffect(() => {
    getFeed(id);
  }, [id]);
  const deletefeed = () => {
    deleteFeed(id);
  };
  return (
    <Fragment>
      {isloading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-wrap h-screen mt-6">
          <div className="w-full sm:w-1/2">
            {feed.map((post, i) => {
              return (
                <div
                  className="max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg"
                  key={i}
                >
                  <div className="py-2 flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center">
                      <p
                        href="#"
                        className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg"
                      >
                        <img
                          className="rounded-full h-8 w-8 object-cover"
                          src={`${post.userImage}`}
                          alt={`${post.userImage}`}
                        />
                        <Link
                          to={`/profile/${post.userId}`}
                          className="ml-2 text-base text-green-500 font-medium"
                        >
                          {post.username}
                        </Link>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <p className="text-xs font-semibold text-gray-500">
                        {post.createdAt}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <img
                      className="object-cover w-full rounded-lg"
                      src={`${post.photo}`}
                      alt=""
                    />
                  </div>
                  <div className="py-2 flex justify-between items-center">
                    <p className="leading-snug">{post.content}</p>
                    {token && uid === post.userId ? (
                      <button
                        onClick={deletefeed}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Delete Feed
                      </button>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full sm:w-1/2 px-6">
            <div className="divide-y divide-gray-400">
              {!token ? (
                <div
                  className="flex items-center bg-teal-200 border border-teal-300 text-teal-500 pl-4 pr-8 py-3 rounded"
                  role="alert"
                >
                  <svg
                    className="h-6 w-6 text-teal mr-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                  <span className="block sm:inline">
                    Login or signup to leave a comment
                  </span>
                </div>
              ) : (
                <CommentForm feedId={id} />
              )}

              <div className="py-2">
                {!comments.length ? (
                  <p>No comments</p>
                ) : (
                  comments.map((comment, i) => {
                    return (
                      <div
                        className="flex bg-white shadow-lg rounded-lg mb-3"
                        key={i}
                      >
                        <div className="flex items-start px-4 py-6 w-full">
                          <img
                            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                            src={`${comment.photoURL}`}
                            alt="avatar"
                          />
                          <div className="w-full">
                            <div className="flex items-center justify-between">
                              <h2 className="text-lg font-semibold text-green-500">
                                <Link to={`/profile/${comment.uid}`}>
                                  {comment.displayName}
                                </Link>
                              </h2>
                              <small className="text-sm text-gray-700">
                                {moment(comment.createdAt).fromNow()}
                              </small>
                            </div>
                            <p className="mt-2 text-gray-700 text-sm">
                              {comment.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    isloading: state.news.loading,
    feed: state.news.userFeed,
    comments: state.news.comments
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFeed: id => dispatch(fetchSingleFeed(id)),
    deleteFeed: feedId => dispatch(deleteFeed(feedId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Singlefeed);
