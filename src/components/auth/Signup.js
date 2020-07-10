import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../Store/actions/user-actions";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../spinner/LoadingSpinner";
const Signup = ({ isloading, signup, singuperror }) => {
  const [value, setValue] = useState();
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const handleChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      setValue(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  const onSubmit = data => {
    signup(data);
  };
  return (
    <Fragment>
      {isloading ? (
        <LoadingSpinner />
      ) : (
        <div className="bg-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <div className="py-10">
              <div>
                <div className="mb-5 text-center">
                  <div className="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                    <img
                      id="image"
                      className="w-full h-32 rounded-full"
                      src={value}
                      alt="user"
                    />
                  </div>

                  <label
                    htmlFor="fileInput"
                    type="button"
                    className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        stroke="none"
                      ></rect>
                      <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                    Browse Photo
                  </label>

                  <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">
                    Click to add profile picture
                  </div>

                  <input
                    name="photo"
                    id="fileInput"
                    className="hidden"
                    type="file"
                    ref={register({
                      required: { value: true, message: "Field is required" }
                    })}
                    onChange={handleChange}
                  />
                  {errors.photo && (
                    <p className="text-red-500 text-xs italic mt-2 ml-2">
                      {errors.photo.message}
                    </p>
                  )}
                </div>
                <h2 className="text-center text-4xl my-3">Sign up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-5">
                    <label
                      htmlFor="username"
                      className="font-bold mb-1 text-gray-700 block"
                    >
                      Username
                    </label>
                    <input
                      name="username"
                      type="text"
                      className={
                        errors.username
                          ? "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium border border-red-500"
                          : "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                      }
                      placeholder="Enter your username..."
                      ref={register({
                        required: { value: true, message: "Field is required" },
                        minLength: {
                          value: 3,
                          message: "Must be at least 3 characters long"
                        }
                      })}
                    />
                    {errors.username && (
                      <p className="text-red-500 text-xs italic mt-2 ml-2">
                        {errors.username.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="font-bold mb-1 text-gray-700 block"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className={
                        errors.email
                          ? "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium border border-red-500"
                          : "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                      }
                      placeholder="Enter your email address..."
                      ref={register({
                        required: { value: true, message: "Field is required" },
                        pattern: {
                          value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Email is not valid"
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs italic mt-2 ml-2">
                        {errors.email.message}
                      </p>
                    )}
                    {singuperror && (
                      <p className="text-red-500 text-xs italic mt-2 ml-2">
                        {singuperror}
                      </p>
                    )}
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="DOB"
                      className="font-bold mb-1 text-gray-700 block"
                    >
                      DOB
                    </label>
                    <input
                      name="DOB"
                      type="date"
                      className={
                        errors.DOB
                          ? "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium border border-red-500"
                          : "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                      }
                      placeholder="Enter your date of birth..."
                      ref={register({
                        required: { value: true, message: "Field is required" }
                      })}
                    />
                    {errors.DOB && (
                      <p className="text-red-500 text-xs italic mt-2 ml-2">
                        {errors.DOB.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="font-bold mb-1 text-gray-700 block"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className={
                        errors.password
                          ? "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium border border-red-500"
                          : "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                      }
                      placeholder="**********"
                      ref={register({
                        required: { value: true, message: "Field is required" },
                        minLength: {
                          value: 8,
                          message: "Must be 8 characters long"
                        }
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs italic mt-2 ml-2">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Sign up
                  </button>
                </form>
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
    isloading: state.user.loading,
    singuperror: state.user.signupError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signup: data => dispatch(signUpUser(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
