import React from "react";
import { Link } from "react-router-dom";
const Newsfeed = ({ feeds }) => {
  return (
    <div className="flex justify-between mx-6 flex-wrap">
      {feeds.map((feed, i) => {
        return (
          <div
            className="max-w-sm w-full lg:max-w-full lg:flex mb-3 sm:mb-0 lg:mb-3"
            key={i}
          >
            <div
              className="h-64 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage: `url(${feed.photo})`
              }}
              title="Woman holding a mug"
            ></div>
            <div className="w-full h-auto border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <Link to={`/newsfeed/${feed.feedId}`}>
                    <i className="far fa-eye text-green-500"></i>
                    <span className="ml-2 text-green-500">View Feed</span>
                  </Link>
                </p>
                <p className="text-gray-700 text-base">{feed.content}</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={`${feed.userImage}`}
                  alt={`Avatar of ${feed.username}`}
                />
                <div className="text-sm">
                  <Link to="/profile/2" className="text-green-500 leading-none">
                    {feed.username}
                  </Link>
                  <p className="text-gray-600">
                    {feed.createdAt} | <span>{feed.commentCount} Comments</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Newsfeed;
