import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../Store/actions/profile-actions";
import { Link } from "react-router-dom";
import LoadingSpinner from "../spinner/LoadingSpinner";
import jwt_decode from "jwt-decode";
const Profile = ({ match, getUser, isloading, user, updateuser }) => {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const onSubmit = data => {
    updateuser(data);
  };
  const { id } = match.params;
  const token = jwt_decode(localStorage.getItem("token"));
  const { uid } = token.user;
  useEffect(() => {
    getUser(id);
  }, [id]);
  return (
    <Fragment>
      {isloading ? (
        <LoadingSpinner />
      ) : (
        <>
          {user.map((profile, i) => {
            return (
              <Fragment key={i}>
                <div className="flex bg-gray-700 py-18 justify-center">
                  <div className="p-12 text-center max-w-2xl flex flex-wrap justify-center">
                    <div
                      className="rounded-full h-24 w-24 bg-center bg-cover border-2 border-white"
                      style={{
                        backgroundImage: `url(${profile.profileImage})`
                      }}
                    ></div>
                    <div className="w-full text-2xl font-semibold mt-4 text-green-500">
                      {profile.name}
                      <p className="font-normal text-gray-100 text-sm">
                        Joined {profile.joined}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-6 mt-6 md:mx-32 divide-y divide-gray-200">
                  {token && uid === id ? (
                    <>
                      {" "}
                      <div className="text-center py-2">
                        <h3 className="text-center text-2xl mb-4 font-semibold">
                          About me
                        </h3>
                        <form
                          className="w-full mb-6"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <div className="sm:flex justify-between">
                            <div className="mb-6">
                              <div className="">
                                <label className="text-gray-600">
                                  Birthday
                                </label>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-2"
                                  id="inline-full-name"
                                  type="text"
                                  defaultValue={`${profile.DOB}`}
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="mb-6">
                              <div className="">
                                <label className="text-gray-600">Email</label>
                                <input
                                  name="updateEmail"
                                  className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-400 mt-2"
                                  id="inline-username"
                                  type="email"
                                  defaultValue={`${profile.email}`}
                                  placeholder="Enter Email"
                                  ref={register({
                                    required: {
                                      value: true,
                                      message: "Field is required"
                                    },
                                    pattern: {
                                      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                      message: "Email is not valid"
                                    }
                                  })}
                                />
                                {errors.updateEmail && (
                                  <p className="text-red-500 text-xs italic mt-2 ml-2">
                                    {errors.updateEmail.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between">
                              <button
                                className="shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit"
                              >
                                Update
                              </button>
                              <button
                                className="shadow bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button"
                              >
                                Delete Account
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}

                  <div className="py-2">
                    <div className="mt-8 flex flex-col justify-center">
                      <h3 className="font-semibold text-2xl text-center">
                        User Feeds
                      </h3>
                      {!profile.feeds.length ? (
                        <p>No feeds</p>
                      ) : (
                        profile.feeds.map((feed, i) => {
                          return (
                            <div
                              className="px-8 my-4 py-4 bg-gray-200 rounded-lg shadow-md"
                              key={i}
                            >
                              <div className="mt-2">
                                <p className="text-2xl text-gray-700 font-bold">
                                  {feed.content}
                                </p>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                <a className="text-blue-600 hover:underline">
                                  Read more
                                </a>
                                <div>
                                  <a className="flex items-center" href="#">
                                    <img
                                      className="mr-3 w-8 h-8 rounded-full"
                                      src={`${feed.userImage}`}
                                      alt="avatar"
                                    />
                                    <h1 className="text-gray-700 font-bold">
                                      {feed.username}
                                    </h1>
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </>
      )}
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    user: state.profile.user,
    isloading: state.profile.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id)),
    updateuser: email => dispatch(updateUser(email))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
