import React, { Fragment } from "react";

const Signup = () => {
  return (
    <Fragment>
      <div className="bg-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="py-10">
            <div>
              <div className="mb-5 text-center">
                <div className="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                  <img
                    id="image"
                    className="object-cover w-full h-32 rounded-full"
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
                  accept="image/*"
                  className="hidden"
                  type="file"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="font-bold mb-1 text-gray-700 block"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                  placeholder="Enter your username..."
                />
              </div>

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
                  htmlFor="DOB"
                  className="font-bold mb-1 text-gray-700 block"
                >
                  DOB
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                  placeholder="Enter your date of birth..."
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
export default Signup;
