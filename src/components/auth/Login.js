import React, { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <div className="h-screen bg-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="py-10">
            <h2 className="text-center text-4xl mb-3">Login</h2>
            <div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="font-bold mb-1 text-gray-700 block"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                  placeholder="Enter your email address..."
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="font-bold mb-1 text-gray-700 block"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                  placeholder="**********"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Login;
