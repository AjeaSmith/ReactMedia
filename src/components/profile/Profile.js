import React, { Fragment } from "react";

const Profile = () => {
  return (
    <Fragment>
      <div className="flex bg-gray-700 py-18 justify-center">
        <div className="p-12 text-center max-w-2xl flex flex-wrap justify-center">
          <div
            className="rounded-full h-24 w-24 bg-center bg-cover border-2 border-white"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
            }}
          ></div>
          <div className="w-full text-2xl font-semibold mt-4 text-green-500">
            Nancy Drew
            <p className="font-normal text-gray-100 text-sm">
              Joined June 2020
            </p>
          </div>
        </div>
      </div>
      <div className="mx-6 mt-6 md:mx-32 divide-y divide-gray-200">
        <div className="text-center py-2">
          <h3 className="text-center text-2xl mb-4 font-semibold">About me</h3>
          <form className="w-full mb-6">
            <div className="sm:flex justify-between">
              <div className="mb-6">
                <div className="">
                  <label className="text-gray-600">Birthday</label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-2"
                    id="inline-full-name"
                    type="text"
                    value="09/08/1996"
                    disabled
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="">
                  <label className="text-gray-600">Email</label>
                  <input
                    className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-400 mt-2"
                    id="inline-username"
                    type="password"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
            </div>
            <div>
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
                >
                  Delete Account
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="py-2">
          <div className="mt-8 flex flex-col justify-center">
            <h3 className="font-semibold text-2xl text-center">User Feeds</h3>
            <div className="mx-auto px-8 my-4 py-4 bg-gray-200 rounded-lg shadow-md">
              <div className="mt-2">
                <p className="text-2xl text-gray-700 font-bold">
                  Accessibility tools for designers and developers
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a className="text-blue-600 hover:underline" href="#">
                  Read more
                </a>
                <div>
                  <a className="flex items-center" href="#">
                    <img
                      className="mx-4 w-8 h-8 object-cover rounded-full hidden sm:block"
                      src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                      alt="avatar"
                    />
                    <h1 className="text-gray-700 font-bold">Khatab wedaa</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Profile;
