import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <Fragment>
      <div className="bg-gray-200 h-screen">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="py-10">
            <div>
              <h2 className="text-center text-4xl my-3">Login</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Login;
