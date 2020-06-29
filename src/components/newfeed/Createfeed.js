import React, { Fragment } from "react";

const Createfeed = () => {
  return (
    <Fragment>
      <div className="w-full max-w-xl mx-auto mt-8">
        <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="mb-4 text-center text-2xl">Create Feed</h3>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="EX: Any image from unsplash"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Content
            </label>
            <textarea
              className="shadow appearance-none rounded border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              rows="8"
              id="content"
              type="text"
              placeholder="Write Your Message..."
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default Createfeed;
