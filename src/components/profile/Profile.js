import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import {
  getUser,
  updateUser,
  deleteUser
} from "../../Store/actions/profile-actions";
import { Link } from "react-router-dom";
import LoadingSpinner from "../spinner/LoadingSpinner";
import jwt_decode from "jwt-decode";
const Profile = ({
  match,
  getUser,
  isloading,
  user,
  updateuser,
  deleteuser
}) => {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const [open, setOpen] = useState(false);
  const onSubmit = data => {
    updateuser(data);
  };
  const { id } = match.params;
  const token = jwt_decode(localStorage.getItem("token"));
  const { uid } = token.user;
  const deletingUser = () => {
    deleteuser(uid);
  };
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
                            {open ? (
                              <>
                                <div
                                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                  onClick={() => setOpen(false)}
                                >
                                  <div className="relative w-auto my-6 mx-auto max-w-sm">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                          Delete Account
                                        </h3>
                                        <button
                                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                          onClick={() => setOpen(false)}
                                        >
                                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                          </span>
                                        </button>
                                      </div>
                                      <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                          Are you sure you want to remove this
                                          account, info will be erased forever!
                                        </p>
                                      </div>

                                      <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button
                                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                          type="button"
                                          style={{
                                            transition: "all .15s ease"
                                          }}
                                          onClick={() => setOpen(false)}
                                        >
                                          Close
                                        </button>
                                        <button
                                          className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                          type="button"
                                          style={{
                                            transition: "all .15s ease"
                                          }}
                                          onClick={deletingUser}
                                        >
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                              </>
                            ) : null}
                            <div className="flex justify-between">
                              <button
                                className="shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button"
                              >
                                Update
                              </button>
                              <button
                                className="shadow bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button"
                                onClick={() => setOpen(true)}
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
    updateuser: email => dispatch(updateUser(email)),
    deleteuser: uid => dispatch(deleteUser(uid))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
