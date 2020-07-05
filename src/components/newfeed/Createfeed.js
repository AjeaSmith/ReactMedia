import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { createFeed } from "../../Store/actions/newsfeed-actions";
import LoadingSpinner from "../spinner/LoadingSpinner";
import jwt_decode from "jwt-decode";
const Createfeed = ({ createfeed, isloading }) => {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const token = jwt_decode(localStorage.getItem("token"));
  let user;
  if (token) {
    user = token;
  }
  const { displayName, uid } = user.user;
  const onSubmit = data => {
    createfeed(data, displayName, uid);
  };
  return (
    <Fragment>
      {isloading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full max-w-xl mx-auto mt-8">
          <form
            className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="mb-4 text-center text-2xl">Create Feed</h3>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Image URL
              </label>
              <input
                name="image"
                className={
                  errors.image
                    ? "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-red-500"
                    : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                }
                id="image"
                type="text"
                placeholder="EX: Any image from unsplash"
                ref={register({
                  required: { value: true, message: "Field is required" }
                })}
              />
              {errors.image && (
                <p className="text-red-500 text-xs italic mt-2 ml-2">
                  {errors.image.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Content
              </label>
              <textarea
                name="content"
                className={
                  errors.content
                    ? "shadow appearance-none rounded border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border border-red-500"
                    : "shadow appearance-none rounded border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                }
                rows="8"
                id="content"
                type="text"
                placeholder="Write Your Message..."
                ref={register({
                  required: { value: true, message: "Field is required" }
                })}
              ></textarea>
              {errors.content && (
                <p className="text-red-500 text-xs italic mt-2 ml-2">
                  {errors.content.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )}
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    isloading: state.news.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createfeed: (data, displayName, userId) =>
      dispatch(createFeed(data, displayName, userId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Createfeed);
