import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { commentFeed } from "../../Store/actions/newsfeed-actions";
import jwt_decode from "jwt-decode";
const CommentForm = ({ createComment, feedId }) => {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const token = jwt_decode(localStorage.getItem("token"));
  const { displayName, uid, photoURL } = token.user;
  const onSubmit = data => {
    createComment(data, feedId, displayName, photoURL, uid);
  };
  return (
    <div className="text-center py-2">
      <form
        className="bg-white rounded-lg pt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className={
                errors.body
                  ? "bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white border border-red-500"
                  : "bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              }
              name="body"
              placeholder="Type Your Comment"
              ref={register({
                required: { value: true, message: "Field cannot be empty" }
              })}
            ></textarea>
            {errors.body && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.body.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-full flex items-start md:w-full px-3">
            <div className="-mr-1">
              <input
                type="submit"
                className="bg-green-500 text-white font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-green-600"
                value="Post Comment"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    createComment: (data, feedId, displayName, photoURL, uid) =>
      dispatch(commentFeed(data, feedId, displayName, photoURL, uid))
  };
};
export default connect(null, mapDispatchToProps)(CommentForm);
